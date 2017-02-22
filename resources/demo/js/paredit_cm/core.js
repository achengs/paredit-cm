// Compiled by ClojureScript 1.9.473 {:static-fns true, :optimize-constants true}
goog.provide('paredit_cm.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_();
paredit_cm.core.openers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["(",null,"{",null,"[",null], null), null);
paredit_cm.core.closers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["]",null,")",null,"}",null], null), null);
paredit_cm.core.pair = new cljs.core.PersistentArrayMap(null, 7, ["(",")","[","]","{","}","\"","\"",")","(","]","[","}","{"], null);
/**
 * true if the two strings are a matching open/close pair 
 */
paredit_cm.core.pair_QMARK_ = (function paredit_cm$core$pair_QMARK_(s1,s2){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((paredit_cm.core.pair.cljs$core$IFn$_invoke$arity$1 ? paredit_cm.core.pair.cljs$core$IFn$_invoke$arity$1(s1) : paredit_cm.core.pair.call(null,s1)),s2);
});
paredit_cm.core.opener_QMARK_ = (function paredit_cm$core$opener_QMARK_(s){
return cljs.core.contains_QMARK_(paredit_cm.core.openers,s);
});
paredit_cm.core.closer_QMARK_ = (function paredit_cm$core$closer_QMARK_(s){
return cljs.core.contains_QMARK_(paredit_cm.core.closers,s);
});
paredit_cm.core.is_bracket_type_QMARK_ = (function paredit_cm$core$is_bracket_type_QMARK_(t){
var and__6802__auto__ = t;
if(cljs.core.truth_(and__6802__auto__)){
return clojure.string.starts_with_QMARK_(t,"bracket");
} else {
return and__6802__auto__;
}
});
/**
 * returns the number of characters in the code mirror instance
 */
paredit_cm.core.char_count = (function paredit_cm$core$char_count(cm){
return cljs.core.count(cm.getValue());
});
/**
 * get cur, the position of the cursor
 */
paredit_cm.core.cursor = (function paredit_cm$core$cursor(var_args){
var args25642 = [];
var len__7927__auto___25645 = arguments.length;
var i__7928__auto___25646 = (0);
while(true){
if((i__7928__auto___25646 < len__7927__auto___25645)){
args25642.push((arguments[i__7928__auto___25646]));

var G__25647 = (i__7928__auto___25646 + (1));
i__7928__auto___25646 = G__25647;
continue;
} else {
}
break;
}

var G__25644 = args25642.length;
switch (G__25644) {
case 1:
return paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args25642.length)].join('')));

}
});

paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return cm.getCursor();
});

paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2 = (function (cm,i){
return cm.posFromIndex(i);
});

paredit_cm.core.cursor.cljs$lang$maxFixedArity = 2;

/**
 * get the index i for the cursor's position
 */
paredit_cm.core.index = (function paredit_cm$core$index(var_args){
var args25649 = [];
var len__7927__auto___25652 = arguments.length;
var i__7928__auto___25653 = (0);
while(true){
if((i__7928__auto___25653 < len__7927__auto___25652)){
args25649.push((arguments[i__7928__auto___25653]));

var G__25654 = (i__7928__auto___25653 + (1));
i__7928__auto___25653 = G__25654;
continue;
} else {
}
break;
}

var G__25651 = args25649.length;
switch (G__25651) {
case 1:
return paredit_cm.core.index.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.index.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args25649.length)].join('')));

}
});

paredit_cm.core.index.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.index.cljs$core$IFn$_invoke$arity$2(cm,paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm));
});

paredit_cm.core.index.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
if(cljs.core.truth_(cur)){
return cm.indexFromPos(cur);
} else {
return null;
}
});

paredit_cm.core.index.cljs$lang$maxFixedArity = 2;

/**
 * true if at beginning of file
 */
paredit_cm.core.bof_QMARK_ = (function paredit_cm$core$bof_QMARK_(cm,cur){
return (paredit_cm.core.index.cljs$core$IFn$_invoke$arity$2(cm,cur) === (0));
});
/**
 * true if at end of file
 */
paredit_cm.core.eof_QMARK_ = (function paredit_cm$core$eof_QMARK_(cm,cur){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(paredit_cm.core.index.cljs$core$IFn$_invoke$arity$2(cm,cur),paredit_cm.core.char_count(cm));
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
var args25656 = [];
var len__7927__auto___25659 = arguments.length;
var i__7928__auto___25660 = (0);
while(true){
if((i__7928__auto___25660 < len__7927__auto___25659)){
args25656.push((arguments[i__7928__auto___25660]));

var G__25661 = (i__7928__auto___25660 + (1));
i__7928__auto___25660 = G__25661;
continue;
} else {
}
break;
}

var G__25658 = args25656.length;
switch (G__25658) {
case 1:
return paredit_cm.core.get_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.get_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args25656.length)].join('')));

}
});

paredit_cm.core.get_type.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.get_type.cljs$core$IFn$_invoke$arity$2(cm,paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm));
});

paredit_cm.core.get_type.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
return paredit_cm.core.token(cm,cur).type;
});

paredit_cm.core.get_type.cljs$lang$maxFixedArity = 2;

/**
 * gets the string of the current token
 */
paredit_cm.core.get_string = (function paredit_cm$core$get_string(var_args){
var args25663 = [];
var len__7927__auto___25666 = arguments.length;
var i__7928__auto___25667 = (0);
while(true){
if((i__7928__auto___25667 < len__7927__auto___25666)){
args25663.push((arguments[i__7928__auto___25667]));

var G__25668 = (i__7928__auto___25667 + (1));
i__7928__auto___25667 = G__25668;
continue;
} else {
}
break;
}

var G__25665 = args25663.length;
switch (G__25665) {
case 1:
return paredit_cm.core.get_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.get_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args25663.length)].join('')));

}
});

paredit_cm.core.get_string.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.get_string.cljs$core$IFn$_invoke$arity$2(cm,paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm));
});

paredit_cm.core.get_string.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
if(cljs.core.truth_(cur)){
return paredit_cm.core.token(cm,cur).string;
} else {
return null;
}
});

paredit_cm.core.get_string.cljs$lang$maxFixedArity = 2;

/**
 * gets the length of the current line
 */
paredit_cm.core.line_length = (function paredit_cm$core$line_length(var_args){
var args25670 = [];
var len__7927__auto___25673 = arguments.length;
var i__7928__auto___25674 = (0);
while(true){
if((i__7928__auto___25674 < len__7927__auto___25673)){
args25670.push((arguments[i__7928__auto___25674]));

var G__25675 = (i__7928__auto___25674 + (1));
i__7928__auto___25674 = G__25675;
continue;
} else {
}
break;
}

var G__25672 = args25670.length;
switch (G__25672) {
case 1:
return paredit_cm.core.line_length.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.line_length.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args25670.length)].join('')));

}
});

paredit_cm.core.line_length.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.line_length.cljs$core$IFn$_invoke$arity$2(cm,paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm));
});

paredit_cm.core.line_length.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
if(cljs.core.truth_(cur)){
return cljs.core.count(cm.getLine(cur.line));
} else {
return null;
}
});

paredit_cm.core.line_length.cljs$lang$maxFixedArity = 2;

/**
 * returns the last token of a line
 */
paredit_cm.core.last_token = (function paredit_cm$core$last_token(cm,cur){
return cljs.core.last(cm.getLineTokens(cur.line));
});
/**
 * returns the last cursor of a line
 */
paredit_cm.core.last_cur = (function paredit_cm$core$last_cur(var_args){
var args25677 = [];
var len__7927__auto___25680 = arguments.length;
var i__7928__auto___25681 = (0);
while(true){
if((i__7928__auto___25681 < len__7927__auto___25680)){
args25677.push((arguments[i__7928__auto___25681]));

var G__25682 = (i__7928__auto___25681 + (1));
i__7928__auto___25681 = G__25682;
continue;
} else {
}
break;
}

var G__25679 = args25677.length;
switch (G__25679) {
case 1:
return paredit_cm.core.last_cur.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.last_cur.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args25677.length)].join('')));

}
});

paredit_cm.core.last_cur.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.last_cur.cljs$core$IFn$_invoke$arity$2(cm,paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm));
});

paredit_cm.core.last_cur.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
var end = paredit_cm.core.last_token(cm,cur).end;
var diff = (end - cur.ch);
return paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,(diff + paredit_cm.core.index.cljs$core$IFn$_invoke$arity$2(cm,cur)));
});

paredit_cm.core.last_cur.cljs$lang$maxFixedArity = 2;

/**
 * make info from CodeMirror more conveniently accessed by our code.
 *   we'll use destructuring and just name what we rant. hypothesizing
 *   that performance hit won't be that bad.
 */
paredit_cm.core.get_info = (function paredit_cm$core$get_info(var_args){
var args25684 = [];
var len__7927__auto___25687 = arguments.length;
var i__7928__auto___25688 = (0);
while(true){
if((i__7928__auto___25688 < len__7927__auto___25687)){
args25684.push((arguments[i__7928__auto___25688]));

var G__25689 = (i__7928__auto___25688 + (1));
i__7928__auto___25688 = G__25689;
continue;
} else {
}
break;
}

var G__25686 = args25684.length;
switch (G__25686) {
case 1:
return paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args25684.length)].join('')));

}
});

paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$2(cm,paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm));
});

paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
if(cljs.core.truth_(cur)){
var tok = paredit_cm.core.token(cm,cur);
var eof = paredit_cm.core.eof_QMARK_(cm,cur);
var bof = paredit_cm.core.bof_QMARK_(cm,cur);
var i = paredit_cm.core.index.cljs$core$IFn$_invoke$arity$2(cm,cur);
var left_cur = (cljs.core.truth_(bof)?null:paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,(i - (1))));
var right_cur = (cljs.core.truth_(eof)?null:paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,(i + (1))));
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$bof,cljs.core.cst$kw$top,cljs.core.cst$kw$cur,cljs.core.cst$kw$right_DASH_char,cljs.core.cst$kw$mode,cljs.core.cst$kw$start,cljs.core.cst$kw$left_DASH_char,cljs.core.cst$kw$type,cljs.core.cst$kw$string,cljs.core.cst$kw$ch,cljs.core.cst$kw$line,cljs.core.cst$kw$tok,cljs.core.cst$kw$left_DASH_cur,cljs.core.cst$kw$end,cljs.core.cst$kw$eof,cljs.core.cst$kw$i,cljs.core.cst$kw$right_DASH_cur],[bof,(tok.state.indentStack == null),cur,(cljs.core.truth_(eof)?null:cm.getRange(cur,right_cur)),tok.state.mode,tok.start,(cljs.core.truth_(bof)?null:cm.getRange(left_cur,cur)),tok.type,tok.string,cur.ch,cur.line,tok,left_cur,tok.end,eof,i,right_cur]);
} else {
return null;
}
});

paredit_cm.core.get_info.cljs$lang$maxFixedArity = 2;

/**
 * true if the type is comment or string. a lot of editing behavior (like
 *   movement and deletion) is similar when you are in a string or in a comment, so
 *   often this is the predicate for that behavior.
 */
paredit_cm.core.comment_or_string_QMARK_ = (function paredit_cm$core$comment_or_string_QMARK_(type){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,"comment")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,"string"));
});
/**
 * indent the current line
 */
paredit_cm.core.indent_line = (function paredit_cm$core$indent_line(cm){
return cm.indentLine(paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm).line);
});
/**
 * returns true if backslash is to the left and cursor is on an escaped char
 */
paredit_cm.core.in_escaped_char_QMARK_ = (function paredit_cm$core$in_escaped_char_QMARK_(var_args){
var args25691 = [];
var len__7927__auto___25696 = arguments.length;
var i__7928__auto___25697 = (0);
while(true){
if((i__7928__auto___25697 < len__7927__auto___25696)){
args25691.push((arguments[i__7928__auto___25697]));

var G__25698 = (i__7928__auto___25697 + (1));
i__7928__auto___25697 = G__25698;
continue;
} else {
}
break;
}

var G__25693 = args25691.length;
switch (G__25693) {
case 2:
return paredit_cm.core.in_escaped_char_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return paredit_cm.core.in_escaped_char_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args25691.length)].join('')));

}
});

paredit_cm.core.in_escaped_char_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
return paredit_cm.core.in_escaped_char_QMARK_.cljs$core$IFn$_invoke$arity$3(cm,cur,(0));
});

paredit_cm.core.in_escaped_char_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (cm,cur,offset){
var map__25694 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$2(cm,cur);
var map__25694__$1 = ((((!((map__25694 == null)))?((((map__25694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25694.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25694):map__25694);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25694__$1,cljs.core.cst$kw$ch);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25694__$1,cljs.core.cst$kw$start);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25694__$1,cljs.core.cst$kw$end);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25694__$1,cljs.core.cst$kw$type);
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start,((ch - (1)) + offset))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(end,((ch + (1)) + offset))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,"string-2"));
});

paredit_cm.core.in_escaped_char_QMARK_.cljs$lang$maxFixedArity = 3;

/**
 * returns true if an escaped char and its backslash are to the left
 */
paredit_cm.core.escaped_char_to_left_QMARK_ = (function paredit_cm$core$escaped_char_to_left_QMARK_(cm,cur){
return paredit_cm.core.in_escaped_char_QMARK_.cljs$core$IFn$_invoke$arity$3(cm,cur,(-1));
});
/**
 * returns true if an escaped char and its backslash is to the right
 */
paredit_cm.core.escaped_char_to_right_QMARK_ = (function paredit_cm$core$escaped_char_to_right_QMARK_(cm,cur){
return paredit_cm.core.in_escaped_char_QMARK_.cljs$core$IFn$_invoke$arity$3(cm,cur,(1));
});
/**
 * insert text at current cursor. move cursor to the end of inserted text minus
 *   optional offset. the offset is for moving the cursor immediately after the
 *   insert and before returning. example: inserting a pair of brackets and placing
 *   the cursor inside the pair. this returns the new cursor.
 */
paredit_cm.core.insert = (function paredit_cm$core$insert(var_args){
var args25700 = [];
var len__7927__auto___25705 = arguments.length;
var i__7928__auto___25706 = (0);
while(true){
if((i__7928__auto___25706 < len__7927__auto___25705)){
args25700.push((arguments[i__7928__auto___25706]));

var G__25707 = (i__7928__auto___25706 + (1));
i__7928__auto___25706 = G__25707;
continue;
} else {
}
break;
}

var G__25702 = args25700.length;
switch (G__25702) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args25700.length)].join('')));

}
});

paredit_cm.core.insert.cljs$core$IFn$_invoke$arity$2 = (function (cm,text){
return paredit_cm.core.insert.cljs$core$IFn$_invoke$arity$3(cm,text,(0));
});

paredit_cm.core.insert.cljs$core$IFn$_invoke$arity$3 = (function (cm,text,offset){
return paredit_cm.core.insert.cljs$core$IFn$_invoke$arity$4(cm,text,offset,paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm));
});

paredit_cm.core.insert.cljs$core$IFn$_invoke$arity$4 = (function (cm,text,offset,cur){
var map__25703 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$2(cm,cur);
var map__25703__$1 = ((((!((map__25703 == null)))?((((map__25703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25703.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25703):map__25703);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25703__$1,cljs.core.cst$kw$line);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25703__$1,cljs.core.cst$kw$ch);
cm.replaceRange(text,cur);

cm.setCursor(line,((ch + cljs.core.count(text)) + offset));

return paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm);
});

paredit_cm.core.insert.cljs$lang$maxFixedArity = 4;

/**
 * paredit-open-round exposed for keymap. unlike traditional emacs paredit, this
 *   supports brackets [] {} () but not double-quote
 */
paredit_cm.core.open_round = (function paredit_cm$core$open_round(var_args){
var args25709 = [];
var len__7927__auto___25714 = arguments.length;
var i__7928__auto___25715 = (0);
while(true){
if((i__7928__auto___25715 < len__7927__auto___25714)){
args25709.push((arguments[i__7928__auto___25715]));

var G__25716 = (i__7928__auto___25715 + (1));
i__7928__auto___25715 = G__25716;
continue;
} else {
}
break;
}

var G__25711 = args25709.length;
switch (G__25711) {
case 1:
return paredit_cm.core.open_round.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.open_round.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args25709.length)].join('')));

}
});
goog.exportSymbol('paredit_cm.core.open_round', paredit_cm.core.open_round);

paredit_cm.core.open_round.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.open_round.cljs$core$IFn$_invoke$arity$2(cm,"(");
});

paredit_cm.core.open_round.cljs$core$IFn$_invoke$arity$2 = (function (cm,c){
var map__25712 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$1(cm);
var map__25712__$1 = ((((!((map__25712 == null)))?((((map__25712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25712.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25712):map__25712);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25712__$1,cljs.core.cst$kw$type);
var left_char = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25712__$1,cljs.core.cst$kw$left_DASH_char);
var right_char = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25712__$1,cljs.core.cst$kw$right_DASH_char);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\\",left_char)){
return paredit_cm.core.insert.cljs$core$IFn$_invoke$arity$2(cm,c);
} else {
if(cljs.core.truth_(paredit_cm.core.comment_or_string_QMARK_(type))){
return paredit_cm.core.insert.cljs$core$IFn$_invoke$arity$2(cm,c);
} else {
var need_left_padding = (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(" ",left_char)) && (cljs.core.not(paredit_cm.core.opener_QMARK_(left_char)));
var need_right_padding = (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(" ",right_char)) && (cljs.core.not(paredit_cm.core.closer_QMARK_(right_char)));
return paredit_cm.core.insert.cljs$core$IFn$_invoke$arity$3(cm,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((need_left_padding)?" ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),cljs.core.str.cljs$core$IFn$_invoke$arity$1((paredit_cm.core.pair.cljs$core$IFn$_invoke$arity$1 ? paredit_cm.core.pair.cljs$core$IFn$_invoke$arity$1(c) : paredit_cm.core.pair.call(null,c))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((need_right_padding)?" ":null))].join(''),((need_right_padding)?(-2):(-1)));

}
}
});

paredit_cm.core.open_round.cljs$lang$maxFixedArity = 2;

/**
 * open curly brace with matching close brace
 */
paredit_cm.core.open_brace = (function paredit_cm$core$open_brace(cm){
return paredit_cm.core.open_round.cljs$core$IFn$_invoke$arity$2(cm,"{");
});
goog.exportSymbol('paredit_cm.core.open_brace', paredit_cm.core.open_brace);
/**
 * finds the *parent* closing bracket. behavior when used with skip: pushes
 *   opening brackets that appear along the way on a stack. closing brackets pop
 *   them off. stops when encountering a closing bracket while the stack is empty.
 *   assuming the cm has matched brackets for now. moves to the right.
 */
paredit_cm.core.parent_closer_sp = (function paredit_cm$core$parent_closer_sp(cm,cur,state){
var map__25720 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$2(cm,cur);
var map__25720__$1 = ((((!((map__25720 == null)))?((((map__25720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25720.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25720):map__25720);
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25720__$1,cljs.core.cst$kw$string);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25720__$1,cljs.core.cst$kw$type);
var top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25720__$1,cljs.core.cst$kw$top);
var eof = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25720__$1,cljs.core.cst$kw$eof);
if(cljs.core.truth_((function (){var and__6802__auto__ = paredit_cm.core.is_bracket_type_QMARK_(type);
if(cljs.core.truth_(and__6802__auto__)){
return paredit_cm.core.opener_QMARK_(string);
} else {
return and__6802__auto__;
}
})())){
return (state + (1));
} else {
if(cljs.core.truth_((function (){var and__6802__auto__ = paredit_cm.core.is_bracket_type_QMARK_(type);
if(cljs.core.truth_(and__6802__auto__)){
var and__6802__auto____$1 = paredit_cm.core.closer_QMARK_(string);
if(cljs.core.truth_(and__6802__auto____$1)){
return (state === (0));
} else {
return and__6802__auto____$1;
}
} else {
return and__6802__auto__;
}
})())){
return cljs.core.cst$kw$yes;
} else {
if(cljs.core.truth_((function (){var and__6802__auto__ = paredit_cm.core.is_bracket_type_QMARK_(type);
if(cljs.core.truth_(and__6802__auto__)){
var and__6802__auto____$1 = paredit_cm.core.closer_QMARK_(string);
if(cljs.core.truth_(and__6802__auto____$1)){
var and__6802__auto____$2 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),state);
if(and__6802__auto____$2){
return eof;
} else {
return and__6802__auto____$2;
}
} else {
return and__6802__auto____$1;
}
} else {
return and__6802__auto__;
}
})())){
return cljs.core.cst$kw$eof;
} else {
if(cljs.core.truth_((function (){var and__6802__auto__ = paredit_cm.core.is_bracket_type_QMARK_(type);
if(cljs.core.truth_(and__6802__auto__)){
var and__6802__auto____$1 = paredit_cm.core.closer_QMARK_(string);
if(cljs.core.truth_(and__6802__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),state);
} else {
return and__6802__auto____$1;
}
} else {
return and__6802__auto__;
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
var map__25724 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$2(cm,cur);
var map__25724__$1 = ((((!((map__25724 == null)))?((((map__25724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25724.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25724):map__25724);
var i = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25724__$1,cljs.core.cst$kw$i);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25724__$1,cljs.core.cst$kw$start);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25724__$1,cljs.core.cst$kw$ch);
return paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,(i - (ch - start)));
});
/**
 * returns the cursor for the end of the current token
 */
paredit_cm.core.token_end = (function paredit_cm$core$token_end(var_args){
var args25726 = [];
var len__7927__auto___25731 = arguments.length;
var i__7928__auto___25732 = (0);
while(true){
if((i__7928__auto___25732 < len__7927__auto___25731)){
args25726.push((arguments[i__7928__auto___25732]));

var G__25733 = (i__7928__auto___25732 + (1));
i__7928__auto___25732 = G__25733;
continue;
} else {
}
break;
}

var G__25728 = args25726.length;
switch (G__25728) {
case 2:
return paredit_cm.core.token_end.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return paredit_cm.core.token_end.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args25726.length)].join('')));

}
});

paredit_cm.core.token_end.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
return paredit_cm.core.token_end.cljs$core$IFn$_invoke$arity$3(cm,cur,(0));
});

paredit_cm.core.token_end.cljs$core$IFn$_invoke$arity$3 = (function (cm,cur,offset){
var map__25729 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$2(cm,cur);
var map__25729__$1 = ((((!((map__25729 == null)))?((((map__25729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25729.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25729):map__25729);
var i = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25729__$1,cljs.core.cst$kw$i);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25729__$1,cljs.core.cst$kw$end);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25729__$1,cljs.core.cst$kw$ch);
return paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,((i + offset) + (end - ch)));
});

paredit_cm.core.token_end.cljs$lang$maxFixedArity = 3;

/**
 * take an index. get its token. return index of that token's end.
 */
paredit_cm.core.token_end_index = (function paredit_cm$core$token_end_index(cm,i){
return paredit_cm.core.index.cljs$core$IFn$_invoke$arity$2(cm,paredit_cm.core.token_end.cljs$core$IFn$_invoke$arity$2(cm,paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,i)));
});
/**
 * returns the cursor that satsifies skipping predicate 'sp' or nil if eof
 *   reached. does this by making sp something we can trampoline. sp takes these
 *   args: cm, cursor, state. counts down 'n' to 0 in order to guard against
 *   infinite loops.
 */
paredit_cm.core.skip_trampoline_helper = (function paredit_cm$core$skip_trampoline_helper(cm,cur,sp,state,n){
if((n >= (0))){
var map__25743 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$2(cm,cur);
var map__25743__$1 = ((((!((map__25743 == null)))?((((map__25743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25743.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25743):map__25743);
var left_cur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25743__$1,cljs.core.cst$kw$left_DASH_cur);
var i = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25743__$1,cljs.core.cst$kw$i);
var result = (sp.cljs$core$IFn$_invoke$arity$3 ? sp.cljs$core$IFn$_invoke$arity$3(cm,cur,state) : sp.call(null,cm,cur,state));
var G__25745 = (((result instanceof cljs.core.Keyword))?result.fqn:null);
switch (G__25745) {
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
return paredit_cm.core.token_end.cljs$core$IFn$_invoke$arity$2(cm,cur);

break;
case "start-of-this-tok":
return paredit_cm.core.token_start(cm,cur);

break;
default:
var next_cur = paredit_cm.core.token_end.cljs$core$IFn$_invoke$arity$3(cm,cur,(1));
return ((function (next_cur,G__25745,map__25743,map__25743__$1,left_cur,i,result){
return (function (){
var G__25746 = cm;
var G__25747 = next_cur;
var G__25748 = sp;
var G__25749 = result;
var G__25750 = (n - (1));
return (paredit_cm.core.skip_trampoline_helper.cljs$core$IFn$_invoke$arity$5 ? paredit_cm.core.skip_trampoline_helper.cljs$core$IFn$_invoke$arity$5(G__25746,G__25747,G__25748,G__25749,G__25750) : paredit_cm.core.skip_trampoline_helper.call(null,G__25746,G__25747,G__25748,G__25749,G__25750));
});
;})(next_cur,G__25745,map__25743,map__25743__$1,left_cur,i,result))

}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["infinite loop"], 0));
}
});
/**
 * like skip-trampoline-helper but in the opposite direction.
 */
paredit_cm.core.skip_trampoline_helper_left = (function paredit_cm$core$skip_trampoline_helper_left(cm,cur,sp,state,n){
if((n >= (0))){
var map__25760 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$2(cm,cur);
var map__25760__$1 = ((((!((map__25760 == null)))?((((map__25760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25760.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25760):map__25760);
var left_cur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25760__$1,cljs.core.cst$kw$left_DASH_cur);
var right_cur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25760__$1,cljs.core.cst$kw$right_DASH_cur);
var i = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25760__$1,cljs.core.cst$kw$i);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25760__$1,cljs.core.cst$kw$start);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25760__$1,cljs.core.cst$kw$ch);
var result = (sp.cljs$core$IFn$_invoke$arity$3 ? sp.cljs$core$IFn$_invoke$arity$3(cm,cur,state) : sp.call(null,cm,cur,state));
var G__25762 = (((result instanceof cljs.core.Keyword))?result.fqn:null);
switch (G__25762) {
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
return paredit_cm.core.token_end.cljs$core$IFn$_invoke$arity$2(cm,cur);

break;
case "start-of-this-tok":
return paredit_cm.core.token_start(cm,cur);

break;
default:
var next_cur = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ch,start))?paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,(i - (1))):paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,(i - (ch - start))));
return ((function (next_cur,G__25762,map__25760,map__25760__$1,left_cur,right_cur,i,start,ch,result){
return (function (){
var G__25763 = cm;
var G__25764 = next_cur;
var G__25765 = sp;
var G__25766 = result;
var G__25767 = (n - (1));
return (paredit_cm.core.skip_trampoline_helper_left.cljs$core$IFn$_invoke$arity$5 ? paredit_cm.core.skip_trampoline_helper_left.cljs$core$IFn$_invoke$arity$5(G__25763,G__25764,G__25765,G__25766,G__25767) : paredit_cm.core.skip_trampoline_helper_left.call(null,G__25763,G__25764,G__25765,G__25766,G__25767));
});
;})(next_cur,G__25762,map__25760,map__25760__$1,left_cur,right_cur,i,start,ch,result))

}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["infinite loop"], 0));
}
});
/**
 * returns the cursor that satisfies sp or nil if either eof reached
 *   or we found out sp could not be satisfied. see skip-to for more
 *   info.
 */
