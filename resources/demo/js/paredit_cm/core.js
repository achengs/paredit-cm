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
var args22272 = [];
var len__7927__auto___22275 = arguments.length;
var i__7928__auto___22276 = (0);
while(true){
if((i__7928__auto___22276 < len__7927__auto___22275)){
args22272.push((arguments[i__7928__auto___22276]));

var G__22277 = (i__7928__auto___22276 + (1));
i__7928__auto___22276 = G__22277;
continue;
} else {
}
break;
}

var G__22274 = args22272.length;
switch (G__22274) {
case 1:
return paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22272.length)].join('')));

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
var args22279 = [];
var len__7927__auto___22282 = arguments.length;
var i__7928__auto___22283 = (0);
while(true){
if((i__7928__auto___22283 < len__7927__auto___22282)){
args22279.push((arguments[i__7928__auto___22283]));

var G__22284 = (i__7928__auto___22283 + (1));
i__7928__auto___22283 = G__22284;
continue;
} else {
}
break;
}

var G__22281 = args22279.length;
switch (G__22281) {
case 1:
return paredit_cm.core.index.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.index.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22279.length)].join('')));

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
var args22286 = [];
var len__7927__auto___22289 = arguments.length;
var i__7928__auto___22290 = (0);
while(true){
if((i__7928__auto___22290 < len__7927__auto___22289)){
args22286.push((arguments[i__7928__auto___22290]));

var G__22291 = (i__7928__auto___22290 + (1));
i__7928__auto___22290 = G__22291;
continue;
} else {
}
break;
}

var G__22288 = args22286.length;
switch (G__22288) {
case 1:
return paredit_cm.core.get_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.get_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22286.length)].join('')));

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
var args22293 = [];
var len__7927__auto___22296 = arguments.length;
var i__7928__auto___22297 = (0);
while(true){
if((i__7928__auto___22297 < len__7927__auto___22296)){
args22293.push((arguments[i__7928__auto___22297]));

var G__22298 = (i__7928__auto___22297 + (1));
i__7928__auto___22297 = G__22298;
continue;
} else {
}
break;
}

var G__22295 = args22293.length;
switch (G__22295) {
case 1:
return paredit_cm.core.get_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.get_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22293.length)].join('')));

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
var args22300 = [];
var len__7927__auto___22303 = arguments.length;
var i__7928__auto___22304 = (0);
while(true){
if((i__7928__auto___22304 < len__7927__auto___22303)){
args22300.push((arguments[i__7928__auto___22304]));

var G__22305 = (i__7928__auto___22304 + (1));
i__7928__auto___22304 = G__22305;
continue;
} else {
}
break;
}

var G__22302 = args22300.length;
switch (G__22302) {
case 1:
return paredit_cm.core.line_length.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.line_length.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22300.length)].join('')));

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
var args22307 = [];
var len__7927__auto___22310 = arguments.length;
var i__7928__auto___22311 = (0);
while(true){
if((i__7928__auto___22311 < len__7927__auto___22310)){
args22307.push((arguments[i__7928__auto___22311]));

var G__22312 = (i__7928__auto___22311 + (1));
i__7928__auto___22311 = G__22312;
continue;
} else {
}
break;
}

var G__22309 = args22307.length;
switch (G__22309) {
case 1:
return paredit_cm.core.last_cur.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.last_cur.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22307.length)].join('')));

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
var args22314 = [];
var len__7927__auto___22317 = arguments.length;
var i__7928__auto___22318 = (0);
while(true){
if((i__7928__auto___22318 < len__7927__auto___22317)){
args22314.push((arguments[i__7928__auto___22318]));

var G__22319 = (i__7928__auto___22318 + (1));
i__7928__auto___22318 = G__22319;
continue;
} else {
}
break;
}

var G__22316 = args22314.length;
switch (G__22316) {
case 1:
return paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22314.length)].join('')));

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
var args22321 = [];
var len__7927__auto___22326 = arguments.length;
var i__7928__auto___22327 = (0);
while(true){
if((i__7928__auto___22327 < len__7927__auto___22326)){
args22321.push((arguments[i__7928__auto___22327]));

var G__22328 = (i__7928__auto___22327 + (1));
i__7928__auto___22327 = G__22328;
continue;
} else {
}
break;
}

var G__22323 = args22321.length;
switch (G__22323) {
case 2:
return paredit_cm.core.in_escaped_char_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return paredit_cm.core.in_escaped_char_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22321.length)].join('')));

}
});

paredit_cm.core.in_escaped_char_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
return paredit_cm.core.in_escaped_char_QMARK_.cljs$core$IFn$_invoke$arity$3(cm,cur,(0));
});

paredit_cm.core.in_escaped_char_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (cm,cur,offset){
var map__22324 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$2(cm,cur);
var map__22324__$1 = ((((!((map__22324 == null)))?((((map__22324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22324.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22324):map__22324);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22324__$1,cljs.core.cst$kw$ch);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22324__$1,cljs.core.cst$kw$start);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22324__$1,cljs.core.cst$kw$end);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22324__$1,cljs.core.cst$kw$type);
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
var args22330 = [];
var len__7927__auto___22335 = arguments.length;
var i__7928__auto___22336 = (0);
while(true){
if((i__7928__auto___22336 < len__7927__auto___22335)){
args22330.push((arguments[i__7928__auto___22336]));

var G__22337 = (i__7928__auto___22336 + (1));
i__7928__auto___22336 = G__22337;
continue;
} else {
}
break;
}

var G__22332 = args22330.length;
switch (G__22332) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22330.length)].join('')));

}
});

paredit_cm.core.insert.cljs$core$IFn$_invoke$arity$2 = (function (cm,text){
return paredit_cm.core.insert.cljs$core$IFn$_invoke$arity$3(cm,text,(0));
});

paredit_cm.core.insert.cljs$core$IFn$_invoke$arity$3 = (function (cm,text,offset){
return paredit_cm.core.insert.cljs$core$IFn$_invoke$arity$4(cm,text,offset,paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm));
});

paredit_cm.core.insert.cljs$core$IFn$_invoke$arity$4 = (function (cm,text,offset,cur){
var map__22333 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$2(cm,cur);
var map__22333__$1 = ((((!((map__22333 == null)))?((((map__22333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22333.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22333):map__22333);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22333__$1,cljs.core.cst$kw$line);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22333__$1,cljs.core.cst$kw$ch);
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
var args22339 = [];
var len__7927__auto___22344 = arguments.length;
var i__7928__auto___22345 = (0);
while(true){
if((i__7928__auto___22345 < len__7927__auto___22344)){
args22339.push((arguments[i__7928__auto___22345]));

var G__22346 = (i__7928__auto___22345 + (1));
i__7928__auto___22345 = G__22346;
continue;
} else {
}
break;
}

var G__22341 = args22339.length;
switch (G__22341) {
case 1:
return paredit_cm.core.open_round.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.open_round.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22339.length)].join('')));

}
});
goog.exportSymbol('paredit_cm.core.open_round', paredit_cm.core.open_round);

paredit_cm.core.open_round.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.open_round.cljs$core$IFn$_invoke$arity$2(cm,"(");
});

paredit_cm.core.open_round.cljs$core$IFn$_invoke$arity$2 = (function (cm,c){
var map__22342 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$1(cm);
var map__22342__$1 = ((((!((map__22342 == null)))?((((map__22342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22342.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22342):map__22342);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22342__$1,cljs.core.cst$kw$type);
var left_char = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22342__$1,cljs.core.cst$kw$left_DASH_char);
var right_char = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22342__$1,cljs.core.cst$kw$right_DASH_char);
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
var map__22350 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$2(cm,cur);
var map__22350__$1 = ((((!((map__22350 == null)))?((((map__22350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22350.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22350):map__22350);
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22350__$1,cljs.core.cst$kw$string);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22350__$1,cljs.core.cst$kw$type);
var top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22350__$1,cljs.core.cst$kw$top);
var eof = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22350__$1,cljs.core.cst$kw$eof);
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
var map__22354 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$2(cm,cur);
var map__22354__$1 = ((((!((map__22354 == null)))?((((map__22354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22354.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22354):map__22354);
var i = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22354__$1,cljs.core.cst$kw$i);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22354__$1,cljs.core.cst$kw$start);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22354__$1,cljs.core.cst$kw$ch);
return paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,(i - (ch - start)));
});
/**
 * returns the cursor for the end of the current token
 */
paredit_cm.core.token_end = (function paredit_cm$core$token_end(var_args){
var args22356 = [];
var len__7927__auto___22361 = arguments.length;
var i__7928__auto___22362 = (0);
while(true){
if((i__7928__auto___22362 < len__7927__auto___22361)){
args22356.push((arguments[i__7928__auto___22362]));

var G__22363 = (i__7928__auto___22362 + (1));
i__7928__auto___22362 = G__22363;
continue;
} else {
}
break;
}

var G__22358 = args22356.length;
switch (G__22358) {
case 2:
return paredit_cm.core.token_end.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return paredit_cm.core.token_end.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22356.length)].join('')));

}
});

