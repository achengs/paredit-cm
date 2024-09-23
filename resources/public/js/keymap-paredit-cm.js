(function() {
  // Modifiers in this order: Shift-, Cmd-, Ctrl-, and Alt-
  // Alt- does not behave properly a modifier on linux...
  CodeMirror.keyMap.paredit_cm = {
      "Ctrl-1"       : paredit_cm.core.info,
      "Shift-9"       : paredit_cm.core.open_round,
      "Shift-0"       : paredit_cm.core.close_round,
      "Shift-Alt-0"   : paredit_cm.core.close_round_and_newline,
      "["             : paredit_cm.core.open_square,
      "]"             : paredit_cm.core.close_square,
      "Shift-["       : paredit_cm.core.open_brace,
      "Shift-]"       : paredit_cm.core.close_brace,
      "Shift-Alt-'"   : paredit_cm.core.meta_doublequote,
      "Shift-'"       : paredit_cm.core.doublequote,
      "Shift-Alt-;"   : paredit_cm.core.comment_dwim,
      "Delete"        : paredit_cm.core.forward_delete,
      "Backspace"     : paredit_cm.core.backward_delete,
      //"Ctrl-1"        : paredit_cm.core.backward,
      "Ctrl-2"        : paredit_cm.core.forward,
      "Ctrl-3"        : paredit_cm.core.backward_sexp,
      "Ctrl-4"        : paredit_cm.core.forward_sexp,
      "Ctrl-5"        : paredit_cm.core.backward_up,
      "Ctrl-6"        : paredit_cm.core.forward_down,
      "Ctrl-7"        : paredit_cm.core.backward_down,
      "Ctrl-8"        : paredit_cm.core.forward_up,
      "Ctrl-9"        : paredit_cm.core.backward_kill_word,
      "Ctrl-0"        : paredit_cm.core.kill,
      "Ctrl--"        : paredit_cm.core.forward_kill_word,
      "Shift-Alt-9"   : paredit_cm.core.wrap_round,
      "Shift-Ctrl-1"  : paredit_cm.core.splice_sexp_killing_backward,
      "Shift-Ctrl-2"  : paredit_cm.core.splice_sexp,
      "Shift-Ctrl-3"  : paredit_cm.core.splice_sexp_killing_forward,
      "Shift-Ctrl-4"  : paredit_cm.core.raise_sexp,
      "Shift-Ctrl-0"  : paredit_cm.core.forward_slurp_sexp,
      "Shift-Ctrl-]"  : paredit_cm.core.forward_barf_sexp,
      "Shift-Ctrl-9"  : paredit_cm.core.backward_slurp_sexp,
      "Shift-Ctrl-["  : paredit_cm.core.backward_barf_sexp,
      "Shift-Ctrl-5"  : paredit_cm.core.split_sexp,
      "Shift-Ctrl-6"  : paredit_cm.core.join_sexps,
      "Shift-Ctrl-\\" : paredit_cm.core.reindent_defun,
      fallthrough: ["basic", "emacs"]

      // paredit-newline naturally part of CodeMirror.
      // paredit-backslash naturally part of CodeMirror.
  };
})();