paredit_cm.core.skip = (function paredit_cm$core$skip(var_args){
var args25769 = [];
var len__7927__auto___25772 = arguments.length;
var i__7928__auto___25773 = (0);
while(true){
if((i__7928__auto___25773 < len__7927__auto___25772)){
args25769.push((arguments[i__7928__auto___25773]));

var G__25774 = (i__7928__auto___25773 + (1));
i__7928__auto___25773 = G__25774;
continue;
} else {
}
break;
}

var G__25771 = args25769.length;
switch (G__25771) {
case 2:
return paredit_cm.core.skip.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return paredit_cm.core.skip.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args25769.length)].join('')));

}
});

paredit_cm.core.skip.cljs$core$IFn$_invoke$arity$2 = (function (cm,sp){
return paredit_cm.core.skip.cljs$core$IFn$_invoke$arity$3(cm,sp,paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm));
});

paredit_cm.core.skip.cljs$core$IFn$_invoke$arity$3 = (function (cm,sp,cur){
var temp__4657__auto__ = cljs.core.cst$kw$right_DASH_cur.cljs$core$IFn$_invoke$arity$1(paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$2(cm,cur));
if(cljs.core.truth_(temp__4657__auto__)){
var right_cur = temp__4657__auto__;
return cljs.core.trampoline.cljs$core$IFn$_invoke$arity$variadic(paredit_cm.core.skip_trampoline_helper,cljs.core.array_seq([cm,right_cur,sp,(0),paredit_cm.core.char_count(cm)], 0));
} else {
return null;
}
});

paredit_cm.core.skip.cljs$lang$maxFixedArity = 3;

/**
 * returns the cursor that satisfies sp or nil if either bof reached
 *   or we found out sp could not be satisfied. see skip-to for more
 *   info.
 */
paredit_cm.core.skip_left = (function paredit_cm$core$skip_left(cm,sp){
var temp__4657__auto__ = paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm);
if(cljs.core.truth_(temp__4657__auto__)){
var cur = temp__4657__auto__;
return cljs.core.trampoline.cljs$core$IFn$_invoke$arity$variadic(paredit_cm.core.skip_trampoline_helper_left,cljs.core.array_seq([cm,cur,sp,(0),paredit_cm.core.char_count(cm)], 0));
} else {
return null;
}
});
/**
 * if cur is in whitespace, deletes it optionally without ruining indentation.
 */
paredit_cm.core.delete_whitespace = (function paredit_cm$core$delete_whitespace(var_args){
var args25776 = [];
var len__7927__auto___25781 = arguments.length;
var i__7928__auto___25782 = (0);
while(true){
if((i__7928__auto___25782 < len__7927__auto___25781)){
args25776.push((arguments[i__7928__auto___25782]));

var G__25783 = (i__7928__auto___25782 + (1));
i__7928__auto___25782 = G__25783;
continue;
} else {
}
break;
}

var G__25778 = args25776.length;
switch (G__25778) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args25776.length)].join('')));

}
});

paredit_cm.core.delete_whitespace.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.delete_whitespace.cljs$core$IFn$_invoke$arity$3(cm,paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm),true);
});

paredit_cm.core.delete_whitespace.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
return paredit_cm.core.delete_whitespace.cljs$core$IFn$_invoke$arity$3(cm,cur,true);
});

paredit_cm.core.delete_whitespace.cljs$core$IFn$_invoke$arity$3 = (function (cm,cur,indent_after){
var map__25779 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$2(cm,cur);
var map__25779__$1 = ((((!((map__25779 == null)))?((((map__25779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25779.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25779):map__25779);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25779__$1,cljs.core.cst$kw$start);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25779__$1,cljs.core.cst$kw$end);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25779__$1,cljs.core.cst$kw$line);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25779__$1,cljs.core.cst$kw$ch);
var i = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25779__$1,cljs.core.cst$kw$i);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25779__$1,cljs.core.cst$kw$type);
var c1 = paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,(i + (start - ch)));
var c2 = paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,(i + (end - ch)));
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
});

paredit_cm.core.delete_whitespace.cljs$lang$maxFixedArity = 3;

paredit_cm.core.just_one_space = (function paredit_cm$core$just_one_space(var_args){
var args25785 = [];
var len__7927__auto___25790 = arguments.length;
var i__7928__auto___25791 = (0);
while(true){
if((i__7928__auto___25791 < len__7927__auto___25790)){
args25785.push((arguments[i__7928__auto___25791]));

var G__25792 = (i__7928__auto___25791 + (1));
i__7928__auto___25791 = G__25792;
continue;
} else {
}
break;
}

var G__25787 = args25785.length;
switch (G__25787) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args25785.length)].join('')));

}
});

paredit_cm.core.just_one_space.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.just_one_space.cljs$core$IFn$_invoke$arity$3(cm,paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm),true);
});

paredit_cm.core.just_one_space.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
return paredit_cm.core.just_one_space.cljs$core$IFn$_invoke$arity$3(cm,cur,true);
});

paredit_cm.core.just_one_space.cljs$core$IFn$_invoke$arity$3 = (function (cm,cur,indent_after){
var map__25788 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$2(cm,cur);
var map__25788__$1 = ((((!((map__25788 == null)))?((((map__25788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25788.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25788):map__25788);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25788__$1,cljs.core.cst$kw$start);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25788__$1,cljs.core.cst$kw$end);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25788__$1,cljs.core.cst$kw$line);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25788__$1,cljs.core.cst$kw$ch);
var i = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25788__$1,cljs.core.cst$kw$i);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25788__$1,cljs.core.cst$kw$type);
var c1 = paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,(i + (start - ch)));
var c2 = paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,(i + (end - ch)));
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
});

paredit_cm.core.just_one_space.cljs$lang$maxFixedArity = 3;

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
var temp__4657__auto__ = paredit_cm.core.skip.cljs$core$IFn$_invoke$arity$2(cm,sp);
if(cljs.core.truth_(temp__4657__auto__)){
var cur_SINGLEQUOTE_ = temp__4657__auto__;
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
var temp__4657__auto__ = paredit_cm.core.skip_to(cm,paredit_cm.core.parent_closer_sp);
if(cljs.core.truth_(temp__4657__auto__)){
var cur = temp__4657__auto__;
paredit_cm.core.delete_whitespace.cljs$core$IFn$_invoke$arity$2(cm,cljs.core.cst$kw$left_DASH_cur.cljs$core$IFn$_invoke$arity$1(paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$1(cm)));

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
var args25794 = [];
var len__7927__auto___25799 = arguments.length;
var i__7928__auto___25800 = (0);
while(true){
if((i__7928__auto___25800 < len__7927__auto___25799)){
args25794.push((arguments[i__7928__auto___25800]));

var G__25801 = (i__7928__auto___25800 + (1));
i__7928__auto___25800 = G__25801;
continue;
} else {
}
break;
}

var G__25796 = args25794.length;
switch (G__25796) {
case 1:
return paredit_cm.core.close_round.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.close_round.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args25794.length)].join('')));

}
});
goog.exportSymbol('paredit_cm.core.close_round', paredit_cm.core.close_round);

paredit_cm.core.close_round.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.close_round.cljs$core$IFn$_invoke$arity$2(cm,")");
});

paredit_cm.core.close_round.cljs$core$IFn$_invoke$arity$2 = (function (cm,s){
var map__25797 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$1(cm);
var map__25797__$1 = ((((!((map__25797 == null)))?((((map__25797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25797.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25797):map__25797);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25797__$1,cljs.core.cst$kw$type);
var left_char = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25797__$1,cljs.core.cst$kw$left_DASH_char);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\\",left_char)){
return paredit_cm.core.insert.cljs$core$IFn$_invoke$arity$2(cm,s);
} else {
if(cljs.core.truth_(paredit_cm.core.comment_or_string_QMARK_(type))){
return paredit_cm.core.insert.cljs$core$IFn$_invoke$arity$2(cm,s);
} else {
return paredit_cm.core.move_past_parent_closer(cm);

}
}
});

paredit_cm.core.close_round.cljs$lang$maxFixedArity = 2;

/**
 * close curly brace like close-rond
 */
paredit_cm.core.close_brace = (function paredit_cm$core$close_brace(cm){
return paredit_cm.core.close_round.cljs$core$IFn$_invoke$arity$2(cm,"}");
});
goog.exportSymbol('paredit_cm.core.close_brace', paredit_cm.core.close_brace);
paredit_cm.core.close_round_and_newline = (function paredit_cm$core$close_round_and_newline(var_args){
var args25803 = [];
var len__7927__auto___25806 = arguments.length;
var i__7928__auto___25807 = (0);
while(true){
if((i__7928__auto___25807 < len__7927__auto___25806)){
args25803.push((arguments[i__7928__auto___25807]));

var G__25808 = (i__7928__auto___25807 + (1));
i__7928__auto___25807 = G__25808;
continue;
} else {
}
break;
}

var G__25805 = args25803.length;
switch (G__25805) {
case 1:
return paredit_cm.core.close_round_and_newline.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.close_round_and_newline.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args25803.length)].join('')));

}
});
goog.exportSymbol('paredit_cm.core.close_round_and_newline', paredit_cm.core.close_round_and_newline);

paredit_cm.core.close_round_and_newline.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.close_round_and_newline.cljs$core$IFn$_invoke$arity$2(cm,")");
});

paredit_cm.core.close_round_and_newline.cljs$core$IFn$_invoke$arity$2 = (function (cm,s){
if(cljs.core.truth_(paredit_cm.core.comment_or_string_QMARK_(paredit_cm.core.get_type.cljs$core$IFn$_invoke$arity$1(cm)))){
return paredit_cm.core.insert.cljs$core$IFn$_invoke$arity$2(cm,s);
} else {
if(cljs.core.truth_(paredit_cm.core.close_round.cljs$core$IFn$_invoke$arity$2(cm,s))){
return cm.execCommand("newlineAndIndent");
} else {
return null;
}
}
});

paredit_cm.core.close_round_and_newline.cljs$lang$maxFixedArity = 2;

paredit_cm.core.open_square = (function paredit_cm$core$open_square(cm){
return paredit_cm.core.open_round.cljs$core$IFn$_invoke$arity$2(cm,"[");
});
goog.exportSymbol('paredit_cm.core.open_square', paredit_cm.core.open_square);
paredit_cm.core.close_square = (function paredit_cm$core$close_square(cm){
return paredit_cm.core.close_round.cljs$core$IFn$_invoke$arity$2(cm,"]");
});
goog.exportSymbol('paredit_cm.core.close_square', paredit_cm.core.close_square);
paredit_cm.core.doublequote = (function paredit_cm$core$doublequote(cm){
var map__25812 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$1(cm);
var map__25812__$1 = ((((!((map__25812 == null)))?((((map__25812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25812.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25812):map__25812);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25812__$1,cljs.core.cst$kw$type);
var left_char = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25812__$1,cljs.core.cst$kw$left_DASH_char);
var right_char = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25812__$1,cljs.core.cst$kw$right_DASH_char);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25812__$1,cljs.core.cst$kw$ch);
var cur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25812__$1,cljs.core.cst$kw$cur);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\\",left_char)){
return paredit_cm.core.insert.cljs$core$IFn$_invoke$arity$2(cm,"\"");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,"string")){
return paredit_cm.core.insert.cljs$core$IFn$_invoke$arity$2(cm,"\\\"");
} else {
return paredit_cm.core.insert.cljs$core$IFn$_invoke$arity$3(cm,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(" ",left_char))?" ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(" ",right_char)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("\n",right_char)))?" ":null))].join(''),(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(" ",right_char)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",right_char)))?(-1):(-2)));

}
}
});
goog.exportSymbol('paredit_cm.core.doublequote', paredit_cm.core.doublequote);
paredit_cm.core.word_QMARK_ = (function paredit_cm$core$word_QMARK_(type){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,"atom")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,"builtin")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,"number")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,"variable")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,"keyword"));
});
/**
 * returns true if at a word of code
 */
paredit_cm.core.at_a_word_QMARK_ = (function paredit_cm$core$at_a_word_QMARK_(cm,cur){
return paredit_cm.core.word_QMARK_(paredit_cm.core.get_type.cljs$core$IFn$_invoke$arity$2(cm,cur));
});
/**
 * true if in a word AND not at the end of that word. false if in whitespace or
 *   a string or a comment or at a bracket.
 */
paredit_cm.core.in_a_word_QMARK_ = (function paredit_cm$core$in_a_word_QMARK_(cm){
var cur = paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm);
var i = paredit_cm.core.index.cljs$core$IFn$_invoke$arity$2(cm,cur);
var and__6802__auto__ = paredit_cm.core.at_a_word_QMARK_(cm,cur);
if(cljs.core.truth_(and__6802__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(i,paredit_cm.core.token_end_index(cm,i));
} else {
return and__6802__auto__;
}
});
/**
 * returns true if at the start of a string.
 */
paredit_cm.core.start_of_a_string_QMARK_ = (function paredit_cm$core$start_of_a_string_QMARK_(cm,cur){
var map__25816 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$2(cm,cur);
var map__25816__$1 = ((((!((map__25816 == null)))?((((map__25816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25816.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25816):map__25816);
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25816__$1,cljs.core.cst$kw$string);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25816__$1,cljs.core.cst$kw$type);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25816__$1,cljs.core.cst$kw$start);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25816__$1,cljs.core.cst$kw$end);
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25816__$1,cljs.core.cst$kw$mode);
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,"string")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(end - start))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(string,"\"")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,"string"));
});
/**
 * returns true if just to the right of a closing doublequote of a string.
 */
paredit_cm.core.end_of_a_string_QMARK_ = (function paredit_cm$core$end_of_a_string_QMARK_(cm,cur){
var map__25820 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$2(cm,cur);
var map__25820__$1 = ((((!((map__25820 == null)))?((((map__25820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25820.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25820):map__25820);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25820__$1,cljs.core.cst$kw$type);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25820__$1,cljs.core.cst$kw$ch);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25820__$1,cljs.core.cst$kw$end);
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25820__$1,cljs.core.cst$kw$string);
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25820__$1,cljs.core.cst$kw$mode);
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,"string")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ch,end)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\"",cljs.core.last(string))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("\\",cljs.core.last(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(string)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,false));
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
var map__25824 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$2(cm,cur);
var map__25824__$1 = ((((!((map__25824 == null)))?((((map__25824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25824.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25824):map__25824);
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25824__$1,cljs.core.cst$kw$string);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25824__$1,cljs.core.cst$kw$type);
var eof = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25824__$1,cljs.core.cst$kw$eof);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25824__$1,cljs.core.cst$kw$ch);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25824__$1,cljs.core.cst$kw$end);
var stack_empty = (stack === (0));
var one_left = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),stack);
var string_extends = (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("\"",cljs.core.last(string))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\\",cljs.core.last(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(string))));
if(cljs.core.truth_((function (){var and__6802__auto__ = paredit_cm.core.end_of_a_string_QMARK_(cm,cur);
if(cljs.core.truth_(and__6802__auto__)){
return one_left;
} else {
return and__6802__auto__;
}
})())){
return cljs.core.cst$kw$yes;
} else {
if(cljs.core.truth_((function (){var and__6802__auto__ = paredit_cm.core.escaped_char_to_left_QMARK_(cm,cur);
if(cljs.core.truth_(and__6802__auto__)){
return stack_empty;
} else {
return and__6802__auto__;
}
})())){
return cljs.core.cst$kw$yes;
} else {
if(cljs.core.truth_((function (){var and__6802__auto__ = paredit_cm.core.word_QMARK_(type);
if(cljs.core.truth_(and__6802__auto__)){
return (stack_empty) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ch,end));
} else {
return and__6802__auto__;
}
})())){
return cljs.core.cst$kw$yes;
} else {
if(cljs.core.truth_((function (){var and__6802__auto__ = paredit_cm.core.is_bracket_type_QMARK_(type);
if(cljs.core.truth_(and__6802__auto__)){
var and__6802__auto____$1 = paredit_cm.core.closer_QMARK_(string);
if(cljs.core.truth_(and__6802__auto____$1)){
return one_left;
} else {
return and__6802__auto____$1;
}
} else {
return and__6802__auto__;
}
})())){
return cljs.core.cst$kw$yes;
} else {
if(cljs.core.truth_(eof)){
return cljs.core.cst$kw$eof;
} else {
if((type == null)){
return stack;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,"comment")){
return stack;
} else {
if(cljs.core.truth_(paredit_cm.core.start_of_a_string_QMARK_(cm,cur))){
return (stack + (1));
} else {
if(cljs.core.truth_((function (){var and__6802__auto__ = paredit_cm.core.end_of_a_string_QMARK_(cm,cur);
if(cljs.core.truth_(and__6802__auto__)){
return stack_empty;
} else {
return and__6802__auto__;
}
})())){
return cljs.core.cst$kw$stop;
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,"string")) && (one_left) && (string_extends)){
return stack;
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,"string")) && (one_left)){
return cljs.core.cst$kw$end_DASH_of_DASH_this_DASH_token;
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,"string")) && (string_extends)){
return stack;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,"string")){
return (stack - (1));
} else {
if(cljs.core.truth_((function (){var and__6802__auto__ = paredit_cm.core.in_escaped_char_QMARK_.cljs$core$IFn$_invoke$arity$2(cm,cur);
if(cljs.core.truth_(and__6802__auto__)){
return stack_empty;
} else {
return and__6802__auto__;
}
})())){
return cljs.core.cst$kw$end_DASH_of_DASH_this_DASH_token;
} else {
if(cljs.core.truth_(paredit_cm.core.in_escaped_char_QMARK_.cljs$core$IFn$_invoke$arity$2(cm,cur))){
return stack;
} else {
if(cljs.core.truth_(paredit_cm.core.escaped_char_to_left_QMARK_(cm,cur))){
return stack;
} else {
if(cljs.core.truth_((function (){var and__6802__auto__ = paredit_cm.core.word_QMARK_(type);
if(cljs.core.truth_(and__6802__auto__)){
return stack_empty;
} else {
return and__6802__auto__;
}
})())){
return cljs.core.cst$kw$end_DASH_of_DASH_this_DASH_token;
} else {
if(cljs.core.truth_(paredit_cm.core.word_QMARK_(type))){
return stack;
} else {
if(cljs.core.truth_((function (){var and__6802__auto__ = paredit_cm.core.is_bracket_type_QMARK_(type);
if(cljs.core.truth_(and__6802__auto__)){
return paredit_cm.core.opener_QMARK_(string);
} else {
return and__6802__auto__;
}
})())){
return (stack + (1));
} else {
if(cljs.core.truth_((function (){var and__6802__auto__ = paredit_cm.core.is_bracket_type_QMARK_(type);
if(cljs.core.truth_(and__6802__auto__)){
var and__6802__auto____$1 = paredit_cm.core.closer_QMARK_(string);
if(cljs.core.truth_(and__6802__auto____$1)){
return stack_empty;
} else {
return and__6802__auto____$1;
}
} else {
return and__6802__auto__;
}
})())){
return cljs.core.cst$kw$stop;
} else {
if(cljs.core.truth_((function (){var and__6802__auto__ = paredit_cm.core.is_bracket_type_QMARK_(type);
if(cljs.core.truth_(and__6802__auto__)){
return paredit_cm.core.closer_QMARK_(string);
} else {
return and__6802__auto__;
}
})())){
return (stack - (1));
} else {
return cljs.core.cst$kw$stop;

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
var args25826 = [];
var len__7927__auto___25829 = arguments.length;
var i__7928__auto___25830 = (0);
while(true){
if((i__7928__auto___25830 < len__7927__auto___25829)){
args25826.push((arguments[i__7928__auto___25830]));

var G__25831 = (i__7928__auto___25830 + (1));
i__7928__auto___25830 = G__25831;
continue;
} else {
}
break;
}

var G__25828 = args25826.length;
switch (G__25828) {
case 1:
return paredit_cm.core.end_of_next_sibling.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.end_of_next_sibling.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args25826.length)].join('')));

}
});

paredit_cm.core.end_of_next_sibling.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.skip.cljs$core$IFn$_invoke$arity$2(cm,paredit_cm.core.end_of_next_sibling_sp);
});

paredit_cm.core.end_of_next_sibling.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
if(cljs.core.truth_(cur)){
cm.setCursor(cur);

return paredit_cm.core.skip.cljs$core$IFn$_invoke$arity$2(cm,paredit_cm.core.end_of_next_sibling_sp);
} else {
return null;
}
});

