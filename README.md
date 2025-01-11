# paredit-cm

[![Build Status](https://travis-ci.org/achengs/paredit-cm.svg?branch=master)](https://travis-ci.org/achengs/paredit-cm)
[![Dependencies Status](https://jarkeeper.com/achengs/paredit-cm/status.svg)](https://jarkeeper.com/achengs/paredit-cm)
[![Clojars Project](https://img.shields.io/clojars/v/paredit-cm.svg)](https://clojars.org/paredit-cm)

All the Paredit operations from [EmacsWiki Paredit CheatSheet](https://emacswiki.org/emacs/PareditCheatsheet) for [CodeMirror](http://codemirror.net/).

`paredit-cm` is written in ClojureScript. It only parses code when asked to do an operation, and generally parses only as far as necessary. It relies on methods in CodeMirror, which in turn may change its behavior (i.e. what counts as a token, etc) depending on what kind of file it believes it's displaying.

## Demo

1. git clone git@github.com:achengs/paredit-cm.git
1. cd paredit-cm
1. lein fig:build
1. Wait for your browser to load http://localhost:9500/

Note: your browser may interfere with the capture of many modifiers and combinations.

## Features / Keys

<table border="0">
  <tr>
    <th style="background-color: black; color: white;">Command</th>
    <th style="background-color: black; color: white;">Shortcut</th>
    <th style="background-color: black; color: white;">&nbsp;&nbsp;&nbsp;</th>
    <th style="background-color: black; color: white;">Command</th>
    <th style="background-color: black; color: white;">Shortcut</th>
  </tr>
  <tr>
    <td>Backward</td>
    <td>Ctrl 1</td>
    <td>&nbsp;&nbsp;&nbsp;</td>
    <td>Forward</td>
    <td>Ctrl 2</td>
  </tr>
  <tr>
    <td>Backward sexp</td>
    <td>Ctrl 3</td>
    <td>&nbsp;&nbsp;&nbsp;</td>
    <td>Forward sexp</td>
    <td>Ctrl 4</td>
  </tr>
  <tr>
    <td>Backward Up</td>
    <td>Ctrl 5</td>
    <td>&nbsp;&nbsp;&nbsp;</td>
    <td>Forward Up</td>
    <td>Ctrl 6</td>
  </tr>
  <tr>
    <td>Backward Down</td>
    <td>Ctrl 7</td>
    <td>&nbsp;&nbsp;&nbsp;</td>
    <td>Forward Down</td>
    <td>Ctrl 8</td>
  </tr>
  <tr>
    <td>Backward Barf</td>
    <td>Shift Ctrl \[</td>
    <td>&nbsp;&nbsp;&nbsp;</td>
    <td>Forward Barf</td>
    <td>Shift Ctrl \]</td>
  </tr>
  <tr>
    <td>Backward Slurp</td>
    <td>Shift Ctrl 9</td>
    <td>&nbsp;&nbsp;&nbsp;</td>
    <td>Forward Slurp</td>
    <td>Shift Ctrl 0</td>
  </tr>
</table>

<table border="0">
  <tr>
    <th style="background-color: black; color: white;">Command</th>
    <th style="background-color: black; color: white;">Shortcut</th>
    <th style="background-color: black; color: white;">&nbsp;&nbsp;&nbsp;</th>
    <th style="background-color: black; color: white;">Command</th>
    <th style="background-color: black; color: white;">Shortcut</th>
    <th style="background-color: black; color: white;">&nbsp;&nbsp;&nbsp;</th>
    <th style="background-color: black; color: white;">Command</th>
    <th style="background-color: black; color: white;">Shortcut</th>
  </tr>
  <tr>
    <td>Splice Killing Backward</td>
    <td>Shift Ctrl 1</td>
    <td>&nbsp;&nbsp;&nbsp;</td>
    <td>Splice</td>
    <td>Shift Ctrl 2</td>
    <td>&nbsp;&nbsp;&nbsp;</td>
    <td>Splice Killing Forward</td>
    <td>Shift Ctrl 3</td>
  </tr>
  <tr>
    <td>Raise sexp</td>
    <td>Shift Ctrl 4</td>
    <td>&nbsp;&nbsp;&nbsp;</td>
    <td>Split sexp</td>
    <td>Shift Ctrl 5</td>
    <td>&nbsp;&nbsp;&nbsp;</td>
    <td>Join sexps</td>
    <td>Shift Ctrl 6</td>
  </tr>
  <tr>
    <td>Backward Kill Word</td>
    <td>Ctrl 9</td>
    <td>&nbsp;&nbsp;&nbsp;</td>
    <td>Kill</td>
    <td>Ctrl 0</td>
    <td>&nbsp;&nbsp;&nbsp;</td>
    <td>Forward Kill Word</td>
    <td>Ctrl -</td>
  </tr>
  <tr>
    <td>Indent Defun</td>
    <td>Shift Ctrl \\</td>
    <td>&nbsp;&nbsp;&nbsp;</td>
    <td>Meta Double Quote</td>
    <td>Shift Alt "</td>
    <td>&nbsp;&nbsp;&nbsp;</td>
    <td>Comment DWIM</td>
    <td>Shift Alt ;</td>
  </tr>
  <tr>
    <td>Wrap round</td>
    <td>Shift Alt 9</td>
    <td>&nbsp;&nbsp;&nbsp;</td>
    <td>Close round and newline</td>
    <td>Shift Alt 0</td>
    <td>&nbsp;&nbsp;&nbsp;</td>
    <td>Trim Sexp</td>
    <td>Ctrl \\</td>
  </tr>
</table>

Bug reports are definitely welcome.

## Customization

You can change the key shortcuts by editing your copy of
`resources/js/keymap-paredit-cm.js`

## Running the Tests

### From the command line
`lein fig:test`

### With figwheel and emacs
* Jack in
* When your browser loads `index.html`, show the javascipt console
* Edit code or tests. The tests should run.

## License

See [MIT License file](https://github.com/achengs/paredit-cm/blob/master/LICENSE).
