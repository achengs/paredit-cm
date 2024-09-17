// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('paredit_cm.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljsjs.codemirror');
goog.require('cljsjs.codemirror.mode.clojure');
goog.require('cljsjs.codemirror.keymap.emacs');
cljs.core.enable_console_print_BANG_.call(null);
paredit_cm.core.openers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["(",null,"{",null,"[",null], null), null);
paredit_cm.core.closers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["]",null,")",null,"}",null], null), null);
paredit_cm.core.pair = new cljs.core.PersistentArrayMap(null, 7, ["(",")","[","]","{","}","\"","\"",")","(","]","[","}","{"], null);
/**
 * true if the two strings are a matching open/close pair 
 */
paredit_cm.core.pair_QMARK_ = (function paredit_cm$core$pair_QMARK_(s1,s2){
return cljs.core._EQ_.call(null,paredit_cm.core.pair.call(null,s1),s2);
});
paredit_cm.core.opener_QMARK_ = (function paredit_cm$core$opener_QMARK_(s){
return cljs.core.contains_QMARK_.call(null,paredit_cm.core.openers,s);
});
paredit_cm.core.closer_QMARK_ = (function paredit_cm$core$closer_QMARK_(s){
return cljs.core.contains_QMARK_.call(null,paredit_cm.core.closers,s);
});
paredit_cm.core.is_bracket_type_QMARK_ = (function paredit_cm$core$is_bracket_type_QMARK_(t){
var and__5000__auto__ = t;
if(cljs.core.truth_(and__5000__auto__)){
return clojure.string.starts_with_QMARK_.call(null,t,"bracket");
} else {
return and__5000__auto__;
}
});
/**
 * returns the number of characters in the code mirror instance
 */
paredit_cm.core.char_count = (function paredit_cm$core$char_count(cm){
return cljs.core.count.call(null,cm.getValue());
});
/**
 * get cur, the position of the cursor
 */
paredit_cm.core.cursor = (function paredit_cm$core$cursor(var_args){
var G__13098 = arguments.length;
switch (G__13098) {
case 1:
return paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return cm.getCursor();
}));

(paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2 = (function (cm,i){
return cm.posFromIndex(i);
}));

(paredit_cm.core.cursor.cljs$lang$maxFixedArity = 2);

/**
 * get the index i for the cursor's position
 */
paredit_cm.core.index = (function paredit_cm$core$index(var_args){
var G__13101 = arguments.length;
switch (G__13101) {
case 1:
return paredit_cm.core.index.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.index.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(paredit_cm.core.index.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.index.call(null,cm,paredit_cm.core.cursor.call(null,cm));
}));

(paredit_cm.core.index.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
if(cljs.core.truth_(cur)){
return cm.indexFromPos(cur);
} else {
return null;
}
}));

(paredit_cm.core.index.cljs$lang$maxFixedArity = 2);

/**
 * true if at beginning of file
 */
paredit_cm.core.bof_QMARK_ = (function paredit_cm$core$bof_QMARK_(cm,cur){
return (paredit_cm.core.index.call(null,cm,cur) === (0));
});
/**
 * true if at end of file
 */
paredit_cm.core.eof_QMARK_ = (function paredit_cm$core$eof_QMARK_(cm,cur){
return cljs.core._EQ_.call(null,paredit_cm.core.index.call(null,cm,cur),paredit_cm.core.char_count.call(null,cm));
});
/**
 * get token at cursor
 */
paredit_cm.core.token = (function paredit_cm$core$token(cm,cur){
return cm.getTokenAt(cur,true);
});
/**
 * get the type at the current cursor.
 */
paredit_cm.core.get_type = (function paredit_cm$core$get_type(var_args){
var G__13104 = arguments.length;
switch (G__13104) {
case 1:
return paredit_cm.core.get_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.get_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(paredit_cm.core.get_type.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.get_type.call(null,cm,paredit_cm.core.cursor.call(null,cm));
}));

(paredit_cm.core.get_type.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
return paredit_cm.core.token.call(null,cm,cur).type;
}));

(paredit_cm.core.get_type.cljs$lang$maxFixedArity = 2);

/**
 * gets the string of the current token
 */
paredit_cm.core.get_string = (function paredit_cm$core$get_string(var_args){
var G__13107 = arguments.length;
switch (G__13107) {
case 1:
return paredit_cm.core.get_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.get_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(paredit_cm.core.get_string.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.get_string.call(null,cm,paredit_cm.core.cursor.call(null,cm));
}));

(paredit_cm.core.get_string.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
if(cljs.core.truth_(cur)){
return paredit_cm.core.token.call(null,cm,cur).string;
} else {
return null;
}
}));

(paredit_cm.core.get_string.cljs$lang$maxFixedArity = 2);

/**
 * gets the length of the current line
 */
paredit_cm.core.line_length = (function paredit_cm$core$line_length(var_args){
var G__13110 = arguments.length;
switch (G__13110) {
case 1:
return paredit_cm.core.line_length.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.line_length.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(paredit_cm.core.line_length.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.line_length.call(null,cm,paredit_cm.core.cursor.call(null,cm));
}));

(paredit_cm.core.line_length.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
if(cljs.core.truth_(cur)){
return cljs.core.count.call(null,cm.getLine(cur.line));
} else {
return null;
}
}));

(paredit_cm.core.line_length.cljs$lang$maxFixedArity = 2);

/**
 * returns the last token of a line
 */
paredit_cm.core.last_token = (function paredit_cm$core$last_token(cm,cur){
return cljs.core.last.call(null,cm.getLineTokens(cur.line));
});
/**
 * returns the last cursor of a line
 */
paredit_cm.core.last_cur = (function paredit_cm$core$last_cur(var_args){
var G__13113 = arguments.length;
switch (G__13113) {
case 1:
return paredit_cm.core.last_cur.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.last_cur.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(paredit_cm.core.last_cur.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.last_cur.call(null,cm,paredit_cm.core.cursor.call(null,cm));
}));

(paredit_cm.core.last_cur.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
var end = paredit_cm.core.last_token.call(null,cm,cur).end;
var diff = (end - cur.ch);
return paredit_cm.core.cursor.call(null,cm,(diff + paredit_cm.core.index.call(null,cm,cur)));
}));

(paredit_cm.core.last_cur.cljs$lang$maxFixedArity = 2);

/**
 * make info from CodeMirror more conveniently accessed by our code.
 *   we'll use destructuring and just name what we rant. hypothesizing
 *   that performance hit won't be that bad.
 */
paredit_cm.core.get_info = (function paredit_cm$core$get_info(var_args){
var G__13116 = arguments.length;
switch (G__13116) {
case 1:
return paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.get_info.call(null,cm,paredit_cm.core.cursor.call(null,cm));
}));

(paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
if(cljs.core.truth_(cur)){
var tok = paredit_cm.core.token.call(null,cm,cur);
var eof = paredit_cm.core.eof_QMARK_.call(null,cm,cur);
var bof = paredit_cm.core.bof_QMARK_.call(null,cm,cur);
var i = paredit_cm.core.index.call(null,cm,cur);
var left_cur = ((bof)?null:paredit_cm.core.cursor.call(null,cm,(i - (1))));
var right_cur = ((eof)?null:paredit_cm.core.cursor.call(null,cm,(i + (1))));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"bof","bof",-1065437469),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"cur","cur",1153190599),new cljs.core.Keyword(null,"right-char","right-char",-1500850071),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"left-char","left-char",509989355),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"ch","ch",-554717905),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"tok","tok",2091731382),new cljs.core.Keyword(null,"left-cur","left-cur",2010287159),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"eof","eof",-489063237),new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.Keyword(null,"right-cur","right-cur",1689901919)],[bof,(tok.state.indentStack == null),cur,((eof)?null:cm.getRange(cur,right_cur)),tok.state.mode,tok.start,((bof)?null:cm.getRange(left_cur,cur)),tok.type,tok.string,cur.ch,cur.line,tok,left_cur,tok.end,eof,i,right_cur]);
} else {
return null;
}
}));

(paredit_cm.core.get_info.cljs$lang$maxFixedArity = 2);

/**
 * true if the type is comment or string. a lot of editing behavior (like
 *   movement and deletion) is similar when you are in a string or in a comment, so
 *   often this is the predicate for that behavior.
 */
paredit_cm.core.comment_or_string_QMARK_ = (function paredit_cm$core$comment_or_string_QMARK_(type){
return ((cljs.core._EQ_.call(null,type,"comment")) || (cljs.core._EQ_.call(null,type,"string")));
});
/**
 * indent the current line
 */
paredit_cm.core.indent_line = (function paredit_cm$core$indent_line(cm){
return cm.indentLine(paredit_cm.core.cursor.call(null,cm).line);
});
/**
 * returns true if backslash is to the left and cursor is on an escaped char
 */