paredit_cm.core.end_of_next_sibling.cljs$lang$maxFixedArity = 2;

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
var map__25835 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$2(cm,cur);
var map__25835__$1 = ((((!((map__25835 == null)))?((((map__25835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25835.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25835):map__25835);
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25835__$1,cljs.core.cst$kw$string);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25835__$1,cljs.core.cst$kw$type);
var bof = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25835__$1,cljs.core.cst$kw$bof);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25835__$1,cljs.core.cst$kw$ch);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25835__$1,cljs.core.cst$kw$start);
var stack_empty = (stack === (0));
var one_left = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),stack);
var string_extends = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("\"",cljs.core.first(string));
if(cljs.core.truth_((function (){var and__6802__auto__ = paredit_cm.core.start_of_a_string_QMARK_(cm,cur);
if(cljs.core.truth_(and__6802__auto__)){
return (one_left) && (string_extends);
} else {
return and__6802__auto__;
}
})())){
return stack;
} else {
if(cljs.core.truth_((function (){var and__6802__auto__ = paredit_cm.core.start_of_a_string_QMARK_(cm,cur);
if(cljs.core.truth_(and__6802__auto__)){
return one_left;
} else {
return and__6802__auto__;
}
})())){
return cljs.core.cst$kw$yes;
} else {
if(cljs.core.truth_((function (){var and__6802__auto__ = paredit_cm.core.escaped_char_to_right_QMARK_(cm,cur);
if(cljs.core.truth_(and__6802__auto__)){
return stack_empty;
} else {
return and__6802__auto__;
}
})())){
return cljs.core.cst$kw$yes;
} else {
if(cljs.core.truth_((function (){var and__6802__auto__ = paredit_cm.core.word_QMARK_(type);
if(cljs.core.truth_(and__6802__auto__)){
return (stack_empty) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ch,start));
} else {
return and__6802__auto__;
}
})())){
return cljs.core.cst$kw$yes;
} else {
if(cljs.core.truth_((function (){var and__6802__auto__ = paredit_cm.core.is_bracket_type_QMARK_(type);
if(cljs.core.truth_(and__6802__auto__)){
var and__6802__auto____$1 = paredit_cm.core.opener_QMARK_(string);
if(cljs.core.truth_(and__6802__auto____$1)){
return one_left;
} else {
return and__6802__auto____$1;
}
} else {
return and__6802__auto__;
}
})())){
return cljs.core.cst$kw$yes;
} else {
if(cljs.core.truth_(bof)){
return cljs.core.cst$kw$bof;
} else {
if((type == null)){
return stack;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,"comment")){
return stack;
} else {
if(cljs.core.truth_(paredit_cm.core.end_of_a_string_QMARK_(cm,cur))){
return (stack + (1));
} else {
if(cljs.core.truth_((function (){var and__6802__auto__ = paredit_cm.core.start_of_a_string_QMARK_(cm,cur);
if(cljs.core.truth_(and__6802__auto__)){
return (stack_empty) && (string_extends);
} else {
return and__6802__auto__;
}
})())){
return stack;
} else {
if(cljs.core.truth_((function (){var and__6802__auto__ = paredit_cm.core.start_of_a_string_QMARK_(cm,cur);
if(cljs.core.truth_(and__6802__auto__)){
return stack_empty;
} else {
return and__6802__auto__;
}
})())){
return cljs.core.cst$kw$stop;
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,"string")) && (one_left) && (string_extends)){
return stack;
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,"string")) && (one_left)){
return cljs.core.cst$kw$start_DASH_of_DASH_this_DASH_tok;
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,"string")) && (string_extends)){
return stack;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,"string")){
return (stack - (1));
} else {
if(cljs.core.truth_((function (){var and__6802__auto__ = paredit_cm.core.in_escaped_char_QMARK_.cljs$core$IFn$_invoke$arity$2(cm,cur);
if(cljs.core.truth_(and__6802__auto__)){
return stack_empty;
} else {
return and__6802__auto__;
}
})())){
return cljs.core.cst$kw$start_DASH_of_DASH_this_DASH_tok;
} else {
if(cljs.core.truth_(paredit_cm.core.in_escaped_char_QMARK_.cljs$core$IFn$_invoke$arity$2(cm,cur))){
return stack;
} else {
if(cljs.core.truth_(paredit_cm.core.escaped_char_to_right_QMARK_(cm,cur))){
return stack;
} else {
if(cljs.core.truth_((function (){var and__6802__auto__ = paredit_cm.core.word_QMARK_(type);
if(cljs.core.truth_(and__6802__auto__)){
return stack_empty;
} else {
return and__6802__auto__;
}
})())){
return cljs.core.cst$kw$start_DASH_of_DASH_this_DASH_tok;
} else {
if(cljs.core.truth_(paredit_cm.core.word_QMARK_(type))){
return stack;
} else {
if(cljs.core.truth_((function (){var and__6802__auto__ = paredit_cm.core.is_bracket_type_QMARK_(type);
if(cljs.core.truth_(and__6802__auto__)){
return paredit_cm.core.closer_QMARK_(string);
} else {
return and__6802__auto__;
}
})())){
return (stack + (1));
} else {
if(cljs.core.truth_((function (){var and__6802__auto__ = paredit_cm.core.is_bracket_type_QMARK_(type);
if(cljs.core.truth_(and__6802__auto__)){
var and__6802__auto____$1 = paredit_cm.core.opener_QMARK_(string);
if(cljs.core.truth_(and__6802__auto____$1)){
return stack_empty;
} else {
return and__6802__auto____$1;
}
} else {
return and__6802__auto__;
}
})())){
return cljs.core.cst$kw$stop;
} else {
if(cljs.core.truth_((function (){var and__6802__auto__ = paredit_cm.core.is_bracket_type_QMARK_(type);
if(cljs.core.truth_(and__6802__auto__)){
return paredit_cm.core.opener_QMARK_(string);
} else {
return and__6802__auto__;
}
})())){
return (stack - (1));
} else {
return cljs.core.cst$kw$stop;

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
var args25837 = [];
var len__7927__auto___25840 = arguments.length;
var i__7928__auto___25841 = (0);
while(true){
if((i__7928__auto___25841 < len__7927__auto___25840)){
args25837.push((arguments[i__7928__auto___25841]));

var G__25842 = (i__7928__auto___25841 + (1));
i__7928__auto___25841 = G__25842;
continue;
} else {
}
break;
}

var G__25839 = args25837.length;
switch (G__25839) {
case 1:
return paredit_cm.core.start_of_prev_sibling.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.start_of_prev_sibling.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args25837.length)].join('')));

}
});

paredit_cm.core.start_of_prev_sibling.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.skip_left(cm,paredit_cm.core.start_of_prev_sibling_sp);
});

paredit_cm.core.start_of_prev_sibling.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
if(cljs.core.truth_(cur)){
cm.setCursor(cur);

return paredit_cm.core.skip_left(cm,paredit_cm.core.start_of_prev_sibling_sp);
} else {
return null;
}
});

paredit_cm.core.start_of_prev_sibling.cljs$lang$maxFixedArity = 2;

/**
 * escapes a string, replacing backslashes and doublequotes. wraps
 *   result in a new pair of doublequotes.
 */
paredit_cm.core.escape_string = (function paredit_cm$core$escape_string(s){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(clojure.string.replace(s,/[\\]/,"\\\\"),/[\"]/,"\\\"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join('');
});
/**
 * turns selection into a string, escaping backslashes and doublequotes
 */
paredit_cm.core.stringify_selection = (function paredit_cm$core$stringify_selection(cm){
return cm.replaceSelection(paredit_cm.core.escape_string(cm.getSelection()));
});
/**
 * turns the region from cur-1 to cur-2 into a string, escaping
 *   backslashes and doublequotes
 */
paredit_cm.core.stringify = (function paredit_cm$core$stringify(cm,cur_1,cur_2){
cm.setSelection(cur_1,cur_2);

paredit_cm.core.stringify_selection(cm);

return cm.setCursor(paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,(paredit_cm.core.index.cljs$core$IFn$_invoke$arity$2(cm,cur_1) + (1))));
});
/**
 * moves cursor right, out of the current string
 */
paredit_cm.core.exit_string = (function paredit_cm$core$exit_string(cm){
var map__25846 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$1(cm);
var map__25846__$1 = ((((!((map__25846 == null)))?((((map__25846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25846.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25846):map__25846);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25846__$1,cljs.core.cst$kw$type);
var i = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25846__$1,cljs.core.cst$kw$i);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25846__$1,cljs.core.cst$kw$ch);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25846__$1,cljs.core.cst$kw$end);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,"string")){
return cm.setCursor(paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,(i + (end - ch))));
} else {
return null;
}
});
/**
 * returns true if token is in the middle of a string.
 */
paredit_cm.core.in_string_QMARK_ = (function paredit_cm$core$in_string_QMARK_(var_args){
var args25848 = [];
var len__7927__auto___25851 = arguments.length;
var i__7928__auto___25852 = (0);
while(true){
if((i__7928__auto___25852 < len__7927__auto___25851)){
args25848.push((arguments[i__7928__auto___25852]));

var G__25853 = (i__7928__auto___25852 + (1));
i__7928__auto___25852 = G__25853;
continue;
} else {
}
break;
}

var G__25850 = args25848.length;
switch (G__25850) {
case 1:
return paredit_cm.core.in_string_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.in_string_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args25848.length)].join('')));

}
});

paredit_cm.core.in_string_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.in_string_QMARK_.cljs$core$IFn$_invoke$arity$2(cm,paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm));
});

paredit_cm.core.in_string_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
var type = paredit_cm.core.get_type.cljs$core$IFn$_invoke$arity$2(cm,cur);
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,"string")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,"string-2"));
});

paredit_cm.core.in_string_QMARK_.cljs$lang$maxFixedArity = 2;

/**
 * paredit meta-doublequote exposed for keymap.
 *   if in a string, moves cursor out of the string to the right.
 *   if in a comment, insert a doublequote.
 *   if in an escaped char, do nothing.
 *   otherwise starts a string that that continues to the end of the next
 *   form, escaping backslashes and doublequotes.
 */
paredit_cm.core.meta_doublequote = (function paredit_cm$core$meta_doublequote(cm){
var map__25857 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$1(cm);
var map__25857__$1 = ((((!((map__25857 == null)))?((((map__25857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25857.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25857):map__25857);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25857__$1,cljs.core.cst$kw$type);
var eof = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25857__$1,cljs.core.cst$kw$eof);
var cur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25857__$1,cljs.core.cst$kw$cur);
if(cljs.core.truth_(eof)){
return cljs.core.cst$kw$do_DASH_nothing;
} else {
if(cljs.core.truth_(paredit_cm.core.in_escaped_char_QMARK_.cljs$core$IFn$_invoke$arity$2(cm,cur))){
return cljs.core.cst$kw$do_DASH_nothing;
} else {
if(cljs.core.truth_(paredit_cm.core.in_string_QMARK_.cljs$core$IFn$_invoke$arity$2(cm,cur))){
return paredit_cm.core.exit_string(cm);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,"comment")){
return paredit_cm.core.insert.cljs$core$IFn$_invoke$arity$2(cm,"\"");
} else {
if(cljs.core.truth_(paredit_cm.core.in_a_word_QMARK_(cm))){
return paredit_cm.core.stringify(cm,cur,paredit_cm.core.token_end.cljs$core$IFn$_invoke$arity$2(cm,cur));
} else {
return paredit_cm.core.stringify(cm,cur,paredit_cm.core.end_of_next_sibling.cljs$core$IFn$_invoke$arity$1(cm));

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
var i1 = paredit_cm.core.index.cljs$core$IFn$_invoke$arity$2(cm,c1);
var i2 = paredit_cm.core.index.cljs$core$IFn$_invoke$arity$2(cm,c2);
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
var i1 = paredit_cm.core.index.cljs$core$IFn$_invoke$arity$2(cm,c1);
var i2 = paredit_cm.core.index.cljs$core$IFn$_invoke$arity$2(cm,c2);
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
var first_sel = cljs.core.first(cm.listSelections());
var text = cljs.core.first(cm.getSelections());
var anchor = first_sel.anchor;
var head = first_sel.head;
var left_of_start = paredit_cm.core.left(cm,anchor,head);
var start_cur = paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,(paredit_cm.core.index.cljs$core$IFn$_invoke$arity$2(cm,left_of_start) + (1)));
var end_cur = paredit_cm.core.right(cm,anchor,head);
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
var map__25861 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$2(cm,cur);
var map__25861__$1 = ((((!((map__25861 == null)))?((((map__25861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25861.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25861):map__25861);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25861__$1,cljs.core.cst$kw$type);
var right_cur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25861__$1,cljs.core.cst$kw$right_DASH_cur);
var types_SINGLEQUOTE_ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(types,type);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cur,c2)){
return types_SINGLEQUOTE_;
} else {
var G__25863 = types_SINGLEQUOTE_;
var G__25864 = right_cur;
types = G__25863;
cur = G__25864;
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
var temp__4657__auto__ = paredit_cm.core.selection_info(cm);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__25868 = temp__4657__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25868,(0),null);
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25868,(1),null);
var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25868,(2),null);
return cljs.core.every_QMARK_(pred,paredit_cm.core.get_types(cm,c1,c2));
} else {
return null;
}
});
paredit_cm.core.selection_completely_whitespace_QMARK_ = (function paredit_cm$core$selection_completely_whitespace_QMARK_(cm){
return paredit_cm.core.selection_completely_satisfies_pred_QMARK_(cm,cljs.core.nil_QMARK_);
});
paredit_cm.core.not_code_QMARK_ = (function paredit_cm$core$not_code_QMARK_(type){
return ((type == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,"comment"));
});
paredit_cm.core.selection_completely_non_code_QMARK_ = (function paredit_cm$core$selection_completely_non_code_QMARK_(cm){
return paredit_cm.core.selection_completely_satisfies_pred_QMARK_(cm,paredit_cm.core.not_code_QMARK_);
});
/**
 * starts each line in 's' with ;; and appends 'post-script'
 */
paredit_cm.core.to_comment = (function paredit_cm$core$to_comment(s,postscript){
var cmnt = clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25871_SHARP_){
return clojure.string.replace(p1__25871_SHARP_,/^/,";; ");
}),clojure.string.split_lines(s)));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cmnt),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(postscript)].join('');
});
/**
 * removes leading whitespace and semicolons from lines in 's'
 */
paredit_cm.core.uncomment = (function paredit_cm$core$uncomment(s){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25872_SHARP_){
return clojure.string.replace(p1__25872_SHARP_,/^\s*;+/,"");
}),clojure.string.split_lines(s)));
});
/**
 * indents lines from a to z (line numbers). assumes a is before z.
 */
paredit_cm.core.indent_lines = (function paredit_cm$core$indent_lines(cm,a,z){
var seq__25877 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(a,(z + (1))));
var chunk__25878 = null;
var count__25879 = (0);
var i__25880 = (0);
while(true){
if((i__25880 < count__25879)){
var line = chunk__25878.cljs$core$IIndexed$_nth$arity$2(null,i__25880);
cm.indentLine(line);

var G__25881 = seq__25877;
var G__25882 = chunk__25878;
var G__25883 = count__25879;
var G__25884 = (i__25880 + (1));
seq__25877 = G__25881;
chunk__25878 = G__25882;
count__25879 = G__25883;
i__25880 = G__25884;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__25877);
if(temp__4657__auto__){
var seq__25877__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25877__$1)){
var c__7633__auto__ = cljs.core.chunk_first(seq__25877__$1);
var G__25885 = cljs.core.chunk_rest(seq__25877__$1);
var G__25886 = c__7633__auto__;
var G__25887 = cljs.core.count(c__7633__auto__);
var G__25888 = (0);
seq__25877 = G__25885;
chunk__25878 = G__25886;
count__25879 = G__25887;
i__25880 = G__25888;
continue;
} else {
var line = cljs.core.first(seq__25877__$1);
cm.indentLine(line);

var G__25889 = cljs.core.next(seq__25877__$1);
var G__25890 = null;
var G__25891 = (0);
var G__25892 = (0);
seq__25877 = G__25889;
chunk__25878 = G__25890;
count__25879 = G__25891;
i__25880 = G__25892;
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
var temp__4657__auto__ = paredit_cm.core.selection_info(cm);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__25896 = temp__4657__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25896,(0),null);
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25896,(1),null);
var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25896,(2),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25896,(3),null);
cm.replaceSelection(paredit_cm.core.uncomment(text));

return paredit_cm.core.indent_lines(cm,c1.line,c2.line);
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(tok.string,((function (){var x__7150__auto__ = ch;
var y__7151__auto__ = tok.start;
return ((x__7150__auto__ > y__7151__auto__) ? x__7150__auto__ : y__7151__auto__);
})() - tok.start)))].join('');
} else {
return s;
}
});
paredit_cm.core.get_text_to_end_of_line = (function paredit_cm$core$get_text_to_end_of_line(cm,cur){
var toks = cm.getLineTokens(cur.line);
var ch = cur.ch;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(paredit_cm.core.append,ch),"",toks);
});
paredit_cm.core.comment_selection = (function paredit_cm$core$comment_selection(cm){
var vec__25902 = paredit_cm.core.selection_info(cm);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25902,(0),null);
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25902,(1),null);
var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25902,(2),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25902,(3),null);
var l1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25902,(4),null);
var l2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25902,(5),null);
var text_after_selection = paredit_cm.core.get_text_to_end_of_line(cm,c2);
var code_follows_selection = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(text_after_selection,"");
var end_of_line = paredit_cm.core.last_cur.cljs$core$IFn$_invoke$arity$1(cm);
var line_to = ((code_follows_selection)?(l2 + (1)):l2);
if(code_follows_selection){
cm.setSelection(paredit_cm.core.left,end_of_line);
} else {
}

cm.replaceSelection(paredit_cm.core.to_comment(text,text_after_selection));

return paredit_cm.core.indent_lines(cm,l1,line_to);
});
/**
 * true if the line ends with a comment
 */
paredit_cm.core.line_ends_with_comment_QMARK_ = (function paredit_cm$core$line_ends_with_comment_QMARK_(cm){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("comment",paredit_cm.core.last_token(cm,paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm)).type);
});
paredit_cm.core.indent_current_line = (function paredit_cm$core$indent_current_line(cm){
return cm.indentLine(paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm).line);
});
/**
 * moves cursor to ;;X
 */
paredit_cm.core.go_to_comment = (function paredit_cm$core$go_to_comment(cm){
var cur = paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm);
var ch = cur.ch;
var i = paredit_cm.core.index.cljs$core$IFn$_invoke$arity$2(cm,cur);
var c_tok = paredit_cm.core.last_token(cm,cur);
var start = c_tok.start;
var offset = cljs.core.count(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (cur,ch,i,c_tok,start){
return (function (p1__25905_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(";",p1__25905_SHARP_);
});})(cur,ch,i,c_tok,start))
,c_tok.string));
return cm.setCursor(paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,((i + (start - ch)) + offset)));
});
/**
 * presses spacebar until we are at col 40
 */
paredit_cm.core.insert_spaces_to_col_40 = (function paredit_cm$core$insert_spaces_to_col_40(cm){
var ch = paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm).ch;
if((ch < (40))){
return paredit_cm.core.insert.cljs$core$IFn$_invoke$arity$2(cm,clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((40) - ch)," ")));
} else {
return null;
}
});
/**
 * moves cursor to the comment on the line and makes sure the comment
 *   starts on column 40 or greater. assumes last token is a comment
 */