paredit_cm.core.token_end.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
return paredit_cm.core.token_end.cljs$core$IFn$_invoke$arity$3(cm,cur,(0));
});

paredit_cm.core.token_end.cljs$core$IFn$_invoke$arity$3 = (function (cm,cur,offset){
var map__22359 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$2(cm,cur);
var map__22359__$1 = ((((!((map__22359 == null)))?((((map__22359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22359.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22359):map__22359);
var i = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22359__$1,cljs.core.cst$kw$i);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22359__$1,cljs.core.cst$kw$end);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22359__$1,cljs.core.cst$kw$ch);
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
var map__22373 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$2(cm,cur);
var map__22373__$1 = ((((!((map__22373 == null)))?((((map__22373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22373.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22373):map__22373);
var left_cur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22373__$1,cljs.core.cst$kw$left_DASH_cur);
var i = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22373__$1,cljs.core.cst$kw$i);
var result = (sp.cljs$core$IFn$_invoke$arity$3 ? sp.cljs$core$IFn$_invoke$arity$3(cm,cur,state) : sp.call(null,cm,cur,state));
var G__22375 = (((result instanceof cljs.core.Keyword))?result.fqn:null);
switch (G__22375) {
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
return ((function (next_cur,G__22375,map__22373,map__22373__$1,left_cur,i,result){
return (function (){
var G__22376 = cm;
var G__22377 = next_cur;
var G__22378 = sp;
var G__22379 = result;
var G__22380 = (n - (1));
return (paredit_cm.core.skip_trampoline_helper.cljs$core$IFn$_invoke$arity$5 ? paredit_cm.core.skip_trampoline_helper.cljs$core$IFn$_invoke$arity$5(G__22376,G__22377,G__22378,G__22379,G__22380) : paredit_cm.core.skip_trampoline_helper.call(null,G__22376,G__22377,G__22378,G__22379,G__22380));
});
;})(next_cur,G__22375,map__22373,map__22373__$1,left_cur,i,result))

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
var map__22390 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$2(cm,cur);
var map__22390__$1 = ((((!((map__22390 == null)))?((((map__22390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22390.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22390):map__22390);
var left_cur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22390__$1,cljs.core.cst$kw$left_DASH_cur);
var right_cur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22390__$1,cljs.core.cst$kw$right_DASH_cur);
var i = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22390__$1,cljs.core.cst$kw$i);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22390__$1,cljs.core.cst$kw$start);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22390__$1,cljs.core.cst$kw$ch);
var result = (sp.cljs$core$IFn$_invoke$arity$3 ? sp.cljs$core$IFn$_invoke$arity$3(cm,cur,state) : sp.call(null,cm,cur,state));
var G__22392 = (((result instanceof cljs.core.Keyword))?result.fqn:null);
switch (G__22392) {
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
return ((function (next_cur,G__22392,map__22390,map__22390__$1,left_cur,right_cur,i,start,ch,result){
return (function (){
var G__22393 = cm;
var G__22394 = next_cur;
var G__22395 = sp;
var G__22396 = result;
var G__22397 = (n - (1));
return (paredit_cm.core.skip_trampoline_helper_left.cljs$core$IFn$_invoke$arity$5 ? paredit_cm.core.skip_trampoline_helper_left.cljs$core$IFn$_invoke$arity$5(G__22393,G__22394,G__22395,G__22396,G__22397) : paredit_cm.core.skip_trampoline_helper_left.call(null,G__22393,G__22394,G__22395,G__22396,G__22397));
});
;})(next_cur,G__22392,map__22390,map__22390__$1,left_cur,right_cur,i,start,ch,result))

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
var args22399 = [];
var len__7927__auto___22402 = arguments.length;
var i__7928__auto___22403 = (0);
while(true){
if((i__7928__auto___22403 < len__7927__auto___22402)){
args22399.push((arguments[i__7928__auto___22403]));

var G__22404 = (i__7928__auto___22403 + (1));
i__7928__auto___22403 = G__22404;
continue;
} else {
}
break;
}

var G__22401 = args22399.length;
switch (G__22401) {
case 2:
return paredit_cm.core.skip.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return paredit_cm.core.skip.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22399.length)].join('')));

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
var args22406 = [];
var len__7927__auto___22411 = arguments.length;
var i__7928__auto___22412 = (0);
while(true){
if((i__7928__auto___22412 < len__7927__auto___22411)){
args22406.push((arguments[i__7928__auto___22412]));

var G__22413 = (i__7928__auto___22412 + (1));
i__7928__auto___22412 = G__22413;
continue;
} else {
}
break;
}

var G__22408 = args22406.length;
switch (G__22408) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22406.length)].join('')));

}
});

paredit_cm.core.delete_whitespace.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.delete_whitespace.cljs$core$IFn$_invoke$arity$3(cm,paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm),true);
});

paredit_cm.core.delete_whitespace.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
return paredit_cm.core.delete_whitespace.cljs$core$IFn$_invoke$arity$3(cm,cur,true);
});

paredit_cm.core.delete_whitespace.cljs$core$IFn$_invoke$arity$3 = (function (cm,cur,indent_after){
var map__22409 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$2(cm,cur);
var map__22409__$1 = ((((!((map__22409 == null)))?((((map__22409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22409.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22409):map__22409);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22409__$1,cljs.core.cst$kw$start);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22409__$1,cljs.core.cst$kw$end);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22409__$1,cljs.core.cst$kw$line);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22409__$1,cljs.core.cst$kw$ch);
var i = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22409__$1,cljs.core.cst$kw$i);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22409__$1,cljs.core.cst$kw$type);
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
var args22415 = [];
var len__7927__auto___22420 = arguments.length;
var i__7928__auto___22421 = (0);
while(true){
if((i__7928__auto___22421 < len__7927__auto___22420)){
args22415.push((arguments[i__7928__auto___22421]));

var G__22422 = (i__7928__auto___22421 + (1));
i__7928__auto___22421 = G__22422;
continue;
} else {
}
break;
}

var G__22417 = args22415.length;
switch (G__22417) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22415.length)].join('')));

}
});

paredit_cm.core.just_one_space.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.just_one_space.cljs$core$IFn$_invoke$arity$3(cm,paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm),true);
});

paredit_cm.core.just_one_space.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
return paredit_cm.core.just_one_space.cljs$core$IFn$_invoke$arity$3(cm,cur,true);
});

paredit_cm.core.just_one_space.cljs$core$IFn$_invoke$arity$3 = (function (cm,cur,indent_after){
var map__22418 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$2(cm,cur);
var map__22418__$1 = ((((!((map__22418 == null)))?((((map__22418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22418.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22418):map__22418);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22418__$1,cljs.core.cst$kw$start);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22418__$1,cljs.core.cst$kw$end);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22418__$1,cljs.core.cst$kw$line);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22418__$1,cljs.core.cst$kw$ch);
var i = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22418__$1,cljs.core.cst$kw$i);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22418__$1,cljs.core.cst$kw$type);
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
var args22424 = [];
var len__7927__auto___22429 = arguments.length;
var i__7928__auto___22430 = (0);
while(true){
if((i__7928__auto___22430 < len__7927__auto___22429)){
args22424.push((arguments[i__7928__auto___22430]));

var G__22431 = (i__7928__auto___22430 + (1));
i__7928__auto___22430 = G__22431;
continue;
} else {
}
break;
}

var G__22426 = args22424.length;
switch (G__22426) {
case 1:
return paredit_cm.core.close_round.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.close_round.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22424.length)].join('')));

}
});
goog.exportSymbol('paredit_cm.core.close_round', paredit_cm.core.close_round);

