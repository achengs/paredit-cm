# paredit-cm

[![Build Status](https://travis-ci.org/achengs/paredit-cm.svg?branch=master)](https://travis-ci.org/achengs/paredit-cm)
[![Dependencies Status](https://jarkeeper.com/achengs/paredit-cm/status.svg)](https://jarkeeper.com/achengs/paredit-cm)
[![Clojars Project](https://img.shields.io/clojars/v/paredit-cm.svg)](https://clojars.org/paredit-cm)

All the Paredit operations from [EmacsWiki Paredit CheatSheet](https://emacswiki.org/emacs/PareditCheatsheet) for [CodeMirror](http://codemirror.net/).

`paredit-cm` is written in ClojureScript. It only parses code when asked to do an operation, and generally parses only as far as necessary. It relies on methods in CodeMirror, which in turn may change its behavior (i.e. what counts as a token, etc) depending on what kind of file it believes it's displaying.

## Demo

To run a local demo,
1. clone this repo
1. `lein cljsbuild once`
1. then visit `resources/public/index.html`

Note: some browsers interfere with the capture of many modifiers and combinations.

## Features / Keys

* Delimiters
    * Backspace, Delete, Ctrl-D handle these: `() {} [] ""`
    * Delimiters are created in pairs except when inside a string or comment or when the next character is escaped: `() {} [] ""`
    * Typing a closing delimiter moves past it after deleting any whitespace at the end of the current list.
    * Close round and newline: `Shift-Alt-0`
* Movement
    * Forward: `Ctrl-Alt-f`
    * Backward: `Ctrl-Alt-b`
    * Forward sexp: `Shift-Ctrl-f`
    * Backward sexp: `Shift-Ctrl-b`
    * Backward Up: `Ctrl-Alt-U`
    * Forward Down: `Ctrl-Alt-D`
    * Backward Down: `Ctrl-Alt-P`
    * Forward Up: `Ctrl-Alt-N`
* Barf / Slurp
    * Backward Barf: `Shift-Ctrl-[`
    * Forward Barf: `Shift-Ctrl-]`
    * Backward Slurp: `Shift-Ctrl-9`
    * Forward Slurp: `Shift-Ctrl-0`
* Splicing, etc
    * Splice: `Alt-s`
    * Splice Killing Backward: `Alt-Up`
    * Splice Killing Forward: `Alt-Down`
    * Wrap round: `Shift-Alt-9`
    * Raise sexp: `Alt-r`
    * Split sexp: `Shift-Alt-s`
    * Join sexps: `Shift-Alt-j`
* Others
    * Kill: `Ctrl-k`
    * Forward Kill Word: `Alt-d`
    * Backward Kill Word: `Alt-Backspace`
    * Quoting the next sexp: `Shift-Alt-"`
    * Comment DWIM: `Shift-Alt-;`
    * Indent Defun: `Alt-q`

Bug reports are definitely welcome.

## Customization

You can change the key shortcuts by editing your copy of
`resources/js/keymap-paredit-cm.js`

## Running the Tests

### From the command line
`lein cljsbuild test`

### With figwheel and emacs
* Jack in
* When your browser loads `index.html`, show the javascipt console
* Edit code or tests. The tests should run.

## License

See [MIT License file](https://github.com/achengs/paredit-cm/blob/master/LICENSE).
