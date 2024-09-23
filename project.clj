(defproject paredit-cm "0.1.2"
  :description "paredit for codemirror"
  :url "https://github.com/achengs/paredit-cm"
  :license {:name "MIT License"
            :url  "https://opensource.org/licenses/MIT"}

  :min-lein-version "2.7.1"

  :dependencies [[org.clojure/clojure "1.10.0"]
                 [org.clojure/clojurescript "1.11.4"]
                 [cljsjs/codemirror "5.65.16-0"]]

  :source-paths ["src"]

  :aliases {"fig:build" ["trampoline" "run" "-m" "figwheel.main" "-b" "dev" "-r"]
            "fig:min"   ["run" "-m" "figwheel.main" "-O" "advanced" "-bo" "dev"]
            "fig:test"  ["run" "-m" "figwheel.main" "-co" "test.cljs.edn" "-m" "paredit-cm.test-runner"]}

  :profiles {:dev {:dependencies [[com.bhauman/figwheel-main "0.2.17"]
                                  [org.slf4j/slf4j-nop "1.7.30"]
                                  [com.bhauman/rebel-readline-cljs "0.1.4"]]

                   :resource-paths ["target"]
                   ;; need to add the compiled assets to the :clean-targets
                   :clean-targets  ^{:protect false} ["target"]}})