paredit_cm.core.close_round.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.close_round.cljs$core$IFn$_invoke$arity$2(cm,")");
});

paredit_cm.core.close_round.cljs$core$IFn$_invoke$arity$2 = (function (cm,s){
var map__22427 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$1(cm);
var map__22427__$1 = ((((!((map__22427 == null)))?((((map__22427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22427.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22427):map__22427);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22427__$1,cljs.core.cst$kw$type);
var left_char = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22427__$1,cljs.core.cst$kw$left_DASH_char);
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
var args22433 = [];
var len__7927__auto___22436 = arguments.length;
var i__7928__auto___22437 = (0);
while(true){
if((i__7928__auto___22437 < len__7927__auto___22436)){
args22433.push((arguments[i__7928__auto___22437]));

var G__22438 = (i__7928__auto___22437 + (1));
i__7928__auto___22437 = G__22438;
continue;
} else {
}
break;
}

var G__22435 = args22433.length;
switch (G__22435) {
case 1:
return paredit_cm.core.close_round_and_newline.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.close_round_and_newline.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22433.length)].join('')));

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
var map__22442 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$1(cm);
var map__22442__$1 = ((((!((map__22442 == null)))?((((map__22442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22442.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22442):map__22442);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22442__$1,cljs.core.cst$kw$type);
var left_char = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22442__$1,cljs.core.cst$kw$left_DASH_char);
var right_char = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22442__$1,cljs.core.cst$kw$right_DASH_char);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22442__$1,cljs.core.cst$kw$ch);
var cur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22442__$1,cljs.core.cst$kw$cur);
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
var map__22446 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$2(cm,cur);
var map__22446__$1 = ((((!((map__22446 == null)))?((((map__22446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22446.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22446):map__22446);
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22446__$1,cljs.core.cst$kw$string);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22446__$1,cljs.core.cst$kw$type);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22446__$1,cljs.core.cst$kw$start);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22446__$1,cljs.core.cst$kw$end);
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22446__$1,cljs.core.cst$kw$mode);
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,"string")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(end - start))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(string,"\"")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,"string"));
});
/**
 * returns true if just to the right of a closing doublequote of a string.
 */
paredit_cm.core.end_of_a_string_QMARK_ = (function paredit_cm$core$end_of_a_string_QMARK_(cm,cur){
var map__22450 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$2(cm,cur);
var map__22450__$1 = ((((!((map__22450 == null)))?((((map__22450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22450.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22450):map__22450);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22450__$1,cljs.core.cst$kw$type);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22450__$1,cljs.core.cst$kw$ch);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22450__$1,cljs.core.cst$kw$end);
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22450__$1,cljs.core.cst$kw$string);
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22450__$1,cljs.core.cst$kw$mode);
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
var map__22454 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$2(cm,cur);
var map__22454__$1 = ((((!((map__22454 == null)))?((((map__22454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22454.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22454):map__22454);
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22454__$1,cljs.core.cst$kw$string);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22454__$1,cljs.core.cst$kw$type);
var eof = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22454__$1,cljs.core.cst$kw$eof);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22454__$1,cljs.core.cst$kw$ch);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22454__$1,cljs.core.cst$kw$end);
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
var args22456 = [];
var len__7927__auto___22459 = arguments.length;
var i__7928__auto___22460 = (0);
while(true){
if((i__7928__auto___22460 < len__7927__auto___22459)){
args22456.push((arguments[i__7928__auto___22460]));

var G__22461 = (i__7928__auto___22460 + (1));
i__7928__auto___22460 = G__22461;
continue;
} else {
}
break;
}

var G__22458 = args22456.length;
switch (G__22458) {
case 1:
return paredit_cm.core.end_of_next_sibling.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.end_of_next_sibling.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22456.length)].join('')));

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
var map__22465 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$2(cm,cur);
var map__22465__$1 = ((((!((map__22465 == null)))?((((map__22465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22465.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22465):map__22465);
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22465__$1,cljs.core.cst$kw$string);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22465__$1,cljs.core.cst$kw$type);
var bof = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22465__$1,cljs.core.cst$kw$bof);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22465__$1,cljs.core.cst$kw$ch);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22465__$1,cljs.core.cst$kw$start);
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
var args22467 = [];
var len__7927__auto___22470 = arguments.length;
var i__7928__auto___22471 = (0);
while(true){
if((i__7928__auto___22471 < len__7927__auto___22470)){
args22467.push((arguments[i__7928__auto___22471]));

var G__22472 = (i__7928__auto___22471 + (1));
i__7928__auto___22471 = G__22472;
continue;
} else {
}
break;
}

var G__22469 = args22467.length;
switch (G__22469) {
case 1:
return paredit_cm.core.start_of_prev_sibling.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.start_of_prev_sibling.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22467.length)].join('')));

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
var map__22476 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$1(cm);
var map__22476__$1 = ((((!((map__22476 == null)))?((((map__22476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22476.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22476):map__22476);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22476__$1,cljs.core.cst$kw$type);
var i = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22476__$1,cljs.core.cst$kw$i);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22476__$1,cljs.core.cst$kw$ch);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22476__$1,cljs.core.cst$kw$end);
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
var args22478 = [];
var len__7927__auto___22481 = arguments.length;
var i__7928__auto___22482 = (0);
while(true){
if((i__7928__auto___22482 < len__7927__auto___22481)){
args22478.push((arguments[i__7928__auto___22482]));

var G__22483 = (i__7928__auto___22482 + (1));
i__7928__auto___22482 = G__22483;
continue;
} else {
}
break;
}

var G__22480 = args22478.length;
switch (G__22480) {
case 1:
return paredit_cm.core.in_string_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.in_string_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22478.length)].join('')));

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
var map__22487 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$1(cm);
var map__22487__$1 = ((((!((map__22487 == null)))?((((map__22487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22487.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22487):map__22487);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22487__$1,cljs.core.cst$kw$type);
var eof = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22487__$1,cljs.core.cst$kw$eof);
var cur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22487__$1,cljs.core.cst$kw$cur);
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
var map__22491 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$2(cm,cur);
var map__22491__$1 = ((((!((map__22491 == null)))?((((map__22491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22491.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22491):map__22491);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22491__$1,cljs.core.cst$kw$type);
var right_cur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22491__$1,cljs.core.cst$kw$right_DASH_cur);
var types_SINGLEQUOTE_ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(types,type);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cur,c2)){
return types_SINGLEQUOTE_;
} else {
var G__22493 = types_SINGLEQUOTE_;
var G__22494 = right_cur;
types = G__22493;
cur = G__22494;
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
var vec__22498 = temp__4657__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22498,(0),null);
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22498,(1),null);
var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22498,(2),null);
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
var cmnt = clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22501_SHARP_){
return clojure.string.replace(p1__22501_SHARP_,/^/,";; ");
}),clojure.string.split_lines(s)));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cmnt),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(postscript)].join('');
});
/**
 * removes leading whitespace and semicolons from lines in 's'
 */
paredit_cm.core.uncomment = (function paredit_cm$core$uncomment(s){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22502_SHARP_){
return clojure.string.replace(p1__22502_SHARP_,/^\s*;+/,"");
}),clojure.string.split_lines(s)));
});
/**
 * indents lines from a to z (line numbers). assumes a is before z.
 */