paredit_cm.core.in_escaped_char_QMARK_ = (function paredit_cm$core$in_escaped_char_QMARK_(var_args){
var G__13119 = arguments.length;
switch (G__13119) {
case 2:
return paredit_cm.core.in_escaped_char_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return paredit_cm.core.in_escaped_char_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(paredit_cm.core.in_escaped_char_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
return paredit_cm.core.in_escaped_char_QMARK_.call(null,cm,cur,(0));
}));

(paredit_cm.core.in_escaped_char_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (cm,cur,offset){
var map__13120 = paredit_cm.core.get_info.call(null,cm,cur);
var map__13120__$1 = cljs.core.__destructure_map.call(null,map__13120);
var ch = cljs.core.get.call(null,map__13120__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var start = cljs.core.get.call(null,map__13120__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__13120__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var type = cljs.core.get.call(null,map__13120__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return ((cljs.core._EQ_.call(null,start,((ch - (1)) + offset))) && (((cljs.core._EQ_.call(null,end,((ch + (1)) + offset))) && (cljs.core._EQ_.call(null,type,"string-2")))));
}));

(paredit_cm.core.in_escaped_char_QMARK_.cljs$lang$maxFixedArity = 3);

/**
 * returns true if an escaped char and its backslash are to the left
 */
paredit_cm.core.escaped_char_to_left_QMARK_ = (function paredit_cm$core$escaped_char_to_left_QMARK_(cm,cur){
return paredit_cm.core.in_escaped_char_QMARK_.call(null,cm,cur,(-1));
});
/**
 * returns true if an escaped char and its backslash is to the right
 */
paredit_cm.core.escaped_char_to_right_QMARK_ = (function paredit_cm$core$escaped_char_to_right_QMARK_(cm,cur){
return paredit_cm.core.in_escaped_char_QMARK_.call(null,cm,cur,(1));
});
/**
 * insert text at current cursor. move cursor to the end of inserted text minus
 *   optional offset. the offset is for moving the cursor immediately after the
 *   insert and before returning. example: inserting a pair of brackets and placing
 *   the cursor inside the pair. this returns the new cursor.
 */
paredit_cm.core.insert = (function paredit_cm$core$insert(var_args){
var G__13123 = arguments.length;
switch (G__13123) {
case 2:
return paredit_cm.core.insert.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return paredit_cm.core.insert.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return paredit_cm.core.insert.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(paredit_cm.core.insert.cljs$core$IFn$_invoke$arity$2 = (function (cm,text){
return paredit_cm.core.insert.call(null,cm,text,(0));
}));

(paredit_cm.core.insert.cljs$core$IFn$_invoke$arity$3 = (function (cm,text,offset){
return paredit_cm.core.insert.call(null,cm,text,offset,paredit_cm.core.cursor.call(null,cm));
}));

(paredit_cm.core.insert.cljs$core$IFn$_invoke$arity$4 = (function (cm,text,offset,cur){
var map__13124 = paredit_cm.core.get_info.call(null,cm,cur);
var map__13124__$1 = cljs.core.__destructure_map.call(null,map__13124);
var line = cljs.core.get.call(null,map__13124__$1,new cljs.core.Keyword(null,"line","line",212345235));
var ch = cljs.core.get.call(null,map__13124__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
cm.replaceRange(text,cur);

cm.setCursor(line,((ch + cljs.core.count.call(null,text)) + offset));

return paredit_cm.core.cursor.call(null,cm);
}));

(paredit_cm.core.insert.cljs$lang$maxFixedArity = 4);

/**
 * paredit-open-round exposed for keymap. unlike traditional emacs paredit, this
 *   supports brackets [] {} () but not double-quote
 */
paredit_cm.core.open_round = (function paredit_cm$core$open_round(var_args){
var G__13127 = arguments.length;
switch (G__13127) {
case 1:
return paredit_cm.core.open_round.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.open_round.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('paredit_cm.core.open_round', paredit_cm.core.open_round);

(paredit_cm.core.open_round.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.open_round.call(null,cm,"(");
}));

(paredit_cm.core.open_round.cljs$core$IFn$_invoke$arity$2 = (function (cm,c){
var map__13128 = paredit_cm.core.get_info.call(null,cm);
var map__13128__$1 = cljs.core.__destructure_map.call(null,map__13128);
var type = cljs.core.get.call(null,map__13128__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var left_char = cljs.core.get.call(null,map__13128__$1,new cljs.core.Keyword(null,"left-char","left-char",509989355));
var right_char = cljs.core.get.call(null,map__13128__$1,new cljs.core.Keyword(null,"right-char","right-char",-1500850071));
if(cljs.core._EQ_.call(null,"\\",left_char)){
return paredit_cm.core.insert.call(null,cm,c);
} else {
if(paredit_cm.core.comment_or_string_QMARK_.call(null,type)){
return paredit_cm.core.insert.call(null,cm,c);
} else {
var need_left_padding = ((cljs.core.not_EQ_.call(null," ",left_char)) && ((!(paredit_cm.core.opener_QMARK_.call(null,left_char)))));
var need_right_padding = ((cljs.core.not_EQ_.call(null," ",right_char)) && ((!(paredit_cm.core.closer_QMARK_.call(null,right_char)))));
return paredit_cm.core.insert.call(null,cm,[((need_left_padding)?" ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),cljs.core.str.cljs$core$IFn$_invoke$arity$1(paredit_cm.core.pair.call(null,c)),((need_right_padding)?" ":null)].join(''),((need_right_padding)?(-2):(-1)));

}
}
}));

(paredit_cm.core.open_round.cljs$lang$maxFixedArity = 2);

/**
 * open curly brace with matching close brace
 */
paredit_cm.core.open_brace = (function paredit_cm$core$open_brace(cm){
return paredit_cm.core.open_round.call(null,cm,"{");
});
goog.exportSymbol('paredit_cm.core.open_brace', paredit_cm.core.open_brace);
/**
 * finds the *parent* closing bracket. behavior when used with skip: pushes
 *   opening brackets that appear along the way on a stack. closing brackets pop
 *   them off. stops when encountering a closing bracket while the stack is empty.
 *   assuming the cm has matched brackets for now. moves to the right.
 */
paredit_cm.core.parent_closer_sp = (function paredit_cm$core$parent_closer_sp(cm,cur,state){
var map__13130 = paredit_cm.core.get_info.call(null,cm,cur);
var map__13130__$1 = cljs.core.__destructure_map.call(null,map__13130);
var string = cljs.core.get.call(null,map__13130__$1,new cljs.core.Keyword(null,"string","string",-1989541586));
var type = cljs.core.get.call(null,map__13130__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var top = cljs.core.get.call(null,map__13130__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
var eof = cljs.core.get.call(null,map__13130__$1,new cljs.core.Keyword(null,"eof","eof",-489063237));
if(cljs.core.truth_((function (){var and__5000__auto__ = paredit_cm.core.is_bracket_type_QMARK_.call(null,type);
if(cljs.core.truth_(and__5000__auto__)){
return paredit_cm.core.opener_QMARK_.call(null,string);
} else {
return and__5000__auto__;
}
})())){
return (state + (1));
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = paredit_cm.core.is_bracket_type_QMARK_.call(null,type);
if(cljs.core.truth_(and__5000__auto__)){
return ((paredit_cm.core.closer_QMARK_.call(null,string)) && ((state === (0))));
} else {
return and__5000__auto__;
}
})())){
return new cljs.core.Keyword(null,"yes","yes",182838819);
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = paredit_cm.core.is_bracket_type_QMARK_.call(null,type);
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = paredit_cm.core.closer_QMARK_.call(null,string);
if(and__5000__auto____$1){
var and__5000__auto____$2 = cljs.core.not_EQ_.call(null,(0),state);
if(and__5000__auto____$2){
return eof;
} else {
return and__5000__auto____$2;
}
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})())){
return new cljs.core.Keyword(null,"eof","eof",-489063237);
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = paredit_cm.core.is_bracket_type_QMARK_.call(null,type);
if(cljs.core.truth_(and__5000__auto__)){
return ((paredit_cm.core.closer_QMARK_.call(null,string)) && (cljs.core.not_EQ_.call(null,(0),state)));
} else {
return and__5000__auto__;
}
})())){
return (state - (1));
} else {
return state;

}
}
}
}
});
/**
 * returns the cursor for the start of the current token
 */
paredit_cm.core.token_start = (function paredit_cm$core$token_start(cm,cur){
var map__13131 = paredit_cm.core.get_info.call(null,cm,cur);
var map__13131__$1 = cljs.core.__destructure_map.call(null,map__13131);
var i = cljs.core.get.call(null,map__13131__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var start = cljs.core.get.call(null,map__13131__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var ch = cljs.core.get.call(null,map__13131__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
return paredit_cm.core.cursor.call(null,cm,(i - (ch - start)));
});
/**
 * returns the cursor for the end of the current token
 */
paredit_cm.core.token_end = (function paredit_cm$core$token_end(var_args){
var G__13133 = arguments.length;
switch (G__13133) {
case 2:
return paredit_cm.core.token_end.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return paredit_cm.core.token_end.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(paredit_cm.core.token_end.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
return paredit_cm.core.token_end.call(null,cm,cur,(0));
}));

(paredit_cm.core.token_end.cljs$core$IFn$_invoke$arity$3 = (function (cm,cur,offset){
var map__13134 = paredit_cm.core.get_info.call(null,cm,cur);
var map__13134__$1 = cljs.core.__destructure_map.call(null,map__13134);
var i = cljs.core.get.call(null,map__13134__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var end = cljs.core.get.call(null,map__13134__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var ch = cljs.core.get.call(null,map__13134__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
return paredit_cm.core.cursor.call(null,cm,((i + offset) + (end - ch)));
}));

(paredit_cm.core.token_end.cljs$lang$maxFixedArity = 3);

/**
 * take an index. get its token. return index of that token's end.
 */
paredit_cm.core.token_end_index = (function paredit_cm$core$token_end_index(cm,i){
return paredit_cm.core.index.call(null,cm,paredit_cm.core.token_end.call(null,cm,paredit_cm.core.cursor.call(null,cm,i)));
});
paredit_cm.core.guard = (function paredit_cm$core$guard(){
return cljs.core.println.call(null,"past");
});
/**
 * returns the cursor that satsifies skipping predicate 'sp' or nil if eof
 *   reached. does this by making sp something we can trampoline. sp takes these
 *   args: cm, cursor, state. counts down 'n' to 0 in order to guard against
 *   infinite loops.
 */
paredit_cm.core.skip_trampoline_helper = (function paredit_cm$core$skip_trampoline_helper(cm,cur,sp,state,n){
if((n >= (0))){
var map__13136 = paredit_cm.core.get_info.call(null,cm,cur);
var map__13136__$1 = cljs.core.__destructure_map.call(null,map__13136);
var left_cur = cljs.core.get.call(null,map__13136__$1,new cljs.core.Keyword(null,"left-cur","left-cur",2010287159));
var i = cljs.core.get.call(null,map__13136__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var result = sp.call(null,cm,cur,state);
var G__13137 = result;
var G__13137__$1 = (((G__13137 instanceof cljs.core.Keyword))?G__13137.fqn:null);
switch (G__13137__$1) {
case "eof":
return null;

break;
case "stop":
return null;

break;
case "yes":
return cur;

break;
case "left":
return left_cur;

break;
case "end-of-this-token":
return paredit_cm.core.token_end.call(null,cm,cur);

break;
case "start-of-this-tok":
return paredit_cm.core.token_start.call(null,cm,cur);

break;
default:
var next_cur = paredit_cm.core.token_end.call(null,cm,cur,(1));
return (function (){
return paredit_cm.core.skip_trampoline_helper.call(null,cm,next_cur,sp,result,(n - (1)));
});

}
} else {
return paredit_cm.core.guard.call(null);
}
});
/**
 * like skip-trampoline-helper but in the opposite direction.
 */
paredit_cm.core.skip_trampoline_helper_left = (function paredit_cm$core$skip_trampoline_helper_left(cm,cur,sp,state,n){
if((n >= (0))){
var map__13139 = paredit_cm.core.get_info.call(null,cm,cur);
var map__13139__$1 = cljs.core.__destructure_map.call(null,map__13139);
var left_cur = cljs.core.get.call(null,map__13139__$1,new cljs.core.Keyword(null,"left-cur","left-cur",2010287159));
var right_cur = cljs.core.get.call(null,map__13139__$1,new cljs.core.Keyword(null,"right-cur","right-cur",1689901919));
var i = cljs.core.get.call(null,map__13139__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var start = cljs.core.get.call(null,map__13139__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var ch = cljs.core.get.call(null,map__13139__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var result = sp.call(null,cm,cur,state);
var G__13140 = result;
var G__13140__$1 = (((G__13140 instanceof cljs.core.Keyword))?G__13140.fqn:null);
switch (G__13140__$1) {
case "bof":
return null;

break;
case "stop":
return null;

break;
case "yes":
return left_cur;

break;
case "right":
return right_cur;

break;
case "end-of-this-token":
return paredit_cm.core.token_end.call(null,cm,cur);

break;
case "start-of-this-tok":
return paredit_cm.core.token_start.call(null,cm,cur);

break;
default:
var next_cur = ((cljs.core._EQ_.call(null,ch,start))?paredit_cm.core.cursor.call(null,cm,(i - (1))):paredit_cm.core.cursor.call(null,cm,(i - (ch - start))));
return (function (){
return paredit_cm.core.skip_trampoline_helper_left.call(null,cm,next_cur,sp,result,(n - (1)));
});

}
} else {
return paredit_cm.core.guard.call(null);
}
});
/**
 * returns the cursor that satisfies sp or nil if either eof reached
 *   or we found out sp could not be satisfied. see skip-to for more
 *   info.
 */
paredit_cm.core.skip = (function paredit_cm$core$skip(var_args){
var G__13143 = arguments.length;
switch (G__13143) {
case 2:
return paredit_cm.core.skip.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return paredit_cm.core.skip.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(paredit_cm.core.skip.cljs$core$IFn$_invoke$arity$2 = (function (cm,sp){
return paredit_cm.core.skip.call(null,cm,sp,paredit_cm.core.cursor.call(null,cm));
}));

(paredit_cm.core.skip.cljs$core$IFn$_invoke$arity$3 = (function (cm,sp,cur){
var temp__5823__auto__ = new cljs.core.Keyword(null,"right-cur","right-cur",1689901919).cljs$core$IFn$_invoke$arity$1(paredit_cm.core.get_info.call(null,cm,cur));
if(cljs.core.truth_(temp__5823__auto__)){
var right_cur = temp__5823__auto__;
return cljs.core.trampoline.call(null,paredit_cm.core.skip_trampoline_helper,cm,right_cur,sp,(0),paredit_cm.core.char_count.call(null,cm));
} else {
return null;
}
}));

(paredit_cm.core.skip.cljs$lang$maxFixedArity = 3);

/**
 * returns the cursor that satisfies sp or nil if either bof reached
 *   or we found out sp could not be satisfied. see skip-to for more
 *   info.
 */
paredit_cm.core.skip_left = (function paredit_cm$core$skip_left(cm,sp){
var temp__5823__auto__ = paredit_cm.core.cursor.call(null,cm);
if(cljs.core.truth_(temp__5823__auto__)){
var cur = temp__5823__auto__;
return cljs.core.trampoline.call(null,paredit_cm.core.skip_trampoline_helper_left,cm,cur,sp,(0),paredit_cm.core.char_count.call(null,cm));
} else {
return null;
}
});
/**
 * if cur is in whitespace, deletes it optionally without ruining indentation.
 */
paredit_cm.core.delete_whitespace = (function paredit_cm$core$delete_whitespace(var_args){
var G__13146 = arguments.length;
switch (G__13146) {
case 1:
return paredit_cm.core.delete_whitespace.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.delete_whitespace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return paredit_cm.core.delete_whitespace.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(paredit_cm.core.delete_whitespace.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.delete_whitespace.call(null,cm,paredit_cm.core.cursor.call(null,cm),true);
}));

(paredit_cm.core.delete_whitespace.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
return paredit_cm.core.delete_whitespace.call(null,cm,cur,true);
}));

(paredit_cm.core.delete_whitespace.cljs$core$IFn$_invoke$arity$3 = (function (cm,cur,indent_after){
var map__13147 = paredit_cm.core.get_info.call(null,cm,cur);
var map__13147__$1 = cljs.core.__destructure_map.call(null,map__13147);
var start = cljs.core.get.call(null,map__13147__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__13147__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var line = cljs.core.get.call(null,map__13147__$1,new cljs.core.Keyword(null,"line","line",212345235));
var ch = cljs.core.get.call(null,map__13147__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var i = cljs.core.get.call(null,map__13147__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var type = cljs.core.get.call(null,map__13147__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var c1 = paredit_cm.core.cursor.call(null,cm,(i + (start - ch)));
var c2 = paredit_cm.core.cursor.call(null,cm,(i + (end - ch)));
if((type == null)){
cm.replaceRange("",c1,c2);

if(cljs.core.truth_(indent_after)){
return cm.indentLine(line);
} else {
return null;
}
} else {
return null;
}
}));

(paredit_cm.core.delete_whitespace.cljs$lang$maxFixedArity = 3);

paredit_cm.core.just_one_space = (function paredit_cm$core$just_one_space(var_args){
var G__13150 = arguments.length;
switch (G__13150) {
case 1:
return paredit_cm.core.just_one_space.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.just_one_space.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return paredit_cm.core.just_one_space.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(paredit_cm.core.just_one_space.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.just_one_space.call(null,cm,paredit_cm.core.cursor.call(null,cm),true);
}));

(paredit_cm.core.just_one_space.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
return paredit_cm.core.just_one_space.call(null,cm,cur,true);
}));

(paredit_cm.core.just_one_space.cljs$core$IFn$_invoke$arity$3 = (function (cm,cur,indent_after){
var map__13151 = paredit_cm.core.get_info.call(null,cm,cur);
var map__13151__$1 = cljs.core.__destructure_map.call(null,map__13151);
var start = cljs.core.get.call(null,map__13151__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__13151__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var line = cljs.core.get.call(null,map__13151__$1,new cljs.core.Keyword(null,"line","line",212345235));
var ch = cljs.core.get.call(null,map__13151__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var i = cljs.core.get.call(null,map__13151__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var type = cljs.core.get.call(null,map__13151__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var c1 = paredit_cm.core.cursor.call(null,cm,(i + (start - ch)));
var c2 = paredit_cm.core.cursor.call(null,cm,(i + (end - ch)));
if((type == null)){
cm.replaceRange(" ",c1,c2);

if(cljs.core.truth_(indent_after)){
return cm.indentLine(line);
} else {
return null;
}
} else {
return null;
}
}));

(paredit_cm.core.just_one_space.cljs$lang$maxFixedArity = 3);

/**
 * moves to the cursor that satisfies sp or doesn't move if eof reached.
 *   starts at current cursor for cm. sp stands for 'skipping predicate'
 *   which returns:
 *   - :yes if sp is satisfied.
 *   - :stop if we know we will not be satisfied with any future result.
 *   - :left if the cursor to the left is what we want.
 *   - new non-nil state if not satisfied. this state is used with the
 *   next iteration after we skip to the end of the current token. an sp
 *   takes cm, cursor, state.
 */
paredit_cm.core.skip_to = (function paredit_cm$core$skip_to(cm,sp){
var temp__5823__auto__ = paredit_cm.core.skip.call(null,cm,sp);
if(cljs.core.truth_(temp__5823__auto__)){
var cur_SINGLEQUOTE_ = temp__5823__auto__;
cm.setCursor(cur_SINGLEQUOTE_);

return cur_SINGLEQUOTE_;
} else {
return null;
}
});
/**
 * moves cursor to just outside the closing bracket, or if there is
 *   none then doesn't move at all.
 */
paredit_cm.core.move_past_parent_closer = (function paredit_cm$core$move_past_parent_closer(cm){
var temp__5823__auto__ = paredit_cm.core.skip_to.call(null,cm,paredit_cm.core.parent_closer_sp);
if(cljs.core.truth_(temp__5823__auto__)){
var cur = temp__5823__auto__;
paredit_cm.core.delete_whitespace.call(null,cm,new cljs.core.Keyword(null,"left-cur","left-cur",2010287159).cljs$core$IFn$_invoke$arity$1(paredit_cm.core.get_info.call(null,cm)));

return cur;
} else {
return null;
}
});
/**
 * paredit-close-round exposed for keymap. skips to end of current
 *   list even if it ends with ] or }. but if you're in a string or
 *   comment then this just inserts the bracket. requires CodeMirror
 *   mode's parser uses state with indentStack because that's how we
 *   can tell we've reached the end of a top level form and avoid
 *   entering the next top level form. 's' is the character as a string.
 */
paredit_cm.core.close_round = (function paredit_cm$core$close_round(var_args){
var G__13154 = arguments.length;
switch (G__13154) {
case 1:
return paredit_cm.core.close_round.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.close_round.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('paredit_cm.core.close_round', paredit_cm.core.close_round);

(paredit_cm.core.close_round.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.close_round.call(null,cm,")");
}));

(paredit_cm.core.close_round.cljs$core$IFn$_invoke$arity$2 = (function (cm,s){
var map__13155 = paredit_cm.core.get_info.call(null,cm);
var map__13155__$1 = cljs.core.__destructure_map.call(null,map__13155);
var type = cljs.core.get.call(null,map__13155__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var left_char = cljs.core.get.call(null,map__13155__$1,new cljs.core.Keyword(null,"left-char","left-char",509989355));
if(cljs.core._EQ_.call(null,"\\",left_char)){
return paredit_cm.core.insert.call(null,cm,s);
} else {
if(paredit_cm.core.comment_or_string_QMARK_.call(null,type)){
return paredit_cm.core.insert.call(null,cm,s);
} else {
return paredit_cm.core.move_past_parent_closer.call(null,cm);

}
}
}));

(paredit_cm.core.close_round.cljs$lang$maxFixedArity = 2);

/**
 * close curly brace like close-rond
 */
paredit_cm.core.close_brace = (function paredit_cm$core$close_brace(cm){
return paredit_cm.core.close_round.call(null,cm,"}");
});
goog.exportSymbol('paredit_cm.core.close_brace', paredit_cm.core.close_brace);
paredit_cm.core.close_round_and_newline = (function paredit_cm$core$close_round_and_newline(var_args){
var G__13158 = arguments.length;
switch (G__13158) {
case 1:
return paredit_cm.core.close_round_and_newline.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.close_round_and_newline.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('paredit_cm.core.close_round_and_newline', paredit_cm.core.close_round_and_newline);

(paredit_cm.core.close_round_and_newline.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.close_round_and_newline.call(null,cm,")");
}));

(paredit_cm.core.close_round_and_newline.cljs$core$IFn$_invoke$arity$2 = (function (cm,s){
if(paredit_cm.core.comment_or_string_QMARK_.call(null,paredit_cm.core.get_type.call(null,cm))){
return paredit_cm.core.insert.call(null,cm,s);
} else {
if(cljs.core.truth_(paredit_cm.core.close_round.call(null,cm,s))){
return cm.execCommand("newlineAndIndent");
} else {
return null;
}
}
}));

(paredit_cm.core.close_round_and_newline.cljs$lang$maxFixedArity = 2);

paredit_cm.core.open_square = (function paredit_cm$core$open_square(cm){
return paredit_cm.core.open_round.call(null,cm,"[");
});
goog.exportSymbol('paredit_cm.core.open_square', paredit_cm.core.open_square);
paredit_cm.core.close_square = (function paredit_cm$core$close_square(cm){
return paredit_cm.core.close_round.call(null,cm,"]");
});
goog.exportSymbol('paredit_cm.core.close_square', paredit_cm.core.close_square);
paredit_cm.core.doublequote = (function paredit_cm$core$doublequote(cm){
var map__13160 = paredit_cm.core.get_info.call(null,cm);
var map__13160__$1 = cljs.core.__destructure_map.call(null,map__13160);
var type = cljs.core.get.call(null,map__13160__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var left_char = cljs.core.get.call(null,map__13160__$1,new cljs.core.Keyword(null,"left-char","left-char",509989355));
var right_char = cljs.core.get.call(null,map__13160__$1,new cljs.core.Keyword(null,"right-char","right-char",-1500850071));
var ch = cljs.core.get.call(null,map__13160__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var cur = cljs.core.get.call(null,map__13160__$1,new cljs.core.Keyword(null,"cur","cur",1153190599));
if(cljs.core._EQ_.call(null,"\\",left_char)){
return paredit_cm.core.insert.call(null,cm,"\"");
} else {
if(cljs.core._EQ_.call(null,type,"string")){
return paredit_cm.core.insert.call(null,cm,"\\\"");
} else {
return paredit_cm.core.insert.call(null,cm,[((cljs.core.not_EQ_.call(null," ",left_char))?" ":null),"\"\"",((((cljs.core.not_EQ_.call(null," ",right_char)) && (cljs.core.not_EQ_.call(null,"\n",right_char))))?" ":null)].join(''),((((cljs.core._EQ_.call(null," ",right_char)) || (cljs.core._EQ_.call(null,"\n",right_char))))?(-1):(-2)));

}
}
});
goog.exportSymbol('paredit_cm.core.doublequote', paredit_cm.core.doublequote);
paredit_cm.core.word_QMARK_ = (function paredit_cm$core$word_QMARK_(type){
return ((cljs.core._EQ_.call(null,type,"atom")) || (((cljs.core._EQ_.call(null,type,"builtin")) || (((cljs.core._EQ_.call(null,type,"number")) || (((cljs.core._EQ_.call(null,type,"variable")) || (cljs.core._EQ_.call(null,type,"keyword")))))))));
});
/**
 * returns true if at a word of code
 */
paredit_cm.core.at_a_word_QMARK_ = (function paredit_cm$core$at_a_word_QMARK_(cm,cur){
return paredit_cm.core.word_QMARK_.call(null,paredit_cm.core.get_type.call(null,cm,cur));
});
/**
 * true if in a word AND not at the end of that word. false if in whitespace or
 *   a string or a comment or at a bracket.
 */
paredit_cm.core.in_a_word_QMARK_ = (function paredit_cm$core$in_a_word_QMARK_(cm){
var cur = paredit_cm.core.cursor.call(null,cm);
var i = paredit_cm.core.index.call(null,cm,cur);
return ((paredit_cm.core.at_a_word_QMARK_.call(null,cm,cur)) && (cljs.core.not_EQ_.call(null,i,paredit_cm.core.token_end_index.call(null,cm,i))));
});
/**
 * returns true if at the start of a string.
 */
paredit_cm.core.start_of_a_string_QMARK_ = (function paredit_cm$core$start_of_a_string_QMARK_(cm,cur){
var map__13161 = paredit_cm.core.get_info.call(null,cm,cur);
var map__13161__$1 = cljs.core.__destructure_map.call(null,map__13161);
var string = cljs.core.get.call(null,map__13161__$1,new cljs.core.Keyword(null,"string","string",-1989541586));
var type = cljs.core.get.call(null,map__13161__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var start = cljs.core.get.call(null,map__13161__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__13161__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var mode = cljs.core.get.call(null,map__13161__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
return ((cljs.core._EQ_.call(null,type,"string")) && (((cljs.core._EQ_.call(null,(1),(end - start))) && (((cljs.core._EQ_.call(null,string,"\"")) && (cljs.core._EQ_.call(null,mode,"string")))))));
});
/**
 * returns true if just to the right of a closing doublequote of a string.
 */
paredit_cm.core.end_of_a_string_QMARK_ = (function paredit_cm$core$end_of_a_string_QMARK_(cm,cur){
var map__13162 = paredit_cm.core.get_info.call(null,cm,cur);
var map__13162__$1 = cljs.core.__destructure_map.call(null,map__13162);
var type = cljs.core.get.call(null,map__13162__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var ch = cljs.core.get.call(null,map__13162__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var end = cljs.core.get.call(null,map__13162__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var string = cljs.core.get.call(null,map__13162__$1,new cljs.core.Keyword(null,"string","string",-1989541586));
var mode = cljs.core.get.call(null,map__13162__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
return ((cljs.core._EQ_.call(null,type,"string")) && (((cljs.core._EQ_.call(null,ch,end)) && (((cljs.core._EQ_.call(null,"\"",cljs.core.last.call(null,string))) && (((cljs.core.not_EQ_.call(null,"\\",cljs.core.last.call(null,cljs.core.drop_last.call(null,string)))) && (cljs.core._EQ_.call(null,mode,false)))))))));
});
/**
 * returns the cursor at the end of the sibling to the right or nil if
 *   no sibling or eof. does not exit the containing form. does this by
 *   skipping past any comments or whitespace, and branches depending on
 *   whether an opening bracket or doublequote is encountered (sp
 *   satisfied when encountering a closing bracket that empties the
 *   stack) vs the beginning of a word (return token at the end of the
 *   word). assuming the cm has matched brackets for now.
 */
paredit_cm.core.end_of_next_sibling_sp = (function paredit_cm$core$end_of_next_sibling_sp(cm,cur,stack){
var map__13163 = paredit_cm.core.get_info.call(null,cm,cur);
var map__13163__$1 = cljs.core.__destructure_map.call(null,map__13163);
var string = cljs.core.get.call(null,map__13163__$1,new cljs.core.Keyword(null,"string","string",-1989541586));
var type = cljs.core.get.call(null,map__13163__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var eof = cljs.core.get.call(null,map__13163__$1,new cljs.core.Keyword(null,"eof","eof",-489063237));
var ch = cljs.core.get.call(null,map__13163__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var end = cljs.core.get.call(null,map__13163__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var stack_empty = (stack === (0));
var one_left = cljs.core._EQ_.call(null,(1),stack);
var string_extends = ((cljs.core.not_EQ_.call(null,"\"",cljs.core.last.call(null,string))) || (cljs.core._EQ_.call(null,"\\",cljs.core.last.call(null,cljs.core.drop_last.call(null,string)))));
if(((paredit_cm.core.end_of_a_string_QMARK_.call(null,cm,cur)) && (one_left))){
return new cljs.core.Keyword(null,"yes","yes",182838819);
} else {
if(((paredit_cm.core.escaped_char_to_left_QMARK_.call(null,cm,cur)) && (stack_empty))){
return new cljs.core.Keyword(null,"yes","yes",182838819);
} else {
if(((paredit_cm.core.word_QMARK_.call(null,type)) && (((stack_empty) && (cljs.core._EQ_.call(null,ch,end)))))){
return new cljs.core.Keyword(null,"yes","yes",182838819);
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = paredit_cm.core.is_bracket_type_QMARK_.call(null,type);
if(cljs.core.truth_(and__5000__auto__)){
return ((paredit_cm.core.closer_QMARK_.call(null,string)) && (one_left));
} else {
return and__5000__auto__;
}
})())){
return new cljs.core.Keyword(null,"yes","yes",182838819);
} else {
if(cljs.core.truth_(eof)){
return new cljs.core.Keyword(null,"eof","eof",-489063237);
} else {
if((type == null)){
return stack;
} else {
if(cljs.core._EQ_.call(null,type,"comment")){
return stack;
} else {
if(paredit_cm.core.start_of_a_string_QMARK_.call(null,cm,cur)){
return (stack + (1));
} else {
if(((paredit_cm.core.end_of_a_string_QMARK_.call(null,cm,cur)) && (stack_empty))){
return new cljs.core.Keyword(null,"stop","stop",-2140911342);
} else {
if(((cljs.core._EQ_.call(null,type,"string")) && (((one_left) && (string_extends))))){
return stack;
} else {
if(((cljs.core._EQ_.call(null,type,"string")) && (one_left))){
return new cljs.core.Keyword(null,"end-of-this-token","end-of-this-token",350019828);
} else {
if(((cljs.core._EQ_.call(null,type,"string")) && (string_extends))){
return stack;
} else {
if(cljs.core._EQ_.call(null,type,"string")){
return (stack - (1));
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = paredit_cm.core.in_escaped_char_QMARK_.call(null,cm,cur);
if(cljs.core.truth_(and__5000__auto__)){
return stack_empty;
} else {
return and__5000__auto__;
}
})())){
return new cljs.core.Keyword(null,"end-of-this-token","end-of-this-token",350019828);
} else {
if(cljs.core.truth_(paredit_cm.core.in_escaped_char_QMARK_.call(null,cm,cur))){
return stack;
} else {
if(paredit_cm.core.escaped_char_to_left_QMARK_.call(null,cm,cur)){
return stack;
} else {
if(((paredit_cm.core.word_QMARK_.call(null,type)) && (stack_empty))){
return new cljs.core.Keyword(null,"end-of-this-token","end-of-this-token",350019828);
} else {
if(paredit_cm.core.word_QMARK_.call(null,type)){
return stack;
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = paredit_cm.core.is_bracket_type_QMARK_.call(null,type);
if(cljs.core.truth_(and__5000__auto__)){
return paredit_cm.core.opener_QMARK_.call(null,string);
} else {
return and__5000__auto__;
}
})())){
return (stack + (1));
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = paredit_cm.core.is_bracket_type_QMARK_.call(null,type);
if(cljs.core.truth_(and__5000__auto__)){
return ((paredit_cm.core.closer_QMARK_.call(null,string)) && (stack_empty));
} else {
return and__5000__auto__;
}
})())){
return new cljs.core.Keyword(null,"stop","stop",-2140911342);
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = paredit_cm.core.is_bracket_type_QMARK_.call(null,type);
if(cljs.core.truth_(and__5000__auto__)){
return paredit_cm.core.closer_QMARK_.call(null,string);
} else {
return and__5000__auto__;
}
})())){
return (stack - (1));
} else {
return new cljs.core.Keyword(null,"stop","stop",-2140911342);

}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
/**
 * get the cursor for the end of the sibling to the right.
 */
paredit_cm.core.end_of_next_sibling = (function paredit_cm$core$end_of_next_sibling(var_args){
var G__13165 = arguments.length;
switch (G__13165) {
case 1:
return paredit_cm.core.end_of_next_sibling.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.end_of_next_sibling.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(paredit_cm.core.end_of_next_sibling.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.skip.call(null,cm,paredit_cm.core.end_of_next_sibling_sp);
}));

(paredit_cm.core.end_of_next_sibling.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
if(cljs.core.truth_(cur)){
cm.setCursor(cur);

return paredit_cm.core.skip.call(null,cm,paredit_cm.core.end_of_next_sibling_sp);
} else {
return null;
}
}));

(paredit_cm.core.end_of_next_sibling.cljs$lang$maxFixedArity = 2);

/**
 * returns the cursor at the start of the sibling to the left or nil
 *   if no sibling or eof. does not exit the containing form. does this
 *   by skipping past any comments or whitespace, and branches depending
 *   on whether a bracket or doublequote is encountered (sp satisfied
 *   when encountering an opening bracket that empties the stack) vs the
 *   beginning of a word (return token at the start of the
 *   word). assuming the cm has matched brackets for now.
 */
paredit_cm.core.start_of_prev_sibling_sp = (function paredit_cm$core$start_of_prev_sibling_sp(cm,cur,stack){
var map__13167 = paredit_cm.core.get_info.call(null,cm,cur);
var map__13167__$1 = cljs.core.__destructure_map.call(null,map__13167);
var string = cljs.core.get.call(null,map__13167__$1,new cljs.core.Keyword(null,"string","string",-1989541586));
var type = cljs.core.get.call(null,map__13167__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var bof = cljs.core.get.call(null,map__13167__$1,new cljs.core.Keyword(null,"bof","bof",-1065437469));
var ch = cljs.core.get.call(null,map__13167__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var start = cljs.core.get.call(null,map__13167__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var stack_empty = (stack === (0));
var one_left = cljs.core._EQ_.call(null,(1),stack);
var string_extends = cljs.core.not_EQ_.call(null,"\"",cljs.core.first.call(null,string));
if(((paredit_cm.core.start_of_a_string_QMARK_.call(null,cm,cur)) && (((one_left) && (string_extends))))){
return stack;
} else {
if(((paredit_cm.core.start_of_a_string_QMARK_.call(null,cm,cur)) && (one_left))){
return new cljs.core.Keyword(null,"yes","yes",182838819);
} else {
if(((paredit_cm.core.escaped_char_to_right_QMARK_.call(null,cm,cur)) && (stack_empty))){
return new cljs.core.Keyword(null,"yes","yes",182838819);
} else {
if(((paredit_cm.core.word_QMARK_.call(null,type)) && (((stack_empty) && (cljs.core._EQ_.call(null,ch,start)))))){
return new cljs.core.Keyword(null,"yes","yes",182838819);
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = paredit_cm.core.is_bracket_type_QMARK_.call(null,type);
if(cljs.core.truth_(and__5000__auto__)){
return ((paredit_cm.core.opener_QMARK_.call(null,string)) && (one_left));
} else {
return and__5000__auto__;
}
})())){
return new cljs.core.Keyword(null,"yes","yes",182838819);
} else {
if(cljs.core.truth_(bof)){
return new cljs.core.Keyword(null,"bof","bof",-1065437469);
} else {
if((type == null)){
return stack;
} else {
if(cljs.core._EQ_.call(null,type,"comment")){
return stack;
} else {
if(paredit_cm.core.end_of_a_string_QMARK_.call(null,cm,cur)){
return (stack + (1));
} else {
if(((paredit_cm.core.start_of_a_string_QMARK_.call(null,cm,cur)) && (((stack_empty) && (string_extends))))){
return stack;
} else {
if(((paredit_cm.core.start_of_a_string_QMARK_.call(null,cm,cur)) && (stack_empty))){
return new cljs.core.Keyword(null,"stop","stop",-2140911342);
} else {
if(((cljs.core._EQ_.call(null,type,"string")) && (((one_left) && (string_extends))))){
return stack;
} else {
if(((cljs.core._EQ_.call(null,type,"string")) && (one_left))){
return new cljs.core.Keyword(null,"start-of-this-tok","start-of-this-tok",1383678987);
} else {
if(((cljs.core._EQ_.call(null,type,"string")) && (string_extends))){
return stack;
} else {
if(cljs.core._EQ_.call(null,type,"string")){
return (stack - (1));
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = paredit_cm.core.in_escaped_char_QMARK_.call(null,cm,cur);
if(cljs.core.truth_(and__5000__auto__)){
return stack_empty;
} else {
return and__5000__auto__;
}
})())){
return new cljs.core.Keyword(null,"start-of-this-tok","start-of-this-tok",1383678987);
} else {
if(cljs.core.truth_(paredit_cm.core.in_escaped_char_QMARK_.call(null,cm,cur))){
return stack;
} else {
if(paredit_cm.core.escaped_char_to_right_QMARK_.call(null,cm,cur)){
return stack;
} else {
if(((paredit_cm.core.word_QMARK_.call(null,type)) && (stack_empty))){
return new cljs.core.Keyword(null,"start-of-this-tok","start-of-this-tok",1383678987);
} else {
if(paredit_cm.core.word_QMARK_.call(null,type)){
return stack;
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = paredit_cm.core.is_bracket_type_QMARK_.call(null,type);
if(cljs.core.truth_(and__5000__auto__)){
return paredit_cm.core.closer_QMARK_.call(null,string);
} else {
return and__5000__auto__;
}
})())){
return (stack + (1));
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = paredit_cm.core.is_bracket_type_QMARK_.call(null,type);
if(cljs.core.truth_(and__5000__auto__)){
return ((paredit_cm.core.opener_QMARK_.call(null,string)) && (stack_empty));
} else {
return and__5000__auto__;
}
})())){
return new cljs.core.Keyword(null,"stop","stop",-2140911342);
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = paredit_cm.core.is_bracket_type_QMARK_.call(null,type);
if(cljs.core.truth_(and__5000__auto__)){
return paredit_cm.core.opener_QMARK_.call(null,string);
} else {
return and__5000__auto__;
}
})())){
return (stack - (1));
} else {
return new cljs.core.Keyword(null,"stop","stop",-2140911342);

}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
/**
 * return the cursor at the start of the sibling to the left.
 */
paredit_cm.core.start_of_prev_sibling = (function paredit_cm$core$start_of_prev_sibling(var_args){
var G__13169 = arguments.length;
switch (G__13169) {
case 1:
return paredit_cm.core.start_of_prev_sibling.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.start_of_prev_sibling.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(paredit_cm.core.start_of_prev_sibling.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.skip_left.call(null,cm,paredit_cm.core.start_of_prev_sibling_sp);
}));

(paredit_cm.core.start_of_prev_sibling.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
if(cljs.core.truth_(cur)){
cm.setCursor(cur);

return paredit_cm.core.skip_left.call(null,cm,paredit_cm.core.start_of_prev_sibling_sp);
} else {
return null;
}
}));

(paredit_cm.core.start_of_prev_sibling.cljs$lang$maxFixedArity = 2);

/**
 * escapes a string, replacing backslashes and doublequotes. wraps
 *   result in a new pair of doublequotes.
 */
paredit_cm.core.escape_string = (function paredit_cm$core$escape_string(s){
return ["\"",clojure.string.replace.call(null,clojure.string.replace.call(null,s,/[\\]/,"\\\\"),/[\"]/,"\\\""),"\""].join('');
});
/**
 * turns selection into a string, escaping backslashes and doublequotes
 */
paredit_cm.core.stringify_selection = (function paredit_cm$core$stringify_selection(cm){
return cm.replaceSelection(paredit_cm.core.escape_string.call(null,cm.getSelection()));
});
/**
 * turns the region from cur-1 to cur-2 into a string, escaping
 *   backslashes and doublequotes
 */
paredit_cm.core.stringify = (function paredit_cm$core$stringify(cm,cur_1,cur_2){
cm.setSelection(cur_1,cur_2);

paredit_cm.core.stringify_selection.call(null,cm);

return cm.setCursor(paredit_cm.core.cursor.call(null,cm,(paredit_cm.core.index.call(null,cm,cur_1) + (1))));
});
/**
 * moves cursor right, out of the current string
 */
paredit_cm.core.exit_string = (function paredit_cm$core$exit_string(cm){
var map__13171 = paredit_cm.core.get_info.call(null,cm);
var map__13171__$1 = cljs.core.__destructure_map.call(null,map__13171);
var type = cljs.core.get.call(null,map__13171__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var i = cljs.core.get.call(null,map__13171__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var ch = cljs.core.get.call(null,map__13171__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var end = cljs.core.get.call(null,map__13171__$1,new cljs.core.Keyword(null,"end","end",-268185958));
if(cljs.core._EQ_.call(null,type,"string")){
return cm.setCursor(paredit_cm.core.cursor.call(null,cm,(i + (end - ch))));
} else {
return null;
}
});
/**
 * returns true if token is in the middle of a string.
 */
paredit_cm.core.in_string_QMARK_ = (function paredit_cm$core$in_string_QMARK_(var_args){
var G__13173 = arguments.length;
switch (G__13173) {
case 1:
return paredit_cm.core.in_string_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.in_string_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(paredit_cm.core.in_string_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.in_string_QMARK_.call(null,cm,paredit_cm.core.cursor.call(null,cm));
}));

(paredit_cm.core.in_string_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
var type = paredit_cm.core.get_type.call(null,cm,cur);
return ((cljs.core._EQ_.call(null,type,"string")) || (cljs.core._EQ_.call(null,type,"string-2")));
}));

(paredit_cm.core.in_string_QMARK_.cljs$lang$maxFixedArity = 2);

/**
 * paredit meta-doublequote exposed for keymap.
 *   if in a string, moves cursor out of the string to the right.
 *   if in a comment, insert a doublequote.
 *   if in an escaped char, do nothing.
 *   otherwise starts a string that that continues to the end of the next
 *   form, escaping backslashes and doublequotes.
 */
paredit_cm.core.meta_doublequote = (function paredit_cm$core$meta_doublequote(cm){
var map__13175 = paredit_cm.core.get_info.call(null,cm);
var map__13175__$1 = cljs.core.__destructure_map.call(null,map__13175);
var type = cljs.core.get.call(null,map__13175__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var eof = cljs.core.get.call(null,map__13175__$1,new cljs.core.Keyword(null,"eof","eof",-489063237));
var cur = cljs.core.get.call(null,map__13175__$1,new cljs.core.Keyword(null,"cur","cur",1153190599));
if(cljs.core.truth_(eof)){
return new cljs.core.Keyword(null,"do-nothing","do-nothing",1030476282);
} else {
if(cljs.core.truth_(paredit_cm.core.in_escaped_char_QMARK_.call(null,cm,cur))){
return new cljs.core.Keyword(null,"do-nothing","do-nothing",1030476282);
} else {
if(paredit_cm.core.in_string_QMARK_.call(null,cm,cur)){
return paredit_cm.core.exit_string.call(null,cm);
} else {
if(cljs.core._EQ_.call(null,type,"comment")){
return paredit_cm.core.insert.call(null,cm,"\"");
} else {
if(paredit_cm.core.in_a_word_QMARK_.call(null,cm)){
return paredit_cm.core.stringify.call(null,cm,cur,paredit_cm.core.token_end.call(null,cm,cur));
} else {
return paredit_cm.core.stringify.call(null,cm,cur,paredit_cm.core.end_of_next_sibling.call(null,cm));

}
}
}
}
}
});
goog.exportSymbol('paredit_cm.core.meta_doublequote', paredit_cm.core.meta_doublequote);
/**
 * given a pair of cursors c1 and c2, returns the left-most one
 */
paredit_cm.core.left = (function paredit_cm$core$left(cm,c1,c2){
var i1 = paredit_cm.core.index.call(null,cm,c1);
var i2 = paredit_cm.core.index.call(null,cm,c2);
if((i1 < i2)){
return c1;
} else {
return c2;
}
});
/**
 * given a pair of cursors c1 and c2, returns the right-most one
 */
paredit_cm.core.right = (function paredit_cm$core$right(cm,c1,c2){
var i1 = paredit_cm.core.index.call(null,cm,c1);
var i2 = paredit_cm.core.index.call(null,cm,c2);
if((i1 < i2)){
return c2;
} else {
return c1;
}
});
/**
 * like get-info but for the first selection. gets the cursor to the left of the
 *   selection, the start, the end, the text selected, the starting and ending line
 *   numbers. nil if nothing selected.
 */
paredit_cm.core.selection_info = (function paredit_cm$core$selection_info(cm){
if(cljs.core.truth_(cm.somethingSelected())){
var first_sel = cljs.core.first.call(null,cm.listSelections());
var text = cljs.core.first.call(null,cm.getSelections());
var anchor = first_sel.anchor;
var head = first_sel.head;
var left_of_start = paredit_cm.core.left.call(null,cm,anchor,head);
var start_cur = paredit_cm.core.cursor.call(null,cm,(paredit_cm.core.index.call(null,cm,left_of_start) + (1)));
var end_cur = paredit_cm.core.right.call(null,cm,anchor,head);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [left_of_start,start_cur,end_cur,text,start_cur.line,end_cur.line], null);
} else {
return null;
}
});
/**
 * get the types from cursors c1 to c2. assumes 1 is to the left of 2 and not
 *   vice versa.
 */
paredit_cm.core.get_types = (function paredit_cm$core$get_types(cm,c1,c2){
var types = cljs.core.PersistentVector.EMPTY;
var cur = c1;
while(true){
var map__13177 = paredit_cm.core.get_info.call(null,cm,cur);
var map__13177__$1 = cljs.core.__destructure_map.call(null,map__13177);
var type = cljs.core.get.call(null,map__13177__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var right_cur = cljs.core.get.call(null,map__13177__$1,new cljs.core.Keyword(null,"right-cur","right-cur",1689901919));
var types_SINGLEQUOTE_ = cljs.core.conj.call(null,types,type);
if(cljs.core._EQ_.call(null,cur,c2)){
return types_SINGLEQUOTE_;
} else {
var G__13178 = types_SINGLEQUOTE_;
var G__13179 = right_cur;
types = G__13178;
cur = G__13179;
continue;
}
break;
}
});
/**
 * true if every position's type satisfies pred, for the entire (first)
 *   selection
 */
paredit_cm.core.selection_completely_satisfies_pred_QMARK_ = (function paredit_cm$core$selection_completely_satisfies_pred_QMARK_(cm,pred){
var temp__5823__auto__ = paredit_cm.core.selection_info.call(null,cm);
if(cljs.core.truth_(temp__5823__auto__)){
var vec__13180 = temp__5823__auto__;
var _ = cljs.core.nth.call(null,vec__13180,(0),null);
var c1 = cljs.core.nth.call(null,vec__13180,(1),null);
var c2 = cljs.core.nth.call(null,vec__13180,(2),null);
return cljs.core.every_QMARK_.call(null,pred,paredit_cm.core.get_types.call(null,cm,c1,c2));
} else {
return null;
}
});
paredit_cm.core.selection_completely_whitespace_QMARK_ = (function paredit_cm$core$selection_completely_whitespace_QMARK_(cm){
return paredit_cm.core.selection_completely_satisfies_pred_QMARK_.call(null,cm,cljs.core.nil_QMARK_);
});
paredit_cm.core.not_code_QMARK_ = (function paredit_cm$core$not_code_QMARK_(type){
return (((type == null)) || (cljs.core._EQ_.call(null,type,"comment")));
});
paredit_cm.core.selection_completely_non_code_QMARK_ = (function paredit_cm$core$selection_completely_non_code_QMARK_(cm){
return paredit_cm.core.selection_completely_satisfies_pred_QMARK_.call(null,cm,paredit_cm.core.not_code_QMARK_);
});
/**
 * starts each line in 's' with ;; and appends 'post-script'
 */
paredit_cm.core.to_comment = (function paredit_cm$core$to_comment(s,postscript){
var cmnt = clojure.string.join.call(null,"\n",cljs.core.map.call(null,(function (p1__13183_SHARP_){
return clojure.string.replace.call(null,p1__13183_SHARP_,/^/,";; ");
}),clojure.string.split_lines.call(null,s)));
return [cmnt,"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(postscript)].join('');
});
/**
 * removes leading whitespace and semicolons from lines in 's'
 */
paredit_cm.core.uncomment = (function paredit_cm$core$uncomment(s){
return clojure.string.join.call(null,"\n",cljs.core.map.call(null,(function (p1__13184_SHARP_){
return clojure.string.replace.call(null,p1__13184_SHARP_,/^\s*;+/,"");
}),clojure.string.split_lines.call(null,s)));
});
/**
 * indents lines from a to z (line numbers). assumes a is before z.
 */
paredit_cm.core.indent_lines = (function paredit_cm$core$indent_lines(cm,a,z){
var seq__13185 = cljs.core.seq.call(null,cljs.core.range.call(null,a,(z + (1))));
var chunk__13186 = null;
var count__13187 = (0);
var i__13188 = (0);
while(true){
if((i__13188 < count__13187)){
var line = cljs.core._nth.call(null,chunk__13186,i__13188);
cm.indentLine(line);


var G__13189 = seq__13185;
var G__13190 = chunk__13186;
var G__13191 = count__13187;
var G__13192 = (i__13188 + (1));
seq__13185 = G__13189;
chunk__13186 = G__13190;
count__13187 = G__13191;
i__13188 = G__13192;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq.call(null,seq__13185);
if(temp__5823__auto__){
var seq__13185__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13185__$1)){
var c__5525__auto__ = cljs.core.chunk_first.call(null,seq__13185__$1);
var G__13193 = cljs.core.chunk_rest.call(null,seq__13185__$1);
var G__13194 = c__5525__auto__;
var G__13195 = cljs.core.count.call(null,c__5525__auto__);
var G__13196 = (0);
seq__13185 = G__13193;
chunk__13186 = G__13194;
count__13187 = G__13195;
i__13188 = G__13196;
continue;
} else {
var line = cljs.core.first.call(null,seq__13185__$1);
cm.indentLine(line);


var G__13197 = cljs.core.next.call(null,seq__13185__$1);
var G__13198 = null;
var G__13199 = (0);
var G__13200 = (0);
seq__13185 = G__13197;
chunk__13186 = G__13198;
count__13187 = G__13199;
i__13188 = G__13200;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * removes whitespace and leading semicolons from selection, replaces
 *   selection with the result, indents lines affected.
 */
paredit_cm.core.uncomment_selection = (function paredit_cm$core$uncomment_selection(cm){
var temp__5823__auto__ = paredit_cm.core.selection_info.call(null,cm);
if(cljs.core.truth_(temp__5823__auto__)){
var vec__13201 = temp__5823__auto__;
var _ = cljs.core.nth.call(null,vec__13201,(0),null);
var c1 = cljs.core.nth.call(null,vec__13201,(1),null);
var c2 = cljs.core.nth.call(null,vec__13201,(2),null);
var text = cljs.core.nth.call(null,vec__13201,(3),null);
cm.replaceSelection(paredit_cm.core.uncomment.call(null,text));

return paredit_cm.core.indent_lines.call(null,cm,c1.line,c2.line);
} else {
return null;
}
});
/**
 * returns the result of appending the applicable part of 'tok' to
 *   's'. this is for collecting all the text on a line after 'ch'
 */
paredit_cm.core.append = (function paredit_cm$core$append(ch,s,tok){
if((ch < tok.end)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.subs.call(null,tok.string,((function (){var x__5087__auto__ = ch;
var y__5088__auto__ = tok.start;
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})() - tok.start))].join('');
} else {
return s;
}
});
paredit_cm.core.get_text_to_end_of_line = (function paredit_cm$core$get_text_to_end_of_line(cm,cur){
var toks = cm.getLineTokens(cur.line);
var ch = cur.ch;
return cljs.core.reduce.call(null,cljs.core.partial.call(null,paredit_cm.core.append,ch),"",toks);
});
paredit_cm.core.comment_selection = (function paredit_cm$core$comment_selection(cm){
var vec__13204 = paredit_cm.core.selection_info.call(null,cm);
var _ = cljs.core.nth.call(null,vec__13204,(0),null);
var c1 = cljs.core.nth.call(null,vec__13204,(1),null);
var c2 = cljs.core.nth.call(null,vec__13204,(2),null);
var text = cljs.core.nth.call(null,vec__13204,(3),null);
var l1 = cljs.core.nth.call(null,vec__13204,(4),null);
var l2 = cljs.core.nth.call(null,vec__13204,(5),null);
var text_after_selection = paredit_cm.core.get_text_to_end_of_line.call(null,cm,c2);
var code_follows_selection = cljs.core.not_EQ_.call(null,text_after_selection,"");
var end_of_line = paredit_cm.core.last_cur.call(null,cm);
var line_to = ((code_follows_selection)?(l2 + (1)):l2);
if(code_follows_selection){
cm.setSelection(paredit_cm.core.left,end_of_line);
} else {
}

cm.replaceSelection(paredit_cm.core.to_comment.call(null,text,text_after_selection));

return paredit_cm.core.indent_lines.call(null,cm,l1,line_to);
});
/**
 * true if the line ends with a comment
 */
paredit_cm.core.line_ends_with_comment_QMARK_ = (function paredit_cm$core$line_ends_with_comment_QMARK_(cm){
return cljs.core._EQ_.call(null,"comment",paredit_cm.core.last_token.call(null,cm,paredit_cm.core.cursor.call(null,cm)).type);
});
paredit_cm.core.indent_current_line = (function paredit_cm$core$indent_current_line(cm){
return cm.indentLine(paredit_cm.core.cursor.call(null,cm).line);
});
/**
 * moves cursor to ;;X
 */
paredit_cm.core.go_to_comment = (function paredit_cm$core$go_to_comment(cm){
var cur = paredit_cm.core.cursor.call(null,cm);
var ch = cur.ch;
var i = paredit_cm.core.index.call(null,cm,cur);
var c_tok = paredit_cm.core.last_token.call(null,cm,cur);
var start = c_tok.start;
var offset = cljs.core.count.call(null,cljs.core.take_while.call(null,(function (p1__13207_SHARP_){
return cljs.core._EQ_.call(null,";",p1__13207_SHARP_);
}),c_tok.string));
return cm.setCursor(paredit_cm.core.cursor.call(null,cm,((i + (start - ch)) + offset)));
});
/**
 * presses spacebar until we are at col 40
 */
paredit_cm.core.insert_spaces_to_col_40 = (function paredit_cm$core$insert_spaces_to_col_40(cm){
var ch = paredit_cm.core.cursor.call(null,cm).ch;
if((ch < (40))){
return paredit_cm.core.insert.call(null,cm,clojure.string.join.call(null,cljs.core.repeat.call(null,((40) - ch)," ")));
} else {
return null;
}
});
/**
 * moves cursor to the comment on the line and makes sure the comment
 *   starts on column 40 or greater. assumes last token is a comment
 */
paredit_cm.core.go_to_comment_and_indent = (function paredit_cm$core$go_to_comment_and_indent(cm){
paredit_cm.core.indent_current_line.call(null,cm);

var cur = paredit_cm.core.cursor.call(null,cm);
var ch = cur.ch;
var i = paredit_cm.core.index.call(null,cm,cur);
var comment_start = paredit_cm.core.last_token.call(null,cm,cur).start;
cm.setCursor(paredit_cm.core.cursor.call(null,cm,(i + (comment_start - ch))));

paredit_cm.core.insert_spaces_to_col_40.call(null,cm);

return paredit_cm.core.go_to_comment.call(null,cm);
});
/**
 * true if code is to the left and whitespace* is to the right.
 *   assumes you already know line does not end with a comment.
 */
paredit_cm.core.betw_code_and_line_end_QMARK_ = (function paredit_cm$core$betw_code_and_line_end_QMARK_(cm){
var cur = paredit_cm.core.cursor.call(null,cm);
var toks = cm.getLineTokens(cur.line);
var ch = cur.ch;
var tests = cljs.core.map.call(null,(function (p1__13208_SHARP_){
return (((p1__13208_SHARP_.end <= ch)) || ((p1__13208_SHARP_.type == null)));
}),toks);
var and__5000__auto__ = cljs.core.seq.call(null,toks);
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core.every_QMARK_.call(null,cljs.core.true_QMARK_,tests);
if(and__5000__auto____$1){
return cljs.core.some.call(null,(function (p1__13209_SHARP_){
return (!((p1__13209_SHARP_.type == null)));
}),toks);
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
});
/**
 * moves cursor to end of last non-whitespace token on a line.
 *   returns a vector of new index, new ch, and new cursor.
 */
paredit_cm.core.move_to_end_of_line = (function paredit_cm$core$move_to_end_of_line(var_args){
var G__13212 = arguments.length;
switch (G__13212) {
case 1:
return paredit_cm.core.move_to_end_of_line.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.move_to_end_of_line.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(paredit_cm.core.move_to_end_of_line.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.move_to_end_of_line.call(null,cm,paredit_cm.core.cursor.call(null,cm));
}));

(paredit_cm.core.move_to_end_of_line.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
var end = cljs.core.last.call(null,cljs.core.remove.call(null,(function (p1__13210_SHARP_){
return (p1__13210_SHARP_.type == null);
}),cm.getLineTokens(cur.line))).end;
var ch = cur.ch;
var i = paredit_cm.core.index.call(null,cm,cur);
var i_SINGLEQUOTE_ = (i + (end - ch));
var cur_SINGLEQUOTE_ = paredit_cm.core.cursor.call(null,cm,i_SINGLEQUOTE_);
cm.setCursor(cur_SINGLEQUOTE_);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i_SINGLEQUOTE_,cur_SINGLEQUOTE_.ch,cur_SINGLEQUOTE_], null);
}));

(paredit_cm.core.move_to_end_of_line.cljs$lang$maxFixedArity = 2);

/**
 * selects from current position to the end of the line
 */
paredit_cm.core.select_rest_of_line = (function paredit_cm$core$select_rest_of_line(cm){
return cm.setSelection(paredit_cm.core.cursor.call(null,cm),paredit_cm.core.last_cur.call(null,cm));
});
/**
 * deletes from current position to the end of the line
 */
paredit_cm.core.delete_to_end_of_line = (function paredit_cm$core$delete_to_end_of_line(cm){
return cm.replaceRange("",paredit_cm.core.cursor.call(null,cm),paredit_cm.core.last_cur.call(null,cm));
});
/**
 * starts a ; comment at column 40 or greater and moves to it.
 */
paredit_cm.core.create_comment_at_end = (function paredit_cm$core$create_comment_at_end(cm){
paredit_cm.core.indent_current_line.call(null,cm);

paredit_cm.core.move_to_end_of_line.call(null,cm);

paredit_cm.core.insert.call(null,cm," ");

paredit_cm.core.insert_spaces_to_col_40.call(null,cm);

paredit_cm.core.insert.call(null,cm,"; ");

return paredit_cm.core.delete_to_end_of_line.call(null,cm);
});
/**
 * returns true if line is all whitespace
 */
paredit_cm.core.line_is_whitespace_QMARK_ = (function paredit_cm$core$line_is_whitespace_QMARK_(cm){
return cljs.core.every_QMARK_.call(null,(function (p1__13214_SHARP_){
return (p1__13214_SHARP_.type == null);
}),cm.getLineTokens(paredit_cm.core.cursor.call(null,cm).line));
});
/**
 * creates and indents a ;; comment
 */
paredit_cm.core.create_line_comment = (function paredit_cm$core$create_line_comment(cm){
paredit_cm.core.insert.call(null,cm,";; ");

paredit_cm.core.delete_to_end_of_line.call(null,cm);

return paredit_cm.core.indent_current_line.call(null,cm);
});
/**
 * creates and indents a ;; comment on a new line
 */
paredit_cm.core.new_line_and_comment = (function paredit_cm$core$new_line_and_comment(cm){
paredit_cm.core.indent_current_line.call(null,cm);

paredit_cm.core.insert.call(null,cm,"\n\n");

cm.execCommand("goLineDown");

cm.execCommand("goLineDown");

paredit_cm.core.indent_current_line.call(null,cm);

cm.execCommand("goLineUp");

return paredit_cm.core.create_line_comment.call(null,cm);
});
/**
 * creates and indents a ;; comment on this line
 */
paredit_cm.core.insert_line_comment_here = (function paredit_cm$core$insert_line_comment_here(cm){
paredit_cm.core.insert.call(null,cm,"\n");

cm.execCommand("goLineDown");

paredit_cm.core.indent_current_line.call(null,cm);

cm.execCommand("goLineUp");

return paredit_cm.core.create_line_comment.call(null,cm);
});
/**
 * returns true if token is in the middle of code. assumes you've already ruled
 *   out comments.
 */
paredit_cm.core.in_code_QMARK_ = (function paredit_cm$core$in_code_QMARK_(cm){
var map__13215 = paredit_cm.core.get_info.call(null,cm);
var map__13215__$1 = cljs.core.__destructure_map.call(null,map__13215);
var type = cljs.core.get.call(null,map__13215__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var start = cljs.core.get.call(null,map__13215__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__13215__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var ch = cljs.core.get.call(null,map__13215__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
return (((start < ch)) && ((((ch < end)) && ((!((type == null)))))));
});
/**
 * returns true if token is to the right of whitespace
 */
paredit_cm.core.in_whitespace_QMARK_ = (function paredit_cm$core$in_whitespace_QMARK_(cm){
return (paredit_cm.core.get_type.call(null,cm) == null);
});
/**
 * returns true if there's any code to the left of cursor. assumes you've
 *   already ruled out comments so only looks for non nil tokens
 */
paredit_cm.core.code_to_left_QMARK_ = (function paredit_cm$core$code_to_left_QMARK_(cm){
var cur = paredit_cm.core.cursor.call(null,cm);
var toks = cm.getLineTokens(cur.line);
var ch = cur.ch;
var code = cljs.core.map.call(null,(function (p1__13216_SHARP_){
return (((!((p1__13216_SHARP_.type == null)))) && ((((p1__13216_SHARP_.end <= ch)) || ((((p1__13216_SHARP_.start < ch)) && ((ch < p1__13216_SHARP_.end)))))));
}),toks);
var and__5000__auto__ = cljs.core.seq.call(null,toks);
if(and__5000__auto__){
return cljs.core.some.call(null,cljs.core.true_QMARK_,code);
} else {
return and__5000__auto__;
}
});
paredit_cm.core.comment_dwim = (function paredit_cm$core$comment_dwim(cm){
if(cljs.core.truth_(paredit_cm.core.selection_completely_whitespace_QMARK_.call(null,cm))){
return new cljs.core.Keyword(null,"do-nothing","do-nothing",1030476282);
} else {
if(cljs.core.truth_(paredit_cm.core.selection_completely_non_code_QMARK_.call(null,cm))){
return paredit_cm.core.uncomment_selection.call(null,cm);
} else {
if(cljs.core.truth_(cm.somethingSelected())){
return paredit_cm.core.comment_selection.call(null,cm);
} else {
if(paredit_cm.core.line_ends_with_comment_QMARK_.call(null,cm)){
return paredit_cm.core.go_to_comment_and_indent.call(null,cm);
} else {
if(cljs.core.truth_(paredit_cm.core.betw_code_and_line_end_QMARK_.call(null,cm))){
return paredit_cm.core.create_comment_at_end.call(null,cm);
} else {
if(paredit_cm.core.in_code_QMARK_.call(null,cm)){
return paredit_cm.core.create_comment_at_end.call(null,cm);
} else {
if(cljs.core.truth_(paredit_cm.core.in_string_QMARK_.call(null,cm))){
return paredit_cm.core.create_comment_at_end.call(null,cm);
} else {
if(paredit_cm.core.line_is_whitespace_QMARK_.call(null,cm)){
return paredit_cm.core.create_line_comment.call(null,cm);
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = paredit_cm.core.code_to_left_QMARK_.call(null,cm);
if(cljs.core.truth_(and__5000__auto__)){
return paredit_cm.core.in_whitespace_QMARK_.call(null,cm);
} else {
return and__5000__auto__;
}
})())){
return paredit_cm.core.new_line_and_comment.call(null,cm);
} else {
if(paredit_cm.core.in_whitespace_QMARK_.call(null,cm)){
return paredit_cm.core.insert_line_comment_here.call(null,cm);
} else {
return new cljs.core.Keyword(null,"do-nothing","do-nothing",1030476282);

}
}
}
}
}
}
}
}
}
}
});
goog.exportSymbol('paredit_cm.core.comment_dwim', paredit_cm.core.comment_dwim);
/**
 * delete 1 or n char to left
 */
paredit_cm.core.backspace = (function paredit_cm$core$backspace(var_args){
var G__13219 = arguments.length;
switch (G__13219) {
case 1:
return paredit_cm.core.backspace.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.backspace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(paredit_cm.core.backspace.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.backspace.call(null,cm,(1));
}));

(paredit_cm.core.backspace.cljs$core$IFn$_invoke$arity$2 = (function (cm,n){
var _n = (function (p1__13217_SHARP_){
return (p1__13217_SHARP_ - n);
});
var cur = paredit_cm.core.cursor.call(null,cm);
var cur0 = paredit_cm.core.cursor.call(null,cm,_n.call(null,paredit_cm.core.index.call(null,cm,cur)));
return cm.replaceRange("",cur0,cur);
}));

(paredit_cm.core.backspace.cljs$lang$maxFixedArity = 2);

/**
 * true if this position would be whitespace if we pressed the spacebar.
 */
paredit_cm.core.right_cur_would_be_whitespace_QMARK_ = (function paredit_cm$core$right_cur_would_be_whitespace_QMARK_(cm,cur,right_cur){
var original_cur = paredit_cm.core.cursor.call(null,cm);
var _ = paredit_cm.core.insert.call(null,cm," ",(0),cur);
var answer = (paredit_cm.core.get_type.call(null,cm,right_cur) == null);
paredit_cm.core.backspace.call(null,cm);

cm.setCursor(original_cur);

return answer;
});
/**
 * returns true for closing brackets and for closing double-quotes
 */
paredit_cm.core.closing_delim_QMARK_ = (function paredit_cm$core$closing_delim_QMARK_(cm,cur){
var map__13221 = paredit_cm.core.get_info.call(null,cm,cur);
var map__13221__$1 = cljs.core.__destructure_map.call(null,map__13221);
var string = cljs.core.get.call(null,map__13221__$1,new cljs.core.Keyword(null,"string","string",-1989541586));
var type = cljs.core.get.call(null,map__13221__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var left_char = cljs.core.get.call(null,map__13221__$1,new cljs.core.Keyword(null,"left-char","left-char",509989355));
var right_cur = cljs.core.get.call(null,map__13221__$1,new cljs.core.Keyword(null,"right-cur","right-cur",1689901919));
var or__5002__auto__ = (function (){var and__5000__auto__ = paredit_cm.core.is_bracket_type_QMARK_.call(null,type);
if(cljs.core.truth_(and__5000__auto__)){
return paredit_cm.core.closer_QMARK_.call(null,left_char);
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return ((cljs.core._EQ_.call(null,type,"string")) && (((cljs.core._EQ_.call(null,"\"",left_char)) && (paredit_cm.core.right_cur_would_be_whitespace_QMARK_.call(null,cm,cur,right_cur)))));
}
});
/**
 * returns true if cur is just to the right of an opening doublequote
 */
paredit_cm.core.opening_doublequote_QMARK_ = (function paredit_cm$core$opening_doublequote_QMARK_(var_args){
var G__13223 = arguments.length;
switch (G__13223) {
case 2:
return paredit_cm.core.opening_doublequote_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return paredit_cm.core.opening_doublequote_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(paredit_cm.core.opening_doublequote_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
var map__13224 = paredit_cm.core.get_info.call(null,cm,cur);
var map__13224__$1 = cljs.core.__destructure_map.call(null,map__13224);
var type = cljs.core.get.call(null,map__13224__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var left_char = cljs.core.get.call(null,map__13224__$1,new cljs.core.Keyword(null,"left-char","left-char",509989355));
var right_cur = cljs.core.get.call(null,map__13224__$1,new cljs.core.Keyword(null,"right-cur","right-cur",1689901919));
return paredit_cm.core.opening_doublequote_QMARK_.call(null,cm,type,left_char,right_cur);
}));

(paredit_cm.core.opening_doublequote_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (cm,type,left_char,right_cur){
var and__5000__auto__ = cljs.core._EQ_.call(null,type,"string");
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.call(null,"\"",left_char);
if(and__5000__auto____$1){
var and__5000__auto____$2 = right_cur;
if(cljs.core.truth_(and__5000__auto____$2)){
return cljs.core._EQ_.call(null,"string",paredit_cm.core.get_type.call(null,cm,right_cur));
} else {
return and__5000__auto____$2;
}
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}));

(paredit_cm.core.opening_doublequote_QMARK_.cljs$lang$maxFixedArity = 4);

/**
 * returns true if cur is just to the right of a closing doublequote
 */
paredit_cm.core.closing_doublequote_QMARK_ = (function paredit_cm$core$closing_doublequote_QMARK_(cm,cur){
var map__13226 = paredit_cm.core.get_info.call(null,cm,cur);
var map__13226__$1 = cljs.core.__destructure_map.call(null,map__13226);
var type = cljs.core.get.call(null,map__13226__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var left_char = cljs.core.get.call(null,map__13226__$1,new cljs.core.Keyword(null,"left-char","left-char",509989355));
var right_cur = cljs.core.get.call(null,map__13226__$1,new cljs.core.Keyword(null,"right-cur","right-cur",1689901919));
var right_type = paredit_cm.core.get_type.call(null,cm,right_cur);
return ((cljs.core._EQ_.call(null,type,"string")) && (((cljs.core._EQ_.call(null,"\"",left_char)) && (cljs.core.not_EQ_.call(null,right_type,"string")))));
});
/**
 * returns true for opening brackets and for opening double-quotes
 */
paredit_cm.core.opening_delim_QMARK_ = (function paredit_cm$core$opening_delim_QMARK_(cm,cur){
var map__13227 = paredit_cm.core.get_info.call(null,cm,cur);
var map__13227__$1 = cljs.core.__destructure_map.call(null,map__13227);
var string = cljs.core.get.call(null,map__13227__$1,new cljs.core.Keyword(null,"string","string",-1989541586));
var type = cljs.core.get.call(null,map__13227__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var left_char = cljs.core.get.call(null,map__13227__$1,new cljs.core.Keyword(null,"left-char","left-char",509989355));
var right_cur = cljs.core.get.call(null,map__13227__$1,new cljs.core.Keyword(null,"right-cur","right-cur",1689901919));
var or__5002__auto__ = (function (){var and__5000__auto__ = paredit_cm.core.is_bracket_type_QMARK_.call(null,type);
if(cljs.core.truth_(and__5000__auto__)){
return paredit_cm.core.opener_QMARK_.call(null,left_char);
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return paredit_cm.core.opening_doublequote_QMARK_.call(null,cm,type,left_char,right_cur);
}
});
/**
 * returns true for an opening bracket of an empty pair ()
 */
paredit_cm.core.opening_delim_for_empty_pair_QMARK_ = (function paredit_cm$core$opening_delim_for_empty_pair_QMARK_(cm,cur){
var map__13228 = paredit_cm.core.get_info.call(null,cm,cur);
var map__13228__$1 = cljs.core.__destructure_map.call(null,map__13228);
var left_char = cljs.core.get.call(null,map__13228__$1,new cljs.core.Keyword(null,"left-char","left-char",509989355));
var right_char = cljs.core.get.call(null,map__13228__$1,new cljs.core.Keyword(null,"right-char","right-char",-1500850071));
var right_cur = cljs.core.get.call(null,map__13228__$1,new cljs.core.Keyword(null,"right-cur","right-cur",1689901919));
var and__5000__auto__ = paredit_cm.core.opening_delim_QMARK_.call(null,cm,cur);
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = right_cur;
if(cljs.core.truth_(and__5000__auto____$1)){
var and__5000__auto____$2 = paredit_cm.core.closing_delim_QMARK_.call(null,cm,right_cur);
if(cljs.core.truth_(and__5000__auto____$2)){
return paredit_cm.core.pair_QMARK_.call(null,left_char,right_char);
} else {
return and__5000__auto____$2;
}
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
});
/**
 * returns true for an opening bracket of a pair that contains one or more
 *   chars.
 */
paredit_cm.core.opening_delim_for_non_empty_pair_QMARK_ = (function paredit_cm$core$opening_delim_for_non_empty_pair_QMARK_(cm){
var map__13229 = paredit_cm.core.get_info.call(null,cm);
var map__13229__$1 = cljs.core.__destructure_map.call(null,map__13229);
var left_char = cljs.core.get.call(null,map__13229__$1,new cljs.core.Keyword(null,"left-char","left-char",509989355));
var right_char = cljs.core.get.call(null,map__13229__$1,new cljs.core.Keyword(null,"right-char","right-char",-1500850071));
var cur = cljs.core.get.call(null,map__13229__$1,new cljs.core.Keyword(null,"cur","cur",1153190599));
var and__5000__auto__ = paredit_cm.core.opening_delim_QMARK_.call(null,cm,cur);
if(cljs.core.truth_(and__5000__auto__)){
return (!(paredit_cm.core.pair_QMARK_.call(null,left_char,right_char)));
} else {
return and__5000__auto__;
}
});
/**
 * moves the cursor by 'offset' places, negative for left. returns the cursor.
 */
paredit_cm.core.move = (function paredit_cm$core$move(cm,offset){
cm.setCursor(paredit_cm.core.cursor.call(null,cm,(offset + paredit_cm.core.index.call(null,cm))));

return paredit_cm.core.cursor.call(null,cm);
});
/**
 * delete 1 or n char to right
 */
paredit_cm.core.delete$ = (function paredit_cm$core$delete(var_args){
var G__13232 = arguments.length;
switch (G__13232) {
case 1:
return paredit_cm.core.delete$.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.delete$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(paredit_cm.core.delete$.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.delete$.call(null,cm,(1));
}));

(paredit_cm.core.delete$.cljs$core$IFn$_invoke$arity$2 = (function (cm,n){
var _PLUS_n = (function (p1__13230_SHARP_){
return (p1__13230_SHARP_ + n);
});
var cur = paredit_cm.core.cursor.call(null,cm);
var cur2 = paredit_cm.core.cursor.call(null,cm,_PLUS_n.call(null,paredit_cm.core.index.call(null,cm,cur)));
return cm.replaceRange("",cur,cur2);
}));

(paredit_cm.core.delete$.cljs$lang$maxFixedArity = 2);

/**
 * returns true if cursor indicates whitespace
 */
paredit_cm.core.whitespace_QMARK_ = (function paredit_cm$core$whitespace_QMARK_(cm,cur){
var info = paredit_cm.core.get_info.call(null,cm,cur);
return (((!((info == null)))) && ((new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(info) == null)));
});
/**
 * true if cursor info indicates opening/closing bracket or quote
 */
paredit_cm.core.bracket_QMARK_ = (function paredit_cm$core$bracket_QMARK_(cm,cur){
var map__13234 = paredit_cm.core.get_info.call(null,cm,cur);
var map__13234__$1 = cljs.core.__destructure_map.call(null,map__13234);
var info = map__13234__$1;
var type = cljs.core.get.call(null,map__13234__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var left_char = cljs.core.get.call(null,map__13234__$1,new cljs.core.Keyword(null,"left-char","left-char",509989355));
var or__5002__auto__ = paredit_cm.core.is_bracket_type_QMARK_.call(null,type);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return ((cljs.core._EQ_.call(null,"string",type)) && (cljs.core._EQ_.call(null,"\"",left_char)));
}
});
/**
 * assumes a pair of brackets surround the cursor. selects the pair.
 */
paredit_cm.core.select_pair = (function paredit_cm$core$select_pair(cm){
var i = paredit_cm.core.index.call(null,cm,paredit_cm.core.cursor.call(null,cm));
var c1 = paredit_cm.core.cursor.call(null,cm,(i - (1)));
var c2 = paredit_cm.core.cursor.call(null,cm,(i + (1)));
return cm.setSelection(c1,c2);
});
paredit_cm.core.delete_selection = (function paredit_cm$core$delete_selection(cm){
return cm.replaceSelection("");
});
/**
 * assumes a pair of brackets surround the cursor. deletes the pair.
 */
paredit_cm.core.delete_pair = (function paredit_cm$core$delete_pair(cm){
paredit_cm.core.backspace.call(null,cm);

return paredit_cm.core.delete$.call(null,cm);
});
paredit_cm.core.move_right = (function paredit_cm$core$move_right(cm){
return paredit_cm.core.move.call(null,cm,(1));
});
paredit_cm.core.move_left = (function paredit_cm$core$move_left(cm){
return paredit_cm.core.move.call(null,cm,(-1));
});
/**
 * paredit-forward-delete exposed for keymap
 */
paredit_cm.core.forward_delete = (function paredit_cm$core$forward_delete(cm){
var map__13235 = paredit_cm.core.get_info.call(null,cm);
var map__13235__$1 = cljs.core.__destructure_map.call(null,map__13235);
var info = map__13235__$1;
var cur = cljs.core.get.call(null,map__13235__$1,new cljs.core.Keyword(null,"cur","cur",1153190599));
var right_cur = cljs.core.get.call(null,map__13235__$1,new cljs.core.Keyword(null,"right-cur","right-cur",1689901919));
if(cljs.core.truth_(cm.somethingSelected())){
return paredit_cm.core.delete_selection.call(null,cm);
} else {
if(paredit_cm.core.whitespace_QMARK_.call(null,cm,right_cur)){
return paredit_cm.core.delete$.call(null,cm);
} else {
if(cljs.core.not.call(null,paredit_cm.core.bracket_QMARK_.call(null,cm,right_cur))){
return paredit_cm.core.delete$.call(null,cm);
} else {
if(cljs.core.truth_(paredit_cm.core.opening_delim_QMARK_.call(null,cm,right_cur))){
return paredit_cm.core.move_right.call(null,cm);
} else {
if(cljs.core.truth_(paredit_cm.core.opening_delim_for_empty_pair_QMARK_.call(null,cm,cur))){
return paredit_cm.core.delete_pair.call(null,cm);
} else {
return new cljs.core.Keyword(null,"do-nothing","do-nothing",1030476282);

}
}
}
}
}
});
goog.exportSymbol('paredit_cm.core.forward_delete', paredit_cm.core.forward_delete);
/**
 * paredit backward delete exposed for keymap
 */
paredit_cm.core.backward_delete = (function paredit_cm$core$backward_delete(cm){
var cur = paredit_cm.core.cursor.call(null,cm);
if(cljs.core.truth_(cm.somethingSelected())){
return paredit_cm.core.delete_selection.call(null,cm);
} else {
if(cljs.core.truth_(paredit_cm.core.in_escaped_char_QMARK_.call(null,cm,cur))){
return paredit_cm.core.delete_pair.call(null,cm);
} else {
if(paredit_cm.core.escaped_char_to_left_QMARK_.call(null,cm,cur)){
return paredit_cm.core.backspace.call(null,cm,(2));
} else {
if(cljs.core.truth_(paredit_cm.core.opening_delim_for_non_empty_pair_QMARK_.call(null,cm))){
return new cljs.core.Keyword(null,"do-nothing","do-nothing",1030476282);
} else {
if(cljs.core.truth_(paredit_cm.core.opening_delim_for_empty_pair_QMARK_.call(null,cm,cur))){
return paredit_cm.core.delete_pair.call(null,cm);
} else {
if(cljs.core.truth_(paredit_cm.core.closing_delim_QMARK_.call(null,cm,cur))){
return paredit_cm.core.move_left.call(null,cm);
} else {
return paredit_cm.core.backspace.call(null,cm);

}
}
}
}
}
}
});
goog.exportSymbol('paredit_cm.core.backward_delete', paredit_cm.core.backward_delete);
/**
 * returns true if token is in the middle of a string.
 */
paredit_cm.core.in_regular_string_QMARK_ = (function paredit_cm$core$in_regular_string_QMARK_(cm,cur){
var or__5002__auto__ = paredit_cm.core.opening_doublequote_QMARK_.call(null,cm,cur);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return ((cljs.core._EQ_.call(null,"string",paredit_cm.core.get_type.call(null,cm,cur))) && ((!(paredit_cm.core.closing_doublequote_QMARK_.call(null,cm,cur)))));
}
});
/**
 * true if these values are from a string token that ends on another line
 */
paredit_cm.core.str_ends_on_another_line_QMARK_ = (function paredit_cm$core$str_ends_on_another_line_QMARK_(type,string){
return ((cljs.core._EQ_.call(null,"string",type)) && (cljs.core.not_EQ_.call(null,"\"",cljs.core.last.call(null,string))));
});
/**
 * moves cursor to end of the string you're in (but still inside the
 *   closing doublequote). assumes you're in a string. the end could be
 *   on a different line from where you start
 */
paredit_cm.core.go_to_end_of_string = (function paredit_cm$core$go_to_end_of_string(var_args){
var G__13237 = arguments.length;
switch (G__13237) {
case 1:
return paredit_cm.core.go_to_end_of_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.go_to_end_of_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(paredit_cm.core.go_to_end_of_string.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.go_to_end_of_string.call(null,cm,paredit_cm.core.cursor.call(null,cm));
}));

(paredit_cm.core.go_to_end_of_string.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
var map__13238 = paredit_cm.core.get_info.call(null,cm,cur);
var map__13238__$1 = cljs.core.__destructure_map.call(null,map__13238);
var left_char = cljs.core.get.call(null,map__13238__$1,new cljs.core.Keyword(null,"left-char","left-char",509989355));
var right_cur = cljs.core.get.call(null,map__13238__$1,new cljs.core.Keyword(null,"right-cur","right-cur",1689901919));
var type = cljs.core.get.call(null,map__13238__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var string = cljs.core.get.call(null,map__13238__$1,new cljs.core.Keyword(null,"string","string",-1989541586));
var ch = cljs.core.get.call(null,map__13238__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var end = cljs.core.get.call(null,map__13238__$1,new cljs.core.Keyword(null,"end","end",-268185958));
if((type == null)){
return paredit_cm.core.go_to_end_of_string.call(null,cm,right_cur);
} else {
if(paredit_cm.core.str_ends_on_another_line_QMARK_.call(null,type,string)){
paredit_cm.core.move_to_end_of_line.call(null,cm,cur);

paredit_cm.core.move.call(null,cm,(2));

return paredit_cm.core.go_to_end_of_string.call(null,cm);
} else {
if(cljs.core.truth_(paredit_cm.core.opening_doublequote_QMARK_.call(null,cm,type,left_char,right_cur))){
paredit_cm.core.move.call(null,cm,(1));

return paredit_cm.core.go_to_end_of_string.call(null,cm);
} else {
if(cljs.core._EQ_.call(null,"string",type)){
return paredit_cm.core.move.call(null,cm,((end - ch) - (1)));
} else {
return cur;

}
}
}
}
}));

(paredit_cm.core.go_to_end_of_string.cljs$lang$maxFixedArity = 2);

/**
 * assumes you are in a string.
 */
paredit_cm.core.select_rest_of_string = (function paredit_cm$core$select_rest_of_string(cm){
var c1 = paredit_cm.core.cursor.call(null,cm);
var c2 = paredit_cm.core.go_to_end_of_string.call(null,cm,c1);
return cm.setSelection(c1,c2);
});
/**
 * true if code is to the left and whitespace* comment* is to the right.
 */
paredit_cm.core.betw_code_and_comment_QMARK_ = (function paredit_cm$core$betw_code_and_comment_QMARK_(cm,cur){
if(cljs.core.truth_(cur)){
var toks = cm.getLineTokens(cur.line);
var ch = cur.ch;
var tests = cljs.core.map.call(null,(function (p1__13240_SHARP_){
return (((p1__13240_SHARP_.end <= ch)) || ((((p1__13240_SHARP_.type == null)) || (cljs.core._EQ_.call(null,"comment",p1__13240_SHARP_.type)))));
}),toks);
var and__5000__auto__ = cljs.core.seq.call(null,toks);
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core.every_QMARK_.call(null,cljs.core.true_QMARK_,tests);
if(and__5000__auto____$1){
return cljs.core.some.call(null,(function (p1__13241_SHARP_){
return (!((p1__13241_SHARP_.type == null)));
}),toks);
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
} else {
return null;
}
});
paredit_cm.core.rest_of_siblings = (function paredit_cm$core$rest_of_siblings(cm){
var c1 = paredit_cm.core.cursor.call(null,cm);
var parent_closer = paredit_cm.core.skip.call(null,cm,paredit_cm.core.parent_closer_sp);
var c2 = (cljs.core.truth_(parent_closer)?paredit_cm.core.cursor.call(null,cm,(paredit_cm.core.index.call(null,cm,parent_closer) - (1))):null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2], null);
});
paredit_cm.core.select_rest_of_siblings = (function paredit_cm$core$select_rest_of_siblings(cm){
var vec__13242 = paredit_cm.core.rest_of_siblings.call(null,cm);
var c1 = cljs.core.nth.call(null,vec__13242,(0),null);
var c2 = cljs.core.nth.call(null,vec__13242,(1),null);
var c1__$1 = paredit_cm.core.cursor.call(null,cm);
if(cljs.core.truth_(c2)){
return cm.setSelection(c1__$1,c2);
} else {
return null;
}
});
paredit_cm.core.kill_from_to = (function paredit_cm$core$kill_from_to(cm,i,j){
var cur = paredit_cm.core.cursor.call(null,cm,i);
CodeMirror.emacs.kill(cm,cur,paredit_cm.core.cursor.call(null,cm,j));

return cm.setCursor(cur);
});
paredit_cm.core.kill_region = (function paredit_cm$core$kill_region(cm){
var first_sel = cljs.core.first.call(null,cm.listSelections());
var anchor = first_sel.anchor;
var head = first_sel.head;
return CodeMirror.emacs.kill(cm,anchor,head);
});
/**
 * assumes a pair of brackets surround the cursor. deletes the pair.
 */
paredit_cm.core.kill_pair = (function paredit_cm$core$kill_pair(cm){
paredit_cm.core.select_pair.call(null,cm);

return paredit_cm.core.kill_region.call(null,cm);
});
paredit_cm.core.kill_rest_of_string = (function paredit_cm$core$kill_rest_of_string(cm){
paredit_cm.core.select_rest_of_string.call(null,cm);

return paredit_cm.core.kill_region.call(null,cm);
});
paredit_cm.core.kill_rest_of_line = (function paredit_cm$core$kill_rest_of_line(cm){
paredit_cm.core.select_rest_of_line.call(null,cm);

return paredit_cm.core.kill_region.call(null,cm);
});
paredit_cm.core.kill_rest_of_siblings = (function paredit_cm$core$kill_rest_of_siblings(cm){
paredit_cm.core.select_rest_of_siblings.call(null,cm);

return paredit_cm.core.kill_region.call(null,cm);
});
/**
 * kills the next sibling to the right of the cursor
 */
paredit_cm.core.kill_next_sibling = (function paredit_cm$core$kill_next_sibling(cm){
var from = paredit_cm.core.cursor.call(null,cm);
var mid = paredit_cm.core.end_of_next_sibling.call(null,cm,from);
var to = (cljs.core.truth_(paredit_cm.core.betw_code_and_comment_QMARK_.call(null,cm,mid))?paredit_cm.core.last_cur.call(null,cm,mid):mid);
if(cljs.core.truth_(to)){
cm.setSelection(from,to);

return paredit_cm.core.kill_region.call(null,cm);
} else {
return null;
}
});
/**
 * paredit kill exposed for keymap.
 */
paredit_cm.core.kill = (function paredit_cm$core$kill(cm){
var cur = paredit_cm.core.cursor.call(null,cm);
if(cljs.core.truth_(cm.somethingSelected())){
return paredit_cm.core.kill_region.call(null,cm);
} else {
if(cljs.core.truth_(paredit_cm.core.in_regular_string_QMARK_.call(null,cm,cur))){
return paredit_cm.core.kill_rest_of_string.call(null,cm);
} else {
if(cljs.core.truth_(paredit_cm.core.betw_code_and_comment_QMARK_.call(null,cm,cur))){
return paredit_cm.core.kill_rest_of_line.call(null,cm);
} else {
if(cljs.core.truth_(paredit_cm.core.in_escaped_char_QMARK_.call(null,cm,cur))){
return paredit_cm.core.kill_pair.call(null,cm);
} else {
if(cljs.core.truth_(paredit_cm.core.code_to_left_QMARK_.call(null,cm))){
return paredit_cm.core.kill_rest_of_siblings.call(null,cm);
} else {
return paredit_cm.core.kill_next_sibling.call(null,cm);

}
}
}
}
}
});
goog.exportSymbol('paredit_cm.core.kill', paredit_cm.core.kill);
paredit_cm.core.comment_QMARK_ = (function paredit_cm$core$comment_QMARK_(cm,cur){
return cljs.core._EQ_.call(null,"comment",paredit_cm.core.get_type.call(null,cm,cur));
});
/**
 * true if block cursor is on the first ; of a line comment
 */
paredit_cm.core.start_of_comment_QMARK_ = (function paredit_cm$core$start_of_comment_QMARK_(cm,cur){
var map__13245 = paredit_cm.core.get_info.call(null,cm,cur);
var map__13245__$1 = cljs.core.__destructure_map.call(null,map__13245);
var type = cljs.core.get.call(null,map__13245__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var right_cur = cljs.core.get.call(null,map__13245__$1,new cljs.core.Keyword(null,"right-cur","right-cur",1689901919));
var right_type = paredit_cm.core.get_type.call(null,cm,right_cur);
return ((cljs.core.not_EQ_.call(null,"comment",type)) && (cljs.core._EQ_.call(null,"comment right-type")));
});
paredit_cm.core.idx_of_next = (function paredit_cm$core$idx_of_next(cm,i,chars,member,max){
var map__13246 = paredit_cm.core.get_info.call(null,cm,paredit_cm.core.cursor.call(null,cm,i));
var map__13246__$1 = cljs.core.__destructure_map.call(null,map__13246);
var right_char = cljs.core.get.call(null,map__13246__$1,new cljs.core.Keyword(null,"right-char","right-char",-1500850071));
if(cljs.core._EQ_.call(null,i,max)){
return paredit_cm.core.guard.call(null);
} else {
if(cljs.core._EQ_.call(null,member,cljs.core.contains_QMARK_.call(null,chars,right_char))){
return i;
} else {
return (function (){
return paredit_cm.core.idx_of_next.call(null,cm,(i + (1)),chars,member,max);
});

}
}
});
paredit_cm.core.index_of_next = (function paredit_cm$core$index_of_next(cm,i,chars){
return cljs.core.trampoline.call(null,paredit_cm.core.idx_of_next,cm,i,chars,true,paredit_cm.core.char_count.call(null,cm));
});
paredit_cm.core.index_of_next_non = (function paredit_cm$core$index_of_next_non(cm,i,chars){
return cljs.core.trampoline.call(null,paredit_cm.core.idx_of_next,cm,i,chars,false,paredit_cm.core.char_count.call(null,cm));
});
paredit_cm.core.non_word_chars = cljs.core.set.call(null,"(){}[]|&; \n");
paredit_cm.core.comment_start = cljs.core.set.call(null,"; ");
paredit_cm.core.semicolons = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [";",null], null), null);
paredit_cm.core.comment_whitespace = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [" ",null,"\t",null], null), null);
/**
 * assumes i is in a comment or a string. returns the i at the end of
 *   the next word (going to the right) in this comment/string
 */
paredit_cm.core.end_of_next_word = (function paredit_cm$core$end_of_next_word(cm,i){
var map__13247 = paredit_cm.core.get_info.call(null,cm,paredit_cm.core.cursor.call(null,cm,i));
var map__13247__$1 = cljs.core.__destructure_map.call(null,map__13247);
var ch = cljs.core.get.call(null,map__13247__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var start = cljs.core.get.call(null,map__13247__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var string = cljs.core.get.call(null,map__13247__$1,new cljs.core.Keyword(null,"string","string",-1989541586));
var tail = cljs.core.subs.call(null,string,(ch - start));
var word = cljs.core.re_find.call(null,/^\s*[\S]*/,tail);
var length = cljs.core.count.call(null,word);
var quote = ((clojure.string.ends_with_QMARK_.call(null,word,"\""))?(-1):(0));
return ((i + length) + quote);
});
/**
 * assumes i is in a comment or a string. returns the i at the start of
 *   the prev word (going to the left) in this comment/string
 */
paredit_cm.core.start_of_prev_word = (function paredit_cm$core$start_of_prev_word(cm,i){
var map__13248 = paredit_cm.core.get_info.call(null,cm,paredit_cm.core.cursor.call(null,cm,i));
var map__13248__$1 = cljs.core.__destructure_map.call(null,map__13248);
var ch = cljs.core.get.call(null,map__13248__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var start = cljs.core.get.call(null,map__13248__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var string = cljs.core.get.call(null,map__13248__$1,new cljs.core.Keyword(null,"string","string",-1989541586));
var head = cljs.core.subs.call(null,string,(0),(ch - start));
var last_word = cljs.core.re_find.call(null,/[\S]*\s*$/,head);
var length = cljs.core.count.call(null,last_word);
var quote = ((clojure.string.ends_with_QMARK_.call(null,last_word,"\""))?(1):(0));
return ((i - length) - quote);
});
/**
 * assumes i is in a comment or a string. kills text from i to the end
 *   of the next word in this comment/string
 */
paredit_cm.core.kill_next_word = (function paredit_cm$core$kill_next_word(cm,i){
paredit_cm.core.kill_from_to.call(null,cm,i,paredit_cm.core.end_of_next_word.call(null,cm,(i + (1))));

return cm.setCursor(paredit_cm.core.cursor.call(null,cm,i));
});
/**
 * trampoline helper for forward-kill-word. 'mark' is the index to start killing
 *   from. 'i' is the index we're inspecting. 'n' is how many calls remaining that
 *   we'll support before stopping because of a suspected infinite loop. first call
 *   can put the count of characters in this cm instance.
 */
paredit_cm.core.fwd_kill_word = (function paredit_cm$core$fwd_kill_word(cm,mark,i,n){
var m = (n - (1));
var j = (i + (1));
var cur = paredit_cm.core.cursor.call(null,cm,i);
var right_cur = paredit_cm.core.cursor.call(null,cm,j);
if((n < (0))){
return paredit_cm.core.guard.call(null);
} else {
if(paredit_cm.core.eof_QMARK_.call(null,cm,right_cur)){
return new cljs.core.Keyword(null,"do-nothing","do-nothing",1030476282);
} else {
if(paredit_cm.core.whitespace_QMARK_.call(null,cm,right_cur)){
return (function (){
return paredit_cm.core.fwd_kill_word.call(null,cm,mark,paredit_cm.core.token_end_index.call(null,cm,j),m);
});
} else {
if(paredit_cm.core.start_of_a_string_QMARK_.call(null,cm,right_cur)){
return (function (){
return paredit_cm.core.fwd_kill_word.call(null,cm,j,j,m);
});
} else {
if(cljs.core.truth_(paredit_cm.core.in_regular_string_QMARK_.call(null,cm,right_cur))){
return paredit_cm.core.kill_next_word.call(null,cm,mark);
} else {
if(cljs.core.truth_(paredit_cm.core.opening_delim_QMARK_.call(null,cm,right_cur))){
return (function (){
return paredit_cm.core.fwd_kill_word.call(null,cm,j,j,m);
});
} else {
if(cljs.core.truth_(paredit_cm.core.closing_delim_QMARK_.call(null,cm,right_cur))){
return (function (){
return paredit_cm.core.fwd_kill_word.call(null,cm,j,j,m);
});
} else {
if(paredit_cm.core.at_a_word_QMARK_.call(null,cm,right_cur)){
return paredit_cm.core.kill_from_to.call(null,cm,mark,paredit_cm.core.token_end_index.call(null,cm,j));
} else {
if(paredit_cm.core.start_of_comment_QMARK_.call(null,cm,cur)){
var j__$1 = paredit_cm.core.index_of_next_non.call(null,cm,i,paredit_cm.core.semicolons);
return (function (){
return paredit_cm.core.fwd_kill_word.call(null,cm,j__$1,j__$1,m);
});
} else {
if(paredit_cm.core.comment_QMARK_.call(null,cm,right_cur)){
return paredit_cm.core.kill_next_word.call(null,cm,mark);
} else {
return cljs.core.println.call(null,"unhandled");

}
}
}
}
}
}
}
}
}
}
});
/**
 * paredit forward-kill-word exposed for keymap.
 */
paredit_cm.core.forward_kill_word = (function paredit_cm$core$forward_kill_word(cm){
var i = paredit_cm.core.index.call(null,cm);
return cljs.core.trampoline.call(null,paredit_cm.core.fwd_kill_word,cm,i,i,paredit_cm.core.char_count.call(null,cm));
});
goog.exportSymbol('paredit_cm.core.forward_kill_word', paredit_cm.core.forward_kill_word);
paredit_cm.core.start_of_token_at = (function paredit_cm$core$start_of_token_at(cm,i){
var map__13249 = paredit_cm.core.get_info.call(null,cm,paredit_cm.core.cursor.call(null,cm,i));
var map__13249__$1 = cljs.core.__destructure_map.call(null,map__13249);
var ch = cljs.core.get.call(null,map__13249__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var start = cljs.core.get.call(null,map__13249__$1,new cljs.core.Keyword(null,"start","start",-355208981));
return (i - (ch - start));
});
/**
 * assumes i is in a comment. kills text from i to the beginning of the previous
 *   word in this comment
 */
paredit_cm.core.kill_prev_word_in_comment = (function paredit_cm$core$kill_prev_word_in_comment(cm,i){
var map__13250 = paredit_cm.core.get_info.call(null,cm,paredit_cm.core.cursor.call(null,cm,i));
var map__13250__$1 = cljs.core.__destructure_map.call(null,map__13250);
var ch = cljs.core.get.call(null,map__13250__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var start = cljs.core.get.call(null,map__13250__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var string = cljs.core.get.call(null,map__13250__$1,new cljs.core.Keyword(null,"string","string",-1989541586));
var cur_offset_in_string = (ch - start);
var head = cljs.core.subs.call(null,string,(0),cur_offset_in_string);
var tail = cljs.core.subs.call(null,string,cur_offset_in_string);
var word = cljs.core.re_find.call(null,/\S*\s*$/,head);
var length = cljs.core.count.call(null,word);
paredit_cm.core.kill_from_to.call(null,cm,(i - length),i);

return cm.setCursor(paredit_cm.core.cursor.call(null,cm,(i - length)));
});
paredit_cm.core.beginning_of_line_QMARK_ = (function paredit_cm$core$beginning_of_line_QMARK_(cm,cur){
var map__13251 = paredit_cm.core.get_info.call(null,cm,cur);
var map__13251__$1 = cljs.core.__destructure_map.call(null,map__13251);
var info = map__13251__$1;
var start = cljs.core.get.call(null,map__13251__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__13251__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var type = cljs.core.get.call(null,map__13251__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return (((!((info == null)))) && ((((type == null)) && (cljs.core._EQ_.call(null,start,end,(0))))));
});
paredit_cm.core.bkwd_kill_skippable_comment_char_QMARK_ = (function paredit_cm$core$bkwd_kill_skippable_comment_char_QMARK_(cm,cur){
var map__13252 = paredit_cm.core.get_info.call(null,cm,cur);
var map__13252__$1 = cljs.core.__destructure_map.call(null,map__13252);
var info = map__13252__$1;
var type = cljs.core.get.call(null,map__13252__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var left_char = cljs.core.get.call(null,map__13252__$1,new cljs.core.Keyword(null,"left-char","left-char",509989355));
var and__5000__auto__ = (!((info == null)));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.call(null,"comment",type);
if(and__5000__auto____$1){
return cljs.core.re_matches.call(null,/\s|;/,left_char);
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
});
/**
 * trampoline helper for backward-kill-word. 'mark' is the index to start
 *   killing from. 'i' is the index we're inspecting. 'n' is how many more calls
 *   we'll entertain before stopping because we suspect an infinite loop. first
 *   call can use char count for 'n'.
 */
paredit_cm.core.bkwd_kill_word = (function paredit_cm$core$bkwd_kill_word(cm,mark,i,n){
var h = (i - (1));
var m = (n - (1));
var cur = paredit_cm.core.cursor.call(null,cm,i);
if((n < (0))){
return paredit_cm.core.guard.call(null);
} else {
if(paredit_cm.core.bof_QMARK_.call(null,cm,cur)){
return new cljs.core.Keyword(null,"do-nothing","do-nothing",1030476282);
} else {
if(paredit_cm.core.beginning_of_line_QMARK_.call(null,cm,cur)){
return (function (){
return paredit_cm.core.bkwd_kill_word.call(null,cm,h,h,m);
});
} else {
if(paredit_cm.core.whitespace_QMARK_.call(null,cm,cur)){
return (function (){
return paredit_cm.core.bkwd_kill_word.call(null,cm,mark,paredit_cm.core.start_of_token_at.call(null,cm,i),m);
});
} else {
if(cljs.core.truth_(paredit_cm.core.opening_delim_QMARK_.call(null,cm,cur))){
return (function (){
return paredit_cm.core.bkwd_kill_word.call(null,cm,h,h,m);
});
} else {
if(cljs.core.truth_(paredit_cm.core.closing_delim_QMARK_.call(null,cm,cur))){
return (function (){
return paredit_cm.core.bkwd_kill_word.call(null,cm,h,h,m);
});
} else {
if(paredit_cm.core.at_a_word_QMARK_.call(null,cm,cur)){
return paredit_cm.core.kill_from_to.call(null,cm,paredit_cm.core.start_of_token_at.call(null,cm,i),mark);
} else {
if(paredit_cm.core.start_of_comment_QMARK_.call(null,cm,cur)){
var j = paredit_cm.core.index_of_next_non.call(null,cm,i,paredit_cm.core.semicolons);
return (function (){
return paredit_cm.core.fwd_kill_word.call(null,cm,j,j,m);
});
} else {
if(cljs.core.truth_(paredit_cm.core.bkwd_kill_skippable_comment_char_QMARK_.call(null,cm,cur))){
return (function (){
return paredit_cm.core.bkwd_kill_word.call(null,cm,mark,h,m);
});
} else {
if(paredit_cm.core.comment_QMARK_.call(null,cm,cur)){
return paredit_cm.core.kill_prev_word_in_comment.call(null,cm,mark);
} else {
return cljs.core.println.call(null,"unhandled");

}
}
}
}
}
}
}
}
}
}
});
/**
 * paredit backward-kill-word exposed for keymap.
 */
paredit_cm.core.backward_kill_word = (function paredit_cm$core$backward_kill_word(cm){
var i = paredit_cm.core.index.call(null,cm);
return cljs.core.trampoline.call(null,paredit_cm.core.bkwd_kill_word,cm,i,i,paredit_cm.core.char_count.call(null,cm));
});
goog.exportSymbol('paredit_cm.core.backward_kill_word', paredit_cm.core.backward_kill_word);
/**
 * trampoline helper for forward. 'i' is the index we're inspecting. 'n' is how
 *   many more calls we'll entertain before suspecting an infinite loop. first call
 *   can pass in char count.
 */
paredit_cm.core.fwd = (function paredit_cm$core$fwd(cm,i,n){
var j = (i + (1));
var m = (n - (1));
var cur = paredit_cm.core.cursor.call(null,cm,i);
var right_cur = paredit_cm.core.cursor.call(null,cm,j);
if((n < (0))){
return paredit_cm.core.guard.call(null);
} else {
if((right_cur == null)){
return new cljs.core.Keyword(null,"do-nothing","do-nothing",1030476282);
} else {
if(paredit_cm.core.eof_QMARK_.call(null,cm,right_cur)){
return new cljs.core.Keyword(null,"do-nothing","do-nothing",1030476282);
} else {
if(paredit_cm.core.whitespace_QMARK_.call(null,cm,right_cur)){
return (function (){
return paredit_cm.core.fwd.call(null,cm,j,m);
});
} else {
if(cljs.core.truth_(paredit_cm.core.opening_delim_QMARK_.call(null,cm,right_cur))){
return cm.setCursor(paredit_cm.core.end_of_next_sibling.call(null,cm,cur));
} else {
if(cljs.core.truth_(paredit_cm.core.closing_delim_QMARK_.call(null,cm,right_cur))){
return cm.setCursor(right_cur);
} else {
if(paredit_cm.core.at_a_word_QMARK_.call(null,cm,right_cur)){
return cm.setCursor(paredit_cm.core.cursor.call(null,cm,paredit_cm.core.token_end_index.call(null,cm,j)));
} else {
if(paredit_cm.core.comment_QMARK_.call(null,cm,right_cur)){
return (function (){
return paredit_cm.core.fwd.call(null,cm,paredit_cm.core.token_end_index.call(null,cm,j),m);
});
} else {
if(paredit_cm.core.in_string_QMARK_.call(null,cm,right_cur)){
return cm.setCursor(paredit_cm.core.cursor.call(null,cm,paredit_cm.core.end_of_next_word.call(null,cm,j)));
} else {
return cljs.core.println.call(null,"unhandled");

}
}
}
}
}
}
}
}
}
});
/**
 * paredit forward exposed for keymap. find the first thing that isn't
 *   whitespace or comment. if it is a closing bracket, step past it. otherwise
 *   skip over the thing.
 */
paredit_cm.core.forward = (function paredit_cm$core$forward(cm){
return cljs.core.trampoline.call(null,paredit_cm.core.fwd,cm,paredit_cm.core.index.call(null,cm),paredit_cm.core.char_count.call(null,cm));
});
goog.exportSymbol('paredit_cm.core.forward', paredit_cm.core.forward);
/**
 * trampoline helper for backward. 'i' is the index we're inspecting. 'n' is
 *   number of remaining calls before we suspect an infinite loop
 */
paredit_cm.core.bkwd = (function paredit_cm$core$bkwd(cm,i,n){
var h = (i - (1));
var m = (n - (1));
var cur = paredit_cm.core.cursor.call(null,cm,i);
if((n < (0))){
return paredit_cm.core.guard.call(null);
} else {
if((cur == null)){
return new cljs.core.Keyword(null,"do-nothing","do-nothing",1030476282);
} else {
if(paredit_cm.core.bof_QMARK_.call(null,cm,cur)){
return cm.setCursor(paredit_cm.core.cursor.call(null,cm,h));
} else {
if(paredit_cm.core.whitespace_QMARK_.call(null,cm,cur)){
return (function (){
return paredit_cm.core.bkwd.call(null,cm,h,m);
});
} else {
if(cljs.core.truth_(paredit_cm.core.opening_delim_QMARK_.call(null,cm,cur))){
return cm.setCursor(paredit_cm.core.cursor.call(null,cm,h));
} else {
if(cljs.core.truth_(paredit_cm.core.closing_delim_QMARK_.call(null,cm,cur))){
return cm.setCursor(paredit_cm.core.start_of_prev_sibling.call(null,cm,cur));
} else {
if(paredit_cm.core.at_a_word_QMARK_.call(null,cm,cur)){
return cm.setCursor(paredit_cm.core.start_of_prev_sibling.call(null,cm,cur));
} else {
if(paredit_cm.core.comment_QMARK_.call(null,cm,cur)){
return (function (){
return paredit_cm.core.bkwd.call(null,cm,paredit_cm.core.start_of_prev_sibling.call(null,cm,cur),m);
});
} else {
if(paredit_cm.core.in_string_QMARK_.call(null,cm,cur)){
return cm.setCursor(paredit_cm.core.cursor.call(null,cm,paredit_cm.core.start_of_prev_word.call(null,cm,h)));
} else {
return cljs.core.println.call(null,"unhandled");

}
}
}
}
}
}
}
}
}
});
/**
 * paredit backward exposed for keymap.
 */
paredit_cm.core.backward = (function paredit_cm$core$backward(cm){
return cljs.core.trampoline.call(null,paredit_cm.core.bkwd,cm,paredit_cm.core.index.call(null,cm),paredit_cm.core.char_count.call(null,cm));
});
goog.exportSymbol('paredit_cm.core.backward', paredit_cm.core.backward);
/**
 * get cursor corresponding to paredit forward up
 */
paredit_cm.core.forward_up_cur = (function paredit_cm$core$forward_up_cur(var_args){
var G__13254 = arguments.length;
switch (G__13254) {
case 1:
return paredit_cm.core.forward_up_cur.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.forward_up_cur.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(paredit_cm.core.forward_up_cur.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.forward_up_cur.call(null,cm,paredit_cm.core.cursor.call(null,cm));
}));

(paredit_cm.core.forward_up_cur.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
if((cur == null)){
return null;
} else {
if(((paredit_cm.core.in_string_QMARK_.call(null,cm,cur)) && ((!(paredit_cm.core.end_of_a_string_QMARK_.call(null,cm,cur)))))){
return paredit_cm.core.token_end.call(null,cm,cur);
} else {
return paredit_cm.core.skip.call(null,cm,paredit_cm.core.parent_closer_sp);

}
}
}));

(paredit_cm.core.forward_up_cur.cljs$lang$maxFixedArity = 2);

/**
 * paredit forward-up exposed for keymap.
 */
paredit_cm.core.forward_up = (function paredit_cm$core$forward_up(var_args){
var G__13257 = arguments.length;
switch (G__13257) {
case 1:
return paredit_cm.core.forward_up.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.forward_up.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('paredit_cm.core.forward_up', paredit_cm.core.forward_up);

(paredit_cm.core.forward_up.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.forward_up.call(null,cm,paredit_cm.core.cursor.call(null,cm));
}));

(paredit_cm.core.forward_up.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
var temp__5823__auto__ = paredit_cm.core.forward_up_cur.call(null,cm,cur);
if(cljs.core.truth_(temp__5823__auto__)){
var cur_SINGLEQUOTE_ = temp__5823__auto__;
return cm.setCursor(cur_SINGLEQUOTE_);
} else {
return null;
}
}));

(paredit_cm.core.forward_up.cljs$lang$maxFixedArity = 2);

/**
 * get cursor corresponding to paredit backward up
 */
paredit_cm.core.backward_up_cur = (function paredit_cm$core$backward_up_cur(var_args){
var G__13260 = arguments.length;
switch (G__13260) {
case 1:
return paredit_cm.core.backward_up_cur.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.backward_up_cur.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(paredit_cm.core.backward_up_cur.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.backward_up_cur.call(null,cm,paredit_cm.core.cursor.call(null,cm));
}));

(paredit_cm.core.backward_up_cur.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
return paredit_cm.core.start_of_prev_sibling.call(null,cm,paredit_cm.core.forward_up_cur.call(null,cm,cur));
}));

(paredit_cm.core.backward_up_cur.cljs$lang$maxFixedArity = 2);

/**
 * paredit backward-up exposed for keymap.
 */
paredit_cm.core.backward_up = (function paredit_cm$core$backward_up(var_args){
var G__13263 = arguments.length;
switch (G__13263) {
case 1:
return paredit_cm.core.backward_up.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.backward_up.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('paredit_cm.core.backward_up', paredit_cm.core.backward_up);

(paredit_cm.core.backward_up.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.backward_up.call(null,cm,paredit_cm.core.cursor.call(null,cm));
}));

(paredit_cm.core.backward_up.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
var temp__5823__auto__ = paredit_cm.core.backward_up_cur.call(null,cm,cur);
if(cljs.core.truth_(temp__5823__auto__)){
var cur_SINGLEQUOTE_ = temp__5823__auto__;
return cm.setCursor(cur_SINGLEQUOTE_);
} else {
return null;
}
}));

(paredit_cm.core.backward_up.cljs$lang$maxFixedArity = 2);

/**
 * go to the end of the current thing, whether it be a string or a word of code
 */
paredit_cm.core.end_of_this = (function paredit_cm$core$end_of_this(cm,cur){
if(paredit_cm.core.in_string_QMARK_.call(null,cm,cur)){
return paredit_cm.core.token_end.call(null,cm,cur);
} else {
return paredit_cm.core.end_of_next_sibling.call(null,cm,cur);
}
});
/**
 * paredit wrap-round exposed for keymap.
 */
paredit_cm.core.wrap_round = (function paredit_cm$core$wrap_round(var_args){
var G__13266 = arguments.length;
switch (G__13266) {
case 1:
return paredit_cm.core.wrap_round.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.wrap_round.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('paredit_cm.core.wrap_round', paredit_cm.core.wrap_round);

(paredit_cm.core.wrap_round.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.wrap_round.call(null,cm,paredit_cm.core.cursor.call(null,cm));
}));

(paredit_cm.core.wrap_round.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
var cur_close = paredit_cm.core.end_of_this.call(null,cm,cur);
var cur_open = paredit_cm.core.start_of_prev_sibling.call(null,cm,cur_close);
var i = (paredit_cm.core.index.call(null,cm,cur_open) + (1));
var text = cm.getRange(cur_open,cur_close);
var text_SINGLEQUOTE_ = ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),")"].join('');
cm.replaceRange(text_SINGLEQUOTE_,cur_open,cur_close);

return cm.setCursor(paredit_cm.core.cursor.call(null,cm,i));
}));

(paredit_cm.core.wrap_round.cljs$lang$maxFixedArity = 2);

/**
 * paredit splice-sexp exposed for keymap. unlike emacs' version, this does not
 *   splice a string by dropping its double-quotes.
 */
paredit_cm.core.splice_sexp = (function paredit_cm$core$splice_sexp(var_args){
var G__13269 = arguments.length;
switch (G__13269) {
case 1:
return paredit_cm.core.splice_sexp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.splice_sexp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('paredit_cm.core.splice_sexp', paredit_cm.core.splice_sexp);

(paredit_cm.core.splice_sexp.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.splice_sexp.call(null,cm,paredit_cm.core.cursor.call(null,cm));
}));

(paredit_cm.core.splice_sexp.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
var i = (paredit_cm.core.index.call(null,cm) - (1));
var cur_close = paredit_cm.core.skip.call(null,cm,paredit_cm.core.parent_closer_sp);
var cur_open = paredit_cm.core.start_of_prev_sibling.call(null,cm,cur_close);
var text_SINGLEQUOTE_ = (cljs.core.truth_(cur_open)?cm.getRange(paredit_cm.core.cursor.call(null,cm,(paredit_cm.core.index.call(null,cm,cur_open) + (1))),paredit_cm.core.cursor.call(null,cm,(paredit_cm.core.index.call(null,cm,cur_close) - (1)))):null);
if(cljs.core.truth_(text_SINGLEQUOTE_)){
cm.replaceRange(text_SINGLEQUOTE_,cur_open,cur_close);

return cm.setCursor(paredit_cm.core.cursor.call(null,cm,i));
} else {
return null;
}
}));

(paredit_cm.core.splice_sexp.cljs$lang$maxFixedArity = 2);

/**
 * paredit splice-sexp-killing-backward exposed for keymap. like emacs' version,
 *   this doesn't actually kill to the clipboard. it just deletes. but unlink
 *   emacs, this does not splice a string by dropping its double-quotes.
 */
paredit_cm.core.splice_sexp_killing_backward = (function paredit_cm$core$splice_sexp_killing_backward(var_args){
var G__13272 = arguments.length;
switch (G__13272) {
case 1:
return paredit_cm.core.splice_sexp_killing_backward.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.splice_sexp_killing_backward.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('paredit_cm.core.splice_sexp_killing_backward', paredit_cm.core.splice_sexp_killing_backward);

(paredit_cm.core.splice_sexp_killing_backward.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.splice_sexp_killing_backward.call(null,cm,paredit_cm.core.cursor.call(null,cm));
}));

(paredit_cm.core.splice_sexp_killing_backward.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
if(paredit_cm.core.in_string_QMARK_.call(null,cm,cur)){
paredit_cm.core.backward_up.call(null,cm,cur);
} else {
}

var cur_SINGLEQUOTE_ = paredit_cm.core.cursor.call(null,cm);
var cur_close = paredit_cm.core.skip.call(null,cm,paredit_cm.core.parent_closer_sp);
var cur_open = paredit_cm.core.start_of_prev_sibling.call(null,cm,cur_close);
var text_SINGLEQUOTE_ = (cljs.core.truth_(cur_close)?cm.getRange(cur_SINGLEQUOTE_,paredit_cm.core.cursor.call(null,cm,(paredit_cm.core.index.call(null,cm,cur_close) - (1)))):null);
if(cljs.core.truth_(text_SINGLEQUOTE_)){
cm.replaceRange(text_SINGLEQUOTE_,cur_open,cur_close);

return cm.setCursor(cur_open);
} else {
return null;
}
}));

(paredit_cm.core.splice_sexp_killing_backward.cljs$lang$maxFixedArity = 2);

/**
 * paredit splice-sexp-killing-forward exposed for keymap. like emacs' version,
 *   this doesn't actually kill to the clipboard. it just deletes. but unlink
 *   emacs, this does not splice a string by dropping its double-quotes.
 */
paredit_cm.core.splice_sexp_killing_forward = (function paredit_cm$core$splice_sexp_killing_forward(var_args){
var G__13275 = arguments.length;
switch (G__13275) {
case 1:
return paredit_cm.core.splice_sexp_killing_forward.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.splice_sexp_killing_forward.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('paredit_cm.core.splice_sexp_killing_forward', paredit_cm.core.splice_sexp_killing_forward);

(paredit_cm.core.splice_sexp_killing_forward.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.splice_sexp_killing_forward.call(null,cm,paredit_cm.core.cursor.call(null,cm));
}));

(paredit_cm.core.splice_sexp_killing_forward.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
if(paredit_cm.core.in_string_QMARK_.call(null,cm,cur)){
paredit_cm.core.forward_up.call(null,cm,cur);
} else {
}

var cur_SINGLEQUOTE_ = paredit_cm.core.cursor.call(null,cm);
var final_cur = paredit_cm.core.cursor.call(null,cm,(paredit_cm.core.index.call(null,cm,cur_SINGLEQUOTE_) - (1)));
var cur_close = paredit_cm.core.skip.call(null,cm,paredit_cm.core.parent_closer_sp);
var cur_open = paredit_cm.core.start_of_prev_sibling.call(null,cm,cur_close);
var keep_from = (cljs.core.truth_(cur_open)?paredit_cm.core.cursor.call(null,cm,(paredit_cm.core.index.call(null,cm,cur_open) + (1))):null);
var text = (cljs.core.truth_(keep_from)?cm.getRange(cur_open,cur_close):null);
var text_SINGLEQUOTE_ = (cljs.core.truth_(keep_from)?cm.getRange(keep_from,cur_SINGLEQUOTE_):null);
if(cljs.core.truth_(text_SINGLEQUOTE_)){
cm.replaceRange(text_SINGLEQUOTE_,cur_open,cur_close);

return cm.setCursor(final_cur);
} else {
return null;
}
}));

(paredit_cm.core.splice_sexp_killing_forward.cljs$lang$maxFixedArity = 2);

/**
 * paredit raise-sexp exposed for keymap.
 */
paredit_cm.core.raise_sexp = (function paredit_cm$core$raise_sexp(var_args){
var G__13278 = arguments.length;
switch (G__13278) {
case 1:
return paredit_cm.core.raise_sexp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.raise_sexp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('paredit_cm.core.raise_sexp', paredit_cm.core.raise_sexp);

(paredit_cm.core.raise_sexp.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.raise_sexp.call(null,cm,paredit_cm.core.cursor.call(null,cm));
}));

(paredit_cm.core.raise_sexp.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
if(paredit_cm.core.in_string_QMARK_.call(null,cm,cur)){
paredit_cm.core.backward_up.call(null,cm,cur);
} else {
}

var c1 = paredit_cm.core.cursor.call(null,cm);
var c2 = paredit_cm.core.end_of_next_sibling.call(null,cm,c1);
var text = (cljs.core.truth_(c2)?cm.getRange(c1,c2):null);
var cur_close = (cljs.core.truth_(text)?paredit_cm.core.skip.call(null,cm,paredit_cm.core.parent_closer_sp):null);
var cur_open = (cljs.core.truth_(cur_close)?paredit_cm.core.start_of_prev_sibling.call(null,cm,cur_close):null);
if(cljs.core.truth_(cur_open)){
cm.replaceRange(text,cur_open,cur_close);

return cm.setCursor(cur_open);
} else {
return null;
}
}));

(paredit_cm.core.raise_sexp.cljs$lang$maxFixedArity = 2);

/**
 * trampoline-able that looks for an ancestor closing bracket (parent,
 *   grandparent, etc) that has a sibling to slurp. returns a vector of the cur to
 *   the right of such a bracket, the cur to the right of the sibling that will be
 *   slurped, the string of the bracket to move. nil if there is no such anscestor
 *   that can slurp.
 */
paredit_cm.core.fwd_slurp = (function paredit_cm$core$fwd_slurp(cm,cur,n){
if((n >= (0))){
var parent = paredit_cm.core.skip.call(null,cm,paredit_cm.core.parent_closer_sp,cur);
var sibling = paredit_cm.core.end_of_next_sibling.call(null,cm,parent);
if(cljs.core.truth_(sibling)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent,sibling,paredit_cm.core.get_string.call(null,cm,parent)], null);
} else {
return (function (){
return paredit_cm.core.fwd_slurp.call(null,cm,parent,(n - (1)));
});
}
} else {
return null;
}
});
/**
 * paredit forward-slurp-sexp exposed for keymap.
 */
paredit_cm.core.forward_slurp_sexp = (function paredit_cm$core$forward_slurp_sexp(var_args){
var G__13281 = arguments.length;
switch (G__13281) {
case 1:
return paredit_cm.core.forward_slurp_sexp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.forward_slurp_sexp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('paredit_cm.core.forward_slurp_sexp', paredit_cm.core.forward_slurp_sexp);

(paredit_cm.core.forward_slurp_sexp.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.forward_slurp_sexp.call(null,cm,paredit_cm.core.cursor.call(null,cm));
}));

(paredit_cm.core.forward_slurp_sexp.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
var temp__5823__auto___13286 = cljs.core.trampoline.call(null,paredit_cm.core.fwd_slurp,cm,cur,paredit_cm.core.char_count.call(null,cm));
if(cljs.core.truth_(temp__5823__auto___13286)){
var vec__13282_13287 = temp__5823__auto___13286;
var parent_13288 = cljs.core.nth.call(null,vec__13282_13287,(0),null);
var sibling_13289 = cljs.core.nth.call(null,vec__13282_13287,(1),null);
var bracket_13290 = cljs.core.nth.call(null,vec__13282_13287,(2),null);
paredit_cm.core.insert.call(null,cm,bracket_13290,(0),sibling_13289);

cm.replaceRange("",paredit_cm.core.cursor.call(null,cm,(paredit_cm.core.index.call(null,cm,parent_13288) - cljs.core.count.call(null,bracket_13290))),parent_13288);
} else {
}

return cm.setCursor(cur);
}));

(paredit_cm.core.forward_slurp_sexp.cljs$lang$maxFixedArity = 2);

/**
 * trampoline-able that looks for the cursor where we'd be if we went forward
 *   and then down into the next sibling that is available. nil if there is no
 *   sibling to enter.
 */
paredit_cm.core.fwd_down = (function paredit_cm$core$fwd_down(cm,cur,n){
if((n <= (0))){
return null;
} else {
if((cur == null)){
return null;
} else {
if(cljs.core.truth_(paredit_cm.core.opening_delim_QMARK_.call(null,cm,cur))){
return cur;
} else {
var temp__5823__auto__ = paredit_cm.core.token_end.call(null,cm,cur,(1));
if(cljs.core.truth_(temp__5823__auto__)){
var cur_SINGLEQUOTE_ = temp__5823__auto__;
return (function (){
return paredit_cm.core.fwd_down.call(null,cm,cur_SINGLEQUOTE_,(n - (1)));
});
} else {
return null;
}

}
}
}
});
paredit_cm.core.forward_down_cur = (function paredit_cm$core$forward_down_cur(var_args){
var G__13292 = arguments.length;
switch (G__13292) {
case 1:
return paredit_cm.core.forward_down_cur.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.forward_down_cur.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(paredit_cm.core.forward_down_cur.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.forward_down_cur.call(null,cm,paredit_cm.core.cursor.call(null,cm));
}));

(paredit_cm.core.forward_down_cur.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
return cljs.core.trampoline.call(null,paredit_cm.core.fwd_down,cm,cur,paredit_cm.core.char_count.call(null,cm));
}));

(paredit_cm.core.forward_down_cur.cljs$lang$maxFixedArity = 2);

paredit_cm.core.forward_down = (function paredit_cm$core$forward_down(var_args){
var G__13295 = arguments.length;
switch (G__13295) {
case 1:
return paredit_cm.core.forward_down.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.forward_down.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('paredit_cm.core.forward_down', paredit_cm.core.forward_down);

(paredit_cm.core.forward_down.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.forward_down.call(null,cm,paredit_cm.core.cursor.call(null,cm));
}));

(paredit_cm.core.forward_down.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
var temp__5823__auto__ = paredit_cm.core.forward_down_cur.call(null,cm,cur);
if(cljs.core.truth_(temp__5823__auto__)){
var cur_SINGLEQUOTE_ = temp__5823__auto__;
return cm.setCursor(cur_SINGLEQUOTE_);
} else {
return null;
}
}));

(paredit_cm.core.forward_down.cljs$lang$maxFixedArity = 2);

/**
 * trampoline-able that looks for the cursor where we'd be if we went backward
 *   and then down into the prev sibling that is available. nil if there is no
 *   sibling to enter.
 */
paredit_cm.core.bkwd_down = (function paredit_cm$core$bkwd_down(cm,cur,n){
var map__13297 = paredit_cm.core.get_info.call(null,cm,cur);
var map__13297__$1 = cljs.core.__destructure_map.call(null,map__13297);
var left_cur = cljs.core.get.call(null,map__13297__$1,new cljs.core.Keyword(null,"left-cur","left-cur",2010287159));
var i = cljs.core.get.call(null,map__13297__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var start = cljs.core.get.call(null,map__13297__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var ch = cljs.core.get.call(null,map__13297__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var bof = cljs.core.get.call(null,map__13297__$1,new cljs.core.Keyword(null,"bof","bof",-1065437469));
if((n <= (0))){
return paredit_cm.core.guard.call(null);
} else {
if(cljs.core.truth_(paredit_cm.core.closing_delim_QMARK_.call(null,cm,cur))){
return left_cur;
} else {
if(cljs.core.truth_(bof)){
return null;
} else {
if((ch === (0))){
return (function (){
return paredit_cm.core.bkwd_down.call(null,cm,paredit_cm.core.cursor.call(null,cm,(i - (1))),(n - (1)));
});
} else {
return (function (){
return paredit_cm.core.bkwd_down.call(null,cm,paredit_cm.core.cursor.call(null,cm,(i - (ch - start))),(n - (1)));
});

}
}
}
}
});
paredit_cm.core.backward_down = (function paredit_cm$core$backward_down(var_args){
var G__13299 = arguments.length;
switch (G__13299) {
case 1:
return paredit_cm.core.backward_down.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.backward_down.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('paredit_cm.core.backward_down', paredit_cm.core.backward_down);

(paredit_cm.core.backward_down.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.backward_down.call(null,cm,paredit_cm.core.cursor.call(null,cm));
}));

(paredit_cm.core.backward_down.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
var temp__5823__auto__ = cljs.core.trampoline.call(null,paredit_cm.core.bkwd_down,cm,cur,paredit_cm.core.char_count.call(null,cm));
if(cljs.core.truth_(temp__5823__auto__)){
var cur_SINGLEQUOTE_ = temp__5823__auto__;
return cm.setCursor(cur_SINGLEQUOTE_);
} else {
return null;
}
}));

(paredit_cm.core.backward_down.cljs$lang$maxFixedArity = 2);

/**
 * trampolin-able that looks for an ancestor opening bracket (parent,
 *   grandparent, etc) that has a sibling to slurp. returns a vector of the cur to
 *   the left of such a bracket, the cur to the left of the sibling that will be
 *   slurped, the string of the bracket to move. nil if there is no such anscestor
 *   that can slurp.
 */
paredit_cm.core.bkwd_slurp = (function paredit_cm$core$bkwd_slurp(cm,cur,n){
if((n >= (0))){
var ending = paredit_cm.core.skip.call(null,cm,paredit_cm.core.parent_closer_sp,cur);
var parent = paredit_cm.core.start_of_prev_sibling.call(null,cm,ending);
var sibling = paredit_cm.core.start_of_prev_sibling.call(null,cm,parent);
var bracket_cur = paredit_cm.core.forward_down_cur.call(null,cm,parent);
if((((!((sibling == null)))) && ((!((bracket_cur == null)))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent,sibling,paredit_cm.core.get_string.call(null,cm,bracket_cur)], null);
} else {
return (function (){
return paredit_cm.core.bkwd_slurp.call(null,cm,parent,(n - (1)));
});
}
} else {
return null;
}
});
/**
 * paredit backward-slurp-sexp exposed for keymap.
 */
paredit_cm.core.backward_slurp_sexp = (function paredit_cm$core$backward_slurp_sexp(var_args){
var G__13302 = arguments.length;
switch (G__13302) {
case 1:
return paredit_cm.core.backward_slurp_sexp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.backward_slurp_sexp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('paredit_cm.core.backward_slurp_sexp', paredit_cm.core.backward_slurp_sexp);

(paredit_cm.core.backward_slurp_sexp.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.backward_slurp_sexp.call(null,cm,paredit_cm.core.cursor.call(null,cm));
}));

(paredit_cm.core.backward_slurp_sexp.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
var i = paredit_cm.core.index.call(null,cm,cur);
var temp__5823__auto___13307 = cljs.core.trampoline.call(null,paredit_cm.core.bkwd_slurp,cm,cur,paredit_cm.core.char_count.call(null,cm));
if(cljs.core.truth_(temp__5823__auto___13307)){
var vec__13303_13308 = temp__5823__auto___13307;
var parent_13309 = cljs.core.nth.call(null,vec__13303_13308,(0),null);
var sibling_13310 = cljs.core.nth.call(null,vec__13303_13308,(1),null);
var bracket_13311 = cljs.core.nth.call(null,vec__13303_13308,(2),null);
cm.replaceRange("",parent_13309,paredit_cm.core.cursor.call(null,cm,(paredit_cm.core.index.call(null,cm,parent_13309) + cljs.core.count.call(null,bracket_13311))));

paredit_cm.core.insert.call(null,cm,bracket_13311,(0),sibling_13310);
} else {
}

return cm.setCursor(paredit_cm.core.cursor.call(null,cm,i));
}));

(paredit_cm.core.backward_slurp_sexp.cljs$lang$maxFixedArity = 2);

/**
 * trampoline-able that looks for an ancestor closing bracket (parent,
 *   grandparent, etc) that has a sibling to barf. returns a vector of
 *   the cur to the right of such a bracket, the cur at the bracket, the
 *   cur where the bracket should go, the text of the bracket, and
 *   whether the operation causes the cursor to be moved. nil if there is
 *   no such anscestor that can barf
 */
paredit_cm.core.fwd_barf = (function paredit_cm$core$fwd_barf(cm,cur,n){
if((n >= (0))){
var parent = paredit_cm.core.skip.call(null,cm,paredit_cm.core.parent_closer_sp,cur);
var inside = paredit_cm.core.cursor.call(null,cm,(paredit_cm.core.index.call(null,cm,parent) - (1)));
var sibling = paredit_cm.core.start_of_prev_sibling.call(null,cm,inside);
var prevsib = paredit_cm.core.end_of_next_sibling.call(null,cm,paredit_cm.core.start_of_prev_sibling.call(null,cm,sibling));
var bracket_cur = (function (){var or__5002__auto__ = prevsib;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return paredit_cm.core.forward_down_cur.call(null,cm,paredit_cm.core.backward_up_cur.call(null,cm,sibling));
}
})();
var moved = (function (){var and__5000__auto__ = bracket_cur;
if(cljs.core.truth_(and__5000__auto__)){
return (paredit_cm.core.index.call(null,cm,bracket_cur) < paredit_cm.core.index.call(null,cm,cur));
} else {
return and__5000__auto__;
}
})();
var bracket = (cljs.core.truth_(parent)?(cljs.core.truth_(moved)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(paredit_cm.core.get_string.call(null,cm,parent))," "].join(''):paredit_cm.core.get_string.call(null,cm,parent)):null);
if((parent == null)){
return null;
} else {
if((bracket_cur == null)){
return (function (){
return paredit_cm.core.fwd_barf.call(null,cm,parent,(n - (1)));
});
} else {
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent,inside,bracket_cur,bracket,moved], null);

}
}
} else {
return null;
}
});
/**
 * paredit forward-barf-sexp exposed for keymap.
 */
paredit_cm.core.forward_barf_sexp = (function paredit_cm$core$forward_barf_sexp(var_args){
var G__13313 = arguments.length;
switch (G__13313) {
case 1:
return paredit_cm.core.forward_barf_sexp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.forward_barf_sexp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('paredit_cm.core.forward_barf_sexp', paredit_cm.core.forward_barf_sexp);

(paredit_cm.core.forward_barf_sexp.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.forward_barf_sexp.call(null,cm,paredit_cm.core.cursor.call(null,cm));
}));

(paredit_cm.core.forward_barf_sexp.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
var temp__5821__auto__ = cljs.core.trampoline.call(null,paredit_cm.core.fwd_barf,cm,cur,paredit_cm.core.char_count.call(null,cm));
if(cljs.core.truth_(temp__5821__auto__)){
var vec__13314 = temp__5821__auto__;
var parent = cljs.core.nth.call(null,vec__13314,(0),null);
var inside = cljs.core.nth.call(null,vec__13314,(1),null);
var sibling = cljs.core.nth.call(null,vec__13314,(2),null);
var bracket = cljs.core.nth.call(null,vec__13314,(3),null);
var moved = cljs.core.nth.call(null,vec__13314,(4),null);
cm.replaceRange("",inside,parent);

paredit_cm.core.insert.call(null,cm,bracket,(0),sibling);

if(cljs.core.truth_(moved)){
return cm.setCursor(paredit_cm.core.cursor.call(null,cm,(paredit_cm.core.index.call(null,cm,cur) + cljs.core.count.call(null,bracket))));
} else {
return cm.setCursor(cur);
}
} else {
return cm.setCursor(cur);
}
}));

(paredit_cm.core.forward_barf_sexp.cljs$lang$maxFixedArity = 2);

/**
 * trampoline-able that looks for an ancestor opening bracket (parent,
 *   grandparent, etc) that has a sibling to barf. returns... . nil if
 *   there is no such anscestor that can barf
 */
paredit_cm.core.bkwd_barf = (function paredit_cm$core$bkwd_barf(cm,cur,n){
if((n >= (0))){
var outside = paredit_cm.core.backward_up_cur.call(null,cm,cur);
var inside = paredit_cm.core.forward_down_cur.call(null,cm,outside);
var end_of_barfed_sexp = paredit_cm.core.end_of_next_sibling.call(null,cm,inside);
var end_of_new_first_sib = paredit_cm.core.end_of_next_sibling.call(null,cm,end_of_barfed_sexp);
var bracket_cur = paredit_cm.core.start_of_prev_sibling.call(null,cm,end_of_new_first_sib);
var bracket_text = paredit_cm.core.get_string.call(null,cm,inside);
var moved = (function (){var and__5000__auto__ = bracket_cur;
if(cljs.core.truth_(and__5000__auto__)){
return (paredit_cm.core.index.call(null,cm,cur) < paredit_cm.core.index.call(null,cm,bracket_cur));
} else {
return and__5000__auto__;
}
})();
if((outside == null)){
return null;
} else {
if((end_of_barfed_sexp == null)){
return (function (){
return paredit_cm.core.bkwd_barf.call(null,cm,outside,(n - (1)));
});
} else {
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [outside,inside,bracket_cur,bracket_text,moved], null);

}
}
} else {
return null;
}
});
/**
 * paredit backward-barf-sexp exposed for keymap.
 */
paredit_cm.core.backward_barf_sexp = (function paredit_cm$core$backward_barf_sexp(var_args){
var G__13319 = arguments.length;
switch (G__13319) {
case 1:
return paredit_cm.core.backward_barf_sexp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.backward_barf_sexp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('paredit_cm.core.backward_barf_sexp', paredit_cm.core.backward_barf_sexp);

(paredit_cm.core.backward_barf_sexp.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.backward_barf_sexp.call(null,cm,paredit_cm.core.cursor.call(null,cm));
}));

(paredit_cm.core.backward_barf_sexp.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
var temp__5821__auto__ = cljs.core.trampoline.call(null,paredit_cm.core.bkwd_barf,cm,cur,paredit_cm.core.char_count.call(null,cm));
if(cljs.core.truth_(temp__5821__auto__)){
var vec__13320 = temp__5821__auto__;
var outside = cljs.core.nth.call(null,vec__13320,(0),null);
var inside = cljs.core.nth.call(null,vec__13320,(1),null);
var bracket_cur = cljs.core.nth.call(null,vec__13320,(2),null);
var bracket_text = cljs.core.nth.call(null,vec__13320,(3),null);
var moved = cljs.core.nth.call(null,vec__13320,(4),null);
paredit_cm.core.insert.call(null,cm,bracket_text,(0),bracket_cur);

cm.replaceRange("",outside,inside);

if(cljs.core.truth_(moved)){
return cm.setCursor(paredit_cm.core.cursor.call(null,cm,(paredit_cm.core.index.call(null,cm,cur) - cljs.core.count.call(null,bracket_text))));
} else {
return cm.setCursor(cur);
}
} else {
return cm.setCursor(cur);
}
}));

(paredit_cm.core.backward_barf_sexp.cljs$lang$maxFixedArity = 2);

/**
 * split sexp for (forms like this)
 */
paredit_cm.core.split_form = (function paredit_cm$core$split_form(cm,cur){
var close_cur = paredit_cm.core.skip.call(null,cm,paredit_cm.core.parent_closer_sp,cur);
var close_bracket = paredit_cm.core.get_string.call(null,cm,close_cur);
var open_cur = paredit_cm.core.start_of_prev_sibling.call(null,cm,close_cur);
var open_bracket = paredit_cm.core.get_string.call(null,cm,paredit_cm.core.cursor.call(null,cm,(paredit_cm.core.index.call(null,cm,open_cur) + (1))));
if((((!((open_bracket == null)))) && ((!((close_bracket == null)))))){
cm.setCursor(cur);

var offset = ((paredit_cm.core.in_whitespace_QMARK_.call(null,cm))?(1):(function (){
paredit_cm.core.insert.call(null,cm," ");

paredit_cm.core.just_one_space.call(null,cm,paredit_cm.core.cursor.call(null,cm),false);

return (0);
})()
);
var cur_SINGLEQUOTE_ = paredit_cm.core.cursor.call(null,cm);
var i_SINGLEQUOTE_ = (paredit_cm.core.index.call(null,cm,cur_SINGLEQUOTE_) + offset);
var prev_sib = paredit_cm.core.start_of_prev_sibling.call(null,cm,cur_SINGLEQUOTE_);
var prev_sib_end = paredit_cm.core.end_of_next_sibling.call(null,cm,prev_sib);
var next_sib = paredit_cm.core.end_of_next_sibling.call(null,cm,cur);
var next_sib_start = paredit_cm.core.start_of_prev_sibling.call(null,cm,next_sib);
if((next_sib_start == null)){
paredit_cm.core.insert.call(null,cm,open_bracket);
} else {
paredit_cm.core.insert.call(null,cm,open_bracket,(0),next_sib_start);
}

if((prev_sib_end == null)){
paredit_cm.core.move_left.call(null,cm);

paredit_cm.core.insert.call(null,cm,close_bracket);
} else {
paredit_cm.core.insert.call(null,cm,close_bracket,(0),prev_sib_end);
}

return cm.setCursor(paredit_cm.core.cursor.call(null,cm,i_SINGLEQUOTE_));
} else {
return null;
}
});
/**
 * split sexp for "strings like this"
 */
paredit_cm.core.split_string = (function paredit_cm$core$split_string(cm,cur){
var open_quote_i = paredit_cm.core.index_of_next_non.call(null,cm,paredit_cm.core.index.call(null,cm,cur)," ");
cm.replaceRange("\" \"",cur,paredit_cm.core.cursor.call(null,cm,open_quote_i));

paredit_cm.core.move_left.call(null,cm);

return paredit_cm.core.move_left.call(null,cm);
});
/**
 * paredit split-sexp exposed for keymap.
 */
paredit_cm.core.split_sexp = (function paredit_cm$core$split_sexp(var_args){
var G__13325 = arguments.length;
switch (G__13325) {
case 1:
return paredit_cm.core.split_sexp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.split_sexp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('paredit_cm.core.split_sexp', paredit_cm.core.split_sexp);

(paredit_cm.core.split_sexp.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.split_sexp.call(null,cm,paredit_cm.core.cursor.call(null,cm));
}));

(paredit_cm.core.split_sexp.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
if(paredit_cm.core.in_string_QMARK_.call(null,cm,cur)){
return paredit_cm.core.split_string.call(null,cm,cur);
} else {
return paredit_cm.core.split_form.call(null,cm,cur);
}
}));

(paredit_cm.core.split_sexp.cljs$lang$maxFixedArity = 2);

/**
 * paredit join-sexps exposed for keymap.
 */
paredit_cm.core.join_sexps = (function paredit_cm$core$join_sexps(var_args){
var G__13328 = arguments.length;
switch (G__13328) {
case 1:
return paredit_cm.core.join_sexps.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.join_sexps.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('paredit_cm.core.join_sexps', paredit_cm.core.join_sexps);

(paredit_cm.core.join_sexps.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.join_sexps.call(null,cm,paredit_cm.core.cursor.call(null,cm));
}));

(paredit_cm.core.join_sexps.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
var left_sib = paredit_cm.core.start_of_prev_sibling.call(null,cm,cur);
var close = paredit_cm.core.end_of_next_sibling.call(null,cm,left_sib);
var right_sib = paredit_cm.core.end_of_next_sibling.call(null,cm,cur);
var open = paredit_cm.core.start_of_prev_sibling.call(null,cm,right_sib);
var open_right = (cljs.core.truth_(open)?paredit_cm.core.cursor.call(null,cm,(paredit_cm.core.index.call(null,cm,open) + (1))):null);
var close_char = paredit_cm.core.get_string.call(null,cm,close);
var open_char = paredit_cm.core.get_string.call(null,cm,open_right);
if((((!((open == null)))) && ((((!((close == null)))) && (paredit_cm.core.pair_QMARK_.call(null,open_char,close_char)))))){
cm.setCursor(open);

paredit_cm.core.delete$.call(null,cm);

cm.setCursor(close);

paredit_cm.core.backspace.call(null,cm);

return cm.setCursor(((cljs.core._EQ_.call(null,open.line,close.line))?paredit_cm.core.cursor.call(null,cm,(paredit_cm.core.index.call(null,cm,cur) - (1))):cur));
} else {
return cm.setCursor(cur);
}
}));

(paredit_cm.core.join_sexps.cljs$lang$maxFixedArity = 2);

/**
 * trampoline-able that looks for the top-most opening bracket for the specified
 *   location. returns the current cursor if there is no such anscestor
 */
paredit_cm.core.top_most_opener_candidate = (function paredit_cm$core$top_most_opener_candidate(cm,cur,n){
if((n >= (0))){
var temp__5821__auto__ = paredit_cm.core.backward_up_cur.call(null,cm,cur);
if(cljs.core.truth_(temp__5821__auto__)){
var parent = temp__5821__auto__;
return (function (){
return paredit_cm.core.top_most_opener_candidate.call(null,cm,parent,(n - (1)));
});
} else {
return cur;
}
} else {
return null;
}
});
/**
 * get the top most opening bracket for the specified location. nil if
 *   there is no such bracket.
 */
paredit_cm.core.top_most_opener = (function paredit_cm$core$top_most_opener(var_args){
var G__13331 = arguments.length;
switch (G__13331) {
case 1:
return paredit_cm.core.top_most_opener.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.top_most_opener.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(paredit_cm.core.top_most_opener.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.top_most_opener.call(null,cm,paredit_cm.core.cursor.call(null,cm));
}));

(paredit_cm.core.top_most_opener.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
var candidate = paredit_cm.core.top_most_opener_candidate.call(null,cm,cur,paredit_cm.core.char_count.call(null,cm));
if(cljs.core.not_EQ_.call(null,candidate,cur)){
return candidate;
} else {
return null;
}
}));

(paredit_cm.core.top_most_opener.cljs$lang$maxFixedArity = 2);

/**
 * paredit reindent-defun exposed for keymap.
 */
paredit_cm.core.reindent_defun = (function paredit_cm$core$reindent_defun(var_args){
var G__13334 = arguments.length;
switch (G__13334) {
case 1:
return paredit_cm.core.reindent_defun.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.reindent_defun.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('paredit_cm.core.reindent_defun', paredit_cm.core.reindent_defun);

(paredit_cm.core.reindent_defun.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.reindent_defun.call(null,cm,paredit_cm.core.cursor.call(null,cm));
}));

(paredit_cm.core.reindent_defun.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
var open = cljs.core.trampoline.call(null,paredit_cm.core.top_most_opener,cm,cur);
var close = paredit_cm.core.end_of_next_sibling.call(null,cm,open);
var open_line = (cljs.core.truth_(open)?open.line:null);
var line_offset = (cljs.core.truth_(open)?(cur.line - open_line):null);
var line_len = cljs.core.count.call(null,cm.getLine(cur.line));
var ch = cur.ch;
if((((!((open == null)))) && ((!((close == null)))))){
paredit_cm.core.indent_lines.call(null,cm,open.line,close.line);

cljs.core.repeatedly.call(null,line_offset,cm.execCommand("goLineDown"));

cm.execCommand("goLineStart");

return cm.setCursor(paredit_cm.core.cursor.call(null,cm,((paredit_cm.core.index.call(null,cm) + ch) + (cljs.core.count.call(null,cm.getLine(paredit_cm.core.cursor.call(null,cm).line)) - line_len))));
} else {
return null;
}
}));

(paredit_cm.core.reindent_defun.cljs$lang$maxFixedArity = 2);

/**
 * forward-sexp exposed for keymap. seems part of emacs and not part
 *   of paredit itself. but including it here since this will be used in
 *   things other than emacs itself.
 */
paredit_cm.core.forward_sexp = (function paredit_cm$core$forward_sexp(var_args){
var G__13337 = arguments.length;
switch (G__13337) {
case 1:
return paredit_cm.core.forward_sexp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.forward_sexp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('paredit_cm.core.forward_sexp', paredit_cm.core.forward_sexp);

(paredit_cm.core.forward_sexp.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.forward_sexp.call(null,cm,paredit_cm.core.cursor.call(null,cm));
}));

(paredit_cm.core.forward_sexp.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
var temp__5823__auto__ = paredit_cm.core.end_of_next_sibling.call(null,cm,cur);
if(cljs.core.truth_(temp__5823__auto__)){
var cur_SINGLEQUOTE_ = temp__5823__auto__;
return cm.setCursor(cur_SINGLEQUOTE_);
} else {
return null;
}
}));

(paredit_cm.core.forward_sexp.cljs$lang$maxFixedArity = 2);

/**
 * backward-sexp exposed for keymap. seems part of emacs and not part
 *   of paredit itself. but including it here since this will be used in
 *   things other than emacs itself.
 */
paredit_cm.core.backward_sexp = (function paredit_cm$core$backward_sexp(var_args){
var G__13340 = arguments.length;
switch (G__13340) {
case 1:
return paredit_cm.core.backward_sexp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.backward_sexp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('paredit_cm.core.backward_sexp', paredit_cm.core.backward_sexp);

(paredit_cm.core.backward_sexp.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.backward_sexp.call(null,cm,paredit_cm.core.cursor.call(null,cm));
}));

(paredit_cm.core.backward_sexp.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
var temp__5823__auto__ = paredit_cm.core.start_of_prev_sibling.call(null,cm,cur);
if(cljs.core.truth_(temp__5823__auto__)){
var cur_SINGLEQUOTE_ = temp__5823__auto__;
return cm.setCursor(cur_SINGLEQUOTE_);
} else {
return null;
}
}));

(paredit_cm.core.backward_sexp.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=core.js.map?rel=1726541905517
