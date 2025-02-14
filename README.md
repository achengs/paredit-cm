# paredit-cm

[Paredit operations](https://emacswiki.org/emacs/PareditCheatsheet) for [CodeMirror](http://codemirror.net/).

## Online Demo

[Visit the online demo.](https://achengs.github.io/)

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
    <td>Shift Ctrl [</td>
    <td>&nbsp;&nbsp;&nbsp;</td>
    <td>Forward Barf</td>
    <td>Shift Ctrl ]</td>
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
    <td>Shift Ctrl &#92;</td>
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
    <td>Ctrl &#92;</td>
  </tr>
</table>

Bug reports are welcome.

## Customization

You can change the key shortcuts by editing your copy of
`resources/js/keymap-paredit-cm.js`

## Running the Tests

### From the command line
`lein fig:test`

## License

See [MIT License file](https://github.com/achengs/paredit-cm/blob/master/LICENSE).
