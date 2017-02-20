# paredit-cm

[![Build Status](https://travis-ci.org/achengs/paredit-cm.svg?branch=master)](https://travis-ci.org/achengs/paredit-cm)

All the Paredit operations from [EmacsWiki Paredit CheatSheet](https://emacswiki.org/emacs/PareditCheatsheet) for [CodeMirror](http://codemirror.net/).

paredit-cm is written in ClojureScript. It only parses code when asked to do an operation, and only parses as far as it needs to. It relies on methods in CodeMirror, which in turn may change its behavior (i.e. what counts as a token, etc) depending on what kind of file it believes it's displaying.

## Demo

[Here is a page that hosts a demo.](http://htmlpreview.github.com/?https://github.com/achengs/paredit-cm/blob/master/resources/public/index.html) Note though, that your browser may intercept some of the key modifiers and combinations.

You might have to reload the demo page to get the source code to load inside the CodeMirror.

## Features / Keys

* Delimiters
    * Backspace, Delete, Ctrl-D handle these: () {} [] ""
    * Delimiters are created in pairs except when inside a string or comment or when the next character is escaped: () {} [] ""
    * Typing a closing delimiter moves past it after deleting any whitespace at the end of the current list.
    * Close round and newline: Shift-Alt-0
* Movement
    * Forward: Ctrl-Alt-f
    * Backward: Ctrl-Alt-b
    * Forward sexp: Shift-Ctrl-f
    * Backward sexp: Shift-Ctrl-b
    * Backward Up: Ctrl-Alt-U
    * Forward Down: Ctrl-Alt-D
    * Backward Down: Ctrl-Alt-P
    * Forward Up: Ctrl-Alt-N
* Barf / Slurp
    * Backward Barf: Shift-Ctrl-[
    * Forward Barf: Shift-Ctrl-]
    * Backward Slurp: Shift-Ctrl-9
    * Forward Slurp: Shift-Ctrl-0
* Splicing, etc
    * Splice: Alt-s
    * Splice Killing Backward: Alt-Up
    * Splice Killing Forward: Alt-Down
    * Wrap round: Shift-Alt-9
    * Raise sexp: Alt-r
    * Split sexp: Shift-Alt-s
    * Join sexps: Shift-Alt-j
* Others
    * Kill: Ctrl-k
    * Forward Kill Word: Alt-d
    * Backward Kill Word: Alt-Backspace
    * Quoting the next sexp: Shift-Alt-"
    * Comment DWIM: Shift-Alt-;
    * Indent Defun: Alt-q

Bug reports are definitely welcome.

## Customization

You can change the key shortcuts by editing your copy of
resources/js/keymap-paredit-cm.js

## Running the Tests

lein cljsbuild test

## License

See [MIT License file](https://github.com/achengs/paredit-cm/blob/master/LICENSE).
