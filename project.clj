(defproject paredit-cm "0.1.0-SNAPSHOT"
  :description "paredit for codemirror"
  :url "https://github.com/achengs/paredit-cm"
            :license {:name "MIT License"
                      :url "https://opensource.org/licenses/MIT"}

  :min-lein-version "2.6.1"

  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.473"]
                 [org.clojure/core.async "0.2.395"
                  :exclusions [org.clojure/tools.reader]]]

  :plugins [[lein-figwheel "0.5.9" :exclusions [org.clojure/clojure]]
            [lein-cljsbuild "1.1.5" :exclusions [[org.clojure/clojure]]]
            ;;[refactor-nrepl "2.2.0"]
            ;; [lein-ancient "0.6.10"]
            ;; [lein-kibit "0.1.3" :exclusions [[org.clojure/clojure]
            ;;                                  [org.clojure/tools.cli]]]
            ;; [jonase/eastwood "0.2.3"]
            ;; [lein-bikeshed "0.4.1"]
            ]

  :source-paths ["src"]

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"]

  :cljsbuild {:builds
              [{:id "test"
                :source-paths ["src" "test"]
                :compiler {:output-to  "resources/test/compiled.js"
                           :output-dir "resources/test/js/compiled"
                           :optimizations :whitespace
                           :pretty-print true}}
               {:id "dev"
                :source-paths ["src" "test"]
                :figwheel {:on-jsload "paredit-cm.test/run"
                           :open-urls ["http://localhost:3449/index.html"]}

                :compiler {:main paredit-cm.core
                           :asset-path "compiled"
                           :output-to  "resources/public/compiled/paredit-cm.js"
                           :output-dir "resources/public/compiled"
                           :source-map-timestamp true
                           :optimizations :none
                           :preloads [devtools.preload]}}
               {:id "min"
                :source-paths ["src"]
                :compiler {:output-to "resources/public/compiled/paredit-cm.js"
                           :main paredit-cm.core
                           :optimizations :advanced
                           :pretty-print false}}]
              :test-commands {"test" ["phantomjs"
                                      "resources/test/test.js"
                                      "resources/test/test.html"]}}

  :figwheel {:css-dirs ["resources/public/css"]}

  :profiles {:dev {:dependencies [[binaryage/devtools "0.9.1"]
                                  [figwheel-sidecar "0.5.9"]
                                  [com.cemerick/piggieback "0.2.1"]]
                   :source-paths ["src" "dev"]
                   :repl-options {:init (set! *print-length* 50)
                                  :nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}}})
