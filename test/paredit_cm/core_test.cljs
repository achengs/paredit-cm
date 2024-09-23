(ns ^:figwheel-always paredit-cm.core-test
  (:require-macros [paredit-cm.macros :as t])
  (:require [cljs.test :refer-macros [deftest is run-tests]]
            [clojure.string :as str]
            [paredit-cm.core :as p]))

(defn get-cursor [cm] (.getCursor cm))
(defn index-from-pos [cm cur] (.indexFromPos cm cur))
(defn line [cur] (.-line cur))
(defn ch [cur] (.-ch cur))
(defn text [cm] (.getValue cm))

(defn get-line
  "get line of pos i from text"
  [text i]
  ;; the answer is one less than the number of lines:
  (-> text
      (subs 0 (inc i)) ;; inc i: handle being at beginning of line
      str/split-lines
      count
      dec))

(defn get-ch
  "get ch of pos i from text"
  [text i]
  (let [last (str/last-index-of text "\n" i)]
    (if (or (nil? last) (= last i))
      i
      (- i last 1))))

(defn decode
  "returns [line ch text] from s, a paredit cheatsheet styled value"
  [s]
  (let [i (str/index-of s "X")
        j (str/last-index-of s "X")
        text (str/replace-first s "X" "")
        msg (str "there should be exactly one X in [" s "]")]
    (when (or (nil? i) (not= i j))
      (println msg))
    [(get-line s i) (get-ch s i) text]))

(defn encode
  "turns [text i] into s, a paredit cheatsheet styled value"
  [text i]
  (str (subs text 0 i) "X" (subs text i)))

(def instance (atom nil))

(defn get-instance []
  (if-let [cm @instance]
    cm
    ;; what we do here to get the instance has to work for both
    ;; public/index.html (used during cider-jack-in-clojurescript)
    ;; and test/test.html (used from CLI lein cljsbuild test):
    (let [new-instance (->> "cm"
                            (.getElementById js/document)
                            (.-myCodeMirrorInstance))]
      (reset! instance new-instance)
      new-instance)))

(defn get-cm
  "gets the code mirror editor from the test page and sets up the
  initial value and cursor position"
  ([s] (let [[line ch text] (decode s)] (get-cm line ch text)))
  ([line ch text]
   (let [cm (get-instance)]
     (.setValue cm text)
     (.setCursor cm line ch)
     cm)))

(deftest paredit-cases
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
  ;; how to interpret a test case that uses t/check:
  ;;
  ;; args: [1] the paredit operation being tested
  ;;
  ;;       [2] the state of the code mirror instance before the
  ;;           operation, with the cursor represented by X, and
  ;;
  ;;       [3] the expected state after the operation.
  ;;
  ;; the X corresponds to where a vertical-bar cursor would be. so
  ;; "(X)" is equivalent to an empty pair of parens () with the cursor
  ;; positioned to insert the first character between them. a block
  ;; cursor would be 'on' the closing paren in this example "(X)"
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
  (t/check p/open-round
           "(a bX c d) "
           "(a b (X) c d) ")

  (t/check p/open-round
           "(a b Xc d) "
           "(a b (X) c d) ")

  (t/check p/open-round
           "(a bXc d) "
           "(a b (X) c d) ")

  (t/check p/open-round
           "(X)"
           "((X))")

  (t/check p/open-round
           "(foo \"bar Xbaz\" quux) "
           "(foo \"bar (Xbaz\" quux) ")

  (t/check p/open-round
           "; comXment "
           "; com(Xment ")

  (t/check p/open-round
           "(a b
cX d) "
           "(a b
c (X) d) ")
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
  (t/check p/close-round
           "(a b cX ) "
           "(a b c)X ")

  (t/check p/close-round
           "(a b c
d X       ) "
           "(a b c
   d)X ")

  (t/check p/close-round
           "; Hello,X world! "
           "; Hello,)X world! ")
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
  (t/check p/close-round-and-newline
           "(defn f [xX   ]         )"
           "(defn f [x]
  X)")

  (t/check p/close-round-and-newline
           "; (Foo.X"
           "; (Foo.)X")
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
  (t/check p/open-square
           "(a bX c d)"
           "(a b [X] c d)")

  (t/check p/open-square
           "(a b Xc d)"
           "(a b [X] c d)")

  (t/check p/open-square
           "(a bXc d)"
           "(a b [X] c d)")

  (t/check p/open-square
           "(foo \"bar Xbaz\" quux) "
           "(foo \"bar [Xbaz\" quux) ")

  (t/check p/open-square
           "(foo \"bar Xbaz
boo\" quux) "
           "(foo \"bar [Xbaz
boo\" quux) ")

  (t/check p/open-square
           "(foo \"bar baz
boXo\" quux) "
           "(foo \"bar baz
bo[Xo\" quux) ")

  (t/check p/open-square
           " ; comXment "
           " ; com[Xment ")
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
  (t/check p/close-square
           "(define-key keymap [frobX  ] 'frobnicate)"
           "(define-key keymap [frob]X 'frobnicate)")

  (t/check p/close-square
           "(let [Xabc
 1     ] (println abc))"
           "(let [abc
      1]X (println abc))")

  (t/check p/close-square
           "; [Bar.X"
           "; [Bar.]X")
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
  (t/check p/doublequote
           "(frob grovel Xfull lexical)"
           "(frob grovel \"X\" full lexical)")

  (t/check p/doublequote
           "(frob grovelX full lexical)"
           "(frob grovel \"X\" full lexical)")

  (t/check p/doublequote
           "(frob groXvel full lexical)"
           "(frob gro \"X\" vel full lexical)")

  (t/check p/doublequote
           "(frob grovelX
full lexical)"
           "(frob grovel \"X\"