paredit_cm.core.go_to_comment_and_indent = (function paredit_cm$core$go_to_comment_and_indent(cm){
paredit_cm.core.indent_current_line(cm);

var cur = paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm);
var ch = cur.ch;
var i = paredit_cm.core.index.cljs$core$IFn$_invoke$arity$2(cm,cur);
var comment_start = paredit_cm.core.last_token(cm,cur).start;
cm.setCursor(paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,(i + (comment_start - ch))));

paredit_cm.core.insert_spaces_to_col_40(cm);

return paredit_cm.core.go_to_comment(cm);
});
/**
 * true if code is to the left and whitespace* is to the right.
 *   assumes you already know line does not end with a comment.
 */
paredit_cm.core.betw_code_and_line_end_QMARK_ = (function paredit_cm$core$betw_code_and_line_end_QMARK_(cm){
var cur = paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm);
var toks = cm.getLineTokens(cur.line);
var ch = cur.ch;
var tests = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cur,toks,ch){
return (function (p1__25906_SHARP_){
return ((p1__25906_SHARP_.end <= ch)) || ((p1__25906_SHARP_.type == null));
});})(cur,toks,ch))
,toks);
var and__6802__auto__ = cljs.core.seq(toks);
if(and__6802__auto__){
var and__6802__auto____$1 = cljs.core.every_QMARK_(cljs.core.true_QMARK_,tests);
if(and__6802__auto____$1){
return cljs.core.some(((function (and__6802__auto____$1,and__6802__auto__,cur,toks,ch,tests){
return (function (p1__25907_SHARP_){
return !((p1__25907_SHARP_.type == null));
});})(and__6802__auto____$1,and__6802__auto__,cur,toks,ch,tests))
,toks);
} else {
return and__6802__auto____$1;
}
} else {
return and__6802__auto__;
}
});
/**
 * moves cursor to end of last non-whitespace token on a line.
 *   returns a vector of new index, new ch, and new cursor.
 */
paredit_cm.core.move_to_end_of_line = (function paredit_cm$core$move_to_end_of_line(var_args){
var args25909 = [];
var len__7927__auto___25912 = arguments.length;
var i__7928__auto___25913 = (0);
while(true){
if((i__7928__auto___25913 < len__7927__auto___25912)){
args25909.push((arguments[i__7928__auto___25913]));

var G__25914 = (i__7928__auto___25913 + (1));
i__7928__auto___25913 = G__25914;
continue;
} else {
}
break;
}

var G__25911 = args25909.length;
switch (G__25911) {
case 1:
return paredit_cm.core.move_to_end_of_line.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.move_to_end_of_line.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args25909.length)].join('')));

}
});

paredit_cm.core.move_to_end_of_line.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.move_to_end_of_line.cljs$core$IFn$_invoke$arity$2(cm,paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm));
});

paredit_cm.core.move_to_end_of_line.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
var end = cljs.core.last(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__25908_SHARP_){
return (p1__25908_SHARP_.type == null);
}),cm.getLineTokens(cur.line))).end;
var ch = cur.ch;
var i = paredit_cm.core.index.cljs$core$IFn$_invoke$arity$2(cm,cur);
var i_SINGLEQUOTE_ = (i + (end - ch));
var cur_SINGLEQUOTE_ = paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,i_SINGLEQUOTE_);
cm.setCursor(cur_SINGLEQUOTE_);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i_SINGLEQUOTE_,cur_SINGLEQUOTE_.ch,cur_SINGLEQUOTE_], null);
});

paredit_cm.core.move_to_end_of_line.cljs$lang$maxFixedArity = 2;

/**
 * selects from current position to the end of the line
 */
paredit_cm.core.select_rest_of_line = (function paredit_cm$core$select_rest_of_line(cm){
return cm.setSelection(paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm),paredit_cm.core.last_cur.cljs$core$IFn$_invoke$arity$1(cm));
});
/**
 * deletes from current position to the end of the line
 */
paredit_cm.core.delete_to_end_of_line = (function paredit_cm$core$delete_to_end_of_line(cm){
return cm.replaceRange("",paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm),paredit_cm.core.last_cur.cljs$core$IFn$_invoke$arity$1(cm));
});
/**
 * starts a ; comment at column 40 or greater and moves to it.
 */
paredit_cm.core.create_comment_at_end = (function paredit_cm$core$create_comment_at_end(cm){
paredit_cm.core.indent_current_line(cm);

paredit_cm.core.move_to_end_of_line.cljs$core$IFn$_invoke$arity$1(cm);

paredit_cm.core.insert.cljs$core$IFn$_invoke$arity$2(cm," ");

paredit_cm.core.insert_spaces_to_col_40(cm);

paredit_cm.core.insert.cljs$core$IFn$_invoke$arity$2(cm,"; ");

return paredit_cm.core.delete_to_end_of_line(cm);
});
/**
 * returns true if line is all whitespace
 */
paredit_cm.core.line_is_whitespace_QMARK_ = (function paredit_cm$core$line_is_whitespace_QMARK_(cm){
return cljs.core.every_QMARK_((function (p1__25916_SHARP_){
return (p1__25916_SHARP_.type == null);
}),cm.getLineTokens(paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm).line));
});
/**
 * creates and indents a ;; comment
 */
paredit_cm.core.create_line_comment = (function paredit_cm$core$create_line_comment(cm){
paredit_cm.core.insert.cljs$core$IFn$_invoke$arity$2(cm,";; ");

paredit_cm.core.delete_to_end_of_line(cm);

return paredit_cm.core.indent_current_line(cm);
});
/**
 * creates and indents a ;; comment on a new line
 */
paredit_cm.core.new_line_and_comment = (function paredit_cm$core$new_line_and_comment(cm){
paredit_cm.core.indent_current_line(cm);

paredit_cm.core.insert.cljs$core$IFn$_invoke$arity$2(cm,"\n\n");

cm.execCommand("goLineDown");

cm.execCommand("goLineDown");

paredit_cm.core.indent_current_line(cm);

cm.execCommand("goLineUp");

return paredit_cm.core.create_line_comment(cm);
});
/**
 * creates and indents a ;; comment on this line
 */
paredit_cm.core.insert_line_comment_here = (function paredit_cm$core$insert_line_comment_here(cm){
paredit_cm.core.insert.cljs$core$IFn$_invoke$arity$2(cm,"\n");

cm.execCommand("goLineDown");

paredit_cm.core.indent_current_line(cm);

cm.execCommand("goLineUp");

return paredit_cm.core.create_line_comment(cm);
});
/**
 * returns true if token is in the middle of code. assumes you've already ruled
 *   out comments.
 */
paredit_cm.core.in_code_QMARK_ = (function paredit_cm$core$in_code_QMARK_(cm){
var map__25919 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$1(cm);
var map__25919__$1 = ((((!((map__25919 == null)))?((((map__25919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25919.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25919):map__25919);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25919__$1,cljs.core.cst$kw$type);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25919__$1,cljs.core.cst$kw$start);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25919__$1,cljs.core.cst$kw$end);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25919__$1,cljs.core.cst$kw$ch);
return ((start < ch)) && ((ch < end)) && (!((type == null)));
});
/**
 * returns true if token is to the right of whitespace
 */
paredit_cm.core.in_whitespace_QMARK_ = (function paredit_cm$core$in_whitespace_QMARK_(cm){
return (paredit_cm.core.get_type.cljs$core$IFn$_invoke$arity$1(cm) == null);
});
/**
 * returns true if there's any code to the left of cursor. assumes you've
 *   already ruled out comments so only looks for non nil tokens
 */
paredit_cm.core.code_to_left_QMARK_ = (function paredit_cm$core$code_to_left_QMARK_(cm){
var cur = paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm);
var toks = cm.getLineTokens(cur.line);
var ch = cur.ch;
var code = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cur,toks,ch){
return (function (p1__25921_SHARP_){
return (!((p1__25921_SHARP_.type == null))) && (((p1__25921_SHARP_.end <= ch)) || (((p1__25921_SHARP_.start < ch)) && ((ch < p1__25921_SHARP_.end))));
});})(cur,toks,ch))
,toks);
var and__6802__auto__ = cljs.core.seq(toks);
if(and__6802__auto__){
return cljs.core.some(cljs.core.true_QMARK_,code);
} else {
return and__6802__auto__;
}
});
paredit_cm.core.comment_dwim = (function paredit_cm$core$comment_dwim(cm){
if(cljs.core.truth_(paredit_cm.core.selection_completely_whitespace_QMARK_(cm))){
return cljs.core.cst$kw$do_DASH_nothing;
} else {
if(cljs.core.truth_(paredit_cm.core.selection_completely_non_code_QMARK_(cm))){
return paredit_cm.core.uncomment_selection(cm);
} else {
if(cljs.core.truth_(cm.somethingSelected())){
return paredit_cm.core.comment_selection(cm);
} else {
if(cljs.core.truth_(paredit_cm.core.line_ends_with_comment_QMARK_(cm))){
return paredit_cm.core.go_to_comment_and_indent(cm);
} else {
if(cljs.core.truth_(paredit_cm.core.betw_code_and_line_end_QMARK_(cm))){
return paredit_cm.core.create_comment_at_end(cm);
} else {
if(cljs.core.truth_(paredit_cm.core.in_code_QMARK_(cm))){
return paredit_cm.core.create_comment_at_end(cm);
} else {
if(cljs.core.truth_(paredit_cm.core.in_string_QMARK_.cljs$core$IFn$_invoke$arity$1(cm))){
return paredit_cm.core.create_comment_at_end(cm);
} else {
if(cljs.core.truth_(paredit_cm.core.line_is_whitespace_QMARK_(cm))){
return paredit_cm.core.create_line_comment(cm);
} else {
if(cljs.core.truth_((function (){var and__6802__auto__ = paredit_cm.core.code_to_left_QMARK_(cm);
if(cljs.core.truth_(and__6802__auto__)){
return paredit_cm.core.in_whitespace_QMARK_(cm);
} else {
return and__6802__auto__;
}
})())){
return paredit_cm.core.new_line_and_comment(cm);
} else {
if(cljs.core.truth_(paredit_cm.core.in_whitespace_QMARK_(cm))){
return paredit_cm.core.insert_line_comment_here(cm);
} else {
return cljs.core.cst$kw$do_DASH_nothing;

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
var args25923 = [];
var len__7927__auto___25926 = arguments.length;
var i__7928__auto___25927 = (0);
while(true){
if((i__7928__auto___25927 < len__7927__auto___25926)){
args25923.push((arguments[i__7928__auto___25927]));

var G__25928 = (i__7928__auto___25927 + (1));
i__7928__auto___25927 = G__25928;
continue;
} else {
}
break;
}

var G__25925 = args25923.length;
switch (G__25925) {
case 1:
return paredit_cm.core.backspace.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.backspace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args25923.length)].join('')));

}
});

paredit_cm.core.backspace.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.backspace.cljs$core$IFn$_invoke$arity$2(cm,(1));
});

paredit_cm.core.backspace.cljs$core$IFn$_invoke$arity$2 = (function (cm,n){
var _n = (function (p1__25922_SHARP_){
return (p1__25922_SHARP_ - n);
});
var cur = paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm);
var cur0 = paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,_n(paredit_cm.core.index.cljs$core$IFn$_invoke$arity$2(cm,cur)));
return cm.replaceRange("",cur0,cur);
});

paredit_cm.core.backspace.cljs$lang$maxFixedArity = 2;

/**
 * true if this position would be whitespace if we pressed the spacebar.
 */
paredit_cm.core.right_cur_would_be_whitespace_QMARK_ = (function paredit_cm$core$right_cur_would_be_whitespace_QMARK_(cm,cur,right_cur){
var original_cur = paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm);
var _ = paredit_cm.core.insert.cljs$core$IFn$_invoke$arity$4(cm," ",(0),cur);
var answer = (paredit_cm.core.get_type.cljs$core$IFn$_invoke$arity$2(cm,right_cur) == null);
paredit_cm.core.backspace.cljs$core$IFn$_invoke$arity$1(cm);

cm.setCursor(original_cur);

return answer;
});
/**
 * returns true for closing brackets and for closing double-quotes
 */
paredit_cm.core.closing_delim_QMARK_ = (function paredit_cm$core$closing_delim_QMARK_(cm,cur){
var map__25932 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$2(cm,cur);
var map__25932__$1 = ((((!((map__25932 == null)))?((((map__25932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25932.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25932):map__25932);
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25932__$1,cljs.core.cst$kw$string);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25932__$1,cljs.core.cst$kw$type);
var left_char = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25932__$1,cljs.core.cst$kw$left_DASH_char);
var right_cur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25932__$1,cljs.core.cst$kw$right_DASH_cur);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["closing delim?",type,string,left_char], 0));

var or__6814__auto__ = (function (){var and__6802__auto__ = paredit_cm.core.is_bracket_type_QMARK_(type);
if(cljs.core.truth_(and__6802__auto__)){
return paredit_cm.core.closer_QMARK_(left_char);
} else {
return and__6802__auto__;
}
})();
if(cljs.core.truth_(or__6814__auto__)){
return or__6814__auto__;
} else {
var and__6802__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,"string");
if(and__6802__auto__){
var and__6802__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\"",left_char);
if(and__6802__auto____$1){
return paredit_cm.core.right_cur_would_be_whitespace_QMARK_(cm,cur,right_cur);
} else {
return and__6802__auto____$1;
}
} else {
return and__6802__auto__;
}
}
});
/**
 * returns true if cur is just to the right of an opening doublequote
 */
paredit_cm.core.opening_doublequote_QMARK_ = (function paredit_cm$core$opening_doublequote_QMARK_(var_args){
var args25934 = [];
var len__7927__auto___25939 = arguments.length;
var i__7928__auto___25940 = (0);
while(true){
if((i__7928__auto___25940 < len__7927__auto___25939)){
args25934.push((arguments[i__7928__auto___25940]));

var G__25941 = (i__7928__auto___25940 + (1));
i__7928__auto___25940 = G__25941;
continue;
} else {
}
break;
}

var G__25936 = args25934.length;
switch (G__25936) {
case 2:
return paredit_cm.core.opening_doublequote_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return paredit_cm.core.opening_doublequote_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args25934.length)].join('')));

}
});

paredit_cm.core.opening_doublequote_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
var map__25937 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$2(cm,cur);
var map__25937__$1 = ((((!((map__25937 == null)))?((((map__25937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25937.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25937):map__25937);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25937__$1,cljs.core.cst$kw$type);
var left_char = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25937__$1,cljs.core.cst$kw$left_DASH_char);
var right_cur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25937__$1,cljs.core.cst$kw$right_DASH_cur);
return paredit_cm.core.opening_doublequote_QMARK_.cljs$core$IFn$_invoke$arity$4(cm,type,left_char,right_cur);
});

paredit_cm.core.opening_doublequote_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (cm,type,left_char,right_cur){
var and__6802__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,"string");
if(and__6802__auto__){
var and__6802__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\"",left_char);
if(and__6802__auto____$1){
var and__6802__auto____$2 = right_cur;
if(cljs.core.truth_(and__6802__auto____$2)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("string",paredit_cm.core.get_type.cljs$core$IFn$_invoke$arity$2(cm,right_cur));
} else {
return and__6802__auto____$2;
}
} else {
return and__6802__auto____$1;
}
} else {
return and__6802__auto__;
}
});

paredit_cm.core.opening_doublequote_QMARK_.cljs$lang$maxFixedArity = 4;

/**
 * returns true if cur is just to the right of a closing doublequote
 */
paredit_cm.core.closing_doublequote_QMARK_ = (function paredit_cm$core$closing_doublequote_QMARK_(cm,cur){
var map__25945 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$2(cm,cur);
var map__25945__$1 = ((((!((map__25945 == null)))?((((map__25945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25945.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25945):map__25945);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25945__$1,cljs.core.cst$kw$type);
var left_char = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25945__$1,cljs.core.cst$kw$left_DASH_char);
var right_cur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25945__$1,cljs.core.cst$kw$right_DASH_cur);
var right_type = paredit_cm.core.get_type.cljs$core$IFn$_invoke$arity$2(cm,right_cur);
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,"string")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\"",left_char)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(right_type,"string"));
});
/**
 * returns true for opening brackets and for opening double-quotes
 */
paredit_cm.core.opening_delim_QMARK_ = (function paredit_cm$core$opening_delim_QMARK_(cm,cur){
var map__25949 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$2(cm,cur);
var map__25949__$1 = ((((!((map__25949 == null)))?((((map__25949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25949.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25949):map__25949);
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25949__$1,cljs.core.cst$kw$string);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25949__$1,cljs.core.cst$kw$type);
var left_char = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25949__$1,cljs.core.cst$kw$left_DASH_char);
var right_cur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25949__$1,cljs.core.cst$kw$right_DASH_cur);
var or__6814__auto__ = (function (){var and__6802__auto__ = paredit_cm.core.is_bracket_type_QMARK_(type);
if(cljs.core.truth_(and__6802__auto__)){
return paredit_cm.core.opener_QMARK_(left_char);
} else {
return and__6802__auto__;
}
})();
if(cljs.core.truth_(or__6814__auto__)){
return or__6814__auto__;
} else {
return paredit_cm.core.opening_doublequote_QMARK_.cljs$core$IFn$_invoke$arity$4(cm,type,left_char,right_cur);
}
});
/**
 * returns true for an opening bracket of an empty pair ()
 */
paredit_cm.core.opening_delim_for_empty_pair_QMARK_ = (function paredit_cm$core$opening_delim_for_empty_pair_QMARK_(cm,cur){
var map__25953 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$2(cm,cur);
var map__25953__$1 = ((((!((map__25953 == null)))?((((map__25953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25953.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25953):map__25953);
var left_char = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25953__$1,cljs.core.cst$kw$left_DASH_char);
var right_char = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25953__$1,cljs.core.cst$kw$right_DASH_char);
var right_cur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25953__$1,cljs.core.cst$kw$right_DASH_cur);
var and__6802__auto__ = paredit_cm.core.opening_delim_QMARK_(cm,cur);
if(cljs.core.truth_(and__6802__auto__)){
var and__6802__auto____$1 = right_cur;
if(cljs.core.truth_(and__6802__auto____$1)){
var and__6802__auto____$2 = paredit_cm.core.closing_delim_QMARK_(cm,right_cur);
if(cljs.core.truth_(and__6802__auto____$2)){
return paredit_cm.core.pair_QMARK_(left_char,right_char);
} else {
return and__6802__auto____$2;
}
} else {
return and__6802__auto____$1;
}
} else {
return and__6802__auto__;
}
});
/**
 * returns true for an opening bracket of a pair that contains one or more
 *   chars.
 */
paredit_cm.core.opening_delim_for_non_empty_pair_QMARK_ = (function paredit_cm$core$opening_delim_for_non_empty_pair_QMARK_(cm){
var map__25957 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$1(cm);
var map__25957__$1 = ((((!((map__25957 == null)))?((((map__25957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25957.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25957):map__25957);
var left_char = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25957__$1,cljs.core.cst$kw$left_DASH_char);
var right_char = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25957__$1,cljs.core.cst$kw$right_DASH_char);
var cur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25957__$1,cljs.core.cst$kw$cur);
var and__6802__auto__ = paredit_cm.core.opening_delim_QMARK_(cm,cur);
if(cljs.core.truth_(and__6802__auto__)){
return cljs.core.not(paredit_cm.core.pair_QMARK_(left_char,right_char));
} else {
return and__6802__auto__;
}
});
/**
 * moves the cursor by 'offset' places, negative for left. returns the cursor.
 */
paredit_cm.core.move = (function paredit_cm$core$move(cm,offset){
cm.setCursor(paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,(offset + paredit_cm.core.index.cljs$core$IFn$_invoke$arity$1(cm))));

return paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm);
});
/**
 * delete 1 or n char to right
 */
paredit_cm.core.delete$ = (function paredit_cm$core$delete(var_args){
var args25960 = [];
var len__7927__auto___25963 = arguments.length;
var i__7928__auto___25964 = (0);
while(true){
if((i__7928__auto___25964 < len__7927__auto___25963)){
args25960.push((arguments[i__7928__auto___25964]));

var G__25965 = (i__7928__auto___25964 + (1));
i__7928__auto___25964 = G__25965;
continue;
} else {
}
break;
}

var G__25962 = args25960.length;
switch (G__25962) {
case 1:
return paredit_cm.core.delete$.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.delete$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args25960.length)].join('')));

}
});

paredit_cm.core.delete$.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.delete$.cljs$core$IFn$_invoke$arity$2(cm,(1));
});

paredit_cm.core.delete$.cljs$core$IFn$_invoke$arity$2 = (function (cm,n){
var _PLUS_n = (function (p1__25959_SHARP_){
return (p1__25959_SHARP_ + n);
});
var cur = paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm);
var cur2 = paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,_PLUS_n(paredit_cm.core.index.cljs$core$IFn$_invoke$arity$2(cm,cur)));
return cm.replaceRange("",cur,cur2);
});

paredit_cm.core.delete$.cljs$lang$maxFixedArity = 2;

/**
 * returns true if cursor indicates whitespace
 */
paredit_cm.core.whitespace_QMARK_ = (function paredit_cm$core$whitespace_QMARK_(cm,cur){
var info = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$2(cm,cur);
return (!((info == null))) && ((cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(info) == null));
});
/**
 * true if cursor info indicates opening/closing bracket or quote
 */
paredit_cm.core.bracket_QMARK_ = (function paredit_cm$core$bracket_QMARK_(cm,cur){
var map__25969 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$2(cm,cur);
var map__25969__$1 = ((((!((map__25969 == null)))?((((map__25969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25969.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25969):map__25969);
var info = map__25969__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25969__$1,cljs.core.cst$kw$type);
var left_char = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25969__$1,cljs.core.cst$kw$left_DASH_char);
var or__6814__auto__ = paredit_cm.core.is_bracket_type_QMARK_(type);
if(cljs.core.truth_(or__6814__auto__)){
return or__6814__auto__;
} else {
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("string",type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\"",left_char));
}
});
/**
 * assumes a pair of brackets surround the cursor. selects the pair.
 */
paredit_cm.core.select_pair = (function paredit_cm$core$select_pair(cm){
var i = paredit_cm.core.index.cljs$core$IFn$_invoke$arity$2(cm,paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm));
var c1 = paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,(i - (1)));
var c2 = paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,(i + (1)));
return cm.setSelection(c1,c2);
});
paredit_cm.core.delete_selection = (function paredit_cm$core$delete_selection(cm){
return cm.replaceSelection("");
});
/**
 * assumes a pair of brackets surround the cursor. deletes the pair.
 */
