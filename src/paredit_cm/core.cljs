(ns ;; ^:figwheel-hooks
    paredit-cm.core
  "paredit operations (exported)"
  (:require
   ;; [goog.dom :as gdom]
   [clojure.string :as str]
   [clojure.set :as set]
   [clojure.pprint :as pp]
   [cljsjs.codemirror]
   [cljsjs.codemirror.mode.clojure]
   [cljsjs.codemirror.keymap.emacs]))

;; (println "This text is printed from src/paredit_cm/core.cljs. Go ahead and edit it and see reloading in action.")

(defn multiply [a b] (* a b))

;; define your app data so that it doesn't get over-written on reload
;; (defonce app-state (atom {:text "Hello world!"}))

;; (defn get-app-element []
;;   (gdom/getElement "app"))



;; specify reload hook with ^:after-load metadata
(defn ^:after-load on-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  )


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; ** PROJECT CONVENTIONS **
;;
;; consider this notation: aXbc
;;
;; in the unit tests as well as here, aXbc contains a single capital X which
;; represents the position of the cursor. aXbc means the code mirror instance's
;; value is 'abc' and a block-style cursor is on 'b' (a bar-style cursor would
;; be between 'a' and 'b'). aXbc is what you would see if you typed a capital X
;; in this example code mirror.
;;
;; 'cur' is for the current position's cursor (on 'b' in the example).
;; 'left-cur' is for position 'a'. 'right-cur' is for position 'c'.
;;
;; if there is a current cursor cur and a new cursor, then the new cursor will
;; be named cur' (the single quote is part of the name, so read it aloud as
;; cursor-prime)
;;
;; when there are two cursors (as in the beginning and ending of a selection) we
;; use c1 and c2. it feels strange to call them 'start' and 'end' when those are
;; the names codemirror uses to refer to the ends of a token.
;;
;; the following all refer to the values for the token at 'cur': 'start' 'line'
;; 'ch' 'i' 'string' 'type'
;;
;; use the same prefixes 'left-' and 'right-' when referring to the same kinds
;; of values belonging to 'left-cur' and 'right-cur'
;;
;; ints *other than i, the code mirror index* are named with a single character
;; like 'x'. neighboring values are represented alphabetically, so (inc x) would
;; be named 'y' and (dec x) would be named 'w'.
;;
;; s1 is a string. similarly s1, s2, and s
;;
;; for numerical values like 'offset', lower is for left and higher is for
;; right, just as for code mirror's index i.
;;
;; sp is a 'skipping predicate'. these are used with a trampoline wrapper like
;; 'skip' to move along the text in code mirror until our predicate is
;; satisfied. in many cases, the predicate will push and pop openers/closers off
;; a stack and when the stack is empty and we satisfy some additional condition,
;; then we stop and return the cursor.
;;
;; functions with names ending in -sp are skipping predicates.
;;
;; currently we're assuming perfect matching of openers/closers so we don't
;; actually keep track of the stack -- we just inc and dec an int until it gets
;; to 0 and our other conditions are satisfied
;;
;; any trampoline use should be limited by the cm character count, to guard
;; against infinite loops. we'll start at the limit and count down, stopping
;; when it goes negative.
;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(enable-console-print!)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; general helper methods
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def openers #{ "(" "[" "{" })
(def closers #{ ")" "]" "}" })

(def pair {"(" ")", "[" "]", "{" "}", "\"" "\"",
           ")" "(", "]" "[", "}" "{"})

(defn pair?
  "true if the two strings are a matching open/close pair "
  [s1 s2]
  (= (pair s1) s2))

(defn opener? [s] (contains? openers s))
(defn closer? [s] (contains? closers s))

(defn is-bracket-type?
  [t]
  (and t (str/starts-with? t "bracket")))

(defn char-count
  "returns the number of characters in the code mirror instance"
  [cm]
  (-> cm .getValue count))

(defn cursor
  "get cur, the position of the cursor"
  ([cm] (.getCursor cm)) ;; get current cursor
  ([cm i] (.posFromIndex cm i))) ;; get cursor for index i

(defn index
  "get the index i for the cursor's position"
  ([cm] (index cm (cursor cm)))
  ([cm cur] (when cur (.indexFromPos cm cur))))

(defn bof?
  "true if at beginning of file"
  [cm cur]
  (zero? (index cm cur)))

(defn eof?
  "true if at end of file"
  [cm cur]
  (= (index cm cur) (char-count cm)))

(defn token
  "get token at cursor"
  [cm cur]
  (.getTokenAt cm cur true))

(defn get-type
  "get the type at the current cursor."
  ([cm]
   (get-type cm (cursor cm)))
  ([cm cur]
   (.-type (token cm cur))))

(defn get-string
  "gets the string of the current token"
  ([cm] (get-string cm (cursor cm)))
  ([cm cur] (when cur (.-string (token cm cur)))))

(defn line-length
  "gets the length of the current line"
  ([cm] (line-length cm (cursor cm)))
  ([cm cur] (when cur (count (.getLine cm (.-line cur))))))

(defn last-token
  "returns the last token of a line"
  [cm cur]
  (->> cur .-line (.getLineTokens cm) last))

(defn last-cur
  "returns the last cursor of a line"
  ([cm] (last-cur cm (cursor cm)))
  ([cm cur] (let [end  (.-end (last-token cm cur))
                  diff (- end (.-ch cur))]
              (cursor cm (+ diff (index cm cur))))))
(defn get-info
  "make info from CodeMirror more conveniently accessed by our code.
  we'll use destructuring and just name what we want. hypothesizing
  that performance hit won't be that bad."
  ([cm] (get-info cm (cursor cm)))
  ([cm cur]
   (when cur (let [tok       (token cm cur)
                   eof       (eof? cm cur)
                   bof       (bof? cm cur)
                   i         (index cm cur)
                   left-cur  (when-not bof (cursor cm (dec i)))
                   right-cur (when-not eof (cursor cm (inc i)))]
               {:cur        cur
                :line       (.-line cur)
                :ch         (.-ch   cur)
                :i          i
                :tok        tok
                :string     (.-string tok)
                :start      (.-start  tok)
                :end        (.-end    tok)
                :type       (.-type   tok)
                :top        (-> tok .-state .-indentStack nil?) ;; true for toplevel
                :eof        eof
                :bof        bof
                :left-char  (when-not bof (.getRange cm left-cur cur))
                :right-char (when-not eof (.getRange cm cur right-cur))
                :left-cur   left-cur
                :right-cur  right-cur
                :mode       (.-mode (.-state tok))}))))

(defn word? [type]
  (or (= type "atom")
      (= type "builtin")
      (= type "number")
      (= type "meta")
      (= type "variable")
      (= type "keyword")))

(defn ^:export linfo
  "answers what is immediately to the left of a | style cursor"
  ([cm] (linfo cm (cursor cm)))
  ([cm cur]
   (let [{:keys [type bof string ch start end left-char right-char left-cur right-cur]
          :as   info} (get-info cm cur)
         itype        (if left-cur(.-type(token cm left-cur)):no-left-cur)
         ktype        (if right-cur(.-type(token cm right-cur)):no-right-cur)]
     ;;(println(with-out-str(pp/pprint(get-info cm cur))))
     (cond
       bof                                    :bof
       (and(= type "string")
           (= ch end)
           (not(str/ends-with? string "\""))) :string-guts
       (and(= itype "string")
           (= type nil)
           (= ktype "string")
           (= left-char "\n"))                :string-guts ;; end of intermediate lines in multi-line strings
       (and(= itype nil)
           (= type "string")
           (= ktype "string")
           (= left-char "\n"))                :string-guts ;; start of subsequent lines in multi-line strings
       (nil? type)                            :whitespace
       (and (= type "bracket")
            (opener? string))                 :opener
       (= type "bracket")                     :closer
       (word? type)                           :word
       (and (= type "string")
            (str/starts-with? string "\"")
            (= ch (inc start)))               :string-start
       (and (= type "string")
            (= ch end))                       :string-end
       (= type "string")                      :string-guts
       (and (= type "string-2")
            (= ch end))                       :string-2-end
       (and (= type "string-2")
            (not= itype "string-2"))          :string-2-start
       (and (= type "string-2")
            (not= ktype "string-2"))          :string-2-end
       (= type "string-2")                    :string-2-guts
       (= type "comment")                     :comment
       :default                               (do(println"unhandled:info"):uncategorized)))))

(defn ^:export rinfo
  "answers what is immediately to the right of a | style cursor"
  ([cm] (rinfo cm (cursor cm)))
 ([cm cur] (let [i (index cm cur)]
              (if (eof? cm cur)
                :eof
                (linfo cm (cursor cm (inc i)))))))

(defn ^:export info
  [cm]
  (let [result [(linfo cm) (rinfo cm)]]
    (println result)
    result))

;; type describes position to the left
;; string is the whole token to the left, could be whole comment
;;   except when inside a string or just to the right of it, string = everything except the opening "!
;; top true if not inside () [] {} ... but tricked if only inside "" because cm thinks still top=true "X"

(defn comment-or-string?
  "true if the type is comment or string. a lot of editing behavior (like
  movement and deletion) is similar when you are in a string or in a comment, so
  often this is the predicate for that behavior."
  [type]
  (or (= type "comment")
      (= type "string")))

(defn indent-line
  "indent the current line"
  [cm]
  (->> cm cursor .-line (.indentLine cm)))

(defn in-escaped-char?
  "returns true if backslash is to the left and cursor is on an escaped char"
  ([cm cur] (in-escaped-char? cm cur 0))
  ([cm cur offset]
   (let [{:keys [ch start end type]} (get-info cm cur)]
     (and (= start (+ (dec ch) offset))
          (= end (+ (inc ch) offset))
          (= type "string-2")))))

(defn escaped-char-to-left?
  "returns true if an escaped char and its backslash are to the left"
  [cm cur] (in-escaped-char? cm cur -1))

(defn escaped-char-to-right?
  "returns true if an escaped char and its backslash is to the right"
  [cm cur] (in-escaped-char? cm cur 1))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; paredit-open-round (
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn insert
  "insert text at current cursor. move cursor to the end of inserted text minus
  optional offset. the offset is for moving the cursor immediately after the
  insert and before returning. example: inserting a pair of brackets and placing
  the cursor inside the pair. this returns the new cursor."
  ([cm text] (insert cm text 0))
  ([cm text offset] (insert cm text offset (cursor cm)))
  ([cm text offset cur]
   (let [{:keys [line ch]} (get-info cm cur)]
     (.replaceRange cm text cur)
     (.setCursor cm line (+ (+ ch (count text)) offset))
     (cursor cm))))

(defn ^:export open-round
  "paredit-open-round exposed for keymap. unlike traditional emacs paredit, this
  supports brackets [] {} () but not double-quote"
  ([cm] (open-round cm "("))
  ([cm c]
   (let [{:keys [type left-char right-char]} (get-info cm)
         [L R] (info cm)]
     (cond
       ;; don't insert if in an escaped char because it'd become a bracket:
       (and (or (= L :string-2-start) (= L :string-2-guts))
            (or (= R :string-2-guts)  (= R :string-2-end))) :no-op

       ;; escaping the next character:
       (= "\\" left-char) (insert cm c)

       ;; typing in a comment or string as-is:
       (comment-or-string? type) (insert cm c)

       ;; insert a pair, pad with a space to the left and/or right if necessary,
       ;; and move the cursor into the pair before returning:
       :else
       (let [pad-L (and (not= " " left-char) (not (opener? left-char)))
             pad-R (and (not= " " right-char)(not (closer? right-char)))]
         (insert cm
                 (str (when pad-L " ")
                      c (pair c)
                      (when pad-R " "))
                 (if pad-R -2 -1)))))))

