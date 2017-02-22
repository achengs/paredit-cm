(function() {
  // Modifiers in this order: Shift-, Cmd-, Ctrl-, and Alt-
  // Alt- does not behave properly a modifier on linux...
  CodeMirror.keyMap.paredit_cm = {
      "Backspace"      : paredit_cm.core.backward_delete,
      "Delete"         : paredit_cm.core.forward_delete,
    "Shift-9"        : paredit_cm.core.open_round,
    "Shift-0"        : paredit_cm.core.close_round,
    "Shift-Alt-0"    : paredit_cm.core.close_round_and_newline,
    "["              : paredit_cm.core.open_square,
    "]"              : paredit_cm.core.close_square,
    "Shift-["        : paredit_cm.core.open_brace,
    "Shift-]"        : paredit_cm.core.close_brace,
    "Shift-Alt-'"    : paredit_cm.core.meta_doublequote,
    // paredit-backslash naturally part of CodeMirror.
    "Shift-Alt-;"    : paredit_cm.core.comment_dwim,
    // paredit-newline naturally part of CodeMirror.

    // seems to fall through to emacs kill instead of calling paredi's
    "Ctrl-k"         : paredit_cm.core.kill,

    "Alt-d"          : paredit_cm.core.forward_kill_word,//
    "Ctrl-Delete"    : paredit_cm.core.forward_kill_word,
    "Ctrl-Backspace" : paredit_cm.core.backward_kill_word,
    "Alt-Backspace"  : paredit_cm.core.backward_kill_word,//

    // alt misbehaving?
    "Ctrl-Alt-f"     : paredit_cm.core.forward,
    "Ctrl-Alt-b"     : paredit_cm.core.backward,
    "Ctrl-Alt-u"     : paredit_cm.core.backward_up,
    "Ctrl-Alt-d"     : paredit_cm.core.forward_down,
    "Ctrl-Alt-p"     : paredit_cm.core.backward_down,
    "Ctrl-Alt-n"     : paredit_cm.core.forward_up,
    "Shift-Ctrl-f"   : paredit_cm.core.forward_sexp,
    "Shift-Ctrl-b"   : paredit_cm.core.backward_sexp,
    "Shift-Alt-9"    : paredit_cm.core.wrap_round,
    "Alt-s"          : paredit_cm.core.splice_sexp,
    "Alt-Up"         : paredit_cm.core.splice_sexp_killing_backward,
    "Alt-Down"       : paredit_cm.core.splice_sexp_killing_forward,
    "Alt-r"          : paredit_cm.core.raise_sexp,
    "Shift-Ctrl-0"   : paredit_cm.core.forward_slurp_sexp,
    "Shift-Ctrl-]"   : paredit_cm.core.forward_barf_sexp,
    "Shift-Ctrl-9"   : paredit_cm.core.backward_slurp_sexp,
    "Shift-Ctrl-["   : paredit_cm.core.backward_barf_sexp,
    "Shift-Alt-s"    : paredit_cm.core.split_sexp,
    "Shift-Alt-j"    : paredit_cm.core.join_sexps,
    "Alt-q"          : paredit_cm.core.reindent_defun,
    fallthrough: ["basic", "emacs"]
  };
})();