paredit_cm.core.delete_pair = (function paredit_cm$core$delete_pair(cm){
paredit_cm.core.backspace.cljs$core$IFn$_invoke$arity$1(cm);

return paredit_cm.core.delete$.cljs$core$IFn$_invoke$arity$1(cm);
});
paredit_cm.core.move_right = (function paredit_cm$core$move_right(cm){
return paredit_cm.core.move(cm,(1));
});
paredit_cm.core.move_left = (function paredit_cm$core$move_left(cm){
return paredit_cm.core.move(cm,(-1));
});
/**
 * paredit-forward-delete exposed for keymap
 */
paredit_cm.core.forward_delete = (function paredit_cm$core$forward_delete(cm){
var map__25973 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$1(cm);
var map__25973__$1 = ((((!((map__25973 == null)))?((((map__25973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25973.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25973):map__25973);
var info = map__25973__$1;
var cur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25973__$1,cljs.core.cst$kw$cur);
var right_cur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25973__$1,cljs.core.cst$kw$right_DASH_cur);
if(cljs.core.truth_(cm.somethingSelected())){
return paredit_cm.core.delete_selection(cm);
} else {
if(cljs.core.truth_(paredit_cm.core.whitespace_QMARK_(cm,right_cur))){
return paredit_cm.core.delete$.cljs$core$IFn$_invoke$arity$1(cm);
} else {
if(cljs.core.not(paredit_cm.core.bracket_QMARK_(cm,right_cur))){
return paredit_cm.core.delete$.cljs$core$IFn$_invoke$arity$1(cm);
} else {
if(cljs.core.truth_(paredit_cm.core.opening_delim_QMARK_(cm,right_cur))){
return paredit_cm.core.move_right(cm);
} else {
if(cljs.core.truth_(paredit_cm.core.opening_delim_for_empty_pair_QMARK_(cm,cur))){
return paredit_cm.core.delete_pair(cm);
} else {
return cljs.core.cst$kw$do_DASH_nothing;

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
var cur = paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm);
var info = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$1(cm);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["backward-delete: mode ",cm.getOption("mode"),info], 0));

if(cljs.core.truth_(cm.somethingSelected())){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(.somethingSelected cm)"], 0));

return paredit_cm.core.delete_selection(cm);
} else {
if(cljs.core.truth_(paredit_cm.core.in_escaped_char_QMARK_.cljs$core$IFn$_invoke$arity$2(cm,cur))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(in-escaped-char? cm cur)"], 0));

return paredit_cm.core.delete_pair(cm);
} else {
if(cljs.core.truth_(paredit_cm.core.escaped_char_to_left_QMARK_(cm,cur))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(escaped-char-to-left? cm cur)"], 0));

return paredit_cm.core.backspace.cljs$core$IFn$_invoke$arity$2(cm,(2));
} else {
if(cljs.core.truth_(paredit_cm.core.opening_delim_for_non_empty_pair_QMARK_(cm))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(opening-delim-for-non-empty-pair? cm)"], 0));

return cljs.core.cst$kw$do_DASH_nothing;
} else {
if(cljs.core.truth_(paredit_cm.core.opening_delim_for_empty_pair_QMARK_(cm,cur))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(opening-delim-for-empty-pair? cm cur)"], 0));

return paredit_cm.core.delete_pair(cm);
} else {
if(cljs.core.truth_(paredit_cm.core.closing_delim_QMARK_(cm,cur))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(closing-delim? cm cur)"], 0));

return paredit_cm.core.move_left(cm);
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([":default"], 0));

return paredit_cm.core.backspace.cljs$core$IFn$_invoke$arity$1(cm);

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
var or__6814__auto__ = paredit_cm.core.opening_doublequote_QMARK_.cljs$core$IFn$_invoke$arity$2(cm,cur);
if(cljs.core.truth_(or__6814__auto__)){
return or__6814__auto__;
} else {
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("string",paredit_cm.core.get_type.cljs$core$IFn$_invoke$arity$2(cm,cur))) && (cljs.core.not(paredit_cm.core.closing_doublequote_QMARK_(cm,cur)));
}
});
/**
 * true if these values are from a string token that ends on another line
 */
paredit_cm.core.str_ends_on_another_line_QMARK_ = (function paredit_cm$core$str_ends_on_another_line_QMARK_(type,string){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("string",type)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("\"",cljs.core.last(string)));
});
/**
 * moves cursor to end of the string you're in (but still inside the
 *   closing doublequote). assumes you're in a string. the end could be
 *   on a different line from where you start
 */
paredit_cm.core.go_to_end_of_string = (function paredit_cm$core$go_to_end_of_string(var_args){
var args25975 = [];
var len__7927__auto___25980 = arguments.length;
var i__7928__auto___25981 = (0);
while(true){
if((i__7928__auto___25981 < len__7927__auto___25980)){
args25975.push((arguments[i__7928__auto___25981]));

var G__25982 = (i__7928__auto___25981 + (1));
i__7928__auto___25981 = G__25982;
continue;
} else {
}
break;
}

var G__25977 = args25975.length;
switch (G__25977) {
case 1:
return paredit_cm.core.go_to_end_of_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.go_to_end_of_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args25975.length)].join('')));

}
});

paredit_cm.core.go_to_end_of_string.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.go_to_end_of_string.cljs$core$IFn$_invoke$arity$2(cm,paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm));
});

paredit_cm.core.go_to_end_of_string.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
var map__25978 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$2(cm,cur);
var map__25978__$1 = ((((!((map__25978 == null)))?((((map__25978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25978.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25978):map__25978);
var left_char = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25978__$1,cljs.core.cst$kw$left_DASH_char);
var right_cur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25978__$1,cljs.core.cst$kw$right_DASH_cur);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25978__$1,cljs.core.cst$kw$type);
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25978__$1,cljs.core.cst$kw$string);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25978__$1,cljs.core.cst$kw$ch);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25978__$1,cljs.core.cst$kw$end);
if((type == null)){
return paredit_cm.core.go_to_end_of_string.cljs$core$IFn$_invoke$arity$2(cm,right_cur);
} else {
if(cljs.core.truth_(paredit_cm.core.str_ends_on_another_line_QMARK_(type,string))){
paredit_cm.core.move_to_end_of_line.cljs$core$IFn$_invoke$arity$2(cm,cur);

paredit_cm.core.move(cm,(2));

return paredit_cm.core.go_to_end_of_string.cljs$core$IFn$_invoke$arity$1(cm);
} else {
if(cljs.core.truth_(paredit_cm.core.opening_doublequote_QMARK_.cljs$core$IFn$_invoke$arity$4(cm,type,left_char,right_cur))){
paredit_cm.core.move(cm,(1));

return paredit_cm.core.go_to_end_of_string.cljs$core$IFn$_invoke$arity$1(cm);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("string",type)){
return paredit_cm.core.move(cm,((end - ch) - (1)));
} else {
return cur;

}
}
}
}
});

paredit_cm.core.go_to_end_of_string.cljs$lang$maxFixedArity = 2;

/**
 * assumes you are in a string.
 */
paredit_cm.core.select_rest_of_string = (function paredit_cm$core$select_rest_of_string(cm){
var c1 = paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm);
var c2 = paredit_cm.core.go_to_end_of_string.cljs$core$IFn$_invoke$arity$2(cm,c1);
return cm.setSelection(c1,c2);
});
/**
 * true if code is to the left and whitespace* comment* is to the right.
 */
paredit_cm.core.betw_code_and_comment_QMARK_ = (function paredit_cm$core$betw_code_and_comment_QMARK_(cm,cur){
if(cljs.core.truth_(cur)){
var toks = cm.getLineTokens(cur.line);
var ch = cur.ch;
var tests = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (toks,ch){
return (function (p1__25984_SHARP_){
return ((p1__25984_SHARP_.end <= ch)) || (((p1__25984_SHARP_.type == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("comment",p1__25984_SHARP_.type)));
});})(toks,ch))
,toks);
var and__6802__auto__ = cljs.core.seq(toks);
if(and__6802__auto__){
var and__6802__auto____$1 = cljs.core.every_QMARK_(cljs.core.true_QMARK_,tests);
if(and__6802__auto____$1){
return cljs.core.some(((function (and__6802__auto____$1,and__6802__auto__,toks,ch,tests){
return (function (p1__25985_SHARP_){
return !((p1__25985_SHARP_.type == null));
});})(and__6802__auto____$1,and__6802__auto__,toks,ch,tests))
,toks);
} else {
return and__6802__auto____$1;
}
} else {
return and__6802__auto__;
}
} else {
return null;
}
});
paredit_cm.core.rest_of_siblings = (function paredit_cm$core$rest_of_siblings(cm){
var c1 = paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm);
var parent_closer = paredit_cm.core.skip.cljs$core$IFn$_invoke$arity$2(cm,paredit_cm.core.parent_closer_sp);
var c2 = (cljs.core.truth_(parent_closer)?paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,(paredit_cm.core.index.cljs$core$IFn$_invoke$arity$2(cm,parent_closer) - (1))):null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2], null);
});
paredit_cm.core.select_rest_of_siblings = (function paredit_cm$core$select_rest_of_siblings(cm){
var vec__25989 = paredit_cm.core.rest_of_siblings(cm);
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25989,(0),null);
var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25989,(1),null);
var c1__$1 = paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm);
if(cljs.core.truth_(c2)){
return cm.setSelection(c1__$1,c2);
} else {
return null;
}
});
paredit_cm.core.kill_from_to = (function paredit_cm$core$kill_from_to(cm,i,j){
var cur = paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,i);
var G__25995_25998 = cm;
var G__25996_25999 = cur;
var G__25997_26000 = paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,j);
(CodeMirror.emacs.kill.cljs$core$IFn$_invoke$arity$3 ? CodeMirror.emacs.kill.cljs$core$IFn$_invoke$arity$3(G__25995_25998,G__25996_25999,G__25997_26000) : CodeMirror.emacs.kill.call(null,G__25995_25998,G__25996_25999,G__25997_26000));

return cm.setCursor(cur);
});
paredit_cm.core.kill_region = (function paredit_cm$core$kill_region(cm){
var first_sel = cljs.core.first(cm.listSelections());
var anchor = first_sel.anchor;
var head = first_sel.head;
return (CodeMirror.emacs.kill.cljs$core$IFn$_invoke$arity$3 ? CodeMirror.emacs.kill.cljs$core$IFn$_invoke$arity$3(cm,anchor,head) : CodeMirror.emacs.kill.call(null,cm,anchor,head));
});
/**
 * assumes a pair of brackets surround the cursor. deletes the pair.
 */
paredit_cm.core.kill_pair = (function paredit_cm$core$kill_pair(cm){
paredit_cm.core.select_pair(cm);

return paredit_cm.core.kill_region(cm);
});
paredit_cm.core.kill_rest_of_string = (function paredit_cm$core$kill_rest_of_string(cm){
paredit_cm.core.select_rest_of_string(cm);

return paredit_cm.core.kill_region(cm);
});
paredit_cm.core.kill_rest_of_line = (function paredit_cm$core$kill_rest_of_line(cm){
paredit_cm.core.select_rest_of_line(cm);

return paredit_cm.core.kill_region(cm);
});
paredit_cm.core.kill_rest_of_siblings = (function paredit_cm$core$kill_rest_of_siblings(cm){
paredit_cm.core.select_rest_of_siblings(cm);

return paredit_cm.core.kill_region(cm);
});
/**
 * kills the next sibling to the right of the cursor
 */
paredit_cm.core.kill_next_sibling = (function paredit_cm$core$kill_next_sibling(cm){
var from = paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm);
var mid = paredit_cm.core.end_of_next_sibling.cljs$core$IFn$_invoke$arity$2(cm,from);
var to = (cljs.core.truth_(paredit_cm.core.betw_code_and_comment_QMARK_(cm,mid))?paredit_cm.core.last_cur.cljs$core$IFn$_invoke$arity$2(cm,mid):mid);
if(cljs.core.truth_(to)){
cm.setSelection(from,to);

return paredit_cm.core.kill_region(cm);
} else {
return null;
}
});
/**
 * paredit kill exposed for keymap.
 */
paredit_cm.core.kill = (function paredit_cm$core$kill(cm){
var cur = paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm);
if(cljs.core.truth_(cm.somethingSelected())){
return paredit_cm.core.kill_region(cm);
} else {
if(cljs.core.truth_(paredit_cm.core.in_regular_string_QMARK_(cm,cur))){
return paredit_cm.core.kill_rest_of_string(cm);
} else {
if(cljs.core.truth_(paredit_cm.core.betw_code_and_comment_QMARK_(cm,cur))){
return paredit_cm.core.kill_rest_of_line(cm);
} else {
if(cljs.core.truth_(paredit_cm.core.in_escaped_char_QMARK_.cljs$core$IFn$_invoke$arity$2(cm,cur))){
return paredit_cm.core.kill_pair(cm);
} else {
if(cljs.core.truth_(paredit_cm.core.code_to_left_QMARK_(cm))){
return paredit_cm.core.kill_rest_of_siblings(cm);
} else {
return paredit_cm.core.kill_next_sibling(cm);

}
}
}
}
}
});
goog.exportSymbol('paredit_cm.core.kill', paredit_cm.core.kill);
paredit_cm.core.comment_QMARK_ = (function paredit_cm$core$comment_QMARK_(cm,cur){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("comment",paredit_cm.core.get_type.cljs$core$IFn$_invoke$arity$2(cm,cur));
});
/**
 * true if block cursor is on the first ; of a line comment
 */
paredit_cm.core.start_of_comment_QMARK_ = (function paredit_cm$core$start_of_comment_QMARK_(cm,cur){
var map__26003 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$2(cm,cur);
var map__26003__$1 = ((((!((map__26003 == null)))?((((map__26003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26003.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26003):map__26003);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26003__$1,cljs.core.cst$kw$type);
var right_cur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26003__$1,cljs.core.cst$kw$right_DASH_cur);
var right_type = paredit_cm.core.get_type.cljs$core$IFn$_invoke$arity$2(cm,right_cur);
return (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("comment",type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1("comment right-type"));
});
paredit_cm.core.idx_of_next = (function paredit_cm$core$idx_of_next(cm,i,chars,member,max){
var map__26012 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$2(cm,paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,i));
var map__26012__$1 = ((((!((map__26012 == null)))?((((map__26012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26012.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26012):map__26012);
var right_char = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26012__$1,cljs.core.cst$kw$right_DASH_char);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,max)){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["infinite loop"], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(member,cljs.core.contains_QMARK_(chars,right_char))){
return i;
} else {
return ((function (map__26012,map__26012__$1,right_char){
return (function (){
var G__26014 = cm;
var G__26015 = (i + (1));
var G__26016 = chars;
var G__26017 = member;
var G__26018 = max;
return (paredit_cm.core.idx_of_next.cljs$core$IFn$_invoke$arity$5 ? paredit_cm.core.idx_of_next.cljs$core$IFn$_invoke$arity$5(G__26014,G__26015,G__26016,G__26017,G__26018) : paredit_cm.core.idx_of_next.call(null,G__26014,G__26015,G__26016,G__26017,G__26018));
});
;})(map__26012,map__26012__$1,right_char))

}
}
});
paredit_cm.core.index_of_next = (function paredit_cm$core$index_of_next(cm,i,chars){
return cljs.core.trampoline.cljs$core$IFn$_invoke$arity$variadic(paredit_cm.core.idx_of_next,cljs.core.array_seq([cm,i,chars,true,paredit_cm.core.char_count(cm)], 0));
});
paredit_cm.core.index_of_next_non = (function paredit_cm$core$index_of_next_non(cm,i,chars){
return cljs.core.trampoline.cljs$core$IFn$_invoke$arity$variadic(paredit_cm.core.idx_of_next,cljs.core.array_seq([cm,i,chars,false,paredit_cm.core.char_count(cm)], 0));
});
paredit_cm.core.non_word_chars = cljs.core.set("(){}[]|&; \n");
paredit_cm.core.comment_start = cljs.core.set("; ");
paredit_cm.core.semicolons = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [";",null], null), null);
paredit_cm.core.comment_whitespace = cljs.core.PersistentHashSet.createAsIfByAssoc([" ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\t")].join('')], true);
/**
 * assumes i is in a comment or a string. returns the i at the end of
 *   the next word (going to the right) in this comment/string
 */