paredit_cm.core.indent_lines = (function paredit_cm$core$indent_lines(cm,a,z){
var seq__22507 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(a,(z + (1))));
var chunk__22508 = null;
var count__22509 = (0);
var i__22510 = (0);
while(true){
if((i__22510 < count__22509)){
var line = chunk__22508.cljs$core$IIndexed$_nth$arity$2(null,i__22510);
cm.indentLine(line);

var G__22511 = seq__22507;
var G__22512 = chunk__22508;
var G__22513 = count__22509;
var G__22514 = (i__22510 + (1));
seq__22507 = G__22511;
chunk__22508 = G__22512;
count__22509 = G__22513;
i__22510 = G__22514;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__22507);
if(temp__4657__auto__){
var seq__22507__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22507__$1)){
var c__7633__auto__ = cljs.core.chunk_first(seq__22507__$1);
var G__22515 = cljs.core.chunk_rest(seq__22507__$1);
var G__22516 = c__7633__auto__;
var G__22517 = cljs.core.count(c__7633__auto__);
var G__22518 = (0);
seq__22507 = G__22515;
chunk__22508 = G__22516;
count__22509 = G__22517;
i__22510 = G__22518;
continue;
} else {
var line = cljs.core.first(seq__22507__$1);
cm.indentLine(line);

var G__22519 = cljs.core.next(seq__22507__$1);
var G__22520 = null;
var G__22521 = (0);
var G__22522 = (0);
seq__22507 = G__22519;
chunk__22508 = G__22520;
count__22509 = G__22521;
i__22510 = G__22522;
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
var vec__22526 = temp__4657__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22526,(0),null);
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22526,(1),null);
var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22526,(2),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22526,(3),null);
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
var vec__22532 = paredit_cm.core.selection_info(cm);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22532,(0),null);
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22532,(1),null);
var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22532,(2),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22532,(3),null);
var l1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22532,(4),null);
var l2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22532,(5),null);
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
return (function (p1__22535_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(";",p1__22535_SHARP_);
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
return (function (p1__22536_SHARP_){
return ((p1__22536_SHARP_.end <= ch)) || ((p1__22536_SHARP_.type == null));
});})(cur,toks,ch))
,toks);
var and__6802__auto__ = cljs.core.seq(toks);
if(and__6802__auto__){
var and__6802__auto____$1 = cljs.core.every_QMARK_(cljs.core.true_QMARK_,tests);
if(and__6802__auto____$1){
return cljs.core.some(((function (and__6802__auto____$1,and__6802__auto__,cur,toks,ch,tests){
return (function (p1__22537_SHARP_){
return !((p1__22537_SHARP_.type == null));
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
var args22539 = [];
var len__7927__auto___22542 = arguments.length;
var i__7928__auto___22543 = (0);
while(true){
if((i__7928__auto___22543 < len__7927__auto___22542)){
args22539.push((arguments[i__7928__auto___22543]));

var G__22544 = (i__7928__auto___22543 + (1));
i__7928__auto___22543 = G__22544;
continue;
} else {
}
break;
}

var G__22541 = args22539.length;
switch (G__22541) {
case 1:
return paredit_cm.core.move_to_end_of_line.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.move_to_end_of_line.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22539.length)].join('')));

}
});

paredit_cm.core.move_to_end_of_line.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.move_to_end_of_line.cljs$core$IFn$_invoke$arity$2(cm,paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm));
});

paredit_cm.core.move_to_end_of_line.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
var end = cljs.core.last(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__22538_SHARP_){
return (p1__22538_SHARP_.type == null);
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
return cljs.core.every_QMARK_((function (p1__22546_SHARP_){
return (p1__22546_SHARP_.type == null);
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
var map__22549 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$1(cm);
var map__22549__$1 = ((((!((map__22549 == null)))?((((map__22549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22549.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22549):map__22549);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22549__$1,cljs.core.cst$kw$type);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22549__$1,cljs.core.cst$kw$start);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22549__$1,cljs.core.cst$kw$end);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22549__$1,cljs.core.cst$kw$ch);
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
return (function (p1__22551_SHARP_){
return (!((p1__22551_SHARP_.type == null))) && (((p1__22551_SHARP_.end <= ch)) || (((p1__22551_SHARP_.start < ch)) && ((ch < p1__22551_SHARP_.end))));
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
var args22553 = [];
var len__7927__auto___22556 = arguments.length;
var i__7928__auto___22557 = (0);
while(true){
if((i__7928__auto___22557 < len__7927__auto___22556)){
args22553.push((arguments[i__7928__auto___22557]));

var G__22558 = (i__7928__auto___22557 + (1));
i__7928__auto___22557 = G__22558;
continue;
} else {
}
break;
}

var G__22555 = args22553.length;
switch (G__22555) {
case 1:
return paredit_cm.core.backspace.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.backspace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22553.length)].join('')));

}
});

paredit_cm.core.backspace.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.backspace.cljs$core$IFn$_invoke$arity$2(cm,(1));
});

paredit_cm.core.backspace.cljs$core$IFn$_invoke$arity$2 = (function (cm,n){
var _n = (function (p1__22552_SHARP_){
return (p1__22552_SHARP_ - n);
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
var map__22562 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$2(cm,cur);
var map__22562__$1 = ((((!((map__22562 == null)))?((((map__22562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22562.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22562):map__22562);
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22562__$1,cljs.core.cst$kw$string);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22562__$1,cljs.core.cst$kw$type);
var left_char = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22562__$1,cljs.core.cst$kw$left_DASH_char);
var right_cur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22562__$1,cljs.core.cst$kw$right_DASH_cur);
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
var args22564 = [];
var len__7927__auto___22569 = arguments.length;
var i__7928__auto___22570 = (0);
while(true){
if((i__7928__auto___22570 < len__7927__auto___22569)){
args22564.push((arguments[i__7928__auto___22570]));

var G__22571 = (i__7928__auto___22570 + (1));
i__7928__auto___22570 = G__22571;
continue;
} else {
}
break;
}

var G__22566 = args22564.length;
switch (G__22566) {
case 2:
return paredit_cm.core.opening_doublequote_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return paredit_cm.core.opening_doublequote_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22564.length)].join('')));

}
});

paredit_cm.core.opening_doublequote_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
var map__22567 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$2(cm,cur);
var map__22567__$1 = ((((!((map__22567 == null)))?((((map__22567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22567.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22567):map__22567);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22567__$1,cljs.core.cst$kw$type);
var left_char = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22567__$1,cljs.core.cst$kw$left_DASH_char);
var right_cur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22567__$1,cljs.core.cst$kw$right_DASH_cur);
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
var map__22575 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$2(cm,cur);
var map__22575__$1 = ((((!((map__22575 == null)))?((((map__22575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22575.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22575):map__22575);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22575__$1,cljs.core.cst$kw$type);
var left_char = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22575__$1,cljs.core.cst$kw$left_DASH_char);
var right_cur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22575__$1,cljs.core.cst$kw$right_DASH_cur);
var right_type = paredit_cm.core.get_type.cljs$core$IFn$_invoke$arity$2(cm,right_cur);
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,"string")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\"",left_char)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(right_type,"string"));
});
/**
 * returns true for opening brackets and for opening double-quotes
 */
paredit_cm.core.opening_delim_QMARK_ = (function paredit_cm$core$opening_delim_QMARK_(cm,cur){
var map__22579 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$2(cm,cur);
var map__22579__$1 = ((((!((map__22579 == null)))?((((map__22579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22579.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22579):map__22579);
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22579__$1,cljs.core.cst$kw$string);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22579__$1,cljs.core.cst$kw$type);
var left_char = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22579__$1,cljs.core.cst$kw$left_DASH_char);
var right_cur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22579__$1,cljs.core.cst$kw$right_DASH_cur);
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
var map__22583 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$2(cm,cur);
var map__22583__$1 = ((((!((map__22583 == null)))?((((map__22583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22583.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22583):map__22583);
var left_char = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22583__$1,cljs.core.cst$kw$left_DASH_char);
var right_char = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22583__$1,cljs.core.cst$kw$right_DASH_char);
var right_cur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22583__$1,cljs.core.cst$kw$right_DASH_cur);
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
var map__22587 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$1(cm);
var map__22587__$1 = ((((!((map__22587 == null)))?((((map__22587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22587.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22587):map__22587);
var left_char = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22587__$1,cljs.core.cst$kw$left_DASH_char);
var right_char = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22587__$1,cljs.core.cst$kw$right_DASH_char);
var cur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22587__$1,cljs.core.cst$kw$cur);
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
var args22590 = [];
var len__7927__auto___22593 = arguments.length;
var i__7928__auto___22594 = (0);
while(true){
if((i__7928__auto___22594 < len__7927__auto___22593)){
args22590.push((arguments[i__7928__auto___22594]));

var G__22595 = (i__7928__auto___22594 + (1));
i__7928__auto___22594 = G__22595;
continue;
} else {
}
break;
}

var G__22592 = args22590.length;
switch (G__22592) {
case 1:
return paredit_cm.core.delete$.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.delete$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22590.length)].join('')));

}
});

paredit_cm.core.delete$.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.delete$.cljs$core$IFn$_invoke$arity$2(cm,(1));
});

