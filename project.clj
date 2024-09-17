(defproject paredit-cm "0.1.1"
  :description "paredit for codemirror"
  :url "https://github.com/achengs/paredit-cm"
  :license {:name "MIT License"
            :url  "https://opensource.org/licenses/MIT"}

  :min-lein-version "2.6.1"

  :dependencies [[org.clojure/clojure "1.12.0"]
                 [org.clojure/clojurescript "1.11.132"]
                 ;; [org.clojure/core.async "0.3.441"
                 ;;  :exclusions [org.clojure/tools.reader]]
                 [cljsjs/codemirror "5.65.16-0"]]

  :plugins [[lein-figwheel "0.5.20" :exclusions [org.clojure/clojure]]
            [lein-cljsbuild "1.1.8" :exclusions [[org.clojure/clojure]]]
            [refactor-nrepl "3.10.0"]
            [lein-ancient "1.0.0-RC3"]
            [lein-kibit "0.1.11" :exclusions [[org.clojure/clojure]
                                             [org.clojure/tools.cli]]]
            [jonase/eastwood "1.4.3"]
            [lein-bikeshed "0.5.2"]]

  :source-paths ["src"]

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"]

  :cljsbuild {:builds
              {:test
               {:source-paths ["src" "test"]
                :compiler     {:output-to     "resources/test/compiled.js"
                               :output-dir    "resources/test/js/compiled"
                               :optimizations :whitespace
                               :pretty-print  true}}
               :dev
               {:source-paths ["src" "test"]
                :figwheel     {:on-jsload "paredit-cm.test/run"
                               :open-urls ["http://localhost:3449/index.html"]}

                :compiler {:main                 paredit-cm.core
                           :asset-path           "compiled"
                           :output-to            "resources/public/compiled/paredit-cm.js"
                           :output-dir           "resources/public/compiled"
                           :source-map-timestamp true
                           :optimizations        :none
                           :preloads             [devtools.preload]}}
               :prod
               {:source-paths ["src"]
                :compiler     {:output-to     "resources/demo/js/paredit-cm.js"
                               :output-dir    "resources/demo/js"
                               :main          paredit-cm.core
                               :optimizations :advanced
                               :pretty-print  false}}}
              :test-commands {"test" ["phantomjs"
                                      "resources/test/test.js"
                                      "resources/test/test.html"]}}

  :figwheel {:css-dirs ["resources/public/css"]}

  :profiles {:dev {:dependencies [[binaryage/devtools "0.9.1"]
                                  [figwheel-sidecar "0.5.9"]
                                  [com.cemerick/piggieback "0.2.1"]]
                   :source-paths ["src" "dev"]
                   :repl-options {:init             (set! *print-length* 50)
                                  :nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}}})