(defn ^:export open-brace
  "open curly brace with matching close brace"
  ([cm] (open-round cm "{")))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; paredit-close-round )
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn parent-closer-sp ;; -sp see 'skipping predicate' below
  "finds the *parent* closing bracket. behavior when used with skip: pushes
  opening brackets that appear along the way on a stack. closing brackets pop
  them off. stops when encountering a closing bracket while the stack is empty.
  assuming the cm has matched brackets for now. moves to the right."
  [cm cur state]
  (let [{:keys [string type top eof]} (get-info cm cur)]
    (cond
      ;; 'push' opener on our 'stack':
      (and (is-bracket-type? type) (opener? string)), (inc state)

      ;; stop if we see a closer while our 'stack' is empty:
      (and (is-bracket-type? type) (closer? string) (zero? state)), :yes

      ;; closer means we 'pop' off the 'stack', unless eof
      (and (is-bracket-type? type) (closer? string) (not= 0 state) eof), :eof

      ;; closer means we 'pop' off the 'stack':
      (and (is-bracket-type? type) (closer? string) (not= 0 state)), (dec state)

      ;; we can* rely on code mirror to tell us if we're at the top
      ;; level: (* NOT in [cljsjs/codemirror "5.21.0-2"] ... but maybe
      ;; in a later version ... until we can figure out how to refer
      ;; to the latest codemirror in our tests, the tests will have to
      ;; live here in order to get the codemirror that is included in
      ;; the script tag on the demo index.html page)
      ;; TODO: investigate whether we can use this, given CodeMirror version:
      ;; top, :stop

      ;; stack stays unchanged. move to the next thing:
      :default, state)))

(defn token-start
  "returns the cursor for the start of the current token"
  [cm cur]
  (let [{:keys [i start ch]} (get-info cm cur)]
    (cursor cm (- i (- ch start)))))

(defn token-end
  "returns the cursor for the end of the current token"
  ([cm cur] (token-end cm cur 0))
  ([cm cur offset] (let [{:keys [i end ch]} (get-info cm cur)]
                     (cursor cm (+ i offset (- end ch))))))

(defn token-end-index
  "take an index. get its token. return index of that token's end."
  [cm i]
  (->> i
       (cursor cm)
       (token-end cm)
       (index cm)))

(defn guard []
  ;;(println "past")
  )

(defn skip-trampoline-helper
  "returns the cursor that satsifies skipping predicate 'sp' or nil if eof
  reached. does this by making sp something we can trampoline. sp takes these
  args: cm, cursor, state. counts down 'n' to 0 in order to guard against
  infinite loops."
  [cm cur sp state n]
  (if (>= n 0)
    (let [{:keys [left-cur i]} (get-info cm cur)
          result               (sp cm cur state)]
      (case result
        :eof               nil
        :stop              nil
        :yes               cur
        :left              left-cur
        :end-of-this-token (token-end cm cur)
        :start-of-this-tok (token-start cm cur)
        (let [next-cur (token-end cm cur 1)]
          (fn [] ;; for trampoline
            (skip-trampoline-helper cm next-cur sp result (dec n))))))
    (guard)))