paredit_cm.core.delete$.cljs$core$IFn$_invoke$arity$2 = (function (cm,n){
var _PLUS_n = (function (p1__22589_SHARP_){
return (p1__22589_SHARP_ + n);
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
var map__22599 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$2(cm,cur);
var map__22599__$1 = ((((!((map__22599 == null)))?((((map__22599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22599.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22599):map__22599);
var info = map__22599__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22599__$1,cljs.core.cst$kw$type);
var left_char = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22599__$1,cljs.core.cst$kw$left_DASH_char);
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
var map__22603 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$1(cm);
var map__22603__$1 = ((((!((map__22603 == null)))?((((map__22603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22603.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22603):map__22603);
var info = map__22603__$1;
var cur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22603__$1,cljs.core.cst$kw$cur);
var right_cur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22603__$1,cljs.core.cst$kw$right_DASH_cur);
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
if(cljs.core.truth_(cm.somethingSelected())){
return paredit_cm.core.delete_selection(cm);
} else {
if(cljs.core.truth_(paredit_cm.core.in_escaped_char_QMARK_.cljs$core$IFn$_invoke$arity$2(cm,cur))){
return paredit_cm.core.delete_pair(cm);
} else {
if(cljs.core.truth_(paredit_cm.core.escaped_char_to_left_QMARK_(cm,cur))){
return paredit_cm.core.backspace.cljs$core$IFn$_invoke$arity$2(cm,(2));
} else {
if(cljs.core.truth_(paredit_cm.core.opening_delim_for_non_empty_pair_QMARK_(cm))){
return cljs.core.cst$kw$do_DASH_nothing;
} else {
if(cljs.core.truth_(paredit_cm.core.opening_delim_for_empty_pair_QMARK_(cm,cur))){
return paredit_cm.core.delete_pair(cm);
} else {
if(cljs.core.truth_(paredit_cm.core.closing_delim_QMARK_(cm,cur))){
return paredit_cm.core.move_left(cm);
} else {
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
var args22605 = [];
var len__7927__auto___22610 = arguments.length;
var i__7928__auto___22611 = (0);
while(true){
if((i__7928__auto___22611 < len__7927__auto___22610)){
args22605.push((arguments[i__7928__auto___22611]));

var G__22612 = (i__7928__auto___22611 + (1));
i__7928__auto___22611 = G__22612;
continue;
} else {
}
break;
}

var G__22607 = args22605.length;
switch (G__22607) {
case 1:
return paredit_cm.core.go_to_end_of_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.go_to_end_of_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22605.length)].join('')));

}
});

paredit_cm.core.go_to_end_of_string.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.go_to_end_of_string.cljs$core$IFn$_invoke$arity$2(cm,paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm));
});

paredit_cm.core.go_to_end_of_string.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
var map__22608 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$2(cm,cur);
var map__22608__$1 = ((((!((map__22608 == null)))?((((map__22608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22608.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22608):map__22608);
var left_char = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22608__$1,cljs.core.cst$kw$left_DASH_char);
var right_cur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22608__$1,cljs.core.cst$kw$right_DASH_cur);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22608__$1,cljs.core.cst$kw$type);
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22608__$1,cljs.core.cst$kw$string);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22608__$1,cljs.core.cst$kw$ch);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22608__$1,cljs.core.cst$kw$end);
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
return (function (p1__22614_SHARP_){
return ((p1__22614_SHARP_.end <= ch)) || (((p1__22614_SHARP_.type == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("comment",p1__22614_SHARP_.type)));
});})(toks,ch))
,toks);
var and__6802__auto__ = cljs.core.seq(toks);
if(and__6802__auto__){
var and__6802__auto____$1 = cljs.core.every_QMARK_(cljs.core.true_QMARK_,tests);
if(and__6802__auto____$1){
return cljs.core.some(((function (and__6802__auto____$1,and__6802__auto__,toks,ch,tests){
return (function (p1__22615_SHARP_){
return !((p1__22615_SHARP_.type == null));
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
var vec__22619 = paredit_cm.core.rest_of_siblings(cm);
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22619,(0),null);
var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22619,(1),null);
var c1__$1 = paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm);
if(cljs.core.truth_(c2)){
return cm.setSelection(c1__$1,c2);
} else {
return null;
}
});
paredit_cm.core.kill_from_to = (function paredit_cm$core$kill_from_to(cm,i,j){
var cur = paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,i);
var G__22625_22628 = cm;
var G__22626_22629 = cur;
var G__22627_22630 = paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,j);
(CodeMirror.emacs.kill.cljs$core$IFn$_invoke$arity$3 ? CodeMirror.emacs.kill.cljs$core$IFn$_invoke$arity$3(G__22625_22628,G__22626_22629,G__22627_22630) : CodeMirror.emacs.kill.call(null,G__22625_22628,G__22626_22629,G__22627_22630));

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
var map__22633 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$2(cm,cur);
var map__22633__$1 = ((((!((map__22633 == null)))?((((map__22633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22633.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22633):map__22633);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22633__$1,cljs.core.cst$kw$type);
var right_cur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22633__$1,cljs.core.cst$kw$right_DASH_cur);
var right_type = paredit_cm.core.get_type.cljs$core$IFn$_invoke$arity$2(cm,right_cur);
return (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("comment",type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1("comment right-type"));
});
paredit_cm.core.idx_of_next = (function paredit_cm$core$idx_of_next(cm,i,chars,member,max){
var map__22642 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$2(cm,paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,i));
var map__22642__$1 = ((((!((map__22642 == null)))?((((map__22642.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22642.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22642):map__22642);
var right_char = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22642__$1,cljs.core.cst$kw$right_DASH_char);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,max)){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["infinite loop"], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(member,cljs.core.contains_QMARK_(chars,right_char))){
return i;
} else {
return ((function (map__22642,map__22642__$1,right_char){
return (function (){
var G__22644 = cm;
var G__22645 = (i + (1));
var G__22646 = chars;
var G__22647 = member;
var G__22648 = max;
return (paredit_cm.core.idx_of_next.cljs$core$IFn$_invoke$arity$5 ? paredit_cm.core.idx_of_next.cljs$core$IFn$_invoke$arity$5(G__22644,G__22645,G__22646,G__22647,G__22648) : paredit_cm.core.idx_of_next.call(null,G__22644,G__22645,G__22646,G__22647,G__22648));
});
;})(map__22642,map__22642__$1,right_char))

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
var map__22651 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$2(cm,paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,i));
var map__22651__$1 = ((((!((map__22651 == null)))?((((map__22651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22651.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22651):map__22651);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22651__$1,cljs.core.cst$kw$ch);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22651__$1,cljs.core.cst$kw$start);
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22651__$1,cljs.core.cst$kw$string);
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
var map__22655 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$2(cm,paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,i));
var map__22655__$1 = ((((!((map__22655 == null)))?((((map__22655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22655.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22655):map__22655);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22655__$1,cljs.core.cst$kw$ch);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22655__$1,cljs.core.cst$kw$start);
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22655__$1,cljs.core.cst$kw$string);
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
var G__22661 = cm;
var G__22662 = mark;
var G__22663 = paredit_cm.core.token_end_index(cm,j);
var G__22664 = m;
return (paredit_cm.core.fwd_kill_word.cljs$core$IFn$_invoke$arity$4 ? paredit_cm.core.fwd_kill_word.cljs$core$IFn$_invoke$arity$4(G__22661,G__22662,G__22663,G__22664) : paredit_cm.core.fwd_kill_word.call(null,G__22661,G__22662,G__22663,G__22664));
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
var map__22667 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$2(cm,paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,i));
var map__22667__$1 = ((((!((map__22667 == null)))?((((map__22667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22667.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22667):map__22667);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22667__$1,cljs.core.cst$kw$ch);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22667__$1,cljs.core.cst$kw$start);
return (i - (ch - start));
});
/**
 * assumes i is in a comment. kills text from i to the beginning of the previous
 *   word in this comment
 */
paredit_cm.core.kill_prev_word_in_comment = (function paredit_cm$core$kill_prev_word_in_comment(cm,i){
var map__22671 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$2(cm,paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,i));
var map__22671__$1 = ((((!((map__22671 == null)))?((((map__22671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22671.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22671):map__22671);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22671__$1,cljs.core.cst$kw$ch);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22671__$1,cljs.core.cst$kw$start);
var string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22671__$1,cljs.core.cst$kw$string);
var cur_offset_in_string = (ch - start);
var head = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(string,(0),cur_offset_in_string);
var tail = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(string,cur_offset_in_string);
var word = cljs.core.re_find(/\S*\s*$/,head);
var length = cljs.core.count(word);
paredit_cm.core.kill_from_to(cm,(i - length),i);

return cm.setCursor(paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,(i - length)));
});
paredit_cm.core.beginning_of_line_QMARK_ = (function paredit_cm$core$beginning_of_line_QMARK_(cm,cur){
var map__22675 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$2(cm,cur);
var map__22675__$1 = ((((!((map__22675 == null)))?((((map__22675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22675.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22675):map__22675);
var info = map__22675__$1;
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22675__$1,cljs.core.cst$kw$start);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22675__$1,cljs.core.cst$kw$end);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22675__$1,cljs.core.cst$kw$type);
return (!((info == null))) && ((type == null)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(start,end,cljs.core.array_seq([(0)], 0)));
});
paredit_cm.core.bkwd_kill_skippable_comment_char_QMARK_ = (function paredit_cm$core$bkwd_kill_skippable_comment_char_QMARK_(cm,cur){
var map__22679 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$2(cm,cur);
var map__22679__$1 = ((((!((map__22679 == null)))?((((map__22679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22679.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22679):map__22679);
var info = map__22679__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22679__$1,cljs.core.cst$kw$type);
var left_char = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22679__$1,cljs.core.cst$kw$left_DASH_char);
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
var G__22685 = cm;
var G__22686 = mark;
var G__22687 = paredit_cm.core.start_of_token_at(cm,i);
var G__22688 = m;
return (paredit_cm.core.bkwd_kill_word.cljs$core$IFn$_invoke$arity$4 ? paredit_cm.core.bkwd_kill_word.cljs$core$IFn$_invoke$arity$4(G__22685,G__22686,G__22687,G__22688) : paredit_cm.core.bkwd_kill_word.call(null,G__22685,G__22686,G__22687,G__22688));
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
var G__22692 = cm;
var G__22693 = paredit_cm.core.token_end_index(cm,j);
var G__22694 = m;
return (paredit_cm.core.fwd.cljs$core$IFn$_invoke$arity$3 ? paredit_cm.core.fwd.cljs$core$IFn$_invoke$arity$3(G__22692,G__22693,G__22694) : paredit_cm.core.fwd.call(null,G__22692,G__22693,G__22694));
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
var G__22698 = cm;
var G__22699 = paredit_cm.core.start_of_prev_sibling.cljs$core$IFn$_invoke$arity$2(cm,cur);
var G__22700 = m;
return (paredit_cm.core.bkwd.cljs$core$IFn$_invoke$arity$3 ? paredit_cm.core.bkwd.cljs$core$IFn$_invoke$arity$3(G__22698,G__22699,G__22700) : paredit_cm.core.bkwd.call(null,G__22698,G__22699,G__22700));
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
var args22701 = [];
var len__7927__auto___22704 = arguments.length;
var i__7928__auto___22705 = (0);
while(true){
if((i__7928__auto___22705 < len__7927__auto___22704)){
args22701.push((arguments[i__7928__auto___22705]));

var G__22706 = (i__7928__auto___22705 + (1));
i__7928__auto___22705 = G__22706;
continue;
} else {
}
break;
}

var G__22703 = args22701.length;
switch (G__22703) {
case 1:
return paredit_cm.core.forward_up_cur.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.forward_up_cur.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22701.length)].join('')));

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
var args22708 = [];
var len__7927__auto___22711 = arguments.length;
var i__7928__auto___22712 = (0);
while(true){
if((i__7928__auto___22712 < len__7927__auto___22711)){
args22708.push((arguments[i__7928__auto___22712]));

var G__22713 = (i__7928__auto___22712 + (1));
i__7928__auto___22712 = G__22713;
continue;
} else {
}
break;
}

var G__22710 = args22708.length;
switch (G__22710) {
case 1:
return paredit_cm.core.forward_up.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.forward_up.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22708.length)].join('')));

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
var args22715 = [];
var len__7927__auto___22718 = arguments.length;
var i__7928__auto___22719 = (0);
while(true){
if((i__7928__auto___22719 < len__7927__auto___22718)){
args22715.push((arguments[i__7928__auto___22719]));

var G__22720 = (i__7928__auto___22719 + (1));
i__7928__auto___22719 = G__22720;
continue;
} else {
}
break;
}

var G__22717 = args22715.length;
switch (G__22717) {
case 1:
return paredit_cm.core.backward_up_cur.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.backward_up_cur.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22715.length)].join('')));

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
var args22722 = [];
var len__7927__auto___22725 = arguments.length;
var i__7928__auto___22726 = (0);
while(true){
if((i__7928__auto___22726 < len__7927__auto___22725)){
args22722.push((arguments[i__7928__auto___22726]));

var G__22727 = (i__7928__auto___22726 + (1));
i__7928__auto___22726 = G__22727;
continue;
} else {
}
break;
}

var G__22724 = args22722.length;
switch (G__22724) {
case 1:
return paredit_cm.core.backward_up.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.backward_up.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22722.length)].join('')));

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
var args22729 = [];
var len__7927__auto___22732 = arguments.length;
var i__7928__auto___22733 = (0);
while(true){
if((i__7928__auto___22733 < len__7927__auto___22732)){
args22729.push((arguments[i__7928__auto___22733]));

var G__22734 = (i__7928__auto___22733 + (1));
i__7928__auto___22733 = G__22734;
continue;
} else {
}
break;
}

var G__22731 = args22729.length;
switch (G__22731) {
case 1:
return paredit_cm.core.wrap_round.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.wrap_round.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22729.length)].join('')));

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
var args22736 = [];
var len__7927__auto___22739 = arguments.length;
var i__7928__auto___22740 = (0);
while(true){
if((i__7928__auto___22740 < len__7927__auto___22739)){
args22736.push((arguments[i__7928__auto___22740]));

var G__22741 = (i__7928__auto___22740 + (1));
i__7928__auto___22740 = G__22741;
continue;
} else {
}
break;
}

var G__22738 = args22736.length;
switch (G__22738) {
case 1:
return paredit_cm.core.splice_sexp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.splice_sexp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22736.length)].join('')));

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
var args22743 = [];
var len__7927__auto___22746 = arguments.length;
var i__7928__auto___22747 = (0);
while(true){
if((i__7928__auto___22747 < len__7927__auto___22746)){
args22743.push((arguments[i__7928__auto___22747]));

var G__22748 = (i__7928__auto___22747 + (1));
i__7928__auto___22747 = G__22748;
continue;
} else {
}
break;
}

var G__22745 = args22743.length;
switch (G__22745) {
case 1:
return paredit_cm.core.splice_sexp_killing_backward.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.splice_sexp_killing_backward.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22743.length)].join('')));

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
var args22750 = [];
var len__7927__auto___22753 = arguments.length;
var i__7928__auto___22754 = (0);
while(true){
if((i__7928__auto___22754 < len__7927__auto___22753)){
args22750.push((arguments[i__7928__auto___22754]));

var G__22755 = (i__7928__auto___22754 + (1));
i__7928__auto___22754 = G__22755;
continue;
} else {
}
break;
}