full lexical)")

  (t/check p/doublequote
           "(foo \"bar Xbaz\" quux)"
           "(foo \"bar \\\"Xbaz\" quux)")

  (t/check p/doublequote
           "(foo \"bar
bXaz\" quux)"
           "(foo \"bar
b\\\"Xaz\" quux)")
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
  (t/check p/meta-doublequote
           ;; not to be confused with paredit-meta-double-quote-and-newline
           "(foo \"bar Xbaz\" quux)"
           "(foo \"bar baz\"X quux)")

  (t/check p/meta-doublequote
           "(foo X(bar #\\x \"baz \\\\ quux\") zot)"
           "(foo \"X(bar #\\\\x \\\"baz \\\\\\\\ quux\\\")\" zot)")

  (t/check p/meta-doublequote
           "(foo X(bar \"hi
 big blue
world\" baz) quux)"
           "(foo \"X(bar \\\"hi
 big blue
world\\\" baz)\" quux)")
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
  (t/check p/comment-dwim
           "(foo Xbar) ; baz"
           "(foo bar)                               ;X baz")

  (t/check p/comment-dwim
           "(frob grovel)X"
           "(frob grovel)                           ; X")

  (t/check p/comment-dwim
           "X(defun hello-world ...)"
           ";; X
(defun hello-world ...)")

  (t/check p/comment-dwim
           "X(defun hello-world
 ...)"
           ";; X
(defun hello-world
 ...)")
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
  (t/check p/forward-delete
           "(quuXx \"zot\")"
           "(quuX \"zot\")")

  (t/check p/forward-delete
           "(quux X\"zot\")"
           "(quux \"Xzot\")")

  (t/check p/forward-delete
           "(quux \"Xzot\")"
           "(quux \"Xot\")")

  (t/check p/forward-delete
           "(quux \"X\")"
           "(quux X)")

  (t/check p/forward-delete
           "(foo (X) bar)"
           "(foo X bar)")

  (t/check p/forward-delete
           "X(foo bar)"
           "(Xfoo bar)")

  (t/check p/forward-delete
           "X
(foo bar)"
           "X(foo bar)")
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
  (t/check p/backward-delete
           "(\"zot\" qXuux)"
           "(\"zot\" Xuux)")

  (t/check p/backward-delete
           "(\"zot\"X quux)"
           "(\"zotX\" quux)")

  (t/check p/backward-delete
           "(\"zotX\" quux)"
           "(\"zoX\" quux)")

  (t/check p/backward-delete
           "(\"X\" quux)"
           "(X quux)")

  (t/check p/backward-delete
           "(foo (X) bar)"
           "(foo X bar)")

  (t/check p/backward-delete
           "(ns ^{X:doc \"Conway's Game of Life.\"} game-of-life)"
           "(ns ^{X:doc \"Conway's Game of Life.\"} game-of-life)")

  (t/check p/backward-delete
           "(foo bar)X

(baz)"
           "(foo barX)

(baz)")

  (t/check p/backward-delete
           "(foo bar)
X"
           "(foo bar)X")
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
  (t/check p/kill
           "(foo bar)X   ; Useless comment!"
           "(foo bar)X")

  (t/check p/kill
           "(Xfoo bar)   ; Useful comment!"
           "(X)   ; Useful comment!")

  (t/check p/kill
           "X(foo bar)   ; Useless line!"
           "X")

  (t/check p/kill
           "(foo \"Xbar baz\" quux)"
           "(foo \"X\" quux)")

  (t/check p/kill
           "X(foo
bar)   ; Useless form!"
           "X")

  (t/check p/kill
           "X(foo
bar
baz) (keep me)  ; Useless form!"
           "X (keep me)  ; Useless form!")
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
  (t/check p/forward-kill-word
           "X(foo bar) ; baz"
           "(X bar) ; baz")
  ;; xxx todo test (X \1 )
  (t/check p/forward-kill-word
           "X(f bar) ; baz"
           "(X bar) ; baz")

  (t/check p/forward-kill-word
           "(X bar) ; baz"
           "(X) ; baz")

  (t/check p/forward-kill-word
           "(X) ; baz quux"
           "() ;X quux")

  (t/check p/forward-kill-word
           "() ;X quux"
           "() ;X")

  (t/check p/forward-kill-word
           "() ;X"
           "() ;X")

  (t/check p/forward-kill-word
           ";;;X Frobnicate
(defun frobnicate ...)"
           ";;;X
(defun frobnicate ...)")

  (t/check p/forward-kill-word
           ";;;X
(defun frobnicate ...)"
           ";;;
(X frobnicate ...)")

  (t/check p/forward-kill-word
           "(foo X\"bar baz\" quux)"
           "(foo \"X baz\" quux)")

  (t/check p/forward-kill-word
           "(foo \"X baz\" quux)"
           "(foo \"X\" quux)")

  (t/check p/forward-kill-word
           "(foo \"X\" quux)"
           "(foo \"\"X)")
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
  (t/check p/backward-kill-word
           "(foo bar)   ; baz
(quux)  X"
           "(foo bar)   ; baz
(X)  ")

  (t/check p/backward-kill-word
           "(foo bar)   ; baz
(X)  "
           "(foo bar)   ; X
()  ")

  (t/check p/backward-kill-word
           "(foo bar)   ;X
()  "
           "(foo X)   ;
()  ")

  (t/check p/backward-kill-word
           "(foo X)   ;
()  "
           "(X)   ;
()  " )

  (t/check p/backward-kill-word
           "(X)"
           "(X)")

  (t/check p/backward-kill-word
           "X "
           "X ")
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
  (t/check p/forward
           " X"
           " X")

  (t/check p/forward
           "(foo X(bar baz) quux)"
           "(foo (bar baz)X quux)")

  (t/check p/forward
           "(foo X(bar
 baz [x \"y\"]) quux)"
           "(foo (bar
 baz [x \"y\"])X quux)")

  (t/check p/forward
           "(foo (barX) quux)"
           "(foo (bar)X quux)")

  (t/check p/forward
           "(foo (bar)X) baz"
           "(foo (bar))X baz")

  (t/check p/forward
           "(foo \"Xhello world\" bar)"
           "(foo \"helloX world\" bar)")

  (t/check p/forward
           "(foo \"helloX world\" bar)"
           "(foo \"hello worldX\" bar)")

  (t/check p/forward
           "(foo \"hello worldX\" bar)"
           "(foo \"hello world\"X bar)")
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
  (t/check p/backward
           "\"a\"X"
           "X\"afffffffffffffffffffffff\"")

  (t/check p/backward
           " (Xfoo bar)"
           " X(foo bar)")

  (t/check p/backward
           "(foo
bar [x \"
y\"])X"
           "X(foo
bar [x \"
y\"])")

  (t/check p/backward
           " (foo bar)X"
           " X(foo bar)")

  (t/check p/backward
           "X (foo bar)"
           "X (foo bar)")

  (t/check p/backward
           "  X (foo bar)"
           "X   (foo bar)")

  (t/check p/backward
           " (foo barX)"
           " (foo Xbar)")

  (t/check p/backward
           "(foo \"hello world\"X bar)"
           "(foo X\"hello world\" bar)")

  (t/check p/backward
           "(foo \"hello worldX\" bar)"
           "(foo \"hello Xworld\" bar)")

  (t/check p/backward
           "(foo \"hello worXld\" bar)"
           "(foo \"hello Xworld\" bar)")

  (t/check p/backward
           "(foo \"hello Xworld\" bar)"
           "(foo \"Xhello world\" bar)")

  (t/check p/backward
           "(foo \"Xhello world\" bar)"
           "(foo X\"hello world\" bar)")

  (t/check p/backward
           "(foo \"hello world\" bar)
X"
           "X(foo \"hello world\" bar)
")

  (t/check p/backward
           "   (foo bar) (baz qux)X  "
           "   (foo bar) X(baz qux)  ")

  (t/check p/backward
           "   (foo bar) X(baz qux)  "
           "   X(foo bar) (baz qux)  ")

  (t/check p/backward
           "   (foo \"hello world\" bar)
X"
           "   X(foo \"hello world\" bar)
")
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
  (t/check p/forward-up
           "   (foo \"hello Xworld\" bar)"
           "   (foo \"hello world\"X bar)")

  (t/check p/forward-up
           "   (foo \"hello world\"X bar) "
           "   (foo \"hello world\" bar)X ")

  (t/check p/forward-up
           "X(foo bar)"
           "X(foo bar)")

  (t/check p/forward-up
           "(foo Xbar
  (let [a \"hi
big blue
world
\"]
     (inc 1)))"
           "(foo bar
  (let [a \"hi
big blue
world
\"]
     (inc 1)))X")
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
  (t/check p/backward-up
           "   (foo \"hello Xworld\" bar)"
           "   (foo X\"hello world\" bar)")

  (t/check p/backward-up
           "   (foo \"hello woXrld\" bar)"
           "   (foo X\"hello world\" bar)")

  (t/check p/backward-up
           "   (foo X\"hello world\" bar)"
           "   X(foo \"hello world\" bar)")

  (t/check p/backward-up
           "(foo bar)X"
           "(foo bar)X")

  (t/check p/backward-up
           " X(foo bar)"
           " X(foo bar)")

  (t/check p/backward-up
           "(foo (bar bazX quux zot))"
           "(foo X(bar baz quux zot))")

  (t/check p/backward-up
           "  (foo (bar baz
 quux [z]
  zot) X (another foo))"
           "  X(foo (bar baz
 quux [z]
  zot)  (another foo))")
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
  (t/check p/wrap-round
           "(foo Xbar baz)"
           "(foo (Xbar) baz)")

  (t/check p/wrap-round
           "(foo bXar baz)"
           "(foo (Xbar) baz)")

  (t/check p/wrap-round
           "(foo \"bXar\" baz)"
           "(foo (X\"bar\") baz)")

  (t/check p/wrap-round
           "(foo \"hello
big blue
woXrld\" baz)"
           "(foo (X\"hello
big blue
world\") baz)")

  (t/check p/wrap-round
           "(foo X(bar baz) qux)"
           "(foo (X(bar baz)) qux)")

  (t/check p/wrap-round
           "(foo X\b baz)"
           "(foo (X\b) baz)")

  (t/check p/wrap-round
           "(foo X   bar baz)"
           "(foo    (Xbar) baz)")
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
  (t/check p/splice-sexp
           "(foo Xbaz)"
           "foo Xbaz")

  (t/check p/splice-sexp
           "foo Xbaz"
           "foo Xbaz")

  (t/check p/splice-sexp
           "(foo bazX)"
           "foo bazX")

  (t/check p/splice-sexp
           "  (foo baz X)   "
           "  foo baz X   ")

  (t/check p/splice-sexp
           "(foo   X  baz)"
           "foo   X  baz")

  (t/check p/splice-sexp
           "(foo \"bar Xbaz\" qux)"
           "foo \"bar Xbaz\" qux")

  (t/check p/splice-sexp
           "(foo \"bar
boo
Xbaz
foo\"
 qux)"
           "foo \"bar
boo
Xbaz
foo\"
 qux")
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
  (t/check p/splice-sexp-killing-backward
           "(foo (let ((x 5)) X(sqrt n)) bar)"
           "(foo X(sqrt n) bar)")

  (t/check p/splice-sexp-killing-backward
           "(Xfoo bar)"
           "Xfoo bar")

  (t/check p/splice-sexp-killing-backward
           "X(foo bar)"
           "X(foo bar)")

  (t/check p/splice-sexp-killing-backward
           "  X(foo bar)"
           "  X(foo bar)")

  (t/check p/splice-sexp-killing-backward
           "  (foo bar)X"
           "  (foo bar)X")

  (t/check p/splice-sexp-killing-backward
           "(foo (let ((x 5)) \"hi Xworld\" (sqrt n)) bar)"
           "(foo X\"hi world\" (sqrt n) bar)")

  (t/check p/splice-sexp-killing-backward
           "(foo (let
  ((x 5))
     \"hi Xworld\"
 (sqrt n)) bar)"
           "(foo X\"hi world\"
 (sqrt n) bar)")
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
  (t/check p/splice-sexp-killing-forward
           "(foo (bar bazX qux zoo) hey)"
           "(foo bar bazX hey)")

  (t/check p/splice-sexp-killing-forward
           "(foo hey)X"
           "(foo hey)X")

  (t/check p/splice-sexp-killing-forward
           "X(foo hey)"
           "X(foo hey)")

  (t/check p/splice-sexp-killing-forward
           "(foo (bar \"hi\" bazX qux
 \"world\"
[inner] zoo) hey)"
           "(foo bar \"hi\" bazX hey)")
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
  (t/check p/raise-sexp
           "(foo (bar \"hello woXrld\" baz) qux)"
           "(foo X\"hello world\" qux)")

  (t/check p/raise-sexp
           "(dynamic-wind in (lambda () Xbody) out)"
           "(dynamic-wind in Xbody out)")

  (t/check p/raise-sexp
           "(dynamic-wind in (lambda ()
 [other]
 \"hi world\"
          Xbody other
siblings) out)"
           "(dynamic-wind in Xbody out)")

  (t/check p/raise-sexp
           "(dynamic-wind in Xbody out)"
           "Xbody")

  (t/check p/raise-sexp
           "     X    "
           "     X    ")
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
  (t/check p/forward-slurp-sexp
           "(foo (bar Xbaz) quux zot)"
           "(foo (bar Xbaz quux) zot)")

  (t/check p/forward-slurp-sexp
           "(a b ((cX d)) e f)"
           "(a b ((cX d) e) f)")

  (t/check p/forward-slurp-sexp
           "(a b ((cX d))
 e f)"
           "(a b ((cX d)
 e) f)")

  (t/check p/forward-slurp-sexp
           "(fXoo (bar baz) quux zot)"
           "(fXoo (bar baz) quux zot)")

  (t/check p/forward-slurp-sexp
           "X(foo (bar baz) quux zot)"
           "X(foo (bar baz) quux zot)")

  (t/check p/forward-slurp-sexp
           "(foo (bar bXaz) \"hi world\" zot)"
           "(foo (bar bXaz \"hi world\") zot)")

  (t/check p/forward-slurp-sexp
           "(foo \"hXi\" world quux)
   [some (complicated \"multi
line
thing\")] 0"
           "(foo \"hXi\" world quux
   [some (complicated \"multi
line
thing\")]) 0")

  (t/check p/forward-slurp-sexp "X" "X")
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
  (t/check p/forward-down
           "X(foo bar)"
           "(Xfoo bar)")

  (t/check p/forward-down
           "(Xfoo bar)"
           "(Xfoo bar)")

  (t/check p/forward-down
           "X \"foo\" (bar)"
           " \"Xfoo\" (bar)")

  (t/check p/forward-down
           "X baz (foo bar)"
           " baz (Xfoo bar)")

  (t/check p/forward-down
           "X baz
;; comment in the way
 (foo bar)"
           " baz
;; comment in the way
 (Xfoo bar)")
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
  (t/check p/backward-down
           "(foo bar)X"
           "(foo barX)")

  (t/check p/backward-down
           "(foo bar) X"
           "(foo barX) ")

  (t/check p/backward-down
           "(foo bar) baz X"
           "(foo barX) baz ")

  (t/check p/backward-down
           "(foo (baz qux) barX)"
           "(foo (baz quxX) bar)")

  (t/check p/backward-down
           "(foo (baz quxX) bar)"
           "(foo (baz quxX) bar)")

  (t/check p/backward-down
           "(foo (baz \"hi world\"quxX) bar)"
           "(foo (baz \"hi worldX\"qux) bar)")

  (t/check p/backward-down
           "(foo (baz \"hi worldX\"qux) bar)"
           "(foo (baz \"hi worldX\"qux) bar)")

  (t/check p/backward-down
           "(foo bar)
;; commentX"
           "(foo barX)
;; comment")

  (t/check p/backward-down
           "(foo bar)
;; comment

;; another comment
 X"
           "(foo barX)
;; comment

;; another comment
 ")
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
  (t/check p/backward-slurp-sexp
           "(foo (bar Xbaz) quux zot)"
           "((foo bar Xbaz) quux zot)")
  ;; slurp/barf (forms (like) these)
  (t/check p/backward-slurp-sexp
           "((foo bar Xbaz) quux zot)"
           "((foo bar Xbaz) quux zot)")

  (t/check p/backward-slurp-sexp
           "(foo bar baz \"hi worXld\" quux zot)"
           "(foo bar baz \"hi worXld\" quux zot)")

  (t/check p/backward-slurp-sexp ;; we don't move double-quotes
           "soy foo (bar baz \"hi worXld\" quux zot)"
           "soy (foo bar baz \"hi worXld\" quux zot)")

  (t/check p/backward-slurp-sexp
           "(foo) (bar (baz) qux) (zoXt)"
           "(foo) ((bar (baz) qux) zoXt)")

  (t/check p/backward-slurp-sexp
           "(foo) \"hi
big blue
world (!)\" (zoXt)"
           "(foo) (\"hi
big blue
world (!)\" zoXt)")

  (t/check p/backward-slurp-sexp
           "(\"bar baz hi worXld\" quux zot)"
           "(\"bar baz hi worXld\" quux zot)")
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
  (t/check p/forward-barf-sexp
           "(foo (baXr baz quux zot))"
           "(foo (baXr baz quux) zot)")

  (t/check p/forward-barf-sexp
           "(foo (baXr baz quux) zot)"
           "(foo (baXr baz) quux zot)")

  (t/check p/forward-barf-sexp
           "(foo (baXr baz) quux zot)"
           "(foo (baXr) baz quux zot)")

  (t/check p/forward-barf-sexp
           "(foo (baXr baz) quux zot)"
           "(foo (baXr) baz quux zot)")

  (t/check p/forward-barf-sexp
           "(foo (baXr) baz quux zot)"
           "(foo () baXr baz quux zot)")

  (t/check p/forward-barf-sexp
           "(foo ()baXr) baz quux zot"
           "(foo ()) baXr baz quux zot")

  (t/check p/forward-barf-sexp
           "(foo ())baXr baz quux zot"
           "(foo ())baXr baz quux zot")

  (t/check p/forward-barf-sexp
           "(foo (baXr ([hey] hi ho) \"hi world\") zoo)"
           "(foo (baXr ([hey] hi ho)) \"hi world\" zoo)")

  (t/check p/forward-barf-sexp
           "(foo (baXr \"hi world\" ([hey]
 hi
 ho
hoo)) zoo)"
           "(foo (baXr \"hi world\") ([hey]
 hi
 ho
hoo) zoo)")
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
  (t/check p/backward-barf-sexp
           "(foo (bar
    ;; comment
  bazzy
bazX quux zot))"
           "(foo bar
    ;; comment
  (bazzy
bazX quux zot))")
  (t/check p/backward-barf-sexp
           "(foo bar (baXz quux zot))"
           "(foo bar baXz (quux zot))")
  (t/check p/backward-barf-sexp
           "(foo bar (baXz
    ;; comment
 quux zot))"
           "(foo bar baXz
    ;; comment
 (quux zot))")
  (t/check p/backward-barf-sexp
           "(Xfoo bar)"
           "Xfoo (bar)")
  (t/check p/backward-barf-sexp
           "Xfoo (bar)"
           "Xfoo (bar)")
  (t/check p/backward-barf-sexp
           "foo (X)"
           "foo (X)")
  (t/check p/backward-barf-sexp
           "(foo (([hey {hi}]) foXo))"
           "(foo ([hey {hi}]) (foXo))")
  (t/check p/backward-barf-sexp
           "(foo (\"hi world[]\" ([hey {hi}]) foXo))"
           "(foo \"hi world[]\" (([hey {hi}]) foXo))")
  (t/check p/backward-barf-sexp
           "foo (  X  )"
           "foo (  X  )")
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
  (t/check p/split-sexp
           "(helloX world)"
           "(hello)X (world)")

  (t/check p/split-sexp
           "(hello
X
world)"
           "(hello)
X
(world)")
  (t/check p/split-sexp
           "(let [foo \"bar\"]Xdefn)"
           "(let [foo \"bar\"])X (defn)")
  (t/check p/split-sexp
           "(hello woXrld)"
           "(hello wo)X (rld)")
  (t/check p/split-sexp
           "\"helloX world\""
           "\"hello\"X \"world\"")
  (t/check p/split-sexp
           "\"hello woXrld\""
           "\"hello wo\"X \"rld\"")
  (t/check p/split-sexp
           "\"hello
big blue
nXot
small red
world\""
           "\"hello
big blue
n\"X \"ot
small red
world\"")
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
  (t/check p/join-sexps
           "(hello)X (world)"
           "(helloX world)")
  (t/check p/join-sexps
           "(foo)X [bar]"
           "(foo)X [bar]")
  (t/check p/join-sexps
           "(hello)  X    (world) "
           "(hello  X    world) ")
  (t/check p/join-sexps
           "(hello)  X
    (world) "
           "(hello  X
    world) ")
  (t/check p/join-sexps
           "(hello)

  X

 (world) "
           "(hello

  X

 world) ")
  (t/check p/join-sexps
           "(hello)

  X  (world) "
           "(hello

  X  world) ")
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
  (t/check p/reindent-defun
           "     (let [i 1]
                  (println \"i isX\" i)
         i)"
           "(let [i 1]
  (println \"i isX\" i)
  i)")
  (t/check p/reindent-defun
           "  X  (let [i 1] i)"
           "  X  (let [i 1] i)")
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
  (t/check p/forward-sexp
           "  X  (let [i 1]
 (do (foo 1)
     i)) (foo bar)"
           "    (let [i 1]
 (do (foo 1)
     i))X (foo bar)")
  (t/check p/forward-sexp
           "(let X[i 1] i)"
           "(let [i 1]X i)")
  (t/check p/forward-sexp
           "(foo X\"bar\" baz)"
           "(foo \"bar\"X baz)")
  (t/check p/forward-sexp
           "(foo Xbar) baz"
           "(foo barX) baz")
  (t/check p/forward-sexp
           "(foo barX) baz"
           "(foo barX) baz")
  (t/check p/forward-sexp
           "(foo X\"hi [1
 2
 \\\"big blue\\\"
 3] world\" bar)"
           "(foo \"hi [1
 2
 \\\"big blue\\\"
 3] world\"X bar)")
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
  (t/check p/backward-sexp
           "foo (let [i 1]
 (do (foo 1)
     i))X (foo bar)"
           "foo X(let [i 1]
 (do (foo 1)
     i)) (foo bar)")
  (t/check p/backward-sexp
           "(let [i 1]X i)"
           "(let X[i 1] i)")
  (t/check p/backward-sexp
           "(foo barX) baz"
           "(foo Xbar) baz")
  (t/check p/backward-sexp
           "(Xfoo bar) baz"
           "(Xfoo bar) baz")
  (t/check p/backward-sexp
           "(foo \"hi [1
 2
 \\\"big blue\\\"
 3] world\"X bar)"
           "(foo X\"hi [1
 2
 \\\"big blue\\\"
 3] world\" bar)") )

(defn ^:export run [] (run-tests))