(defn skip-trampoline-helper-left
  "like skip-trampoline-helper but in the opposite direction."
  [cm cur sp state n]
  (if (>= n 0)
    (let [{:keys [left-cur right-cur i start ch]} (get-info cm cur)
          result                                  (sp cm cur state)]
      (case result
        :bof               nil
        :stop              nil
        :yes               left-cur
        :right             right-cur
        :end-of-this-token (token-end cm cur)
        :start-of-this-tok (token-start cm cur)
        :before-this-tok   (cursor cm (dec(index cm (token-start cm cur))))
        (let [next-cur (if (= ch start)
                         (cursor cm (dec i))
                         (cursor cm (- i (- ch start))))]
          #(skip-trampoline-helper-left cm next-cur sp result (dec n)))))
    (guard)))

(defn skip
  "returns the cursor that satisfies sp or nil if either eof reached
  or we found out sp could not be satisfied. see skip-to for more
  info."
  ([cm sp] (skip cm sp (cursor cm)))
  ([cm sp cur]
   (when-let [right-cur (:right-cur (get-info cm cur))]
     (trampoline skip-trampoline-helper cm right-cur sp 0 (char-count cm)))))

(defn skip-left
  "returns the cursor that satisfies sp or nil if either bof reached
  or we found out sp could not be satisfied. see skip-to for more
  info."
  [cm sp]
  (when-let [cur (cursor cm)]
    (trampoline skip-trampoline-helper-left cm cur sp 0 (char-count cm))))

(defn delete-whitespace
  "if cur is in whitespace, deletes it optionally without ruining indentation."
  ([cm] (delete-whitespace cm (cursor cm) true))
  ([cm cur] (delete-whitespace cm cur true))
  ([cm cur indent-after]
   (let [{:keys [start end line ch i type]} (get-info cm cur)
         c1                                 (cursor cm (+ i (- start ch)))
         c2                                 (cursor cm (+ i (- end   ch)))]
     (when (nil? type)
       (.replaceRange cm "" c1 c2)
       (if indent-after (.indentLine cm line))))))
;; todo
(defn just-one-space
  ([cm] (just-one-space cm (cursor cm) true))
  ([cm cur] (just-one-space cm cur true))
  ([cm cur indent-after]
   (let [{:keys [start end line ch i type]} (get-info cm cur)
         c1                                 (cursor cm (+ i (- start ch)))
         c2                                 (cursor cm (+ i (- end   ch)))]
     (when (nil? type)
       (.replaceRange cm " " c1 c2)
       (if indent-after (.indentLine cm line))))))

(defn skip-to
  "moves to the cursor that satisfies sp or doesn't move if eof reached.
  starts at current cursor for cm. sp stands for 'skipping predicate'
  which returns:
  - :yes if sp is satisfied.
  - :stop if we know we will not be satisfied with any future result.
  - :left if the cursor to the left is what we want.
  - new non-nil state if not satisfied. this state is used with the
  next iteration after we skip to the end of the current token. an sp
  takes cm, cursor, state."
  [cm sp]
  (when-let [cur' (skip cm sp)]
    (.setCursor cm cur')
    cur'))

(defn move-past-parent-closer
  "moves cursor to just outside the closing bracket, or if there is
  none then doesn't move at all."
  ;; emacs has this extending the current selection if there is one.
  [cm]
  (when-let [cur (skip-to cm parent-closer-sp)]
    (delete-whitespace cm (:left-cur (get-info cm)))
    cur))

(defn ^:export close-round
  "paredit-close-round exposed for keymap. skips to end of current
  list even if it ends with ] or }. but if you're in a string or
  comment then this just inserts the bracket. requires CodeMirror
  mode's parser uses state with indentStack because that's how we
  can tell we've reached the end of a top level form and avoid
  entering the next top level form. 's' is the character as a string."
  ([cm] (close-round cm ")"))
  ([cm s]
   (let [{:keys [type left-char]} (get-info cm)]
     (cond
       (= "\\" left-char)        (insert cm s)
       (comment-or-string? type) (insert cm s)
       :else                     (move-past-parent-closer cm)))))

(defn ^:export close-brace
  "close curly brace like close-round"
  ;; todo verify behavior of "X}
  ([cm] (close-round cm "}")))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; paredit-close-round-and-newline paredit-open-square paredit-close-square
;; paredit-doublequote
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn ^:export close-round-and-newline
  ([cm] (close-round-and-newline cm ")"))
  ([cm s]
   (if (comment-or-string? (get-type cm))
     (insert cm s)
     (when (close-round cm s)
       (.execCommand cm "newlineAndIndent")))))

(defn ^:export  open-square [cm]  (open-round cm "["))
(defn ^:export close-square [cm] (close-round cm "]"))

(defn move
  "moves the cursor by 'offset' places, negative for left. returns the cursor."
  [cm offset]
  (->> cm index (+ offset) (cursor cm) (.setCursor cm))
  (cursor cm))

(defn move-right [cm] (move cm  1))
(defn move-left  [cm] (move cm -1))

(defn ^:export doublequote [cm]
  (let [{:keys [type left-char right-char ch cur]} (get-info cm)]
    (cond
      ;; about to escape this char so insert as-is:
      (= "\\" left-char) (insert cm "\"")

      ;; we're at the end of a string, so move to the right:
      (and (= type "string") (= "\"" right-char))
      (move-right cm)

      ;; we're in a string so escape this doublequote:
      (= type "string") (insert cm "\\\"")

      ;; we're in code. pad with a space to the left and/or right if necessary
      ;; to separate it from neighboring code. after inserting, move the cursor
      ;; to between the quotes:
      :else (insert cm
                    (str (when (not= " " left-char) " ") ;; left padding
                         "\"\""
                         (when (and (not= " " right-char)
                                    (not= "\n" right-char))
                           " ")) ;; right padding
                    (if (or (= " " right-char)
                            (= "\n" right-char)) -1 -2)))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; paredit-meta-doublequote M-"
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn at-a-word?
  "returns true if at a word of code"
  [cm cur]
  (word? (get-type cm cur)))

(defn in-a-word?
  "true if in a word AND not at the end of that word. false if in whitespace or
  a string or a comment or at a bracket."
  [cm]
  (let [cur (cursor cm), i (index cm cur)]
    (and (at-a-word? cm cur)
         (not= i (token-end-index cm i)))))

(defn start-of-a-string?
  "returns true if at the start of a string."
  [cm cur]
  (let [{:keys [right-char type right-cur eof]} (get-info cm cur)
        left-type                               type
        {:keys [type]}                          (get-info cm right-cur)]
    (and (false? eof)
         (not= "string" left-type)
         (= "string" type)
         (= "\"" right-char))))

(defn end-of-a-string?
  "returns true if just to the right of a closing doublequote of a string."
  [cm cur]
  (let [{:keys [left-char type ch end string]} (get-info cm cur)]
    (and (= type "string")
         (= ch end)
         (= \" (last string))
         (not= \\ (last (drop-last string)))
         ;; (= mode false)
         )))

(defn end-of-next-sibling-sp ;; -sp see 'skipping predicate'
  "returns the cursor at the end of the sibling to the right or nil if
  no sibling or eof. does not exit the containing form. does this by
  skipping past any comments or whitespace, and branches depending on
  whether an opening bracket or doublequote is encountered (sp
  satisfied when encountering a closing bracket that empties the
  stack) vs the beginning of a word (return token at the end of the
  word). assuming the cm has matched brackets for now."
  [cm cur stack]
  (let [{:keys [string type eof ch end]} (get-info cm cur)
        stack-empty                      (zero? stack)
        one-left                         (= 1 stack)
        string-extends                   (or (not= \" (last string))
                                             (= \\ (last (drop-last string))))] ;; for multi-line
    (cond ;; we return a keyword when we know where to stop, stack otherwise.
      (and (end-of-a-string? cm cur) one-left)                :yes
      (and (escaped-char-to-left? cm cur) stack-empty)        :yes
      (and (word? type) stack-empty (= ch end))               :yes
      (and (is-bracket-type? type) (closer? string) one-left) :yes
      eof                                                     :eof

      ;; skip comments
      (= type "comment"), stack

      ;; strings ...............................................................

      ;; entering a string, push " onto stack
      (start-of-a-string? cm cur), (inc stack)

      ;; skip whitespace - this used to be checked before start-of-a-string? but that'd be a bug
      (nil? type), stack

      ;; at end of string and stack already empty, we must have started in the
      ;; middle of the string
      (and (end-of-a-string? cm cur) stack-empty), :stop

      ;; at end of string and stack about to be empty, we've found the end of
      ;; the string -- handled before checking for eof above

      ;; in string, the end of this string is our goal ...
      ;; ... but the end of this string might be on a different line:
      (and (= type "string") one-left string-extends), stack

      ;; in string, the end of this string is our goal ...
      ;; ... the end is on this line:
      (and (= type "string") one-left), :end-of-this-token

      ;; in string which continues on next line. go to next line:

      (and (= type "string") string-extends), stack

      ;; in string, need to get out of this form, pop stack
      (= type "string"), (dec stack)

      ;; escaped chars .........................................................

      ;; inside an escaped char and the end of it is what we want
      (and (in-escaped-char? cm cur) stack-empty), :end-of-this-token

      ;; in an escaped char inside the next sibling
      (in-escaped-char? cm cur), stack

      ;; at end of an escaped char which was the next sibling -- handled before
      ;;checking for eof above

      ;; at end of an escaped char inside the next sibling
      (escaped-char-to-left? cm cur), stack

      ;; words .................................................................

      ;; reached the end of a word which was the next sibling -- handled before
      ;;checking for eof above

      ;; in a word that is the next sibling, the end of it is what we want
      (and (word? type) stack-empty), :end-of-this-token

      ;; in a word that is inside the next sibling
      (word? type), stack

      ;; brackets ..............................................................

      ;; push opener on stack
      (and (is-bracket-type? type) (opener? string)), (inc stack)

      ;; we've reached the end of a form -- handled before checking for eof
      ;;above

      ;; there was no sibling
      (and (is-bracket-type? type) (closer? string) stack-empty), :stop

      ;; passing through the guts of a sibling form (.. (guts)|..)
      (and (is-bracket-type? type) (closer? string)), (dec stack)

      :default, :stop)))

(defn end-of-next-sibling
  "get the cursor for the end of the sibling to the right."
  ([cm]
   (skip cm end-of-next-sibling-sp))
  ([cm cur]
   (when cur
     (.setCursor cm cur)
     (skip cm end-of-next-sibling-sp))))

(defn start-of-prev-sibling-sp ;; -sp see 'skipping predicate'
  "returns the cursor at the start of the sibling to the left or nil
  if no sibling or eof. does not exit the containing form. does this
  by skipping past any comments or whitespace, and branches depending
  on whether a bracket or doublequote is encountered (sp satisfied
  when encountering an opening bracket that empties the stack) vs the
  beginning of a word (return token at the start of the
  word). assuming the cm has matched brackets for now."
  [cm cur stack]
  (let [{:keys [string type bof ch start]} (get-info cm cur)
        stack-empty                        (zero? stack)
        one-left                           (= 1 stack)
        string-extends                     (not= "\"" (first string))];; for multiline strings
    (println (get-info cm cur))
    (cond ;; we return a keyword when we know where to stop, stack otherwise.

      ;; check these before checking for bof:

      ;; in a multi-line string, keep searching for the first line of it:
      (and (start-of-a-string? cm cur) one-left string-extends), (do(println"in mult line str")stack)

      ;; at the first line of a string and we want its opening doublequote:
      (and (start-of-a-string? cm cur) one-left), (do(println"in str"):yes)

      ;; at the start of an escaped char:
      (and (escaped-char-to-right? cm cur) stack-empty), (do(println"esc"):yes)

      ;; at the start of a word:
      (and (word? type) stack-empty (= ch start)), (do(println"wor"):yes)

      ;; at the opener we were looking for:
      (and (is-bracket-type? type) (opener? string) one-left), (do(println"op"):yes)

      bof, (do(println"bof"):bof); reached beginning of file

      ;; skip comments
      (= type "comment"), (do(println"com")stack)

      ;; strings ...............................................................

      ;; entering a string from the right; push " onto stack ;;;;;;;;wantedthisxxx;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
      ;; actually we skip past the string and might still have a stack!
      (end-of-a-string? cm cur), (do(println"going to skip string to our left")(inc stack))
      ;; using stack above skips 1 sexp too far - we need to skip just the string and stop
      ;; but using start of this tok doesn't skip far enough - falls short just inside start of string

      ;; skip whitespace -- this used to be before the check for end-of-a-string? but that's a bug
      (nil? type), (do(println"ws")stack)

      ;; at start of string and stack already empty, we must have started in the
      ;; middle of the string. if it's a multi-line string, advance up:
      (and (start-of-a-string? cm cur) stack-empty string-extends), (do(println"start str ml emp stack")stack)

      ;; we're at the first line of the string, stop:
      (and (start-of-a-string? cm cur) stack-empty), (do(println"start of string, stack emp"):stop)

      ;; at start of string and stack about to be empty, we've found the end of
      ;; the string -- handled before check for bof above

      ;; in string, the start of it is our goal. it's on a higher line:
      (and (= type "string") one-left string-extends), (do(println"ml string")stack)

      ;; it's on this line:
      (and (= type "string") one-left), (do(println"start of str on this line"):start-of-this-tok)

      ;; in string, need to get out of this form, pop stack
      (and (= type "string") string-extends), (do(println"in str need to get out")stack)
      (= type "string"),                      (do(println"type string")(dec stack))

      ;; escaped chars .........................................................

      ;; inside an escaped char and the start of it is what we want
      (and (in-escaped-char? cm cur) stack-empty), (do(println"need start of esc char"):start-of-this-tok)

      ;; in an escaped char inside the prev sibling
      (in-escaped-char? cm cur), (do(println"in esc char inside prev sibling")stack)

      ;; at start of an escaped char which was the prev sibling -- handled
      ;; before check for bof above

      ;; at start of an escaped char inside the prev sibling
      (escaped-char-to-right? cm cur), (do(println"at start of esc char inside prev sib")stack)

      ;; words .................................................................

      ;; reached the start of a word which was the prev sibling -- handled
      ;; before check for bof above

      ;; in a word that is the prev sibling, the start of it is what we want
      (and (word? type) stack-empty), (do(println"prev sib is word"):start-of-this-tok)

      ;; in a word that is inside the prev sibling
      (word? type), (do(println"in word inside prev sib")stack)

      ;; brackets ..............................................................

      ;; push closer on stack
      (and (is-bracket-type? type) (closer? string)), (do(println"closer")(inc stack))

      ;; we've reached the start of a form -- handled before check for bof above

      ;; there was no prev sibling, avoid exiting the form
      (and (is-bracket-type? type) (opener? string) stack-empty), (do(println"no prev sib"):stop)

      ;; passing through the guts of a sibling form (.. X(guts)..)
      (and (is-bracket-type? type) (opener? string)), (do(println"passing through")(dec stack))

      :default (do(println"default"):stop))))

(defn start-of-prev-sibling
  "return the cursor at the start of the sibling to the left."
  ([cm]
   (skip-left cm start-of-prev-sibling-sp))
  ([cm cur]
   (when cur
     (.setCursor cm cur)
     (skip-left cm start-of-prev-sibling-sp))))

(defn escape-string
  "escapes a string, replacing backslashes and doublequotes. wraps
  result in a new pair of doublequotes."
  [s]
  (str "\""
       (-> s
           (str/replace #"[\\]" "\\\\")
           (str/replace #"[\"]" "\\\""))
       "\""))

(defn stringify-selection
  "turns selection into a string, escaping backslashes and doublequotes"
  [cm]
  (->> cm .getSelection escape-string (.replaceSelection cm)))

(defn stringify
  "turns the region from cur-1 to cur-2 into a string, escaping
  backslashes and doublequotes"
  [cm cur-1 cur-2]
  (.setSelection cm cur-1 cur-2)
  (stringify-selection cm)
  (.setCursor cm (cursor cm (inc (index cm cur-1)))))

(defn exit-string
  "moves cursor right, out of the current string"
  [cm]
  (let [{:keys [type i ch end]} (get-info cm)]
    (when (= type "string")
      (.setCursor cm (cursor cm (+ i (- end ch)))))))

(defn in-string?
  "returns true if token is in the middle of a string."
  ([cm] (in-string? cm (cursor cm)))
  ([cm cur]
   (let [type (get-type cm cur)]
     (or (= type "string")
         (= type "string-2")))))

(defn ^:export meta-doublequote
  "paredit meta-doublequote exposed for keymap.
  if in a string, moves cursor out of the string to the right.
  if in a comment, insert a doublequote.
  if in an escaped char, do nothing.
  otherwise starts a string that that continues to the end of the next
  form, escaping backslashes and doublequotes."
  [cm]
  (let [{:keys [type eof cur]} (get-info cm)]
    (cond
      eof                       :do-nothing
      (in-escaped-char? cm cur) :do-nothing
      (in-string? cm cur)       (exit-string cm)
      (= type "comment")        (insert cm "\"")
      (in-a-word? cm)           (stringify cm cur (token-end cm cur))
      :else                     (stringify cm cur (end-of-next-sibling cm)))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; paredit-comment-dwim
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn left
  "given a pair of cursors c1 and c2, returns the left-most one"
  [cm c1 c2]
  (let [i1 (index cm c1)
        i2 (index cm c2)]
    (if (< i1 i2) c1 c2)))

(defn right
  "given a pair of cursors c1 and c2, returns the right-most one"
  [cm c1 c2]
  (let [i1 (index cm c1)
        i2 (index cm c2)]
    (if (< i1 i2) c2 c1)))

(defn selection-info
  "like get-info but for the first selection. gets the cursor to the left of the
  selection, the start, the end, the text selected, the starting and ending line
  numbers. nil if nothing selected."
  [cm]
  (when (.somethingSelected cm)
    (let [first-sel     (-> cm .listSelections first)
          text          (-> cm  .getSelections first)
          anchor        (.-anchor first-sel)
          head          (.-head   first-sel)
          left-of-start (left cm anchor head)
          start-cur     (cursor cm (inc (index cm left-of-start)))
          end-cur       (right cm anchor head)]
      [left-of-start start-cur end-cur text
       (.-line start-cur) (.-line end-cur)])))

(defn get-types
  "get the types from cursors c1 to c2. assumes 1 is to the left of 2 and not
  vice versa."
  [cm c1 c2]
  (loop [types [], cur c1]
    (let [{:keys [type right-cur]} (get-info cm cur)
          types'                   (conj types type)]
      (if (= cur c2)
        types'
        (recur types' right-cur)))))

(defn selection-completely-satisfies-pred?
  "true if every position's type satisfies pred, for the entire (first)
  selection"
  [cm pred]
  (when-let [[_ c1 c2] (selection-info cm)]
    (every? pred (get-types cm c1 c2))))

(defn selection-completely-whitespace? [cm]
  (selection-completely-satisfies-pred? cm nil?))

(defn not-code? [type] (or (nil? type) (= type "comment")))

(defn selection-completely-non-code? [cm]
  (selection-completely-satisfies-pred? cm not-code?))

(defn to-comment
  "starts each line in 's' with ;; and appends 'post-script'"
  [s postscript]
  (let [cmnt (->> s
                  str/split-lines
                  (map #(str/replace % #"^" ";; "))
                  (str/join "\n"))]
    (str cmnt "\n" postscript)))

(defn uncomment
  "removes leading whitespace and semicolons from lines in 's'"
  [s]
  (->> s
       str/split-lines
       (map #(str/replace % #"^\s*;+" ""))
       (str/join "\n")))

(defn indent-lines
  "indents lines from a to z (line numbers). assumes a is before z."
  [cm a z]
  (doseq [line (range a (inc z))]
    (.indentLine cm line)))

(defn uncomment-selection
  "removes whitespace and leading semicolons from selection, replaces
  selection with the result, indents lines affected."
  [cm]
  (when-let [[_ c1 c2 text] (selection-info cm)]
    (.replaceSelection cm (uncomment text))
    (indent-lines cm (.-line c1) (.-line c2))))

(defn append
  "returns the result of appending the applicable part of 'tok' to
  's'. this is for collecting all the text on a line after 'ch'"
  [ch s tok]
  (if (< ch (.-end tok))
    (str s (subs (.-string tok) (- (max ch (.-start tok)) (.-start tok))))
    s))

(defn get-text-to-end-of-line
  [cm cur]
  (let [toks (.getLineTokens cm (.-line cur))
        ch   (.-ch cur)]
    (reduce (partial append ch) "" toks)))

(defn comment-selection [cm]
  (let [[_ c1 c2 text l1 l2]   (selection-info cm)
        text-after-selection   (get-text-to-end-of-line cm c2)
        code-follows-selection (not= text-after-selection "")
        end-of-line            (last-cur cm)
        line-to                (if code-follows-selection (inc l2) l2)]
    (when code-follows-selection
      (.setSelection cm left end-of-line))
    (.replaceSelection cm (to-comment text text-after-selection))
    (indent-lines cm l1 line-to)))

(defn line-ends-with-comment?
  "true if the line ends with a comment"
  [cm]
  (= "comment" (.-type (last-token cm (cursor cm)))))

(defn indent-current-line [cm] (->> cm cursor .-line (.indentLine cm)))

(defn go-to-comment
  "moves cursor to ;;X"
  [cm]
  (let [cur    (cursor cm)
        ch     (.-ch cur)
        i      (index cm cur)
        c-tok  (last-token cm cur)
        start  (.-start c-tok)
        offset (count (take-while #(= ";" %) (.-string c-tok)))]
    (.setCursor cm (cursor cm (+ i (- start ch) offset)))))

(defn insert-spaces-to-col-40
  "presses spacebar until we are at col 40"
  [cm]
  (let [ch (-> cm cursor .-ch)]
    (when (< ch 40)
      (insert cm (str/join (repeat (- 40 ch) " "))))))

(defn go-to-comment-and-indent
  "moves cursor to the comment on the line and makes sure the comment
  starts on column 40 or greater. assumes last token is a comment"
  [cm]
  (indent-current-line cm)
  (let [cur           (cursor cm)
        ch            (.-ch cur)
        i             (index cm cur)
        comment-start (.-start (last-token cm cur))]
    (.setCursor cm (cursor cm (+ i (- comment-start ch))))
    (insert-spaces-to-col-40 cm)
    (go-to-comment cm)))

(defn betw-code-and-line-end?
  "true if code is to the left and whitespace* is to the right.
  assumes you already know line does not end with a comment."
  [cm]
  (let [cur   (cursor cm)
        toks  (.getLineTokens cm (.-line cur))
        ch    (.-ch cur)
        tests (map #(or (<= (.-end %) ch)
                        (nil? (.-type %))) toks)]
    (and (seq toks) ; the line is not empty
         (every? true? tests) ; there's only whitespace to the right
         (some #(not (nil? (.-type %))) toks)))) ; there's code on the left

(defn move-to-end-of-line
  "moves cursor to end of last non-whitespace token on a line.
  returns a vector of new index, new ch, and new cursor."
  ([cm] (move-to-end-of-line cm (cursor cm)))
  ([cm cur]
   (let [end  (->> cur .-line (.getLineTokens cm) (remove #(nil? (.-type %)))
                  last .-end)
         ch   (.-ch cur)
         i    (index cm cur)
         i'   (+ i (- end ch))
         cur' (cursor cm i')]
     (.setCursor cm cur')
     [i' (.-ch cur') cur'])))

(defn select-rest-of-line
  "selects from current position to the end of the line"
  [cm]
  (.setSelection cm (cursor cm) (last-cur cm)))

(defn delete-to-end-of-line
  "deletes from current position to the end of the line"
  [cm]
  (.replaceRange cm "" (cursor cm) (last-cur cm)))

(defn create-comment-at-end
  "starts a ; comment at column 40 or greater and moves to it."
  [cm]
  (indent-current-line cm)
  (move-to-end-of-line cm)
  (insert cm " ")
  (insert-spaces-to-col-40 cm)
  (insert cm "; ")
  (delete-to-end-of-line cm))

(defn line-is-whitespace?
  "returns true if line is all whitespace"
  [cm]
  (->> cm cursor .-line (.getLineTokens cm) (every? #(nil? (.-type %)))))

(defn create-line-comment
  "creates and indents a ;; comment"
  [cm]
  (insert cm ";; ")
  (delete-to-end-of-line cm)
  (indent-current-line cm))

(defn new-line-and-comment
  "creates and indents a ;; comment on a new line"
  [cm]
  (indent-current-line cm)
  (insert cm "\n\n")
  (.execCommand cm "goLineDown")
  (.execCommand cm "goLineDown")
  (indent-current-line cm)
  (.execCommand cm "goLineUp")
  (create-line-comment cm))

(defn insert-line-comment-here
  "creates and indents a ;; comment on this line"
  [cm]
  (insert cm "\n")
  (.execCommand cm "goLineDown")
  (indent-current-line cm)
  (.execCommand cm "goLineUp")
  (create-line-comment cm))

(defn in-code?
  "returns true if token is in the middle of code. assumes you've already ruled
  out comments."
  [cm]
  (let [{:keys [type start end ch]} (get-info cm)]
    (and (< start ch)
         (< ch end)
         (not (nil? type)))))

(defn in-whitespace?
  "returns true if token is to the right of whitespace"
  [cm]
  (-> cm get-type nil?))

(defn code-to-left?
  "returns true if there's any code to the left of cursor. assumes you've
  already ruled out comments so only looks for non nil tokens"
  [cm]
  (let [cur  (cursor cm)
        toks (.getLineTokens cm (.-line cur))
        ch   (.-ch cur)
        code (map #(and (not (nil? (.-type %)))
                        (or (<= (.-end %) ch)
                            (and (< (.-start %) ch)
                                 (< ch (.-end %)))))
                  toks)]
    (and (seq toks) ; the line is not empty
         (some true? code)))) ; there's one token that contains code to the left

(defn ^:export comment-dwim [cm]
  (cond
    (selection-completely-whitespace? cm)        :do-nothing
    (selection-completely-non-code? cm)          (uncomment-selection cm)
    (.somethingSelected cm)                      (comment-selection cm)
    (line-ends-with-comment? cm)                 (go-to-comment-and-indent cm)
    (betw-code-and-line-end? cm)                 (create-comment-at-end cm)
    (in-code? cm)                                (create-comment-at-end cm)
    (in-string? cm)                              (create-comment-at-end cm)
    (line-is-whitespace? cm)                     (create-line-comment cm)
    (and (code-to-left? cm) (in-whitespace? cm)) (new-line-and-comment cm)
    (in-whitespace? cm)                          (insert-line-comment-here cm)
    :default                                     :do-nothing))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; paredit-newline
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; seems like code mirror behaves as desired already

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; paredit-forward-delete
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn backspace
  "delete 1 or n char to left"
  ([cm] (backspace cm 1))
  ([cm n]
   (let [-n   #(- % n)
         cur  (cursor cm)
         cur0 (->> cur (index cm) -n (cursor cm))]
     (.replaceRange cm "" cur0 cur))))

(defn right-cur-would-be-whitespace?
  "true if this position would be whitespace if we pressed the spacebar."
  [cm cur right-cur]
  (let [original-cur (cursor cm)
        _            (insert cm " " 0 cur)
        answer       (nil? (get-type cm right-cur))]
    (backspace cm)
    (.setCursor cm original-cur)
    answer))

(defn closing-delim?
  "returns true for closing brackets and for closing double-quotes"
  [cm cur]
  (let [{:keys [string type left-char right-cur]} (get-info cm cur)]
    (or (and (is-bracket-type? type) (closer? left-char))
        (and (= type "string")
             (= "\"" left-char)
             ;; at this point, we could be just inside the start of a string.
             ;; if we check the type at the position to the right, this could
             ;; trick us: "X""hello" ... one way to be absolutely sure we're
             ;; at the end of a string is to add a space temporarily and see
             ;; if code mirror says its type is 'null' or 'string'.
             (right-cur-would-be-whitespace? cm cur right-cur)))))

(defn opening-doublequote?
  "returns true if cur is just to the right of an opening doublequote"
  ([cm cur]
   (let [{:keys [type left-char right-cur]} (get-info cm cur)]
     (opening-doublequote? cm type left-char right-cur)))
  ([cm type left-char right-cur]
   (and (= type "string")
        (= "\"" left-char)
        right-cur
        (= "string" (get-type cm right-cur)))))

(defn closing-doublequote?
  "returns true if cur is just to the right of a closing doublequote"
  [cm cur]
  (let [{:keys [type left-char right-cur]} (get-info cm cur)
        right-type                         (get-type cm right-cur)]
    (and (= type "string")
         (= "\"" left-char)
         (not= right-type "string"))))

(defn opening-delim?
  "returns true for opening brackets and for opening double-quotes"
  [cm cur]
  (let [{:keys [string type left-char right-cur]} (get-info cm cur)]
    (or (and (is-bracket-type? type) (opener? left-char))
        (opening-doublequote? cm type left-char right-cur))))

(defn opening-delim-for-empty-pair?
  "returns true for an opening bracket of an empty pair ()"
  [cm cur]
  (let [{:keys [left-char right-char right-cur]} (get-info cm cur)]
    (and (opening-delim? cm cur)
         right-cur
         (closing-delim? cm right-cur)
         (pair? left-char right-char))))

(defn opening-delim-for-non-empty-pair?
  "returns true for an opening bracket of a pair that contains one or more
  chars."
  [cm]
  (let [{:keys [left-char right-char cur]} (get-info cm)]
    (and (opening-delim? cm cur)
         (not (pair? left-char right-char)))))

(defn delete
  "delete 1 or n char to right"
  ([cm] (delete cm 1))
  ([cm n] (let [+n   #(+ % n)
                cur  (cursor cm)
                cur2 (->> cur (index cm) +n (cursor cm))]
            (.replaceRange cm "" cur cur2))))

(defn whitespace?
  "returns true if cursor indicates whitespace"
  [cm cur]
  (let [info (get-info cm cur)]
    (and (not (nil? info))
         (nil? (:type info)))))

(defn bracket?
  "true if cursor info indicates opening/closing bracket or quote"
  [cm cur]
  (let [{:keys [type left-char] :as info} (get-info cm cur)]
    (or (is-bracket-type? type)
        (and (= "string" type)
             (= "\"" left-char)))))

(defn select-pair
  "assumes a pair of brackets surround the cursor. selects the pair."
  [cm]
  (let [i  (->> cm cursor (index cm))
        c1 (->> i dec (cursor cm))
        c2 (->> i inc (cursor cm))]
    (.setSelection cm c1 c2)))

(defn delete-selection [cm] (.replaceSelection cm ""))

(defn delete-pair
  "assumes a pair of brackets surround the cursor. deletes the pair."
  [cm]
  (backspace cm)
  (delete cm))

(defn ^:export forward-delete
  "paredit-forward-delete exposed for keymap"
  [cm]
  (let [{:keys [cur right-cur] :as info} (get-info cm)]
    (cond
      (.somethingSelected cm)                (delete-selection cm)
      (whitespace? cm right-cur)             (delete cm)
      (not (bracket? cm right-cur))          (delete cm)
      (opening-delim? cm right-cur)          (move-right cm)
      (opening-delim-for-empty-pair? cm cur) (delete-pair cm)
      :default                               :do-nothing)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; paredit-backward-delete
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn ^:export backward-delete
  "paredit backward delete exposed for keymap"
  [cm]
  (let [cur (cursor cm)]
    (cond
      (.somethingSelected cm)                (delete-selection cm)
      (in-escaped-char? cm cur)              (delete-pair cm)
      (escaped-char-to-left? cm cur)         (backspace cm 2)
      (opening-delim-for-non-empty-pair? cm) :do-nothing
      (opening-delim-for-empty-pair? cm cur) (delete-pair cm)
      (closing-delim? cm cur)                (move-left cm)
      :default                               (backspace cm))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; paredit-kill
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn in-regular-string?
  "returns true if token is in the middle of a string."
  [cm cur]
  (or (opening-doublequote? cm cur)
      (and (= "string" (get-type cm cur))
           (not (closing-doublequote? cm cur)))))

(defn str-ends-on-another-line?
  "true if these values are from a string token that ends on another line"
  [type string]
  (and (= "string" type)
       (not= "\"" (last string))))

(defn go-to-end-of-string
  "moves cursor to end of the string you're in (but still inside the
  closing doublequote). assumes you're in a string. the end could be
  on a different line from where you start"
  ([cm] (go-to-end-of-string cm (cursor cm)))
  ([cm cur]
   (let [{:keys [left-char right-cur type string ch end]} (get-info cm cur)]
     (cond

       (nil? type)
       (go-to-end-of-string cm right-cur)

       (str-ends-on-another-line? type string)
       (do (move-to-end-of-line cm cur), (move cm 2), (go-to-end-of-string cm))

       (opening-doublequote? cm type left-char right-cur)
       (do (move cm 1), (go-to-end-of-string cm))

       (and (= "string" type))
       (move cm (- end ch 1 ))

       :default cur))))

(defn select-rest-of-string
  "assumes you are in a string."
  [cm]
  (let [c1 (cursor cm)
        c2 (go-to-end-of-string cm c1)]
    (.setSelection cm c1 c2)))

(defn betw-code-and-comment?
  "true if code is to the left and whitespace* comment* is to the right."
  [cm cur]
  (when cur
    (let [toks  (.getLineTokens cm (.-line cur))
          ch    (.-ch cur)
          tests (map #(or (<= (.-end %) ch)
                          (or (nil? (.-type %))
                              (= "comment" (.-type %)))) toks)]
      (and (seq toks) ; the line is not empty
           (every? true? tests) ; there's only junk to the right
           (some #(not (nil? (.-type %))) toks)))))

(defn rest-of-siblings
  [cm]
  (let [c1            (cursor cm)
        parent-closer (skip cm parent-closer-sp)
        c2            (when parent-closer (cursor cm (dec (index cm parent-closer))))]
    [c1 c2]))

(defn select-rest-of-siblings
  [cm]
  (let [[c1 c2] (rest-of-siblings cm) c1 (cursor cm)]
    (when c2 (.setSelection cm c1 c2))))

(defn kill-from-to [cm i j]
  (let [cur (cursor cm i)]
    (CodeMirror.emacs.kill cm cur (cursor cm j))
    (.setCursor cm cur)))

(defn kill-region [cm]
  (let [first-sel (-> cm .listSelections first)
        anchor    (.-anchor first-sel)
        head      (.-head   first-sel)]
    (CodeMirror.emacs.kill cm anchor head)))

(defn kill-pair
  "assumes a pair of brackets surround the cursor. deletes the pair."
  [cm]
  (select-pair cm)
  (kill-region cm))

(defn kill-rest-of-string [cm]
  (select-rest-of-string cm)
  (kill-region cm))

(defn kill-rest-of-line [cm]
  (select-rest-of-line cm)
  (kill-region cm))

(defn kill-rest-of-siblings [cm]
  (select-rest-of-siblings cm)
  (kill-region cm))

(defn kill-next-sibling
  "kills the next sibling to the right of the cursor"
  [cm]
  (let [from (cursor cm)
        mid  (end-of-next-sibling cm from)
        to   (if (betw-code-and-comment? cm mid) (last-cur cm mid) mid)]
    (when to
      (.setSelection cm from to)
      (kill-region cm))))

(defn in-string-and-backslash-to-the-left?
  ([cm] (in-string-and-backslash-to-the-left? cm (cursor cm)))
  ([cm cur]
   (let [{:keys [type left-char]} (get-info cm cur)]
     (and (= "string" type)
          (= "\\" left-char)))))

(defn infos-to-end-of-this-line [cm]
  (let [line-end-cur (last-cur cm)
        e            (index cm line-end-cur)
        i            (index cm)]
    (->> (range i e)
         (map #(cursor cm %))
         (map #(rinfo cm %)))))
;; set mark - remember original line
;; stack starts at 0
;; if at eof return i
;; move right,
;; if on original line, stop to left of parent closing  " or  bracket
;; stop at eol if stack at 0
;; if past eol, stop when stack at 0

(defn cur-of-end-of-kill [cm]
  (let [starting-line (:line(get-info cm))
        cur-eol      (last-cur cm)]
    (loop [stack 0]
      (let [L    (rinfo cm)
            {:keys [line left-cur cur right-cur i]} (get-info cm)]
        (cond
          (= L :eof)                  cur
          (= L :opener)               (do(move-right cm)(recur (inc stack)))
          (= L :string-start)         (do(move-right cm)(recur (inc stack)))
          ;; reached parent closer on the same line
          (and (= line starting-line)
               (zero? stack)
               (or(= L :closer)
                  (= L :string-end))) cur
          ;; reached end of line on the same line:
          (and (= line starting-line)
               (zero? stack)
               (= cur-eol right-cur))       left-cur
          ;; got to a new line and reached end of a sexp
          (and (not= line starting-line)
               (zero? stack))         cur
          (and(or(= L :closer)
                 (= L :string-end)))  (do(move-right cm)(recur (dec stack)))
          :default                    (do(move-right cm)(recur stack)))))))

(defn ^:export kill
  "paredit kill exposed for keymap.
  kill the rest of the sexps that start on the current line
  but stop at an enclosing (parent) doublequote or bracket.
  avoid accidentally escaping a closing double quote of a string.
  we may have to kill a multi-line sexp."
  [cm]
  (println"in kill")
  (while (contains? #{:string-2-start
                      :string-2-guts
                      :string-2-end} (linfo cm))
    (move-left cm))
  (while (in-string-and-backslash-to-the-left? cm)
    (move-left cm))
  (let [start-cur (cursor cm)
        end-cur (cur-of-end-of-kill cm)]
    (when end-cur
      (.setSelection cm start-cur end-cur)
      (kill-region cm))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; paredit-forward-kill-word M-d
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(defn comment?
  [cm cur]
  (= "comment" (get-type cm cur)))

(defn start-of-comment?
  "true if block cursor is on the first ; of a line comment"
  [cm cur]
  (let [{:keys [type right-cur]} (get-info cm cur)
        right-type               (get-type cm right-cur)]
    (and (not= "comment" type)
         (= "comment" right-type))))

(defn idx-of-next [cm i chars member dir max]
  (let [{:keys [right-char]} (get-info cm (cursor cm i))]
    (cond
      (= i max)                               (guard)
      (= member (contains? chars right-char)) i
      :default                                #(idx-of-next cm (dir i) chars member dir max))))

(defn index-of-next [cm i chars dir]
  (trampoline idx-of-next cm i chars true dir (char-count cm)))

(defn index-of-next-non [cm i chars dir]
  (trampoline idx-of-next cm i chars false dir (char-count cm)))

(def non-word-chars (set "(){}[]|&; \n"))

(def semicolons #{";"})
(def comment-whitespace #{" " "\t"})
(def non-word-in-comment #{";" " " "\t"})
(def non-word-in-string #{" " "\t" (str \")})

(defn end-of-next-word
  "assumes i is in a comment or a string. returns the i at the end of
  the next word (going to the right) in this comment/string"
  [cm i]
  (let [{:keys [ch start string]} (get-info cm (cursor cm i))
        tail                      (subs string (- ch start))
        word                      (re-find #"^\s*[\S]*" tail)
        length                    (count word)
        quote                     (if (str/ends-with? word "\"") -1 0)]
    (+ i length quote)))

(defn start-of-prev-word
  "assumes i is in a comment or a string. returns the i at the start of
  the prev word (going to the left) in this comment/string"
  [cm i]
  (let [{:keys [ch start string]} (get-info cm (cursor cm i))
        head                      (subs string 0 (- ch start))
        last-word                 (re-find #"[\S]*\s*$" head)
        length                    (count last-word)
        quote                     (if (str/ends-with? last-word "\"") 1 0)]
    (- i length quote)))

(defn move-past-token [cm]
  (when-let [{:keys [right-cur]} (get-info cm)]
    (let [{:keys [ch end]} (get-info cm right-cur)
          i                (index cm)]
      (.setCursor cm (cursor cm (+ i 1 (- end ch)))))))

(defn move-before-token [cm]
  (when-let [{:keys [left-cur]} (get-info cm)]
    (let [{:keys [ch start]} (get-info cm left-cur)
          i (index cm)]
      (.setCursor cm (cursor cm (- i 1 (- ch start)))))))

(defn move-before-word [cm]
  (while (= :word (linfo cm))
    (move-left cm)))

(def delimiters (set/union openers closers #{"\"" ";"}))

(defn move-to-start-of-word
  "move to the start of the next word and return the index
  that we should start deleting from for forward-kill-word,
  nil if no word to delete (and move back)."
  [cm]
  (let [start-cur (cursor cm)]
    (loop [mark (index cm), R (rinfo cm), right-char (:right-char(get-info cm))]
      (cond
        ;; if we did not find a word before end of file, move back and return nil:
        (= R :eof)
        (do (.setCursor cm start-cur)nil)
        ;; if we need to enter something to find a word, reset the mark:
        (and(not= R :string-guts)(delimiters right-char))
        (do(move-right cm)
           (recur (index cm)(rinfo cm)(:right-char(get-info cm))))
        ;; if in a comment and it's a space, move forward and preserve mark:
        (and (= R :comment) (#{" " "\t"} right-char))
        (do(move-right cm)(recur mark (rinfo cm)(:right-char(get-info cm))))
        ;; strings are just like comments, move past whitespace, keep mark:
        (and (= R :string-guts) (#{" " "\t" "\n"} right-char))
        (do(move-right cm)(recur mark (rinfo cm)(:right-char(get-info cm))))
        ;; stop at a word in a string, a regular word, or string-2:
        (or (= R :string-2-start)
            (= R :string-guts)
            (= R :comment)
            (= R :word))
        mark
        ;; otherwise move forward and preserve the mark:
        :else (do(move-right cm)(recur mark (rinfo cm)(:right-char(get-info cm))))))))

(defn move-to-end-of-word
  "move to the end of the word and return index's for a kill"
  [mark cm]
  (when (some? mark)
    (loop [L (rinfo cm), right-char (:right-char(get-info cm))]
      (cond
        ;; end of a comment:
        (or(= L :whitespace)
           (= L :string-end))
        (do(println"end of comment")[mark (index cm)])
        ;; keep moving to next whitespace in comment or string:
        (and (or(= L :comment)
                (= L :string-guts))
             (not(#{" " "\t" "\n"} right-char)))
        (do(println"moving within com/string")(move-right cm)(recur(rinfo cm)(:right-char(get-info cm))))
        ;; arrived at whitespace in string or comment, stop:
        (or(= L :comment)
           (= L :string-guts))
        (do(println"arrived at whitespace in string/comment")[mark(index cm)])
        ;; move past word of code:
        :else
        (do(println"move past word of code")(move-past-token cm)[mark(index cm)])))))

(defn ^:export forward-kill-word
  "paredit forward-kill-word exposed for keymap.
  Kill a word forward, skipping over intervening delimiters."
  [cm]
  (let [mark      (move-to-start-of-word cm)
        [from to] (move-to-end-of-word mark cm)]
    (if (and (some? from) (some? to))
      (kill-from-to cm from to))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; paredit-backward-kill-word
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn start-of-token-at
  [cm i]
  (let [{:keys [ch start]} (get-info cm (cursor cm i))]
    (- i (- ch start))))

(defn kill-prev-word-in-comment
  "assumes i is in a comment. kills text from i to the beginning of the previous
  word in this comment"
  [cm i]
  (let [{:keys [ch start string]} (get-info cm (cursor cm i))
        cur-offset-in-string      (- ch start)
        head                      (subs string 0 cur-offset-in-string)
        tail                      (subs string cur-offset-in-string)
        word                      (re-find #"\S*\s*$" head)
        length                    (count word)]
    (kill-from-to cm (- i length) i)
    (.setCursor cm (cursor cm (- i length)))))

(defn beginning-of-line?
  [cm cur]
  (let [{:keys [start end type] :as info} (get-info cm cur)]
    (and (not (nil? info))
         (nil? type)
         (= start end 0))))

(defn bkwd-kill-skippable-comment-char?
  [cm cur]
  (let [{:keys [type left-char] :as info} (get-info cm cur)]
    (and (not (nil? info))
         (= "comment" type)
         (re-matches #"\s|;" left-char))))

(defn bkwd-kill-word
  "trampoline helper for backward-kill-word. 'mark' is the index to start
  killing from. 'i' is the index we're inspecting. 'n' is how many more calls
  we'll entertain before stopping because we suspect an infinite loop. first
  call can use char count for 'n'."
  [cm mark i n]
  (let [h (dec i), m (dec n), cur (cursor cm i)]
    (cond
      (neg? n)
      (guard)

      (bof? cm cur)
      :do-nothing

      (beginning-of-line? cm cur)
      #(bkwd-kill-word cm h h m)

      (whitespace? cm cur)
      #(bkwd-kill-word cm mark (start-of-token-at cm i) m)

      (opening-delim? cm cur)
      #(bkwd-kill-word cm h h m)

      (closing-delim? cm cur)
      #(bkwd-kill-word cm h h m)

      (at-a-word? cm cur)
      (kill-from-to cm (start-of-token-at cm i) mark)

      (start-of-comment? cm cur)
      (let [j (index-of-next-non cm i semicolons dec)]
        #(bkwd-kill-word cm j j m))

      (bkwd-kill-skippable-comment-char? cm cur)
      #(bkwd-kill-word cm mark h m)

      (comment? cm cur)
      (kill-prev-word-in-comment cm mark)

      (start-of-a-string? cm cur)
      #(bkwd-kill-word cm h h m)

      (in-string? cm cur)
      (let [;; kill whitespace up to the word or string start in front of it:
            j (index-of-next-non cm i non-word-in-string dec)
            k (index-of-next cm j non-word-in-string dec)
            l (if (start-of-a-string? cm (cursor cm (inc k)))
                (inc k) k)]
        (kill-from-to cm l mark))

      :else
      (do (println "unhandled situation, please let me know (bkwd-kill-word)")
          (println (get-type cm cur))
          #(bkwd-kill-word cm h h m)))))

(defn ^:export backward-kill-word
  "paredit backward-kill-word exposed for keymap."
  [cm]
  (let [i (index cm)]
    (trampoline bkwd-kill-word cm i i (inc i))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; paredit-forward
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn move-past-non-code [cm]
  (while (contains? #{:whitespace :comment}(rinfo cm))
    (move-past-token cm)))

(defn move-before-non-code [cm]
  (while (contains? #{:whitespace :comment}(linfo cm))
    (move-left cm)))

(defn move-past-string
  "even for multi-line strings.
  assumes this is called when rinfo returns :string-start, i.e. block cursor is on open double quote"
  [cm]
  (move-right cm)
  (while (#{:string-guts :string-end} (rinfo cm))
    (move-right cm)))

(defn move-before-string
  "even for multi-line strings.
  assumes this is called when linfo returns :string-end, i.e. block cursor is on to the right of a closing double quote"
  [cm]
  (move-left cm)
  (while (#{:string-guts :string-start} (linfo cm))
    (move-left cm)))

(defn ^:export forward-sexp
  "forward-sexp exposed for keymap. seems part of emacs and not part
  of paredit itself. but including it here since this will be used in
  things other than emacs itself."
  ([cm] (forward-sexp cm (cursor cm)))
  ([cm cur]
   (loop [stack 0]
     (let [R (rinfo cm)]
       (cond
         ;; can't go any further than the end of file:
         (= R :eof)            :done
         ;; skip past comments and whitespace since we care about sexps:
         (or(= R :comment)
            (= R :whitespace)) (do(move-past-non-code cm)                      (recur stack))
         ;; skip past a word, and if there's still a stack then recur:
         (= R :word)           (do(move-past-token cm)(when(not(zero? stack))  (recur stack)))
         ;; skip past a string just like a single word:
         (= R :string-start)   (do(move-past-string cm)(when(not(zero? stack)) (recur stack)))
         ;; enter a sexp and increase the stack:
         (= R :opener)         (do(move-right cm)                              (recur (inc stack)))
         ;; what we do at a closer depends on the stack:
         (or(= R :closer)
            (= R :string-end)) (cond
                                 (= 0 stack) :done
                                 (= 1 stack) (move-right cm)
                                 :else       (do(move-right cm)                (recur (dec stack))))
         ;; stop inside the end of a string if we start inside one:
         (= R :string-guts)    (do(move-past-string cm)(move-left cm))
         ;; none of the above, so just skip past it and check the stack:
         :default              (do(move-past-token cm)                         (when(not(zero? stack))(recur stack))))))))

(defmulti forward-m (fn [cm] (rinfo cm)))

(defmethod forward-m :string-guts [cm]
  (-> cm
      move-to-start-of-word
      (move-to-end-of-word cm)))

(defmethod forward-m :string-end [cm]
  (move-right cm))

(defmethod forward-m :default [cm]
  "paredit forward exposed for keymap.
  Move forward an S-expression, or up an S-expression forward.
  If there are no more S-expressions in this one before the closing
  delimiter, move past that closing delimiter; otherwise, move forward
  past the S-expression following the point."
  [cm]
  (let [cur-0 (cursor cm)
        L     (rinfo cm)
        cur-1 (do(forward-sexp cm)(cursor cm))]
    (if (and (= cur-0 cur-1)
             (or (= L :closer)
                 (= L :string-end)))
      (move-right cm))))

(defn ^:export forward [cm] (forward-m cm))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; paredit-backward-sexp
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn ^:export backward-sexp
  "backward-sexp exposed for keymap. seems part of emacs and not part
  of paredit itself. but including it here since this will be used in
  things other than emacs itself."
  ([cm] (backward-sexp cm (cursor cm)))
  ([cm cur]
   (loop [rem (index cm), stack 0]
     (let [L (linfo cm)
           {:keys [i left-char right-char]} (get-info cm)]
       (cond
         (neg? rem)            (do(println[rem stack i left-char right-char L "avoiding infinite loop"]):done)
         ;; can't go any further than the beginning of file:
         (= L :bof)            (do(println[rem stack i left-char right-char L "bof"]):done)
         ;; skip before comments and whitespace since we care about sexps:
         (or(= L :comment)
            (= L :whitespace)) (do(println[rem stack i left-char right-char L "whi/com"])(move-before-non-code cm)                      (recur(dec rem)stack))
         ;; skip before a word, and if there's still a stack then recur:
         (= L :word)           (do(println[rem stack i left-char right-char L "skip word"])(move-before-word cm)(when(not(zero? stack))  (recur(dec rem)stack)))
         ;; skip before a string just like a single word:
         (= L :string-end)     (do(println[rem stack i left-char right-char L "skip str"])(move-before-string cm)(when(not(zero? stack)) (recur(dec rem)stack)))
         ;; enter a sexp and increase the stack:
         (= L :closer)         (do(println[rem stack i left-char right-char L "enter and inc stack"])(move-left cm)                                 (recur(dec rem)(inc stack)))
         ;; what we do at an opener depends on the stack:
         (or(= L :opener)
            (= L :string-start)) (cond
                                   (= 0 stack) (do(println[rem stack i left-char right-char L "stop inside op"]):done)
                                   (= 1 stack) (do(println[rem stack i left-char right-char L "exit op and done"])(move-left cm))
                                   :else       (do(println[rem stack i left-char right-char L "exit opener...."])(move-left cm)                   (recur(dec rem)(dec stack))))
         ;; stop inside the end of a string if we start inside one:
         (= L :string-guts)    (do(println[rem stack i left-char right-char L "inside start of str"])(move-before-string cm)(move-right cm))
         ;; none of the above, so just skip before it and check the stack:
         :default              (do(println[rem stack i left-char right-char L "default"])(move-before-token cm)                         (when(not(zero? stack))(recur(dec rem)stack))))))))

(defn move-back-to-end-of-word
  "move back to the end of the prev word and return the index
  that we should start deleting from for backward-kill-word,
  nil if no word to delete (and undo the move)."
  [cm]
  (let [start-cur (cursor cm)]
    (loop [mark (index cm), L (linfo cm), left-char (:left-char(get-info cm))]
      (cond
        ;; if we did not find a word before end of file, move back and return nil:
        (= L :bof)
        (do (.setCursor cm start-cur)nil)
        ;; if we need to enter something to find a word, reset the mark:
        (and(not= L :string-guts)(delimiters left-char))
        (do(move-left cm)
           (recur (index cm)(linfo cm)(:left-char(get-info cm))))
        ;; if in a comment and it's a space, move backward and preserve mark:
        (and (= L :comment) (#{" " "\t"} left-char))
        (do(move-left cm)(recur mark (linfo cm)(:left-char(get-info cm))))
        ;; strings are just like comments, move past whitespace, keep mark:
        (and (= L :string-guts) (#{" " "\t" "\n"} left-char))
        (do(move-left cm)(recur mark (linfo cm)(:left-char(get-info cm))))
        ;; stop at a word in a string, a regular word, or string-2:
        (or (= L :string-2-end)
            (= L :string-guts)
            (= L :comment)
            (= L :word))
        mark
        ;; otherwise move forward and preserve the mark:
        :else (do(move-left cm)(recur mark (linfo cm)(:left-char(get-info cm))))))))

(defn move-back-to-start-of-word
  "move back to the start of the word and return index's for a kill"
  [mark cm]
  (when (some? mark)
    (loop [L (linfo cm), left-char (:left-char(get-info cm))]
      (cond
        ;; end of a comment:
        (or(= L :whitespace)
           (= L :string-start))
        (do(println"end of comment")[mark (index cm)])
        ;; keep moving to next whitespace in comment or string:
        (and (or(= L :comment)
                (= L :string-guts))
             (not(#{" " "\t" "\n"} left-char)))
        (do(println"moving within com/string")(move-left cm)(recur(linfo cm)(:left-char(get-info cm))))
        ;; arrived at whitespace in string or comment, stop:
        (or(= L :comment)
           (= L :string-guts))
        (do(println"arrived at whitespace in string/comment")[mark(index cm)])
        ;; move past word of code:
        :else
        (do(println"move past word of code")(move-before-token cm)[mark(index cm)])))))

(defmulti backward-m (fn [cm] (linfo cm)))

(defmethod backward-m :string-guts [cm]
  (-> cm
      move-back-to-end-of-word
      (move-back-to-start-of-word cm)))

(defmethod backward-m :string-start [cm]
  (move-left cm))

(defmethod backward-m :default [cm]
  "paredit backward exposed for keymap.
  Move backward an S-expression, or up an S-expression backward.
  If there are no more S-expressions in this one before the opening
  delimiter, move past that opening delimiter; otherwise, move backward
  past the S-expression following the point."
  [cm]
  (let [cur-0 (cursor cm)
        L     (linfo cm)
        cur-1 (do(backward-sexp cm)(cursor cm))]
    (if (and (= cur-0 cur-1)
             (or (= L :opener)
                 (= L :string-start)))
      (move-left cm))))

(defn ^:export backward [cm] (backward-m cm))

(defn ^:export backward-up
  "paredit backward-up exposed for keymap.
  Move backward up out of the enclosing list.
  If in a string initially, that counts as one level."
  ([cm] (backward-up cm (cursor cm)))
  ([cm cur]
   (let[original-i (index cm cur)]
     (loop [prev-i original-i]
       (backward-sexp cm)
       (let [new-i (index cm)]
         (if (and (not= prev-i new-i)
                  (not= :bof (linfo cm)))
           (recur new-i))))
     (let [L (linfo cm)]
       (if (or(= L :opener)
              (= L :string-start))
         (move-left cm)
         (.setCursor cm (cursor cm original-i)))))))

(defn fwd
  "trampoline helper for forward. 'i' is the index we're inspecting. 'n' is how
  many more calls we'll entertain before suspecting an infinite loop. first call
  can pass in char count."
  [cm i n]
  (let [j (inc i), m (dec n), cur (cursor cm i), right-cur (cursor cm j)]
    (println (str [i (get-type cm cur) j (get-type cm right-cur)]))
    (cond
      (neg? n)
      (guard)

      (nil? right-cur)
      :do-nothing

      (eof? cm right-cur)
      :do-nothing

      (whitespace? cm right-cur)
      #(fwd cm j m)

      (opening-delim? cm right-cur)
      (.setCursor cm (end-of-next-sibling cm cur))

      (closing-delim? cm right-cur)
      (.setCursor cm right-cur)

      (at-a-word? cm right-cur)
      (.setCursor cm (cursor cm (token-end-index cm j)))

      (comment? cm right-cur)
      #(fwd cm (token-end-index cm j) m)

      (in-string? cm right-cur)
      (.setCursor cm (cursor cm (end-of-next-word cm j)))

      :else
      (do (println "unhandled situation, please let me know (fwd)")
          (println (get-type cm cur))
          #(fwd cm j m)))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; paredit-forward-up
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn forward-up-cur
  "get cursor corresponding to paredit forward up"
  ([cm] (forward-up-cur cm (cursor cm)))
  ([cm cur]
   (cond
     (nil? cur), nil

     (and (in-string? cm cur) (not (end-of-a-string? cm cur)))
     (token-end cm cur)

     :default, (skip cm parent-closer-sp))))

(defn ^:export forward-up
  "paredit forward-up exposed for keymap."
  ([cm] (forward-up cm (cursor cm)))
  ([cm cur]
   (when-let [cur' (forward-up-cur cm cur)]
     (.setCursor cm cur'))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; paredit-backward-up
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn backward-up-cur
  "get cursor corresponding to paredit backward up"
  ([cm] (backward-up-cur cm (cursor cm)))
  ([cm cur]
   (start-of-prev-sibling cm (forward-up-cur cm cur))))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; paredit-wrap-round
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn end-of-this
  "go to the end of the current thing, whether it be a string or a word of code"
  [cm cur]
  (if (in-string? cm cur)
    (token-end cm cur)
    (end-of-next-sibling cm cur)))

(defmulti move-to-start "move to the start for wrap-round"
  (fn [cm]
    (let [[L R] (info cm)]
      (cond
        (and (#{:string-start :string-guts} L) (#{:string-guts :string-end} R))
        :in-string

        (and (#{:string-2-start :string-2-guts} L) (#{:string-2-guts :string-2-end} R))
        :in-string-2

        (and (= :word L) (= :word R))
        :in-word

        (or (= :comment R)(= :whitespace R))
        :start-is-to-right

        (= :closer R)
        :want-parent))))

(defmethod move-to-start :want-parent [cm]
  (backward-up cm))

(defn move-to-start-of-string [cm]
  (while (#{:string-start :string-guts}(linfo cm))
    (move-left cm)))

(defmethod move-to-start :in-string [cm]
  (move-to-start-of-string cm))

(defmethod move-to-start :in-string-2 [cm]
  (while (#{:string-2-start :string-2-guts}(linfo cm))
    (move-left cm))
  (move-to-start-of-string cm))

(defmethod move-to-start :in-word [cm]
  (while (= :word (linfo cm))
    (move-left cm)))

(defmethod move-to-start :start-is-to-right [cm]
  (loop [R (rinfo cm)]
    (when (and (not= :eof R)(#{:whitespace :comment} R))
      (move-right cm)
      (recur (rinfo cm)))))

(defmethod move-to-start :default [cm] :no-op)

(defn ^:export wrap-round
  "paredit wrap-round exposed for keymap. if in a word or string, get out of it
  first and then wrap the whole thing"
  [cm]
  (let [cur-orig  (cursor        cm)
        _         (move-to-start cm)
        cur-open  (cursor        cm)
        i-start   (index         cm)
        _         (forward-sexp  cm)
        cur-close (cursor        cm)
        i-end     (index         cm)]
    (if (= i-start i-end) ;; then nothing to wrap, go back:
      (.setCursor cm cur-orig)
      (let [text (str "("
                      (.getRange cm cur-open cur-close)
                      ")")]
        (.replaceRange cm text cur-open cur-close)
        (.setCursor cm (cursor cm (inc i-start)))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; paredit-splice-sexp M-s
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn ^:export splice-sexp
  "paredit splice-sexp exposed for keymap. Splice the list that the point is on
  by removing its delimiters. unlike emacs' version, this does not splice a
  string by dropping its double-quotes."
  [cm]
  (let [i0    (index cm) ;; starting i
        _     (backward-up cm)
        _     (when(= :string-start(rinfo cm))(backward-up cm))
        i1    (index cm) ;; start of sexp to splice
        cur-L (cursor cm)
        iL    (inc i1)
        _     (forward-sexp cm)
        i2    (index cm) ;; end of sexp to splice
        cur-R (cursor cm)
        iR    (dec i2)]
    (if (or (= i0 i1)(= i1 i2)) ;; then nothing to splice, so go back:
      (.setCursor cm (cursor cm i0))
      (do (.replaceRange cm
                         (.getRange cm
                                    (cursor cm iL)
                                    (cursor cm iR))
                         cur-L
                         cur-R)
          (.setCursor cm (cursor cm (dec i0)))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; paredit-splice-sexp-killing-backward M-<up>
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn ^:export splice-sexp-killing-backward
  "paredit splice-sexp-killing-backward exposed for keymap. like emacs' version,
  this doesn't actually kill to the clipboard. it just deletes. but unlike
  emacs, this does not splice a string by dropping its double-quotes."
  [cm]
  (let [i0    (index cm) ;; starting i, might kill up to here
        _     (backward-up cm)
        i00   (when(= :string-start(rinfo cm))
                (let [i (index cm)]
                  (backward-up cm)
                  i)) ;; or kill up to here because we exited a string
        i1    (index cm) ;; start of sexp to splice
        cur-L (cursor cm)
        iL    (or i00 i0) ;; keep text starting from here
        _     (forward-sexp cm)
        i2    (index cm) ;; end of sexp to splice
        cur-R (cursor cm)
        iR    (dec i2)] ;; keep text up to here
    (if (or (= i0 i1)(= i1 i2)) ;; then nothing to splice, so go back:
      (.setCursor cm (cursor cm i0))
      (do (.replaceRange cm
                         (.getRange cm
                                    (cursor cm iL)
                                    (cursor cm iR))
                         cur-L
                         cur-R)
          (.setCursor cm (cursor cm i1))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; paredit-splice-sexp-killing-forward M-<down>
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn ^:export splice-sexp-killing-forward
  "paredit splice-sexp-killing-forward exposed for keymap. like emacs' version,
  this doesn't actually kill to the clipboard. it just deletes. but unlink
  emacs, this does not splice a string by dropping its double-quotes."
  ([cm] (splice-sexp-killing-forward cm (cursor cm)))
  ([cm cur]
   (if (in-string? cm cur) (forward-up cm cur))
   (let [cur'      (cursor cm)
         final-cur (cursor cm (dec (index cm cur')))
         cur-close (skip cm parent-closer-sp)
         cur-open  (start-of-prev-sibling cm cur-close)
         keep-from (when cur-open (cursor cm (inc (index cm cur-open))) )
         text      (when keep-from (.getRange cm cur-open cur-close))
         text'     (when keep-from (.getRange cm keep-from cur'))]
     (when text'
       (.replaceRange cm text' cur-open cur-close)
       (.setCursor cm final-cur)))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; paredit-raise-sexp M-r
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn ^:export raise-sexp
  "paredit raise-sexp exposed for keymap."
  ([cm] (raise-sexp cm (cursor cm)))
  ([cm cur]
   (when (in-string? cm cur) (backward-up cm cur))
   (when (in-a-word? cm) (.setCursor cm (start-of-prev-sibling cm)))
   (let [c1        (cursor cm)
         c2        (end-of-next-sibling cm c1)
         text      (when c2 (.getRange cm c1 c2))
         cur-close (when text (skip cm parent-closer-sp))
         cur-open  (when cur-close (start-of-prev-sibling cm cur-close))]
     (when cur-open
       (.replaceRange cm text cur-open cur-close)
       (.setCursor cm cur-open)))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; paredit-forward-slurp-sexp C-), C-<right>
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn fwd-slurp
  "trampoline-able that looks for an ancestor closing bracket (parent,
  grandparent, etc) that has a sibling to slurp. returns a vector of the cur to
  the right of such a bracket, the cur to the right of the sibling that will be
  slurped, the string of the bracket to move. nil if there is no such anscestor
  that can slurp."
  [cm cur n]
  (when (>= n 0)
    (let [parent  (skip cm parent-closer-sp cur)
          sibling (end-of-next-sibling cm parent)]
      (if sibling
        [parent sibling (get-string cm parent)]
        (fn [] (fwd-slurp cm parent (dec n)))))))

(defn ^:export forward-slurp-sexp
  "paredit forward-slurp-sexp exposed for keymap."
  ([cm] (forward-slurp-sexp cm (cursor cm)))
  ([cm cur]
   (when-let [[parent sibling bracket]
              (trampoline fwd-slurp cm cur (char-count cm))]
     (insert cm bracket 0 sibling);; put bracket in new spot
     (.replaceRange cm "" (cursor cm (- (index cm parent) (count bracket)))
                    parent));; remove bracket from old spot
   (.setCursor cm cur)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; paredit-forward-down C-M-d
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn fwd-down
  "trampoline-able that looks for the cursor where we'd be if we went forward
  and then down into the next sibling that is available. nil if there is no
  sibling to enter."
  [cm i n]
  (let [cur (cursor cm i)]
    (cond
      ;; ran out of chars to consider, so stop:
      (<= n 0)                nil
      ;; edge case, so stop:
      (nil? cur)              nil
      ;; we've just entered a sibling, so this is our target:
      (opening-delim? cm cur) cur
      ;; we got to the end of a sexp, no child to decend into, stop:
      (closing-delim? cm cur) nil
      ;; consider the next position:
      :default                #(fwd-down cm (inc i) (dec n)))))

(defn forward-down-cur
  ([cm] (forward-down-cur cm (cursor cm)))
  ([cm cur]
   (let [i (index cm cur)]
     (trampoline fwd-down cm
                 (inc i)
                 (- (char-count cm) i)))))

(defn ^:export forward-down
  ([cm] (forward-down cm (cursor cm)))
  ([cm cur]
   (when-let [cur' (forward-down-cur cm cur)]
     (.setCursor cm cur'))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; paredit-backward-down C-M-p
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn bkwd-down
  "trampoline-able that looks for the cursor where we'd be if we went backward
  and then down into the prev sibling that is available. nil if there is no
  sibling to enter."
  [cm cur n]
  (let [{:keys [left-cur i start ch bof]} (get-info cm cur)]
    (cond
      ;; ran out of positions to consider, so stop:
      (<= n 0)                (guard)
      ;; on a closing delimiter, so return the position to the left:
      (closing-delim? cm cur) left-cur
      ;; on an opening delimiter, no more siblings to consider entering, stop:
      (opening-delim? cm cur) nil
      ;; beginning of file, so stop:
      bof                     nil
      :default                #(bkwd-down cm (cursor cm (dec i)) (dec n)))))

(defn ^:export backward-down
  ([cm] (backward-down cm (cursor cm)))
  ([cm cur]
   (let [i (index cm cur)]
     (when-let [cur' (trampoline bkwd-down cm cur i)]
       (.setCursor cm cur')))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; paredit-backward-slurp-sexp C-), C-<right>
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn bkwd-slurp
  "trampolin-able that looks for an ancestor opening bracket (parent,
  grandparent, etc) that has a sibling to slurp. returns a vector of the cur to
  the left of such a bracket, the cur to the left of the sibling that will be
  slurped, the string of the bracket to move. nil if there is no such anscestor
  that can slurp."
  [cm cur n]
  (when (>= n 0)
    (let [ending      (skip cm parent-closer-sp cur)
          parent      (start-of-prev-sibling cm ending)
          sibling     (start-of-prev-sibling cm parent)
          bracket-cur (forward-down-cur cm parent)]
      (if (and (not (nil? sibling)) (not (nil? bracket-cur)))
        [parent sibling (get-string cm bracket-cur)]
        (fn [] (bkwd-slurp cm parent (dec n)))))))

(defn ^:export backward-slurp-sexp
  "paredit backward-slurp-sexp exposed for keymap."
  ([cm] (backward-slurp-sexp cm (cursor cm)))
  ([cm cur]
   (let [i (index cm cur)] ;; line,ch may change but index will not.
     (when-let [[parent sibling bracket]
                (trampoline bkwd-slurp cm cur (char-count cm))]
       (.replaceRange cm "" parent
                      (cursor cm (+ (index cm parent) (count bracket))))
       (insert cm bracket 0 sibling))
     (.setCursor cm (cursor cm i)))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; paredit-forward-barf-sexp C-\} C-<left>
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn fwd-barf
  "trampoline-able that looks for an ancestor closing bracket (parent,
  grandparent, etc) that has a sibling to barf. returns a vector of
  the cur to the right of such a bracket, the cur at the bracket, the
  cur where the bracket should go, the text of the bracket, and
  whether the operation causes the cursor to be moved. nil if there is
  no such anscestor that can barf"
  [cm cur n]
  (when (>= n 0)
    (let [parent      (skip cm parent-closer-sp cur)
          inside      (cursor cm (dec (index cm parent)))
          sibling     (start-of-prev-sibling cm inside)
          ;; prevsib: end of prev sibling if there is one:
          prevsib     (end-of-next-sibling cm (start-of-prev-sibling cm sibling))
          ;; bracket-cur: where the new bracket should go:
          bracket-cur (or prevsib
                          (forward-down-cur cm (backward-up-cur cm sibling)))
          ;; whether the cursor needs to change:
          moved       (and bracket-cur (< (index cm bracket-cur) (index cm cur)))
          ;; text of the bracket, e.g. ")"
          bracket     (when parent
                    (if moved
                      (str (get-string cm parent) " ")
                      (get-string cm parent)))]
      (cond
        (nil? parent)      nil
        (nil? bracket-cur) (fn [] (fwd-barf cm parent (dec n)))
        :default           [parent inside bracket-cur bracket moved]))))

(defn ^:export forward-barf-sexp
  "paredit forward-barf-sexp exposed for keymap."
  ([cm] (forward-barf-sexp cm (cursor cm)))
  ([cm cur]
   (if-let [[parent inside sibling bracket moved]
            (trampoline fwd-barf cm cur (char-count cm))]
     (do (.replaceRange cm "" inside parent)
         (insert cm bracket 0 sibling)
         (if moved
           (.setCursor cm (cursor cm (+ (index cm cur) (count bracket))))
           (.setCursor cm cur)))
     (.setCursor cm cur))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; paredit-backard-barf-sexp C-{, C-M-<right>, Esc C-<right>
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn bkwd-barf
  "trampoline-able that looks for an ancestor opening bracket (parent,
  grandparent, etc) that has a sibling to barf. returns... . nil if
  there is no such anscestor that can barf"
  [cm cur n]
  (when (>= n 0)
    (let [outside              (backward-up-cur cm cur)
          inside               (forward-down-cur cm outside)
          end-of-barfed-sexp   (end-of-next-sibling cm inside)
          end-of-new-first-sib (end-of-next-sibling cm end-of-barfed-sexp)
          bracket-cur          (start-of-prev-sibling cm end-of-new-first-sib)
          bracket-text         (get-string cm inside)
          moved                (and bracket-cur (< (index cm cur) (index cm bracket-cur)))
          bracket-cur'         end-of-barfed-sexp
          moved'               true
          word                 (at-a-word? cm outside)]
      (cond
        (nil? outside)               nil
        (nil? end-of-barfed-sexp)    #(bkwd-barf cm outside (min (dec n)(index cm outside)))
        (some? end-of-new-first-sib) [outside inside bracket-cur  bracket-text moved  word]
        :default                     [outside inside bracket-cur' bracket-text moved' word]))))

(defn ^:export backward-barf-sexp
  "paredit backward-barf-sexp exposed for keymap."
  ([cm] (backward-barf-sexp cm (cursor cm)))
  ([cm cur]
   (if-let [[outside inside bracket-cur bracket-text moved word]
            (trampoline bkwd-barf cm cur (index cm cur))]
     (do (insert cm bracket-text 0 bracket-cur)
         (.replaceRange cm (if word " " "") outside inside)
         (if moved
           (.setCursor cm (cursor cm (- (index cm cur) (count bracket-text))))
           (.setCursor cm cur)))
     (.setCursor cm cur))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; paredit-split-sexp M-S
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn split-form
  "split sexp for (forms like this)"
  [cm cur]
  (let [close-cur     (skip cm parent-closer-sp cur)
        close-bracket (get-string cm close-cur)
        open-cur      (start-of-prev-sibling cm close-cur)
        open-bracket  (get-string cm (cursor cm (inc (index cm open-cur))))]
    (when (and (not (nil? open-bracket)) (not (nil? close-bracket)))
      (.setCursor cm cur)

      (let [offset         (if (in-whitespace? cm)
                     1
                     (do (insert cm " ")
                         (just-one-space cm (cursor cm) false)
                         0))
            cur'           (cursor cm)
            i'             (+ (index cm cur') offset)
            prev-sib       (start-of-prev-sibling cm cur')
            prev-sib-end   (end-of-next-sibling cm prev-sib)
            next-sib       (end-of-next-sibling cm cur)
            next-sib-start (start-of-prev-sibling cm next-sib)]
        (if (nil? next-sib-start)
          (insert cm open-bracket)
          (insert cm open-bracket 0 next-sib-start))
        (if (nil? prev-sib-end)
          (do (move-left cm)
              (insert cm close-bracket))
          (insert cm close-bracket 0 prev-sib-end))
        (.setCursor cm (cursor cm i'))))))


(defn split-string
  "split sexp for \"strings like this\""
  [cm cur]
  (let [open-quote-i (index-of-next-non cm (index cm cur) " " inc)]
    (.replaceRange cm "\" \"" cur (cursor cm open-quote-i))
    (move-left cm)
    (move-left cm)))

(defn ^:export split-sexp
  "paredit split-sexp exposed for keymap."
  ([cm] (split-sexp cm (cursor cm)))
  ([cm cur]
   (if (in-string? cm cur)
     (split-string cm cur)
     (split-form cm cur))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; paredit-join-sexps M-J
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn ^:export join-sexps
  "paredit join-sexps exposed for keymap."
  ([cm] (join-sexps cm (cursor cm)))
  ([cm cur]
   (let [left-sib   (start-of-prev-sibling cm cur)
         close      (end-of-next-sibling cm left-sib)
         right-sib  (end-of-next-sibling cm cur)
         open       (start-of-prev-sibling cm right-sib)
         open-right (when open (cursor cm (inc (index cm open))))
         close-char (get-string cm close)
         open-char  (get-string cm open-right)]
     (if (and (not (nil? open))
              (not (nil? close))
              (pair? open-char close-char))
       (do (.setCursor cm open)
           (delete cm)
           (.setCursor cm close)
           (backspace cm)
           (.setCursor cm (if (= (.-line open) (.-line close))
                            (cursor cm (dec (index cm cur)))
                            cur)))
       (.setCursor cm cur)))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; paredit-reindent-defun M-q
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn top-most-opener-candidate
  "trampoline-able that looks for the top-most opening bracket for the specified
  location. returns the current cursor if there is no such anscestor"
  [cm cur n]
  (when (>= n 0)
    (if-let [parent (backward-up-cur cm cur)]
      (fn [] (top-most-opener-candidate cm parent (dec n)))
      cur)))

(defn top-most-opener
  "get the top most opening bracket for the specified location. nil if
  there is no such bracket."
  ([cm] (top-most-opener cm (cursor cm)))
  ([cm cur] (let [candidate (top-most-opener-candidate cm cur (char-count cm))]
              (when (not= candidate cur) candidate))))

(defn ^:export reindent-defun
  "paredit reindent-defun exposed for keymap."
  ([cm] (reindent-defun cm (cursor cm)))
  ([cm cur]
   (let [open        (trampoline top-most-opener cm cur)
         close       (end-of-next-sibling cm open)
         open-line   (when open (.-line open))
         line-offset (when open (- (.-line cur) open-line))
         line-len    (count (.getLine cm (.-line cur)))
         ch          (.-ch cur)]
     (when (and (not (nil? open)) (not (nil? close)))
       (indent-lines cm (.-line open) (.-line close))
       (repeatedly line-offset (.execCommand cm "goLineDown"))
       (.execCommand cm "goLineStart")
       (.setCursor
         cm
         (cursor cm (+ (index cm)
                       ch
                       (- (count (.getLine cm (.-line (cursor cm))))
                          line-len))))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; paredit-forward-sexp
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; (defmulti move-past-char (fn[forward? pred cm] forward?))

;; (defmethod move-past-char true [forward? pred cm]
;;   (loop [c (:right-char(get-info cm))]
;;     (when (and (some? c) (pred c))
;;       (move-right cm)
;;       (recur (:right-char(get-info cm))))))

;; (defmethod move-past-char false [forward? pred cm]
;;   (loop [c (:left-char(get-info cm))]
;;     (when (and (some? c) (pred c))
;;       (move-left cm)
;;       (recur (:left-char(get-info cm))))))

;; (defmethod move-past-char :default [forward? pred cm]
;;   (println "move-past-char: first arg should be true/false"))

;; (defmulti move-past-info (fn[forward? pred cm] forward?))

;; (defmethod move-past-info true [forward? pred cm]
;;   (loop [i (rinfo cm)]
;;     (when (and (not= :eof i) (pred i))
;;       (move-right cm)
;;       (recur (rinfo cm)))))

;; (defmethod move-past-info false [forward? pred cm]
;;   (loop [i (linfo cm)]
;;     (when (and (not= :bof i) (pred i))
;;       (move-left cm)
;;       (recur (linfo cm)))))

;; (defmethod move-past-info :default [forward? pred cm]
;;   (println "move-past-info: first arg should be true/false"))