var G__22752 = args22750.length;
switch (G__22752) {
case 1:
return paredit_cm.core.splice_sexp_killing_forward.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.splice_sexp_killing_forward.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22750.length)].join('')));

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
var args22757 = [];
var len__7927__auto___22760 = arguments.length;
var i__7928__auto___22761 = (0);
while(true){
if((i__7928__auto___22761 < len__7927__auto___22760)){
args22757.push((arguments[i__7928__auto___22761]));

var G__22762 = (i__7928__auto___22761 + (1));
i__7928__auto___22761 = G__22762;
continue;
} else {
}
break;
}

var G__22759 = args22757.length;
switch (G__22759) {
case 1:
return paredit_cm.core.raise_sexp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.raise_sexp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22757.length)].join('')));

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
var G__22767 = cm;
var G__22768 = parent;
var G__22769 = (n - (1));
return (paredit_cm.core.fwd_slurp.cljs$core$IFn$_invoke$arity$3 ? paredit_cm.core.fwd_slurp.cljs$core$IFn$_invoke$arity$3(G__22767,G__22768,G__22769) : paredit_cm.core.fwd_slurp.call(null,G__22767,G__22768,G__22769));
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
var args22770 = [];
var len__7927__auto___22776 = arguments.length;
var i__7928__auto___22777 = (0);
while(true){
if((i__7928__auto___22777 < len__7927__auto___22776)){
args22770.push((arguments[i__7928__auto___22777]));

var G__22778 = (i__7928__auto___22777 + (1));
i__7928__auto___22777 = G__22778;
continue;
} else {
}
break;
}

