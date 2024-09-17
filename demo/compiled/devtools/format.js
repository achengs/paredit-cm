// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

var devtools$format$IDevtoolsFormat$_header$dyn_20699 = (function (value){
var x__5350__auto__ = (((value == null))?null:value);
var m__5351__auto__ = (devtools.format._header[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,value);
} else {
var m__5349__auto__ = (devtools.format._header["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
});
devtools.format._header = (function devtools$format$_header(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_header$dyn_20699.call(null,value);
}
});

var devtools$format$IDevtoolsFormat$_has_body$dyn_20700 = (function (value){
var x__5350__auto__ = (((value == null))?null:value);
var m__5351__auto__ = (devtools.format._has_body[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,value);
} else {
var m__5349__auto__ = (devtools.format._has_body["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
});
devtools.format._has_body = (function devtools$format$_has_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_has_body$dyn_20700.call(null,value);
}
});

var devtools$format$IDevtoolsFormat$_body$dyn_20701 = (function (value){
var x__5350__auto__ = (((value == null))?null:value);
var m__5351__auto__ = (devtools.format._body[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return m__5351__auto__.call(null,value);
} else {
var m__5349__auto__ = (devtools.format._body["_"]);
if((!((m__5349__auto__ == null)))){
return m__5349__auto__.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
});
devtools.format._body = (function devtools$format$_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_body$dyn_20701.call(null,value);
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
(devtools.format._STAR_setup_done_STAR_ = true);

devtools.format.make_template_fn = (function (){var temp__5823__auto__ = devtools.format.goog$module$goog$object.get.call(null,devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__5823__auto__)){
var o__20679__auto__ = temp__5823__auto__;
var temp__5823__auto____$1 = devtools.format.goog$module$goog$object.get.call(null,o__20679__auto__,"formatters");
if(cljs.core.truth_(temp__5823__auto____$1)){
var o__20679__auto____$1 = temp__5823__auto____$1;
var temp__5823__auto____$2 = devtools.format.goog$module$goog$object.get.call(null,o__20679__auto____$1,"templating");
if(cljs.core.truth_(temp__5823__auto____$2)){
var o__20678__auto__ = temp__5823__auto____$2;
return devtools.format.goog$module$goog$object.get.call(null,o__20678__auto__,"make_template");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5823__auto__ = devtools.format.goog$module$goog$object.get.call(null,devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__5823__auto__)){
var o__20679__auto__ = temp__5823__auto__;
var temp__5823__auto____$1 = devtools.format.goog$module$goog$object.get.call(null,o__20679__auto__,"formatters");
if(cljs.core.truth_(temp__5823__auto____$1)){
var o__20679__auto____$1 = temp__5823__auto____$1;
var temp__5823__auto____$2 = devtools.format.goog$module$goog$object.get.call(null,o__20679__auto____$1,"templating");
if(cljs.core.truth_(temp__5823__auto____$2)){
var o__20678__auto__ = temp__5823__auto____$2;
return devtools.format.goog$module$goog$object.get.call(null,o__20678__auto__,"make_group");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5823__auto__ = devtools.format.goog$module$goog$object.get.call(null,devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__5823__auto__)){
var o__20679__auto__ = temp__5823__auto__;
var temp__5823__auto____$1 = devtools.format.goog$module$goog$object.get.call(null,o__20679__auto__,"formatters");
if(cljs.core.truth_(temp__5823__auto____$1)){
var o__20679__auto____$1 = temp__5823__auto____$1;
var temp__5823__auto____$2 = devtools.format.goog$module$goog$object.get.call(null,o__20679__auto____$1,"templating");
if(cljs.core.truth_(temp__5823__auto____$2)){
var o__20678__auto__ = temp__5823__auto____$2;
return devtools.format.goog$module$goog$object.get.call(null,o__20678__auto__,"make_reference");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5823__auto__ = devtools.format.goog$module$goog$object.get.call(null,devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__5823__auto__)){
var o__20679__auto__ = temp__5823__auto__;
var temp__5823__auto____$1 = devtools.format.goog$module$goog$object.get.call(null,o__20679__auto__,"formatters");
if(cljs.core.truth_(temp__5823__auto____$1)){
var o__20679__auto____$1 = temp__5823__auto____$1;
var temp__5823__auto____$2 = devtools.format.goog$module$goog$object.get.call(null,o__20679__auto____$1,"templating");
if(cljs.core.truth_(temp__5823__auto____$2)){
var o__20678__auto__ = temp__5823__auto____$2;
return devtools.format.goog$module$goog$object.get.call(null,o__20678__auto__,"make_surrogate");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5823__auto__ = devtools.format.goog$module$goog$object.get.call(null,devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__5823__auto__)){
var o__20679__auto__ = temp__5823__auto__;
var temp__5823__auto____$1 = devtools.format.goog$module$goog$object.get.call(null,o__20679__auto__,"formatters");
if(cljs.core.truth_(temp__5823__auto____$1)){
var o__20679__auto____$1 = temp__5823__auto____$1;
var temp__5823__auto____$2 = devtools.format.goog$module$goog$object.get.call(null,o__20679__auto____$1,"templating");
if(cljs.core.truth_(temp__5823__auto____$2)){
var o__20678__auto__ = temp__5823__auto____$2;
return devtools.format.goog$module$goog$object.get.call(null,o__20678__auto__,"render_markup");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5823__auto__ = devtools.format.goog$module$goog$object.get.call(null,devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__5823__auto__)){
var o__20679__auto__ = temp__5823__auto__;
var temp__5823__auto____$1 = devtools.format.goog$module$goog$object.get.call(null,o__20679__auto__,"formatters");
if(cljs.core.truth_(temp__5823__auto____$1)){
var o__20679__auto____$1 = temp__5823__auto____$1;
var temp__5823__auto____$2 = devtools.format.goog$module$goog$object.get.call(null,o__20679__auto____$1,"markup");
if(cljs.core.truth_(temp__5823__auto____$2)){
var o__20678__auto__ = temp__5823__auto____$2;
return devtools.format.goog$module$goog$object.get.call(null,o__20678__auto__,"_LT_header_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5823__auto__ = devtools.format.goog$module$goog$object.get.call(null,devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__5823__auto__)){
var o__20679__auto__ = temp__5823__auto__;
var temp__5823__auto____$1 = devtools.format.goog$module$goog$object.get.call(null,o__20679__auto__,"formatters");
if(cljs.core.truth_(temp__5823__auto____$1)){
var o__20679__auto____$1 = temp__5823__auto____$1;
var temp__5823__auto____$2 = devtools.format.goog$module$goog$object.get.call(null,o__20679__auto____$1,"markup");
if(cljs.core.truth_(temp__5823__auto____$2)){
var o__20678__auto__ = temp__5823__auto____$2;
return devtools.format.goog$module$goog$object.get.call(null,o__20678__auto__,"_LT_standard_body_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__5732__auto__ = [];
var len__5726__auto___20703 = arguments.length;
var i__5727__auto___20704 = (0);
while(true){
if((i__5727__auto___20704 < len__5726__auto___20703)){
args__5732__auto__.push((arguments[i__5727__auto___20704]));

var G__20705 = (i__5727__auto___20704 + (1));
i__5727__auto___20704 = G__20705;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
}));

(devtools.format.render_markup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.render_markup.cljs$lang$applyTo = (function (seq20702){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20702));
}));

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__5732__auto__ = [];
var len__5726__auto___20707 = arguments.length;
var i__5727__auto___20708 = (0);
while(true){
if((i__5727__auto___20708 < len__5726__auto___20707)){
args__5732__auto__.push((arguments[i__5727__auto___20708]));

var G__20709 = (i__5727__auto___20708 + (1));
i__5727__auto___20708 = G__20709;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
}));

(devtools.format.make_template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_template.cljs$lang$applyTo = (function (seq20706){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20706));
}));

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__5732__auto__ = [];
var len__5726__auto___20711 = arguments.length;
var i__5727__auto___20712 = (0);
while(true){
if((i__5727__auto___20712 < len__5726__auto___20711)){
args__5732__auto__.push((arguments[i__5727__auto___20712]));

var G__20713 = (i__5727__auto___20712 + (1));
i__5727__auto___20712 = G__20713;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
}));

(devtools.format.make_group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_group.cljs$lang$applyTo = (function (seq20710){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20710));
}));

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__5732__auto__ = [];
var len__5726__auto___20715 = arguments.length;
var i__5727__auto___20716 = (0);
while(true){
if((i__5727__auto___20716 < len__5726__auto___20715)){
args__5732__auto__.push((arguments[i__5727__auto___20716]));

var G__20717 = (i__5727__auto___20716 + (1));
i__5727__auto___20716 = G__20717;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
}));

(devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq20714){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20714));
}));

devtools.format.template = (function devtools$format$template(var_args){
var args__5732__auto__ = [];
var len__5726__auto___20719 = arguments.length;
var i__5727__auto___20720 = (0);
while(true){
if((i__5727__auto___20720 < len__5726__auto___20719)){
args__5732__auto__.push((arguments[i__5727__auto___20720]));

var G__20721 = (i__5727__auto___20720 + (1));
i__5727__auto___20720 = G__20721;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
}));

(devtools.format.template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.template.cljs$lang$applyTo = (function (seq20718){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20718));
}));

devtools.format.group = (function devtools$format$group(var_args){
var args__5732__auto__ = [];
var len__5726__auto___20723 = arguments.length;
var i__5727__auto___20724 = (0);
while(true){
if((i__5727__auto___20724 < len__5726__auto___20723)){
args__5732__auto__.push((arguments[i__5727__auto___20724]));

var G__20725 = (i__5727__auto___20724 + (1));
i__5727__auto___20724 = G__20725;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
}));

(devtools.format.group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.group.cljs$lang$applyTo = (function (seq20722){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20722));
}));

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__5732__auto__ = [];
var len__5726__auto___20727 = arguments.length;
var i__5727__auto___20728 = (0);
while(true){
if((i__5727__auto___20728 < len__5726__auto___20727)){
args__5732__auto__.push((arguments[i__5727__auto___20728]));

var G__20729 = (i__5727__auto___20728 + (1));
i__5727__auto___20728 = G__20729;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
}));

(devtools.format.surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.surrogate.cljs$lang$applyTo = (function (seq20726){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20726));
}));

devtools.format.reference = (function devtools$format$reference(var_args){
var args__5732__auto__ = [];
var len__5726__auto___20737 = arguments.length;
var i__5727__auto___20738 = (0);
while(true){
if((i__5727__auto___20738 < len__5726__auto___20737)){
args__5732__auto__.push((arguments[i__5727__auto___20738]));

var G__20739 = (i__5727__auto___20738 + (1));
i__5727__auto___20738 = G__20739;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__20733){
var vec__20734 = p__20733;
var state_override = cljs.core.nth.call(null,vec__20734,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,(function (p1__20730_SHARP_){
return cljs.core.merge.call(null,p1__20730_SHARP_,state_override);
})], null));
}));

(devtools.format.reference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.reference.cljs$lang$applyTo = (function (seq20731){
var G__20732 = cljs.core.first.call(null,seq20731);
var seq20731__$1 = cljs.core.next.call(null,seq20731);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20732,seq20731__$1);
}));

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__5732__auto__ = [];
var len__5726__auto___20741 = arguments.length;
var i__5727__auto___20742 = (0);
while(true){
if((i__5727__auto___20742 < len__5726__auto___20741)){
args__5732__auto__.push((arguments[i__5727__auto___20742]));

var G__20743 = (i__5727__auto___20742 + (1));
i__5727__auto___20742 = G__20743;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
}));

(devtools.format.build_header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.build_header.cljs$lang$applyTo = (function (seq20740){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20740));
}));

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__5732__auto__ = [];
var len__5726__auto___20746 = arguments.length;
var i__5727__auto___20747 = (0);
while(true){
if((i__5727__auto___20747 < len__5726__auto___20746)){
args__5732__auto__.push((arguments[i__5727__auto___20747]));

var G__20748 = (i__5727__auto___20747 + (1));
i__5727__auto___20747 = G__20748;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
}));

(devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq20744){
var G__20745 = cljs.core.first.call(null,seq20744);
var seq20744__$1 = cljs.core.next.call(null,seq20744);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20745,seq20744__$1);
}));


//# sourceMappingURL=format.js.map?rel=1726541909176