paredit_cm.core.end_of_next_word = (function paredit_cm$core$end_of_next_word(cm,i){
var map__26021 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$2(cm,paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,i));
var map__26021__$1 = ((((!((map__26021 == null)))?((((map__26021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26021.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26021):map__26021);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26021__$1,cljs.core.cst$kw$ch);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26021__$1,cljs.core.cst$kw$start);
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26021__$1,cljs.core.cst$kw$string);
var tail = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(string,(ch - start));
var word = cljs.core.re_find(/^\s*[\S]*/,tail);
var length = cljs.core.count(word);
var quote = ((clojure.string.ends_with_QMARK_(word,"\""))?(-1):(0));
return ((i + length) + quote);
});
/**
 * assumes i is in a comment or a string. returns the i at the start of
 *   the prev word (going to the left) in this comment/string
 */
paredit_cm.core.start_of_prev_word = (function paredit_cm$core$start_of_prev_word(cm,i){
var map__26025 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$2(cm,paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,i));
var map__26025__$1 = ((((!((map__26025 == null)))?((((map__26025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26025.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26025):map__26025);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26025__$1,cljs.core.cst$kw$ch);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26025__$1,cljs.core.cst$kw$start);
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26025__$1,cljs.core.cst$kw$string);
var head = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(string,(0),(ch - start));
var last_word = cljs.core.re_find(/[\S]*\s*$/,head);
var length = cljs.core.count(last_word);
var quote = ((clojure.string.ends_with_QMARK_(last_word,"\""))?(1):(0));
return ((i - length) - quote);
});
/**
 * assumes i is in a comment or a string. kills text from i to the end
 *   of the next word in this comment/string
 */
paredit_cm.core.kill_next_word = (function paredit_cm$core$kill_next_word(cm,i){
paredit_cm.core.kill_from_to(cm,i,paredit_cm.core.end_of_next_word(cm,(i + (1))));

return cm.setCursor(paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,i));
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
var cur = paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,i);
var right_cur = paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,j);
if((n < (0))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["infinite loop"], 0));
} else {
if(cljs.core.truth_(paredit_cm.core.eof_QMARK_(cm,right_cur))){
return cljs.core.cst$kw$do_DASH_nothing;
} else {
if(cljs.core.truth_(paredit_cm.core.whitespace_QMARK_(cm,right_cur))){
return ((function (m,j,cur,right_cur){
return (function (){
var G__26031 = cm;
var G__26032 = mark;
var G__26033 = paredit_cm.core.token_end_index(cm,j);
var G__26034 = m;
return (paredit_cm.core.fwd_kill_word.cljs$core$IFn$_invoke$arity$4 ? paredit_cm.core.fwd_kill_word.cljs$core$IFn$_invoke$arity$4(G__26031,G__26032,G__26033,G__26034) : paredit_cm.core.fwd_kill_word.call(null,G__26031,G__26032,G__26033,G__26034));
});
;})(m,j,cur,right_cur))
} else {
if(cljs.core.truth_(paredit_cm.core.start_of_a_string_QMARK_(cm,right_cur))){
return ((function (m,j,cur,right_cur){
return (function (){
return (paredit_cm.core.fwd_kill_word.cljs$core$IFn$_invoke$arity$4 ? paredit_cm.core.fwd_kill_word.cljs$core$IFn$_invoke$arity$4(cm,j,j,m) : paredit_cm.core.fwd_kill_word.call(null,cm,j,j,m));
});
;})(m,j,cur,right_cur))
} else {
if(cljs.core.truth_(paredit_cm.core.in_regular_string_QMARK_(cm,right_cur))){
return paredit_cm.core.kill_next_word(cm,mark);
} else {
if(cljs.core.truth_(paredit_cm.core.opening_delim_QMARK_(cm,right_cur))){
return ((function (m,j,cur,right_cur){
return (function (){
return (paredit_cm.core.fwd_kill_word.cljs$core$IFn$_invoke$arity$4 ? paredit_cm.core.fwd_kill_word.cljs$core$IFn$_invoke$arity$4(cm,j,j,m) : paredit_cm.core.fwd_kill_word.call(null,cm,j,j,m));
});
;})(m,j,cur,right_cur))
} else {
if(cljs.core.truth_(paredit_cm.core.closing_delim_QMARK_(cm,right_cur))){
return ((function (m,j,cur,right_cur){
return (function (){
return (paredit_cm.core.fwd_kill_word.cljs$core$IFn$_invoke$arity$4 ? paredit_cm.core.fwd_kill_word.cljs$core$IFn$_invoke$arity$4(cm,j,j,m) : paredit_cm.core.fwd_kill_word.call(null,cm,j,j,m));
});
;})(m,j,cur,right_cur))
} else {
if(cljs.core.truth_(paredit_cm.core.at_a_word_QMARK_(cm,right_cur))){
return paredit_cm.core.kill_from_to(cm,mark,paredit_cm.core.token_end_index(cm,j));
} else {
if(cljs.core.truth_(paredit_cm.core.start_of_comment_QMARK_(cm,cur))){
var j__$1 = paredit_cm.core.index_of_next_non(cm,i,paredit_cm.core.semicolons);
return ((function (j__$1,m,j,cur,right_cur){
return (function (){
return (paredit_cm.core.fwd_kill_word.cljs$core$IFn$_invoke$arity$4 ? paredit_cm.core.fwd_kill_word.cljs$core$IFn$_invoke$arity$4(cm,j__$1,j__$1,m) : paredit_cm.core.fwd_kill_word.call(null,cm,j__$1,j__$1,m));
});
;})(j__$1,m,j,cur,right_cur))
} else {
if(cljs.core.truth_(paredit_cm.core.comment_QMARK_(cm,right_cur))){
return paredit_cm.core.kill_next_word(cm,mark);
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["unhandled"], 0));

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
var i = paredit_cm.core.index.cljs$core$IFn$_invoke$arity$1(cm);
return cljs.core.trampoline.cljs$core$IFn$_invoke$arity$variadic(paredit_cm.core.fwd_kill_word,cljs.core.array_seq([cm,i,i,paredit_cm.core.char_count(cm)], 0));
});
goog.exportSymbol('paredit_cm.core.forward_kill_word', paredit_cm.core.forward_kill_word);
paredit_cm.core.start_of_token_at = (function paredit_cm$core$start_of_token_at(cm,i){
var map__26037 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$2(cm,paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,i));
var map__26037__$1 = ((((!((map__26037 == null)))?((((map__26037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26037.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26037):map__26037);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26037__$1,cljs.core.cst$kw$ch);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26037__$1,cljs.core.cst$kw$start);
return (i - (ch - start));
});
/**
 * assumes i is in a comment. kills text from i to the beginning of the previous
 *   word in this comment
 */
paredit_cm.core.kill_prev_word_in_comment = (function paredit_cm$core$kill_prev_word_in_comment(cm,i){
var map__26041 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$2(cm,paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,i));
var map__26041__$1 = ((((!((map__26041 == null)))?((((map__26041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26041.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26041):map__26041);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26041__$1,cljs.core.cst$kw$ch);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26041__$1,cljs.core.cst$kw$start);
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26041__$1,cljs.core.cst$kw$string);
var cur_offset_in_string = (ch - start);
var head = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(string,(0),cur_offset_in_string);
var tail = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(string,cur_offset_in_string);
var word = cljs.core.re_find(/\S*\s*$/,head);
var length = cljs.core.count(word);
paredit_cm.core.kill_from_to(cm,(i - length),i);

return cm.setCursor(paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,(i - length)));
});
paredit_cm.core.beginning_of_line_QMARK_ = (function paredit_cm$core$beginning_of_line_QMARK_(cm,cur){
var map__26045 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$2(cm,cur);
var map__26045__$1 = ((((!((map__26045 == null)))?((((map__26045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26045.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26045):map__26045);
var info = map__26045__$1;
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26045__$1,cljs.core.cst$kw$start);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26045__$1,cljs.core.cst$kw$end);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26045__$1,cljs.core.cst$kw$type);
return (!((info == null))) && ((type == null)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(start,end,cljs.core.array_seq([(0)], 0)));
});
paredit_cm.core.bkwd_kill_skippable_comment_char_QMARK_ = (function paredit_cm$core$bkwd_kill_skippable_comment_char_QMARK_(cm,cur){
var map__26049 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$2(cm,cur);
var map__26049__$1 = ((((!((map__26049 == null)))?((((map__26049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26049.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26049):map__26049);
var info = map__26049__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26049__$1,cljs.core.cst$kw$type);
var left_char = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26049__$1,cljs.core.cst$kw$left_DASH_char);
var and__6802__auto__ = !((info == null));
if(and__6802__auto__){
var and__6802__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("comment",type);
if(and__6802__auto____$1){
return cljs.core.re_matches(/\s|;/,left_char);
} else {
return and__6802__auto____$1;
}
} else {
return and__6802__auto__;
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
var cur = paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,i);
if((n < (0))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["infinite loop"], 0));
} else {
if(cljs.core.truth_(paredit_cm.core.bof_QMARK_(cm,cur))){
return cljs.core.cst$kw$do_DASH_nothing;
} else {
if(cljs.core.truth_(paredit_cm.core.beginning_of_line_QMARK_(cm,cur))){
return ((function (h,m,cur){
return (function (){
return (paredit_cm.core.bkwd_kill_word.cljs$core$IFn$_invoke$arity$4 ? paredit_cm.core.bkwd_kill_word.cljs$core$IFn$_invoke$arity$4(cm,h,h,m) : paredit_cm.core.bkwd_kill_word.call(null,cm,h,h,m));
});
;})(h,m,cur))
} else {
if(cljs.core.truth_(paredit_cm.core.whitespace_QMARK_(cm,cur))){
return ((function (h,m,cur){
return (function (){
var G__26055 = cm;
var G__26056 = mark;
var G__26057 = paredit_cm.core.start_of_token_at(cm,i);
var G__26058 = m;
return (paredit_cm.core.bkwd_kill_word.cljs$core$IFn$_invoke$arity$4 ? paredit_cm.core.bkwd_kill_word.cljs$core$IFn$_invoke$arity$4(G__26055,G__26056,G__26057,G__26058) : paredit_cm.core.bkwd_kill_word.call(null,G__26055,G__26056,G__26057,G__26058));
});
;})(h,m,cur))
} else {
if(cljs.core.truth_(paredit_cm.core.opening_delim_QMARK_(cm,cur))){
return ((function (h,m,cur){
return (function (){
return (paredit_cm.core.bkwd_kill_word.cljs$core$IFn$_invoke$arity$4 ? paredit_cm.core.bkwd_kill_word.cljs$core$IFn$_invoke$arity$4(cm,h,h,m) : paredit_cm.core.bkwd_kill_word.call(null,cm,h,h,m));
});
;})(h,m,cur))
} else {
if(cljs.core.truth_(paredit_cm.core.closing_delim_QMARK_(cm,cur))){
return ((function (h,m,cur){
return (function (){
return (paredit_cm.core.bkwd_kill_word.cljs$core$IFn$_invoke$arity$4 ? paredit_cm.core.bkwd_kill_word.cljs$core$IFn$_invoke$arity$4(cm,h,h,m) : paredit_cm.core.bkwd_kill_word.call(null,cm,h,h,m));
});
;})(h,m,cur))
} else {
if(cljs.core.truth_(paredit_cm.core.at_a_word_QMARK_(cm,cur))){
return paredit_cm.core.kill_from_to(cm,paredit_cm.core.start_of_token_at(cm,i),mark);
} else {
if(cljs.core.truth_(paredit_cm.core.start_of_comment_QMARK_(cm,cur))){
var j = paredit_cm.core.index_of_next_non(cm,i,paredit_cm.core.semicolons);
return ((function (j,h,m,cur){
return (function (){
return paredit_cm.core.fwd_kill_word(cm,j,j,m);
});
;})(j,h,m,cur))
} else {
if(cljs.core.truth_(paredit_cm.core.bkwd_kill_skippable_comment_char_QMARK_(cm,cur))){
return ((function (h,m,cur){
return (function (){
return (paredit_cm.core.bkwd_kill_word.cljs$core$IFn$_invoke$arity$4 ? paredit_cm.core.bkwd_kill_word.cljs$core$IFn$_invoke$arity$4(cm,mark,h,m) : paredit_cm.core.bkwd_kill_word.call(null,cm,mark,h,m));
});
;})(h,m,cur))
} else {
if(cljs.core.truth_(paredit_cm.core.comment_QMARK_(cm,cur))){
return paredit_cm.core.kill_prev_word_in_comment(cm,mark);
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["unhandled"], 0));

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
var i = paredit_cm.core.index.cljs$core$IFn$_invoke$arity$1(cm);
return cljs.core.trampoline.cljs$core$IFn$_invoke$arity$variadic(paredit_cm.core.bkwd_kill_word,cljs.core.array_seq([cm,i,i,paredit_cm.core.char_count(cm)], 0));
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
var cur = paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,i);
var right_cur = paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,j);
if((n < (0))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["infinite loop"], 0));
} else {
if((right_cur == null)){
return cljs.core.cst$kw$do_DASH_nothing;
} else {
if(cljs.core.truth_(paredit_cm.core.eof_QMARK_(cm,right_cur))){
return cljs.core.cst$kw$do_DASH_nothing;
} else {
if(cljs.core.truth_(paredit_cm.core.whitespace_QMARK_(cm,right_cur))){
return ((function (j,m,cur,right_cur){
return (function (){
return (paredit_cm.core.fwd.cljs$core$IFn$_invoke$arity$3 ? paredit_cm.core.fwd.cljs$core$IFn$_invoke$arity$3(cm,j,m) : paredit_cm.core.fwd.call(null,cm,j,m));
});
;})(j,m,cur,right_cur))
} else {
if(cljs.core.truth_(paredit_cm.core.opening_delim_QMARK_(cm,right_cur))){
return cm.setCursor(paredit_cm.core.end_of_next_sibling.cljs$core$IFn$_invoke$arity$2(cm,cur));
} else {
if(cljs.core.truth_(paredit_cm.core.closing_delim_QMARK_(cm,right_cur))){
return cm.setCursor(right_cur);
} else {
if(cljs.core.truth_(paredit_cm.core.at_a_word_QMARK_(cm,right_cur))){
return cm.setCursor(paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,paredit_cm.core.token_end_index(cm,j)));
} else {
if(cljs.core.truth_(paredit_cm.core.comment_QMARK_(cm,right_cur))){
return ((function (j,m,cur,right_cur){
return (function (){
var G__26062 = cm;
var G__26063 = paredit_cm.core.token_end_index(cm,j);
var G__26064 = m;
return (paredit_cm.core.fwd.cljs$core$IFn$_invoke$arity$3 ? paredit_cm.core.fwd.cljs$core$IFn$_invoke$arity$3(G__26062,G__26063,G__26064) : paredit_cm.core.fwd.call(null,G__26062,G__26063,G__26064));
});
;})(j,m,cur,right_cur))
} else {
if(cljs.core.truth_(paredit_cm.core.in_string_QMARK_.cljs$core$IFn$_invoke$arity$2(cm,right_cur))){
return cm.setCursor(paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,paredit_cm.core.end_of_next_word(cm,j)));
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["unhandled"], 0));

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
return cljs.core.trampoline.cljs$core$IFn$_invoke$arity$variadic(paredit_cm.core.fwd,cljs.core.array_seq([cm,paredit_cm.core.index.cljs$core$IFn$_invoke$arity$1(cm),paredit_cm.core.char_count(cm)], 0));
});
goog.exportSymbol('paredit_cm.core.forward', paredit_cm.core.forward);
/**
 * trampoline helper for backward. 'i' is the index we're inspecting. 'n' is
 *   number of remaining calls before we suspect an infinite loop
 */
paredit_cm.core.bkwd = (function paredit_cm$core$bkwd(cm,i,n){
var h = (i - (1));
var m = (n - (1));
var cur = paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,i);
if((n < (0))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["infinite loop"], 0));
} else {
if((cur == null)){
return cljs.core.cst$kw$do_DASH_nothing;
} else {
if(cljs.core.truth_(paredit_cm.core.bof_QMARK_(cm,cur))){
return cm.setCursor(paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,h));
} else {
if(cljs.core.truth_(paredit_cm.core.whitespace_QMARK_(cm,cur))){
return ((function (h,m,cur){
return (function (){
return (paredit_cm.core.bkwd.cljs$core$IFn$_invoke$arity$3 ? paredit_cm.core.bkwd.cljs$core$IFn$_invoke$arity$3(cm,h,m) : paredit_cm.core.bkwd.call(null,cm,h,m));
});
;})(h,m,cur))
} else {
if(cljs.core.truth_(paredit_cm.core.opening_delim_QMARK_(cm,cur))){
return cm.setCursor(paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,h));
} else {
if(cljs.core.truth_(paredit_cm.core.closing_delim_QMARK_(cm,cur))){
return cm.setCursor(paredit_cm.core.start_of_prev_sibling.cljs$core$IFn$_invoke$arity$2(cm,cur));
} else {
if(cljs.core.truth_(paredit_cm.core.at_a_word_QMARK_(cm,cur))){
return cm.setCursor(paredit_cm.core.start_of_prev_sibling.cljs$core$IFn$_invoke$arity$2(cm,cur));
} else {
if(cljs.core.truth_(paredit_cm.core.comment_QMARK_(cm,cur))){
return ((function (h,m,cur){
return (function (){
var G__26068 = cm;
var G__26069 = paredit_cm.core.start_of_prev_sibling.cljs$core$IFn$_invoke$arity$2(cm,cur);
var G__26070 = m;
return (paredit_cm.core.bkwd.cljs$core$IFn$_invoke$arity$3 ? paredit_cm.core.bkwd.cljs$core$IFn$_invoke$arity$3(G__26068,G__26069,G__26070) : paredit_cm.core.bkwd.call(null,G__26068,G__26069,G__26070));
});
;})(h,m,cur))
} else {
if(cljs.core.truth_(paredit_cm.core.in_string_QMARK_.cljs$core$IFn$_invoke$arity$2(cm,cur))){
return cm.setCursor(paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,paredit_cm.core.start_of_prev_word(cm,h)));
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["unhandled"], 0));

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
return cljs.core.trampoline.cljs$core$IFn$_invoke$arity$variadic(paredit_cm.core.bkwd,cljs.core.array_seq([cm,paredit_cm.core.index.cljs$core$IFn$_invoke$arity$1(cm),paredit_cm.core.char_count(cm)], 0));
});
goog.exportSymbol('paredit_cm.core.backward', paredit_cm.core.backward);
/**
 * get cursor corresponding to paredit forward up
 */
paredit_cm.core.forward_up_cur = (function paredit_cm$core$forward_up_cur(var_args){
var args26071 = [];
var len__7927__auto___26074 = arguments.length;
var i__7928__auto___26075 = (0);
while(true){
if((i__7928__auto___26075 < len__7927__auto___26074)){
args26071.push((arguments[i__7928__auto___26075]));

var G__26076 = (i__7928__auto___26075 + (1));
i__7928__auto___26075 = G__26076;
continue;
} else {
}
break;
}

var G__26073 = args26071.length;
switch (G__26073) {
case 1:
return paredit_cm.core.forward_up_cur.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.forward_up_cur.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26071.length)].join('')));

}
});

paredit_cm.core.forward_up_cur.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.forward_up_cur.cljs$core$IFn$_invoke$arity$2(cm,paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm));
});

paredit_cm.core.forward_up_cur.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
if((cur == null)){
return null;
} else {
if(cljs.core.truth_((function (){var and__6802__auto__ = paredit_cm.core.in_string_QMARK_.cljs$core$IFn$_invoke$arity$2(cm,cur);
if(cljs.core.truth_(and__6802__auto__)){
return cljs.core.not(paredit_cm.core.end_of_a_string_QMARK_(cm,cur));
} else {
return and__6802__auto__;
}
})())){
return paredit_cm.core.token_end.cljs$core$IFn$_invoke$arity$2(cm,cur);
} else {
return paredit_cm.core.skip.cljs$core$IFn$_invoke$arity$2(cm,paredit_cm.core.parent_closer_sp);

}
}
});

paredit_cm.core.forward_up_cur.cljs$lang$maxFixedArity = 2;

/**
 * paredit forward-up exposed for keymap.
 */
paredit_cm.core.forward_up = (function paredit_cm$core$forward_up(var_args){
var args26078 = [];
var len__7927__auto___26081 = arguments.length;
var i__7928__auto___26082 = (0);
while(true){
if((i__7928__auto___26082 < len__7927__auto___26081)){
args26078.push((arguments[i__7928__auto___26082]));

var G__26083 = (i__7928__auto___26082 + (1));
i__7928__auto___26082 = G__26083;
continue;
} else {
}
break;
}

var G__26080 = args26078.length;
switch (G__26080) {
case 1:
return paredit_cm.core.forward_up.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.forward_up.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26078.length)].join('')));

}
});
goog.exportSymbol('paredit_cm.core.forward_up', paredit_cm.core.forward_up);

paredit_cm.core.forward_up.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.forward_up.cljs$core$IFn$_invoke$arity$2(cm,paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm));
});

paredit_cm.core.forward_up.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
var temp__4657__auto__ = paredit_cm.core.forward_up_cur.cljs$core$IFn$_invoke$arity$2(cm,cur);
if(cljs.core.truth_(temp__4657__auto__)){
var cur_SINGLEQUOTE_ = temp__4657__auto__;
return cm.setCursor(cur_SINGLEQUOTE_);
} else {
return null;
}
});

paredit_cm.core.forward_up.cljs$lang$maxFixedArity = 2;

/**
 * get cursor corresponding to paredit backward up
 */
paredit_cm.core.backward_up_cur = (function paredit_cm$core$backward_up_cur(var_args){
var args26085 = [];
var len__7927__auto___26088 = arguments.length;
var i__7928__auto___26089 = (0);
while(true){
if((i__7928__auto___26089 < len__7927__auto___26088)){
args26085.push((arguments[i__7928__auto___26089]));

var G__26090 = (i__7928__auto___26089 + (1));
i__7928__auto___26089 = G__26090;
continue;
} else {
}
break;
}

var G__26087 = args26085.length;
switch (G__26087) {
case 1:
return paredit_cm.core.backward_up_cur.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.backward_up_cur.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26085.length)].join('')));

}
});

paredit_cm.core.backward_up_cur.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.backward_up_cur.cljs$core$IFn$_invoke$arity$2(cm,paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm));
});

paredit_cm.core.backward_up_cur.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
return paredit_cm.core.start_of_prev_sibling.cljs$core$IFn$_invoke$arity$2(cm,paredit_cm.core.forward_up_cur.cljs$core$IFn$_invoke$arity$2(cm,cur));
});

paredit_cm.core.backward_up_cur.cljs$lang$maxFixedArity = 2;

/**
 * paredit backward-up exposed for keymap.
 */
paredit_cm.core.backward_up = (function paredit_cm$core$backward_up(var_args){
var args26092 = [];
var len__7927__auto___26095 = arguments.length;
var i__7928__auto___26096 = (0);
while(true){
if((i__7928__auto___26096 < len__7927__auto___26095)){
args26092.push((arguments[i__7928__auto___26096]));

var G__26097 = (i__7928__auto___26096 + (1));
i__7928__auto___26096 = G__26097;
continue;
} else {
}
break;
}

var G__26094 = args26092.length;
switch (G__26094) {
case 1:
return paredit_cm.core.backward_up.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.backward_up.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26092.length)].join('')));

}
});
goog.exportSymbol('paredit_cm.core.backward_up', paredit_cm.core.backward_up);

paredit_cm.core.backward_up.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.backward_up.cljs$core$IFn$_invoke$arity$2(cm,paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm));
});

paredit_cm.core.backward_up.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
var temp__4657__auto__ = paredit_cm.core.backward_up_cur.cljs$core$IFn$_invoke$arity$2(cm,cur);
if(cljs.core.truth_(temp__4657__auto__)){
var cur_SINGLEQUOTE_ = temp__4657__auto__;
return cm.setCursor(cur_SINGLEQUOTE_);
} else {
return null;
}
});

paredit_cm.core.backward_up.cljs$lang$maxFixedArity = 2;

/**
 * go to the end of the current thing, whether it be a string or a word of code
 */
paredit_cm.core.end_of_this = (function paredit_cm$core$end_of_this(cm,cur){
if(cljs.core.truth_(paredit_cm.core.in_string_QMARK_.cljs$core$IFn$_invoke$arity$2(cm,cur))){
return paredit_cm.core.token_end.cljs$core$IFn$_invoke$arity$2(cm,cur);
} else {
return paredit_cm.core.end_of_next_sibling.cljs$core$IFn$_invoke$arity$2(cm,cur);
}
});
/**
 * paredit wrap-round exposed for keymap.
 */
paredit_cm.core.wrap_round = (function paredit_cm$core$wrap_round(var_args){
var args26099 = [];
var len__7927__auto___26102 = arguments.length;
var i__7928__auto___26103 = (0);
while(true){
if((i__7928__auto___26103 < len__7927__auto___26102)){
args26099.push((arguments[i__7928__auto___26103]));

var G__26104 = (i__7928__auto___26103 + (1));
i__7928__auto___26103 = G__26104;
continue;
} else {
}
break;
}

var G__26101 = args26099.length;
switch (G__26101) {
case 1:
return paredit_cm.core.wrap_round.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.wrap_round.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26099.length)].join('')));

}
});
goog.exportSymbol('paredit_cm.core.wrap_round', paredit_cm.core.wrap_round);

paredit_cm.core.wrap_round.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.wrap_round.cljs$core$IFn$_invoke$arity$2(cm,paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm));
});

paredit_cm.core.wrap_round.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
var cur_close = paredit_cm.core.end_of_this(cm,cur);
var cur_open = paredit_cm.core.start_of_prev_sibling.cljs$core$IFn$_invoke$arity$2(cm,cur_close);
var i = (paredit_cm.core.index.cljs$core$IFn$_invoke$arity$2(cm,cur_open) + (1));
var text = cm.getRange(cur_open,cur_close);
var text_SINGLEQUOTE_ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join('');
cm.replaceRange(text_SINGLEQUOTE_,cur_open,cur_close);

return cm.setCursor(paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,i));
});

paredit_cm.core.wrap_round.cljs$lang$maxFixedArity = 2;

/**
 * paredit splice-sexp exposed for keymap. unlike emacs' version, this does not
 *   splice a string by dropping its double-quotes.
 */
paredit_cm.core.splice_sexp = (function paredit_cm$core$splice_sexp(var_args){
var args26106 = [];
var len__7927__auto___26109 = arguments.length;
var i__7928__auto___26110 = (0);
while(true){
if((i__7928__auto___26110 < len__7927__auto___26109)){
args26106.push((arguments[i__7928__auto___26110]));

var G__26111 = (i__7928__auto___26110 + (1));
i__7928__auto___26110 = G__26111;
continue;
} else {
}
break;
}

var G__26108 = args26106.length;
switch (G__26108) {
case 1:
return paredit_cm.core.splice_sexp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.splice_sexp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26106.length)].join('')));

}
});
goog.exportSymbol('paredit_cm.core.splice_sexp', paredit_cm.core.splice_sexp);

paredit_cm.core.splice_sexp.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.splice_sexp.cljs$core$IFn$_invoke$arity$2(cm,paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm));
});

paredit_cm.core.splice_sexp.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
var i = (paredit_cm.core.index.cljs$core$IFn$_invoke$arity$1(cm) - (1));
var cur_close = paredit_cm.core.skip.cljs$core$IFn$_invoke$arity$2(cm,paredit_cm.core.parent_closer_sp);
var cur_open = paredit_cm.core.start_of_prev_sibling.cljs$core$IFn$_invoke$arity$2(cm,cur_close);
var text_SINGLEQUOTE_ = (cljs.core.truth_(cur_open)?cm.getRange(paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,(paredit_cm.core.index.cljs$core$IFn$_invoke$arity$2(cm,cur_open) + (1))),paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,(paredit_cm.core.index.cljs$core$IFn$_invoke$arity$2(cm,cur_close) - (1)))):null);
if(cljs.core.truth_(text_SINGLEQUOTE_)){
cm.replaceRange(text_SINGLEQUOTE_,cur_open,cur_close);

return cm.setCursor(paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,i));
} else {
return null;
}
});

paredit_cm.core.splice_sexp.cljs$lang$maxFixedArity = 2;