var G__22772 = args22770.length;
switch (G__22772) {
case 1:
return paredit_cm.core.forward_slurp_sexp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.forward_slurp_sexp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22770.length)].join('')));

}
});
goog.exportSymbol('paredit_cm.core.forward_slurp_sexp', paredit_cm.core.forward_slurp_sexp);

paredit_cm.core.forward_slurp_sexp.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.forward_slurp_sexp.cljs$core$IFn$_invoke$arity$2(cm,paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm));
});

paredit_cm.core.forward_slurp_sexp.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
var temp__4657__auto___22780 = cljs.core.trampoline.cljs$core$IFn$_invoke$arity$variadic(paredit_cm.core.fwd_slurp,cljs.core.array_seq([cm,cur,paredit_cm.core.char_count(cm)], 0));
if(cljs.core.truth_(temp__4657__auto___22780)){
var vec__22773_22781 = temp__4657__auto___22780;
var parent_22782 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22773_22781,(0),null);
var sibling_22783 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22773_22781,(1),null);
var bracket_22784 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22773_22781,(2),null);
paredit_cm.core.insert.cljs$core$IFn$_invoke$arity$4(cm,bracket_22784,(0),sibling_22783);

cm.replaceRange("",paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,(paredit_cm.core.index.cljs$core$IFn$_invoke$arity$2(cm,parent_22782) - cljs.core.count(bracket_22784))),parent_22782);
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
var G__22788 = cm;
var G__22789 = cur_SINGLEQUOTE_;
var G__22790 = (n - (1));
return (paredit_cm.core.fwd_down.cljs$core$IFn$_invoke$arity$3 ? paredit_cm.core.fwd_down.cljs$core$IFn$_invoke$arity$3(G__22788,G__22789,G__22790) : paredit_cm.core.fwd_down.call(null,G__22788,G__22789,G__22790));
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
var args22791 = [];
var len__7927__auto___22794 = arguments.length;
var i__7928__auto___22795 = (0);
while(true){
if((i__7928__auto___22795 < len__7927__auto___22794)){
args22791.push((arguments[i__7928__auto___22795]));

var G__22796 = (i__7928__auto___22795 + (1));
i__7928__auto___22795 = G__22796;
continue;
} else {
}
break;
}

var G__22793 = args22791.length;
switch (G__22793) {
case 1:
return paredit_cm.core.forward_down_cur.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.forward_down_cur.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22791.length)].join('')));

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
var args22798 = [];
var len__7927__auto___22801 = arguments.length;
var i__7928__auto___22802 = (0);
while(true){
if((i__7928__auto___22802 < len__7927__auto___22801)){
args22798.push((arguments[i__7928__auto___22802]));

var G__22803 = (i__7928__auto___22802 + (1));
i__7928__auto___22802 = G__22803;
continue;
} else {
}
break;
}

var G__22800 = args22798.length;
switch (G__22800) {
case 1:
return paredit_cm.core.forward_down.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.forward_down.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22798.length)].join('')));

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
var map__22813 = paredit_cm.core.get_info.cljs$core$IFn$_invoke$arity$2(cm,cur);
var map__22813__$1 = ((((!((map__22813 == null)))?((((map__22813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22813.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22813):map__22813);
var left_cur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22813__$1,cljs.core.cst$kw$left_DASH_cur);
var i = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22813__$1,cljs.core.cst$kw$i);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22813__$1,cljs.core.cst$kw$start);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22813__$1,cljs.core.cst$kw$ch);
var bof = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22813__$1,cljs.core.cst$kw$bof);
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
return ((function (map__22813,map__22813__$1,left_cur,i,start,ch,bof){
return (function (){
var G__22815 = cm;
var G__22816 = paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,(i - (1)));
var G__22817 = (n - (1));
return (paredit_cm.core.bkwd_down.cljs$core$IFn$_invoke$arity$3 ? paredit_cm.core.bkwd_down.cljs$core$IFn$_invoke$arity$3(G__22815,G__22816,G__22817) : paredit_cm.core.bkwd_down.call(null,G__22815,G__22816,G__22817));
});
;})(map__22813,map__22813__$1,left_cur,i,start,ch,bof))
} else {
return ((function (map__22813,map__22813__$1,left_cur,i,start,ch,bof){
return (function (){
var G__22818 = cm;
var G__22819 = paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,(i - (ch - start)));
var G__22820 = (n - (1));
return (paredit_cm.core.bkwd_down.cljs$core$IFn$_invoke$arity$3 ? paredit_cm.core.bkwd_down.cljs$core$IFn$_invoke$arity$3(G__22818,G__22819,G__22820) : paredit_cm.core.bkwd_down.call(null,G__22818,G__22819,G__22820));
});
;})(map__22813,map__22813__$1,left_cur,i,start,ch,bof))

}
}
}
}
});
paredit_cm.core.backward_down = (function paredit_cm$core$backward_down(var_args){
var args22821 = [];
var len__7927__auto___22824 = arguments.length;
var i__7928__auto___22825 = (0);
while(true){
if((i__7928__auto___22825 < len__7927__auto___22824)){
args22821.push((arguments[i__7928__auto___22825]));

var G__22826 = (i__7928__auto___22825 + (1));
i__7928__auto___22825 = G__22826;
continue;
} else {
}
break;
}

var G__22823 = args22821.length;
switch (G__22823) {
case 1:
return paredit_cm.core.backward_down.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.backward_down.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22821.length)].join('')));

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
var G__22831 = cm;
var G__22832 = parent;
var G__22833 = (n - (1));
return (paredit_cm.core.bkwd_slurp.cljs$core$IFn$_invoke$arity$3 ? paredit_cm.core.bkwd_slurp.cljs$core$IFn$_invoke$arity$3(G__22831,G__22832,G__22833) : paredit_cm.core.bkwd_slurp.call(null,G__22831,G__22832,G__22833));
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
var args22834 = [];
var len__7927__auto___22840 = arguments.length;
var i__7928__auto___22841 = (0);
while(true){
if((i__7928__auto___22841 < len__7927__auto___22840)){
args22834.push((arguments[i__7928__auto___22841]));

var G__22842 = (i__7928__auto___22841 + (1));
i__7928__auto___22841 = G__22842;
continue;
} else {
}
break;
}

var G__22836 = args22834.length;
switch (G__22836) {
case 1:
return paredit_cm.core.backward_slurp_sexp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.backward_slurp_sexp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22834.length)].join('')));

}
});
goog.exportSymbol('paredit_cm.core.backward_slurp_sexp', paredit_cm.core.backward_slurp_sexp);

paredit_cm.core.backward_slurp_sexp.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.backward_slurp_sexp.cljs$core$IFn$_invoke$arity$2(cm,paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm));
});

paredit_cm.core.backward_slurp_sexp.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
var i = paredit_cm.core.index.cljs$core$IFn$_invoke$arity$2(cm,cur);
var temp__4657__auto___22844 = cljs.core.trampoline.cljs$core$IFn$_invoke$arity$variadic(paredit_cm.core.bkwd_slurp,cljs.core.array_seq([cm,cur,paredit_cm.core.char_count(cm)], 0));
if(cljs.core.truth_(temp__4657__auto___22844)){
var vec__22837_22845 = temp__4657__auto___22844;
var parent_22846 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22837_22845,(0),null);
var sibling_22847 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22837_22845,(1),null);
var bracket_22848 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22837_22845,(2),null);
cm.replaceRange("",parent_22846,paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$2(cm,(paredit_cm.core.index.cljs$core$IFn$_invoke$arity$2(cm,parent_22846) + cljs.core.count(bracket_22848))));

