// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('devtools.reporter');
goog.require('cljs.core');
goog.require('devtools.util');
devtools.reporter.issues_url = "https://github.com/binaryage/cljs-devtools/issues";
devtools.reporter.report_internal_error_BANG_ = (function devtools$reporter$report_internal_error_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___22105 = arguments.length;
var i__5727__auto___22106 = (0);
while(true){
if((i__5727__auto___22106 < len__5726__auto___22105)){
args__5732__auto__.push((arguments[i__5727__auto___22106]));

var G__22107 = (i__5727__auto___22106 + (1));
i__5727__auto___22106 = G__22107;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (e,p__22100){
var vec__22101 = p__22100;
var context = cljs.core.nth.call(null,vec__22101,(0),null);
var footer = cljs.core.nth.call(null,vec__22101,(1),null);
try{var message = (((e instanceof Error))?(function (){var or__5002__auto__ = e.message;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return e;
}
})():e);
var header = ["%cCLJS DevTools Error%c%s","background-color:red;color:white;font-weight:bold;padding:0px 3px;border-radius:2px;","color:red",[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('')];
var context_msg = ["In ",devtools.util.get_lib_info.call(null),(cljs.core.truth_(context)?[", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(context),"."].join(''):"."),"\n\n"].join('');
var footer_msg = (((!((footer == null))))?footer:["\n\n","---\n","Please report the issue here: ",devtools.reporter.issues_url].join(''));
var details = [context_msg,e,footer_msg];
var c = console;
var group_collapsed = devtools.reporter.goog$module$goog$object.get.call(null,c,"groupCollapsed");
var log = devtools.reporter.goog$module$goog$object.get.call(null,c,"log");
var group_end = devtools.reporter.goog$module$goog$object.get.call(null,c,"groupEnd");
if(cljs.core.truth_(group_collapsed)){
} else {
throw (new Error("Assert failed: group-collapsed"));
}

if(cljs.core.truth_(log)){
} else {
throw (new Error("Assert failed: log"));
}

if(cljs.core.truth_(group_end)){
} else {
throw (new Error("Assert failed: group-end"));
}

group_collapsed.apply(c,header);

log.apply(c,details);

return group_end.call(c);
}catch (e22104){var e__$1 = e22104;
return console.error("FATAL: report-internal-error! failed",e__$1);
}}));

(devtools.reporter.report_internal_error_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.reporter.report_internal_error_BANG_.cljs$lang$applyTo = (function (seq22098){
var G__22099 = cljs.core.first.call(null,seq22098);
var seq22098__$1 = cljs.core.next.call(null,seq22098);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22099,seq22098__$1);
}));


//# sourceMappingURL=reporter.js.map?rel=1726541910592