/**
 * paredit splice-sexp-killing-backward exposed for keymap. like emacs' version,
 *   this doesn't actually kill to the clipboard. it just deletes. but unlink
 *   emacs, this does not splice a string by dropping its double-quotes.
 */
paredit_cm.core.splice_sexp_killing_backward = (function paredit_cm$core$splice_sexp_killing_backward(var_args){
var args26113 = [];
var len__7927__auto___26116 = arguments.length;
var i__7928__auto___26117 = (0);
while(true){
if((i__7928__auto___26117 < len__7927__auto___26116)){
args26113.push((arguments[i__7928__auto___26117]));

var G__26118 = (i__7928__auto___26117 + (1));
i__7928__auto___26117 = G__26118;
continue;
} else {
}
break;
}

var G__26115 = args26113.length;
switch (G__26115) {
case 1:
return paredit_cm.core.splice_sexp_killing_backward.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.splice_sexp_killing_backward.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26113.length)].join('')));

}
});
goog.exportSymbol('paredit_cm.core.splice_sexp_killing_backward', paredit_cm.core.splice_sexp_killing_backward);

paredit_cm.core.splice_sexp_killing_backward.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.splice_sexp_killing_backward.cljs$core$IFn$_invoke$arity$2(cm,paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm));
});

paredit_cm.core.splice_sexp_killing_backward.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
if(cljs.core.truth_(paredit_cm.core.in_string_QMARK_.cljs$core$IFn$_invoke$arity$2(cm,cur))){
paredit_cm.core.backward_up.cljs$core$IFn$_invoke$arity$2(cm,cur);
} else {
}

var cur_SINGLEQUOTE_ = paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm);
var cur_close = paredit_cm.core.skip.cljs$core$IFn$_invoke$arity$2(cm,paredit_cm.core.parent_closer_sp);
var cur_open = paredit_cm.core.start_of_prev_sibling.cljs$core$IFn$_invoke$arity$2(cm,cur_close);
var text_SINGLEQUOTE_ = (cljs.core.truth_(cur_close)?cm.getRange(cur_SINGLEQUOTE_,paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,(paredit_cm.core.index.cljs$core$IFn$_invoke$arity$2(cm,cur_close) - (1)))):null);
if(cljs.core.truth_(text_SINGLEQUOTE_)){
cm.replaceRange(text_SINGLEQUOTE_,cur_open,cur_close);

return cm.setCursor(cur_open);
} else {
return null;
}
});

paredit_cm.core.splice_sexp_killing_backward.cljs$lang$maxFixedArity = 2;

/**
 * paredit splice-sexp-killing-forward exposed for keymap. like emacs' version,
 *   this doesn't actually kill to the clipboard. it just deletes. but unlink
 *   emacs, this does not splice a string by dropping its double-quotes.
 */
paredit_cm.core.splice_sexp_killing_forward = (function paredit_cm$core$splice_sexp_killing_forward(var_args){
var args26120 = [];
var len__7927__auto___26123 = arguments.length;
var i__7928__auto___26124 = (0);
while(true){
if((i__7928__auto___26124 < len__7927__auto___26123)){
args26120.push((arguments[i__7928__auto___26124]));

var G__26125 = (i__7928__auto___26124 + (1));
i__7928__auto___26124 = G__26125;
continue;
} else {
}
break;
}

var G__26122 = args26120.length;
switch (G__26122) {
case 1:
return paredit_cm.core.splice_sexp_killing_forward.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.splice_sexp_killing_forward.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26120.length)].join('')));

}
});
goog.exportSymbol('paredit_cm.core.splice_sexp_killing_forward', paredit_cm.core.splice_sexp_killing_forward);

paredit_cm.core.splice_sexp_killing_forward.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.splice_sexp_killing_forward.cljs$core$IFn$_invoke$arity$2(cm,paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm));
});

paredit_cm.core.splice_sexp_killing_forward.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
if(cljs.core.truth_(paredit_cm.core.in_string_QMARK_.cljs$core$IFn$_invoke$arity$2(cm,cur))){
paredit_cm.core.forward_up.cljs$core$IFn$_invoke$arity$2(cm,cur);
} else {
}

var cur_SINGLEQUOTE_ = paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm);
var final_cur = paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,(paredit_cm.core.index.cljs$core$IFn$_invoke$arity$2(cm,cur_SINGLEQUOTE_) - (1)));
var cur_close = paredit_cm.core.skip.cljs$core$IFn$_invoke$arity$2(cm,paredit_cm.core.parent_closer_sp);
var cur_open = paredit_cm.core.start_of_prev_sibling.cljs$core$IFn$_invoke$arity$2(cm,cur_close);
var keep_from = (cljs.core.truth_(cur_open)?paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,(paredit_cm.core.index.cljs$core$IFn$_invoke$arity$2(cm,cur_open) + (1))):null);
var text = (cljs.core.truth_(keep_from)?cm.getRange(cur_open,cur_close):null);
var text_SINGLEQUOTE_ = (cljs.core.truth_(keep_from)?cm.getRange(keep_from,cur_SINGLEQUOTE_):null);
if(cljs.core.truth_(text_SINGLEQUOTE_)){
cm.replaceRange(text_SINGLEQUOTE_,cur_open,cur_close);

return cm.setCursor(final_cur);
} else {
return null;
}
});

paredit_cm.core.splice_sexp_killing_forward.cljs$lang$maxFixedArity = 2;

/**
 * paredit raise-sexp exposed for keymap.
 */
paredit_cm.core.raise_sexp = (function paredit_cm$core$raise_sexp(var_args){
var args26127 = [];
var len__7927__auto___26130 = arguments.length;
var i__7928__auto___26131 = (0);
while(true){
if((i__7928__auto___26131 < len__7927__auto___26130)){
args26127.push((arguments[i__7928__auto___26131]));

var G__26132 = (i__7928__auto___26131 + (1));
i__7928__auto___26131 = G__26132;
continue;
} else {
}
break;
}

var G__26129 = args26127.length;
switch (G__26129) {
case 1:
return paredit_cm.core.raise_sexp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.raise_sexp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26127.length)].join('')));

}
});
goog.exportSymbol('paredit_cm.core.raise_sexp', paredit_cm.core.raise_sexp);

paredit_cm.core.raise_sexp.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.raise_sexp.cljs$core$IFn$_invoke$arity$2(cm,paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm));
});

paredit_cm.core.raise_sexp.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
if(cljs.core.truth_(paredit_cm.core.in_string_QMARK_.cljs$core$IFn$_invoke$arity$2(cm,cur))){
paredit_cm.core.backward_up.cljs$core$IFn$_invoke$arity$2(cm,cur);
} else {
}

var c1 = paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm);
var c2 = paredit_cm.core.end_of_next_sibling.cljs$core$IFn$_invoke$arity$2(cm,c1);
var text = (cljs.core.truth_(c2)?cm.getRange(c1,c2):null);
var cur_close = (cljs.core.truth_(text)?paredit_cm.core.skip.cljs$core$IFn$_invoke$arity$2(cm,paredit_cm.core.parent_closer_sp):null);
var cur_open = (cljs.core.truth_(cur_close)?paredit_cm.core.start_of_prev_sibling.cljs$core$IFn$_invoke$arity$2(cm,cur_close):null);
if(cljs.core.truth_(cur_open)){
cm.replaceRange(text,cur_open,cur_close);

return cm.setCursor(cur_open);
} else {
return null;
}
});

paredit_cm.core.raise_sexp.cljs$lang$maxFixedArity = 2;

/**
 * trampoline-able that looks for an ancestor closing bracket (parent,
 *   grandparent, etc) that has a sibling to slurp. returns a vector of the cur to
 *   the right of such a bracket, the cur to the right of the sibling that will be
 *   slurped, the string of the bracket to move. nil if there is no such anscestor
 *   that can slurp.
 */
paredit_cm.core.fwd_slurp = (function paredit_cm$core$fwd_slurp(cm,cur,n){
if((n >= (0))){
var parent = paredit_cm.core.skip.cljs$core$IFn$_invoke$arity$3(cm,paredit_cm.core.parent_closer_sp,cur);
var sibling = paredit_cm.core.end_of_next_sibling.cljs$core$IFn$_invoke$arity$2(cm,parent);
if(cljs.core.truth_(sibling)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent,sibling,paredit_cm.core.get_string.cljs$core$IFn$_invoke$arity$2(cm,parent)], null);
} else {
return ((function (parent,sibling){
return (function (){
var G__26137 = cm;
var G__26138 = parent;
var G__26139 = (n - (1));
return (paredit_cm.core.fwd_slurp.cljs$core$IFn$_invoke$arity$3 ? paredit_cm.core.fwd_slurp.cljs$core$IFn$_invoke$arity$3(G__26137,G__26138,G__26139) : paredit_cm.core.fwd_slurp.call(null,G__26137,G__26138,G__26139));
});
;})(parent,sibling))
}
} else {
return null;
}
});
/**
 * paredit forward-slurp-sexp exposed for keymap.
 */
paredit_cm.core.forward_slurp_sexp = (function paredit_cm$core$forward_slurp_sexp(var_args){
var args26140 = [];
var len__7927__auto___26146 = arguments.length;
var i__7928__auto___26147 = (0);
while(true){
if((i__7928__auto___26147 < len__7927__auto___26146)){
args26140.push((arguments[i__7928__auto___26147]));

var G__26148 = (i__7928__auto___26147 + (1));
i__7928__auto___26147 = G__26148;
continue;
} else {
}
break;
}

var G__26142 = args26140.length;
switch (G__26142) {
case 1:
return paredit_cm.core.forward_slurp_sexp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.forward_slurp_sexp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26140.length)].join('')));

}
});
goog.exportSymbol('paredit_cm.core.forward_slurp_sexp', paredit_cm.core.forward_slurp_sexp);

paredit_cm.core.forward_slurp_sexp.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.forward_slurp_sexp.cljs$core$IFn$_invoke$arity$2(cm,paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm));
});

paredit_cm.core.forward_slurp_sexp.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
var temp__4657__auto___26150 = cljs.core.trampoline.cljs$core$IFn$_invoke$arity$variadic(paredit_cm.core.fwd_slurp,cljs.core.array_seq([cm,cur,paredit_cm.core.char_count(cm)], 0));
if(cljs.core.truth_(temp__4657__auto___26150)){
var vec__26143_26151 = temp__4657__auto___26150;
var parent_26152 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26143_26151,(0),null);
var sibling_26153 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26143_26151,(1),null);
var bracket_26154 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26143_26151,(2),null);
paredit_cm.core.insert.cljs$core$IFn$_invoke$arity$4(cm,bracket_26154,(0),sibling_26153);

cm.replaceRange("",paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,(paredit_cm.core.index.cljs$core$IFn$_invoke$arity$2(cm,parent_26152) - cljs.core.count(bracket_26154))),parent_26152);
} else {
}

return cm.setCursor(cur);
});

paredit_cm.core.forward_slurp_sexp.cljs$lang$maxFixedArity = 2;

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
if(cljs.core.truth_(paredit_cm.core.opening_delim_QMARK_(cm,cur))){
return cur;
} else {
var temp__4657__auto__ = paredit_cm.core.token_end.cljs$core$IFn$_invoke$arity$3(cm,cur,(1));
if(cljs.core.truth_(temp__4657__auto__)){
var cur_SINGLEQUOTE_ = temp__4657__auto__;
return ((function (cur_SINGLEQUOTE_,temp__4657__auto__){
return (function (){
var G__26158 = cm;
var G__26159 = cur_SINGLEQUOTE_;
var G__26160 = (n - (1));
return (paredit_cm.core.fwd_down.cljs$core$IFn$_invoke$arity$3 ? paredit_cm.core.fwd_down.cljs$core$IFn$_invoke$arity$3(G__26158,G__26159,G__26160) : paredit_cm.core.fwd_down.call(null,G__26158,G__26159,G__26160));
});
;})(cur_SINGLEQUOTE_,temp__4657__auto__))
} else {
return null;
}

}
}
}
});
paredit_cm.core.forward_down_cur = (function paredit_cm$core$forward_down_cur(var_args){
var args26161 = [];
var len__7927__auto___26164 = arguments.length;
var i__7928__auto___26165 = (0);
while(true){
if((i__7928__auto___26165 < len__7927__auto___26164)){
args26161.push((arguments[i__7928__auto___26165]));

var G__26166 = (i__7928__auto___26165 + (1));
i__7928__auto___26165 = G__26166;
continue;
} else {
}
break;
}

var G__26163 = args26161.length;
switch (G__26163) {
case 1:
return paredit_cm.core.forward_down_cur.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.forward_down_cur.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26161.length)].join('')));

}
});

paredit_cm.core.forward_down_cur.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.forward_down_cur.cljs$core$IFn$_invoke$arity$2(cm,paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm));
});

paredit_cm.core.forward_down_cur.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
return cljs.core.trampoline.cljs$core$IFn$_invoke$arity$variadic(paredit_cm.core.fwd_down,cljs.core.array_seq([cm,cur,paredit_cm.core.char_count(cm)], 0));
});

paredit_cm.core.forward_down_cur.cljs$lang$maxFixedArity = 2;

paredit_cm.core.forward_down = (function paredit_cm$core$forward_down(var_args){
var args26168 = [];
var len__7927__auto___26171 = arguments.length;
var i__7928__auto___26172 = (0);
while(true){
if((i__7928__auto___26172 < len__7927__auto___26171)){
args26168.push((arguments[i__7928__auto___26172]));

var G__26173 = (i__7928__auto___26172 + (1));
i__7928__auto___26172 = G__26173;
continue;
} else {
}
break;
}

var G__26170 = args26168.length;
switch (G__26170) {
case 1:
return paredit_cm.core.forward_down.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.forward_down.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26168.length)].join('')));

}
});
goog.exportSymbol('paredit_cm.core.forward_down', paredit_cm.core.forward_down);

paredit_cm.core.forward_down.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.forward_down.cljs$core$IFn$_invoke$arity$2(cm,paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm));
});

paredit_cm.core.forward_down.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
var temp__4657__auto__ = paredit_cm.core.forward_down_cur.cljs$core$IFn$_invoke$arity$2(cm,cur);
if(cljs.core.truth_(temp__4657__auto__)){
var cur_SINGLEQUOTE_ = temp__4657__auto__;
return cm.setCursor(cur_SINGLEQUOTE_);
} else {
return null;
}
});

paredit_cm.core.forward_down.cljs$lang$maxFixedArity = 2;

/**
 * trampoline-able that looks for the cursor where we'd be if we went backward
 *   and then down into the prev sibling that is available. nil if there is no
 *   sibling to enter.
 */
paredit_cm.core.bkwd_down = (function paredit_cm$core$bkwd_down(cm,cur,n){
var map__26183 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$2(cm,cur);
var map__26183__$1 = ((((!((map__26183 == null)))?((((map__26183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26183.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26183):map__26183);
var left_cur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26183__$1,cljs.core.cst$kw$left_DASH_cur);
var i = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26183__$1,cljs.core.cst$kw$i);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26183__$1,cljs.core.cst$kw$start);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26183__$1,cljs.core.cst$kw$ch);
var bof = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26183__$1,cljs.core.cst$kw$bof);
if((n <= (0))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["infinite loop"], 0));

return null;
} else {
if(cljs.core.truth_(paredit_cm.core.closing_delim_QMARK_(cm,cur))){
return left_cur;
} else {
if(cljs.core.truth_(bof)){
return null;
} else {
if((ch === (0))){
return ((function (map__26183,map__26183__$1,left_cur,i,start,ch,bof){
return (function (){
var G__26185 = cm;
var G__26186 = paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,(i - (1)));
var G__26187 = (n - (1));
return (paredit_cm.core.bkwd_down.cljs$core$IFn$_invoke$arity$3 ? paredit_cm.core.bkwd_down.cljs$core$IFn$_invoke$arity$3(G__26185,G__26186,G__26187) : paredit_cm.core.bkwd_down.call(null,G__26185,G__26186,G__26187));
});
;})(map__26183,map__26183__$1,left_cur,i,start,ch,bof))
} else {
return ((function (map__26183,map__26183__$1,left_cur,i,start,ch,bof){
return (function (){
var G__26188 = cm;
var G__26189 = paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,(i - (ch - start)));
var G__26190 = (n - (1));
return (paredit_cm.core.bkwd_down.cljs$core$IFn$_invoke$arity$3 ? paredit_cm.core.bkwd_down.cljs$core$IFn$_invoke$arity$3(G__26188,G__26189,G__26190) : paredit_cm.core.bkwd_down.call(null,G__26188,G__26189,G__26190));
});
;})(map__26183,map__26183__$1,left_cur,i,start,ch,bof))

}
}
}
}
});
paredit_cm.core.backward_down = (function paredit_cm$core$backward_down(var_args){
var args26191 = [];
var len__7927__auto___26194 = arguments.length;
var i__7928__auto___26195 = (0);
while(true){
if((i__7928__auto___26195 < len__7927__auto___26194)){
args26191.push((arguments[i__7928__auto___26195]));

var G__26196 = (i__7928__auto___26195 + (1));
i__7928__auto___26195 = G__26196;
continue;
} else {
}
break;
}

var G__26193 = args26191.length;
switch (G__26193) {
case 1:
return paredit_cm.core.backward_down.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.backward_down.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26191.length)].join('')));

}
});
goog.exportSymbol('paredit_cm.core.backward_down', paredit_cm.core.backward_down);

paredit_cm.core.backward_down.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.backward_down.cljs$core$IFn$_invoke$arity$2(cm,paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm));
});

paredit_cm.core.backward_down.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
var temp__4657__auto__ = cljs.core.trampoline.cljs$core$IFn$_invoke$arity$variadic(paredit_cm.core.bkwd_down,cljs.core.array_seq([cm,cur,paredit_cm.core.char_count(cm)], 0));
if(cljs.core.truth_(temp__4657__auto__)){
var cur_SINGLEQUOTE_ = temp__4657__auto__;
return cm.setCursor(cur_SINGLEQUOTE_);
} else {
return null;
}
});

paredit_cm.core.backward_down.cljs$lang$maxFixedArity = 2;

/**
 * trampolin-able that looks for an ancestor opening bracket (parent,
 *   grandparent, etc) that has a sibling to slurp. returns a vector of the cur to
 *   the left of such a bracket, the cur to the left of the sibling that will be
 *   slurped, the string of the bracket to move. nil if there is no such anscestor
 *   that can slurp.
 */
paredit_cm.core.bkwd_slurp = (function paredit_cm$core$bkwd_slurp(cm,cur,n){
if((n >= (0))){
var ending = paredit_cm.core.skip.cljs$core$IFn$_invoke$arity$3(cm,paredit_cm.core.parent_closer_sp,cur);
var parent = paredit_cm.core.start_of_prev_sibling.cljs$core$IFn$_invoke$arity$2(cm,ending);
var sibling = paredit_cm.core.start_of_prev_sibling.cljs$core$IFn$_invoke$arity$2(cm,parent);
var bracket_cur = paredit_cm.core.forward_down_cur.cljs$core$IFn$_invoke$arity$2(cm,parent);
if((!((sibling == null))) && (!((bracket_cur == null)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent,sibling,paredit_cm.core.get_string.cljs$core$IFn$_invoke$arity$2(cm,bracket_cur)], null);
} else {
return ((function (ending,parent,sibling,bracket_cur){
return (function (){
var G__26201 = cm;
var G__26202 = parent;
var G__26203 = (n - (1));
return (paredit_cm.core.bkwd_slurp.cljs$core$IFn$_invoke$arity$3 ? paredit_cm.core.bkwd_slurp.cljs$core$IFn$_invoke$arity$3(G__26201,G__26202,G__26203) : paredit_cm.core.bkwd_slurp.call(null,G__26201,G__26202,G__26203));
});
;})(ending,parent,sibling,bracket_cur))
}
} else {
return null;
}
});
/**
 * paredit backward-slurp-sexp exposed for keymap.
 */
paredit_cm.core.backward_slurp_sexp = (function paredit_cm$core$backward_slurp_sexp(var_args){
var args26204 = [];
var len__7927__auto___26210 = arguments.length;
var i__7928__auto___26211 = (0);
while(true){
if((i__7928__auto___26211 < len__7927__auto___26210)){
args26204.push((arguments[i__7928__auto___26211]));

var G__26212 = (i__7928__auto___26211 + (1));
i__7928__auto___26211 = G__26212;
continue;
} else {
}
break;
}

var G__26206 = args26204.length;
switch (G__26206) {
case 1:
return paredit_cm.core.backward_slurp_sexp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.backward_slurp_sexp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26204.length)].join('')));

}
});
goog.exportSymbol('paredit_cm.core.backward_slurp_sexp', paredit_cm.core.backward_slurp_sexp);

paredit_cm.core.backward_slurp_sexp.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.backward_slurp_sexp.cljs$core$IFn$_invoke$arity$2(cm,paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm));
});

paredit_cm.core.backward_slurp_sexp.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
var i = paredit_cm.core.index.cljs$core$IFn$_invoke$arity$2(cm,cur);
var temp__4657__auto___26214 = cljs.core.trampoline.cljs$core$IFn$_invoke$arity$variadic(paredit_cm.core.bkwd_slurp,cljs.core.array_seq([cm,cur,paredit_cm.core.char_count(cm)], 0));
if(cljs.core.truth_(temp__4657__auto___26214)){
var vec__26207_26215 = temp__4657__auto___26214;
var parent_26216 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26207_26215,(0),null);
var sibling_26217 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26207_26215,(1),null);
var bracket_26218 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26207_26215,(2),null);
cm.replaceRange("",parent_26216,paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,(paredit_cm.core.index.cljs$core$IFn$_invoke$arity$2(cm,parent_26216) + cljs.core.count(bracket_26218))));

paredit_cm.core.insert.cljs$core$IFn$_invoke$arity$4(cm,bracket_26218,(0),sibling_26217);
} else {
}

return cm.setCursor(paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,i));
});