paredit_cm.core.insert.cljs$core$IFn$_invoke$arity$4(cm,bracket_22848,(0),sibling_22847);
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
var G__22852 = cm;
var G__22853 = parent;
var G__22854 = (n - (1));
return (paredit_cm.core.fwd_barf.cljs$core$IFn$_invoke$arity$3 ? paredit_cm.core.fwd_barf.cljs$core$IFn$_invoke$arity$3(G__22852,G__22853,G__22854) : paredit_cm.core.fwd_barf.call(null,G__22852,G__22853,G__22854));
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
var args22855 = [];
var len__7927__auto___22861 = arguments.length;
var i__7928__auto___22862 = (0);
while(true){
if((i__7928__auto___22862 < len__7927__auto___22861)){
args22855.push((arguments[i__7928__auto___22862]));

var G__22863 = (i__7928__auto___22862 + (1));
i__7928__auto___22862 = G__22863;
continue;
} else {
}
break;
}

var G__22857 = args22855.length;
switch (G__22857) {
case 1:
return paredit_cm.core.forward_barf_sexp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.forward_barf_sexp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22855.length)].join('')));

}
});
goog.exportSymbol('paredit_cm.core.forward_barf_sexp', paredit_cm.core.forward_barf_sexp);

paredit_cm.core.forward_barf_sexp.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.forward_barf_sexp.cljs$core$IFn$_invoke$arity$2(cm,paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm));
});

paredit_cm.core.forward_barf_sexp.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
var temp__4655__auto__ = cljs.core.trampoline.cljs$core$IFn$_invoke$arity$variadic(paredit_cm.core.fwd_barf,cljs.core.array_seq([cm,cur,paredit_cm.core.char_count(cm)], 0));
if(cljs.core.truth_(temp__4655__auto__)){
var vec__22858 = temp__4655__auto__;
var parent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22858,(0),null);
var inside = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22858,(1),null);
var sibling = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22858,(2),null);
var bracket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22858,(3),null);
var moved = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22858,(4),null);
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
var G__22868 = cm;
var G__22869 = outside;
var G__22870 = (n - (1));
return (paredit_cm.core.bkwd_barf.cljs$core$IFn$_invoke$arity$3 ? paredit_cm.core.bkwd_barf.cljs$core$IFn$_invoke$arity$3(G__22868,G__22869,G__22870) : paredit_cm.core.bkwd_barf.call(null,G__22868,G__22869,G__22870));
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
var args22871 = [];
var len__7927__auto___22877 = arguments.length;
var i__7928__auto___22878 = (0);
while(true){
if((i__7928__auto___22878 < len__7927__auto___22877)){
args22871.push((arguments[i__7928__auto___22878]));

var G__22879 = (i__7928__auto___22878 + (1));
i__7928__auto___22878 = G__22879;
continue;
} else {
}
break;
}

var G__22873 = args22871.length;
switch (G__22873) {
case 1:
return paredit_cm.core.backward_barf_sexp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.backward_barf_sexp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22871.length)].join('')));

}
});
goog.exportSymbol('paredit_cm.core.backward_barf_sexp', paredit_cm.core.backward_barf_sexp);

paredit_cm.core.backward_barf_sexp.cljs$core$IFn$_invoke$arity$1 = (function (cm){
return paredit_cm.core.backward_barf_sexp.cljs$core$IFn$_invoke$arity$2(cm,paredit_cm.core.cursor.cljs$core$IFn$_invoke$arity$1(cm));
});

paredit_cm.core.backward_barf_sexp.cljs$core$IFn$_invoke$arity$2 = (function (cm,cur){
var temp__4655__auto__ = cljs.core.trampoline.cljs$core$IFn$_invoke$arity$variadic(paredit_cm.core.bkwd_barf,cljs.core.array_seq([cm,cur,paredit_cm.core.char_count(cm)], 0));
if(cljs.core.truth_(temp__4655__auto__)){
var vec__22874 = temp__4655__auto__;
var outside = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22874,(0),null);
var inside = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22874,(1),null);
var bracket_cur = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22874,(2),null);
var bracket_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22874,(3),null);
var moved = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22874,(4),null);
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
var args22881 = [];
var len__7927__auto___22884 = arguments.length;
var i__7928__auto___22885 = (0);
while(true){
if((i__7928__auto___22885 < len__7927__auto___22884)){
args22881.push((arguments[i__7928__auto___22885]));

var G__22886 = (i__7928__auto___22885 + (1));
i__7928__auto___22885 = G__22886;
continue;
} else {
}
break;
}

var G__22883 = args22881.length;
switch (G__22883) {
case 1:
return paredit_cm.core.split_sexp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.split_sexp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22881.length)].join('')));

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
var args22888 = [];
var len__7927__auto___22891 = arguments.length;
var i__7928__auto___22892 = (0);
while(true){
if((i__7928__auto___22892 < len__7927__auto___22891)){
args22888.push((arguments[i__7928__auto___22892]));

var G__22893 = (i__7928__auto___22892 + (1));
i__7928__auto___22892 = G__22893;
continue;
} else {
}
break;
}

var G__22890 = args22888.length;
switch (G__22890) {
case 1:
return paredit_cm.core.join_sexps.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.join_sexps.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22888.length)].join('')));

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
var G__22898 = cm;
var G__22899 = parent;
var G__22900 = (n - (1));
return (paredit_cm.core.top_most_opener_candidate.cljs$core$IFn$_invoke$arity$3 ? paredit_cm.core.top_most_opener_candidate.cljs$core$IFn$_invoke$arity$3(G__22898,G__22899,G__22900) : paredit_cm.core.top_most_opener_candidate.call(null,G__22898,G__22899,G__22900));
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
var args22901 = [];
var len__7927__auto___22904 = arguments.length;
var i__7928__auto___22905 = (0);
while(true){
if((i__7928__auto___22905 < len__7927__auto___22904)){
args22901.push((arguments[i__7928__auto___22905]));

var G__22906 = (i__7928__auto___22905 + (1));
i__7928__auto___22905 = G__22906;
continue;
} else {
}
break;
}

var G__22903 = args22901.length;
switch (G__22903) {
case 1:
return paredit_cm.core.top_most_opener.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.top_most_opener.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22901.length)].join('')));

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
var args22908 = [];
var len__7927__auto___22911 = arguments.length;
var i__7928__auto___22912 = (0);
while(true){
if((i__7928__auto___22912 < len__7927__auto___22911)){
args22908.push((arguments[i__7928__auto___22912]));

var G__22913 = (i__7928__auto___22912 + (1));
i__7928__auto___22912 = G__22913;
continue;
} else {
}
break;
}

var G__22910 = args22908.length;
switch (G__22910) {
case 1:
return paredit_cm.core.reindent_defun.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.reindent_defun.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22908.length)].join('')));

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
var args22915 = [];
var len__7927__auto___22918 = arguments.length;
var i__7928__auto___22919 = (0);
while(true){
if((i__7928__auto___22919 < len__7927__auto___22918)){
args22915.push((arguments[i__7928__auto___22919]));

var G__22920 = (i__7928__auto___22919 + (1));
i__7928__auto___22919 = G__22920;
continue;
} else {
}
break;
}

var G__22917 = args22915.length;
switch (G__22917) {
case 1:
return paredit_cm.core.forward_sexp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.forward_sexp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22915.length)].join('')));

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
var args22922 = [];
var len__7927__auto___22925 = arguments.length;
var i__7928__auto___22926 = (0);
while(true){
if((i__7928__auto___22926 < len__7927__auto___22925)){
args22922.push((arguments[i__7928__auto___22926]));

var G__22927 = (i__7928__auto___22926 + (1));
i__7928__auto___22926 = G__22927;
continue;
} else {
}
break;
}

var G__22924 = args22922.length;
switch (G__22924) {
case 1:
return paredit_cm.core.backward_sexp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return paredit_cm.core.backward_sexp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22922.length)].join('')));

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