paredit_cm.core.backward_slurp_sexp.cljs$lang$maxFixedArity = 2;

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
var parent = paredit_cm.core.skip.cljs$core$IFn$_invoke$arity$3(cm,paredit_cm.core.parent_closer_sp,cur);
var inside = paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,(paredit_cm.core.index.cljs$core$IFn$_invoke$arity$2(cm,parent) - (1)));
var sibling = paredit_cm.core.start_of_prev_sibling.cljs$core$IFn$_invoke$arity$2(cm,inside);
var prevsib = paredit_cm.core.end_of_next_sibling.cljs$core$IFn$_invoke$arity$2(cm,paredit_cm.core.start_of_prev_sibling.cljs$core$IFn$_invoke$arity$2(cm,sibling));
var bracket_cur = (function (){var or__6814__auto__ = prevsib;
if(cljs.core.truth_(or__6814__auto__)){
return or__6814__auto__;
} else {
return paredit_cm.core.forward_down_cur.cljs$core$IFn$_invoke$arity$2(cm,paredit_cm.core.backward_up_cur.cljs$core$IFn$_invoke$arity$2(cm,sibling));
}
})();
var moved = (function (){var and__6802__auto__ = bracket_cur;
if(cljs.core.truth_(and__6802__auto__)){
return (paredit_cm.core.index.cljs$core$IFn$_invoke$arity$2(cm,bracket_cur) < paredit_cm.core.index.cljs$core$IFn$_invoke$arity$2(cm,cur));
} else {
return and__6802__auto__;
}
})();
var bracket = (cljs.core.truth_(parent)?(cljs.core.truth_(moved)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(paredit_cm.core.get_string.cljs$core$IFn$_invoke$arity$2(cm,parent)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" ")].join(''):paredit_cm.core.get_string.cljs$core$IFn$_invoke$arity$2(cm,parent)):null);
if((parent == null)){
return null;
} else {
if((bracket_cur == null)){
return ((function (parent,inside,sibling,prevsib,bracket_cur,moved,bracket){
return (function (){
var G__26222 = cm;
var G__26223 = parent;
var G__26224 = (n - (1));
return (paredit_cm.core.fwd_barf.cljs$core$IFn$_invoke$arity$3 ? paredit_cm.core.fwd_barf.cljs$core$IFn$_invoke$arity$3(G__26222,G__26223,G__26224) : paredit_cm.core.fwd_barf.call(null,G__26222,G__26223,G__26224));
});
;})(parent,inside,sibling,prevsib,bracket_cur,moved,bracket))
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
var args26225 = [];
var len__7927__auto___26231 = arguments.length;
var i__7928__auto___26232 = (0);
while(true){
if((i__7928__auto___26232 < len__7927__auto___26231)){
args26225.push((arguments[i__7928__auto___26232]));

var G__26233 = (i__7928__auto___26232 + (1));
i__7928__auto___26232 = G__26233;
continue;
} else {
}
break;
}

var G__26227 = args26225.length;
switch (G__26227) {
case 1:
return paredit_cm.core.forward_barf_sexp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.forward_barf_sexp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26225.length)].join('')));

}
});
goog.exportSymbol('paredit_cm.core.forward_barf_sexp', paredit_cm.core.forward_barf_sexp);

paredit_cm.core.forward_barf_sexp.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.forward_barf_sexp.cljs$core$IFn$_invoke$arity$2(cm,paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm));
});

paredit_cm.core.forward_barf_sexp.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
var temp__4655__auto__ = cljs.core.trampoline.cljs$core$IFn$_invoke$arity$variadic(paredit_cm.core.fwd_barf,cljs.core.array_seq([cm,cur,paredit_cm.core.char_count(cm)], 0));
if(cljs.core.truth_(temp__4655__auto__)){
var vec__26228 = temp__4655__auto__;
var parent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26228,(0),null);
var inside = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26228,(1),null);
var sibling = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26228,(2),null);
var bracket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26228,(3),null);
var moved = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26228,(4),null);
cm.replaceRange("",inside,parent);

paredit_cm.core.insert.cljs$core$IFn$_invoke$arity$4(cm,bracket,(0),sibling);

if(cljs.core.truth_(moved)){
return cm.setCursor(paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,(paredit_cm.core.index.cljs$core$IFn$_invoke$arity$2(cm,cur) + cljs.core.count(bracket))));
} else {
return cm.setCursor(cur);
}
} else {
return cm.setCursor(cur);
}
});

paredit_cm.core.forward_barf_sexp.cljs$lang$maxFixedArity = 2;

/**
 * trampoline-able that looks for an ancestor opening bracket (parent,
 *   grandparent, etc) that has a sibling to barf. returns... . nil if
 *   there is no such anscestor that can barf
 */
paredit_cm.core.bkwd_barf = (function paredit_cm$core$bkwd_barf(cm,cur,n){
if((n >= (0))){
var outside = paredit_cm.core.backward_up_cur.cljs$core$IFn$_invoke$arity$2(cm,cur);
var inside = paredit_cm.core.forward_down_cur.cljs$core$IFn$_invoke$arity$2(cm,outside);
var end_of_barfed_sexp = paredit_cm.core.end_of_next_sibling.cljs$core$IFn$_invoke$arity$2(cm,inside);
var end_of_new_first_sib = paredit_cm.core.end_of_next_sibling.cljs$core$IFn$_invoke$arity$2(cm,end_of_barfed_sexp);
var bracket_cur = paredit_cm.core.start_of_prev_sibling.cljs$core$IFn$_invoke$arity$2(cm,end_of_new_first_sib);
var bracket_text = paredit_cm.core.get_string.cljs$core$IFn$_invoke$arity$2(cm,inside);
var moved = (function (){var and__6802__auto__ = bracket_cur;
if(cljs.core.truth_(and__6802__auto__)){
return (paredit_cm.core.index.cljs$core$IFn$_invoke$arity$2(cm,cur) < paredit_cm.core.index.cljs$core$IFn$_invoke$arity$2(cm,bracket_cur));
} else {
return and__6802__auto__;
}
})();
if((outside == null)){
return null;
} else {
if((end_of_barfed_sexp == null)){
return ((function (outside,inside,end_of_barfed_sexp,end_of_new_first_sib,bracket_cur,bracket_text,moved){
return (function (){
var G__26238 = cm;
var G__26239 = outside;
var G__26240 = (n - (1));
return (paredit_cm.core.bkwd_barf.cljs$core$IFn$_invoke$arity$3 ? paredit_cm.core.bkwd_barf.cljs$core$IFn$_invoke$arity$3(G__26238,G__26239,G__26240) : paredit_cm.core.bkwd_barf.call(null,G__26238,G__26239,G__26240));
});
;})(outside,inside,end_of_barfed_sexp,end_of_new_first_sib,bracket_cur,bracket_text,moved))
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
var args26241 = [];
var len__7927__auto___26247 = arguments.length;
var i__7928__auto___26248 = (0);
while(true){
if((i__7928__auto___26248 < len__7927__auto___26247)){
args26241.push((arguments[i__7928__auto___26248]));

var G__26249 = (i__7928__auto___26248 + (1));
i__7928__auto___26248 = G__26249;
continue;
} else {
}
break;
}

var G__26243 = args26241.length;
switch (G__26243) {
case 1:
return paredit_cm.core.backward_barf_sexp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.backward_barf_sexp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26241.length)].join('')));

}
});
goog.exportSymbol('paredit_cm.core.backward_barf_sexp', paredit_cm.core.backward_barf_sexp);

paredit_cm.core.backward_barf_sexp.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.backward_barf_sexp.cljs$core$IFn$_invoke$arity$2(cm,paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm));
});

paredit_cm.core.backward_barf_sexp.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
var temp__4655__auto__ = cljs.core.trampoline.cljs$core$IFn$_invoke$arity$variadic(paredit_cm.core.bkwd_barf,cljs.core.array_seq([cm,cur,paredit_cm.core.char_count(cm)], 0));
if(cljs.core.truth_(temp__4655__auto__)){
var vec__26244 = temp__4655__auto__;
var outside = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26244,(0),null);
var inside = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26244,(1),null);
var bracket_cur = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26244,(2),null);
var bracket_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26244,(3),null);
var moved = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26244,(4),null);
paredit_cm.core.insert.cljs$core$IFn$_invoke$arity$4(cm,bracket_text,(0),bracket_cur);

cm.replaceRange("",outside,inside);

if(cljs.core.truth_(moved)){
return cm.setCursor(paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,(paredit_cm.core.index.cljs$core$IFn$_invoke$arity$2(cm,cur) - cljs.core.count(bracket_text))));
} else {
return cm.setCursor(cur);
}
} else {
return cm.setCursor(cur);
}
});

paredit_cm.core.backward_barf_sexp.cljs$lang$maxFixedArity = 2;

/**
 * split sexp for (forms like this)
 */
paredit_cm.core.split_form = (function paredit_cm$core$split_form(cm,cur){
var close_cur = paredit_cm.core.skip.cljs$core$IFn$_invoke$arity$3(cm,paredit_cm.core.parent_closer_sp,cur);
var close_bracket = paredit_cm.core.get_string.cljs$core$IFn$_invoke$arity$2(cm,close_cur);
var open_cur = paredit_cm.core.start_of_prev_sibling.cljs$core$IFn$_invoke$arity$2(cm,close_cur);
var open_bracket = paredit_cm.core.get_string.cljs$core$IFn$_invoke$arity$2(cm,paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,(paredit_cm.core.index.cljs$core$IFn$_invoke$arity$2(cm,open_cur) + (1))));
if((!((open_bracket == null))) && (!((close_bracket == null)))){
cm.setCursor(cur);

var offset = (cljs.core.truth_(paredit_cm.core.in_whitespace_QMARK_(cm))?(1):(function (){
paredit_cm.core.insert.cljs$core$IFn$_invoke$arity$2(cm," ");

paredit_cm.core.just_one_space.cljs$core$IFn$_invoke$arity$3(cm,paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm),false);

return (0);
})()
);
var cur_SINGLEQUOTE_ = paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm);
var i_SINGLEQUOTE_ = (paredit_cm.core.index.cljs$core$IFn$_invoke$arity$2(cm,cur_SINGLEQUOTE_) + offset);
var prev_sib = paredit_cm.core.start_of_prev_sibling.cljs$core$IFn$_invoke$arity$2(cm,cur_SINGLEQUOTE_);
var prev_sib_end = paredit_cm.core.end_of_next_sibling.cljs$core$IFn$_invoke$arity$2(cm,prev_sib);
var next_sib = paredit_cm.core.end_of_next_sibling.cljs$core$IFn$_invoke$arity$2(cm,cur);
var next_sib_start = paredit_cm.core.start_of_prev_sibling.cljs$core$IFn$_invoke$arity$2(cm,next_sib);
if((next_sib_start == null)){
paredit_cm.core.insert.cljs$core$IFn$_invoke$arity$2(cm,open_bracket);
} else {
paredit_cm.core.insert.cljs$core$IFn$_invoke$arity$4(cm,open_bracket,(0),next_sib_start);
}

if((prev_sib_end == null)){
paredit_cm.core.move_left(cm);

paredit_cm.core.insert.cljs$core$IFn$_invoke$arity$2(cm,close_bracket);
} else {
paredit_cm.core.insert.cljs$core$IFn$_invoke$arity$4(cm,close_bracket,(0),prev_sib_end);
}

return cm.setCursor(paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,i_SINGLEQUOTE_));
} else {
return null;
}
});
/**
 * split sexp for "strings like this"
 */
paredit_cm.core.split_string = (function paredit_cm$core$split_string(cm,cur){
var open_quote_i = paredit_cm.core.index_of_next_non(cm,paredit_cm.core.index.cljs$core$IFn$_invoke$arity$2(cm,cur)," ");
cm.replaceRange("\" \"",cur,paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,open_quote_i));

paredit_cm.core.move_left(cm);

return paredit_cm.core.move_left(cm);
});
/**
 * paredit split-sexp exposed for keymap.
 */
paredit_cm.core.split_sexp = (function paredit_cm$core$split_sexp(var_args){
var args26251 = [];
var len__7927__auto___26254 = arguments.length;
var i__7928__auto___26255 = (0);
while(true){
if((i__7928__auto___26255 < len__7927__auto___26254)){
args26251.push((arguments[i__7928__auto___26255]));

var G__26256 = (i__7928__auto___26255 + (1));
i__7928__auto___26255 = G__26256;
continue;
} else {
}
break;
}

var G__26253 = args26251.length;
switch (G__26253) {
case 1:
return paredit_cm.core.split_sexp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.split_sexp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26251.length)].join('')));

}
});
goog.exportSymbol('paredit_cm.core.split_sexp', paredit_cm.core.split_sexp);

paredit_cm.core.split_sexp.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.split_sexp.cljs$core$IFn$_invoke$arity$2(cm,paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm));
});

paredit_cm.core.split_sexp.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
if(cljs.core.truth_(paredit_cm.core.in_string_QMARK_.cljs$core$IFn$_invoke$arity$2(cm,cur))){
return paredit_cm.core.split_string(cm,cur);
} else {
return paredit_cm.core.split_form(cm,cur);
}
});

paredit_cm.core.split_sexp.cljs$lang$maxFixedArity = 2;

/**
 * paredit join-sexps exposed for keymap.
 */
paredit_cm.core.join_sexps = (function paredit_cm$core$join_sexps(var_args){
var args26258 = [];
var len__7927__auto___26261 = arguments.length;
var i__7928__auto___26262 = (0);
while(true){
if((i__7928__auto___26262 < len__7927__auto___26261)){
args26258.push((arguments[i__7928__auto___26262]));

var G__26263 = (i__7928__auto___26262 + (1));
i__7928__auto___26262 = G__26263;
continue;
} else {
}
break;
}

var G__26260 = args26258.length;
switch (G__26260) {
case 1:
return paredit_cm.core.join_sexps.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.join_sexps.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26258.length)].join('')));

}
});
goog.exportSymbol('paredit_cm.core.join_sexps', paredit_cm.core.join_sexps);

paredit_cm.core.join_sexps.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.join_sexps.cljs$core$IFn$_invoke$arity$2(cm,paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm));
});

paredit_cm.core.join_sexps.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
var left_sib = paredit_cm.core.start_of_prev_sibling.cljs$core$IFn$_invoke$arity$2(cm,cur);
var close = paredit_cm.core.end_of_next_sibling.cljs$core$IFn$_invoke$arity$2(cm,left_sib);
var right_sib = paredit_cm.core.end_of_next_sibling.cljs$core$IFn$_invoke$arity$2(cm,cur);
var open = paredit_cm.core.start_of_prev_sibling.cljs$core$IFn$_invoke$arity$2(cm,right_sib);
var open_right = (cljs.core.truth_(open)?paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,(paredit_cm.core.index.cljs$core$IFn$_invoke$arity$2(cm,open) + (1))):null);
var close_char = paredit_cm.core.get_string.cljs$core$IFn$_invoke$arity$2(cm,close);
var open_char = paredit_cm.core.get_string.cljs$core$IFn$_invoke$arity$2(cm,open_right);
if(cljs.core.truth_((function (){var and__6802__auto__ = !((open == null));
if(and__6802__auto__){
var and__6802__auto____$1 = !((close == null));
if(and__6802__auto____$1){
return paredit_cm.core.pair_QMARK_(open_char,close_char);
} else {
return and__6802__auto____$1;
}
} else {
return and__6802__auto__;
}
})())){
cm.setCursor(open);

paredit_cm.core.delete$.cljs$core$IFn$_invoke$arity$1(cm);

cm.setCursor(close);

paredit_cm.core.backspace.cljs$core$IFn$_invoke$arity$1(cm);

return cm.setCursor(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(open.line,close.line))?paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,(paredit_cm.core.index.cljs$core$IFn$_invoke$arity$2(cm,cur) - (1))):cur));
} else {
return cm.setCursor(cur);
}
});

paredit_cm.core.join_sexps.cljs$lang$maxFixedArity = 2;

/**
 * trampoline-able that looks for the top-most opening bracket for the specified
 *   location. returns the current cursor if there is no such anscestor
 */
paredit_cm.core.top_most_opener_candidate = (function paredit_cm$core$top_most_opener_candidate(cm,cur,n){
if((n >= (0))){
var temp__4655__auto__ = paredit_cm.core.backward_up_cur.cljs$core$IFn$_invoke$arity$2(cm,cur);
if(cljs.core.truth_(temp__4655__auto__)){
var parent = temp__4655__auto__;
return ((function (parent,temp__4655__auto__){
return (function (){
var G__26268 = cm;
var G__26269 = parent;
var G__26270 = (n - (1));
return (paredit_cm.core.top_most_opener_candidate.cljs$core$IFn$_invoke$arity$3 ? paredit_cm.core.top_most_opener_candidate.cljs$core$IFn$_invoke$arity$3(G__26268,G__26269,G__26270) : paredit_cm.core.top_most_opener_candidate.call(null,G__26268,G__26269,G__26270));
});
;})(parent,temp__4655__auto__))
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
var args26271 = [];
var len__7927__auto___26274 = arguments.length;
var i__7928__auto___26275 = (0);
while(true){
if((i__7928__auto___26275 < len__7927__auto___26274)){
args26271.push((arguments[i__7928__auto___26275]));

var G__26276 = (i__7928__auto___26275 + (1));
i__7928__auto___26275 = G__26276;
continue;
} else {
}
break;
}

var G__26273 = args26271.length;
switch (G__26273) {
case 1:
return paredit_cm.core.top_most_opener.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.top_most_opener.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26271.length)].join('')));

}
});

paredit_cm.core.top_most_opener.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.top_most_opener.cljs$core$IFn$_invoke$arity$2(cm,paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm));
});

paredit_cm.core.top_most_opener.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
var candidate = paredit_cm.core.top_most_opener_candidate(cm,cur,paredit_cm.core.char_count(cm));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(candidate,cur)){
return candidate;
} else {
return null;
}
});

paredit_cm.core.top_most_opener.cljs$lang$maxFixedArity = 2;

/**
 * paredit reindent-defun exposed for keymap.
 */
paredit_cm.core.reindent_defun = (function paredit_cm$core$reindent_defun(var_args){
var args26278 = [];
var len__7927__auto___26281 = arguments.length;
var i__7928__auto___26282 = (0);
while(true){
if((i__7928__auto___26282 < len__7927__auto___26281)){
args26278.push((arguments[i__7928__auto___26282]));

var G__26283 = (i__7928__auto___26282 + (1));
i__7928__auto___26282 = G__26283;
continue;
} else {
}
break;
}

var G__26280 = args26278.length;
switch (G__26280) {
case 1:
return paredit_cm.core.reindent_defun.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.reindent_defun.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26278.length)].join('')));

}
});
goog.exportSymbol('paredit_cm.core.reindent_defun', paredit_cm.core.reindent_defun);

paredit_cm.core.reindent_defun.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.reindent_defun.cljs$core$IFn$_invoke$arity$2(cm,paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm));
});

paredit_cm.core.reindent_defun.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
var open = cljs.core.trampoline.cljs$core$IFn$_invoke$arity$variadic(paredit_cm.core.top_most_opener,cljs.core.array_seq([cm,cur], 0));
var close = paredit_cm.core.end_of_next_sibling.cljs$core$IFn$_invoke$arity$2(cm,open);
var open_line = (cljs.core.truth_(open)?open.line:null);
var line_offset = (cljs.core.truth_(open)?(cur.line - open_line):null);
var line_len = cljs.core.count(cm.getLine(cur.line));
var ch = cur.ch;
if((!((open == null))) && (!((close == null)))){
paredit_cm.core.indent_lines(cm,open.line,close.line);

cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(line_offset,cm.execCommand("goLineDown"));

cm.execCommand("goLineStart");

return cm.setCursor(paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,((paredit_cm.core.index.cljs$core$IFn$_invoke$arity$1(cm) + ch) + (cljs.core.count(cm.getLine(paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm).line)) - line_len))));
} else {
return null;
}
});

paredit_cm.core.reindent_defun.cljs$lang$maxFixedArity = 2;

/**
 * forward-sexp exposed for keymap. seems part of emacs and not part
 *   of paredit itself. but including it here since this will be used in
 *   things other than emacs itself.
 */
paredit_cm.core.forward_sexp = (function paredit_cm$core$forward_sexp(var_args){
var args26285 = [];
var len__7927__auto___26288 = arguments.length;
var i__7928__auto___26289 = (0);
while(true){
if((i__7928__auto___26289 < len__7927__auto___26288)){
args26285.push((arguments[i__7928__auto___26289]));

var G__26290 = (i__7928__auto___26289 + (1));
i__7928__auto___26289 = G__26290;
continue;
} else {
}
break;
}

var G__26287 = args26285.length;
switch (G__26287) {
case 1:
return paredit_cm.core.forward_sexp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.forward_sexp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26285.length)].join('')));

}
});
goog.exportSymbol('paredit_cm.core.forward_sexp', paredit_cm.core.forward_sexp);

paredit_cm.core.forward_sexp.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.forward_sexp.cljs$core$IFn$_invoke$arity$2(cm,paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm));
});

paredit_cm.core.forward_sexp.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
var temp__4657__auto__ = paredit_cm.core.end_of_next_sibling.cljs$core$IFn$_invoke$arity$2(cm,cur);
if(cljs.core.truth_(temp__4657__auto__)){
var cur_SINGLEQUOTE_ = temp__4657__auto__;
return cm.setCursor(cur_SINGLEQUOTE_);
} else {
return null;
}
});

paredit_cm.core.forward_sexp.cljs$lang$maxFixedArity = 2;

/**
 * backward-sexp exposed for keymap. seems part of emacs and not part
 *   of paredit itself. but including it here since this will be used in
 *   things other than emacs itself.
 */
paredit_cm.core.backward_sexp = (function paredit_cm$core$backward_sexp(var_args){
var args26292 = [];
var len__7927__auto___26295 = arguments.length;
var i__7928__auto___26296 = (0);
while(true){
if((i__7928__auto___26296 < len__7927__auto___26295)){
args26292.push((arguments[i__7928__auto___26296]));

var G__26297 = (i__7928__auto___26296 + (1));
i__7928__auto___26296 = G__26297;
continue;
} else {
}
break;
}

var G__26294 = args26292.length;
switch (G__26294) {
case 1:
return paredit_cm.core.backward_sexp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.backward_sexp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26292.length)].join('')));

}
});
goog.exportSymbol('paredit_cm.core.backward_sexp', paredit_cm.core.backward_sexp);

paredit_cm.core.backward_sexp.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.backward_sexp.cljs$core$IFn$_invoke$arity$2(cm,paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm));
});

paredit_cm.core.backward_sexp.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
var temp__4657__auto__ = paredit_cm.core.start_of_prev_sibling.cljs$core$IFn$_invoke$arity$2(cm,cur);
if(cljs.core.truth_(temp__4657__auto__)){
var cur_SINGLEQUOTE_ = temp__4657__auto__;
return cm.setCursor(cur_SINGLEQUOTE_);
} else {
return null;
}
});

paredit_cm.core.backward_sexp.cljs$lang$maxFixedArity = 2;

