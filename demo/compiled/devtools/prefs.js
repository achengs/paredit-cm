// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('devtools.prefs');
goog.require('cljs.core');
goog.require('devtools.defaults');
devtools.prefs.simple_merge = (function devtools$prefs$simple_merge(var_args){
var args__5732__auto__ = [];
var len__5726__auto___21411 = arguments.length;
var i__5727__auto___21412 = (0);
while(true){
if((i__5727__auto___21412 < len__5726__auto___21411)){
args__5732__auto__.push((arguments[i__5727__auto___21412]));

var G__21413 = (i__5727__auto___21412 + (1));
i__5727__auto___21412 = G__21413;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return devtools.prefs.simple_merge.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(devtools.prefs.simple_merge.cljs$core$IFn$_invoke$arity$variadic = (function (base_map,maps){
var rmaps = cljs.core.reverse.call(null,maps);
var sentinel = ({});
var sentinel_QMARK_ = (function (p1__21405_SHARP_){
return (p1__21405_SHARP_ === sentinel);
});
var merged_keys = cljs.core.dedupe.call(null,cljs.core.sort.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,cljs.core.keys,rmaps))));
var result = base_map;
var todo_keys = merged_keys;
while(true){
if(cljs.core.empty_QMARK_.call(null,todo_keys)){
return result;
} else {
var key = cljs.core.first.call(null,todo_keys);
var val = cljs.core.first.call(null,cljs.core.remove.call(null,sentinel_QMARK_,cljs.core.map.call(null,((function (result,todo_keys,key,rmaps,sentinel,sentinel_QMARK_,merged_keys){
return (function (p1__21406_SHARP_){
return cljs.core.get.call(null,p1__21406_SHARP_,key,sentinel);
});})(result,todo_keys,key,rmaps,sentinel,sentinel_QMARK_,merged_keys))
,rmaps)));
var G__21414 = cljs.core.assoc.call(null,result,key,val);
var G__21415 = cljs.core.rest.call(null,todo_keys);
result = G__21414;
todo_keys = G__21415;
continue;
}
break;
}
}));

(devtools.prefs.simple_merge.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.prefs.simple_merge.cljs$lang$applyTo = (function (seq21407){
var G__21408 = cljs.core.first.call(null,seq21407);
var seq21407__$1 = cljs.core.next.call(null,seq21407);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21408,seq21407__$1);
}));

devtools.prefs.default_config = devtools.defaults.prefs;
devtools.prefs.external_config = cljs.core.PersistentArrayMap.EMPTY;
devtools.prefs.env_config = cljs.core.PersistentArrayMap.EMPTY;
devtools.prefs.initial_config = devtools.prefs.simple_merge.call(null,devtools.prefs.default_config,devtools.prefs.external_config,devtools.prefs.env_config);
devtools.prefs._STAR_prefs_STAR_ = devtools.prefs.initial_config;
devtools.prefs.get_prefs = (function devtools$prefs$get_prefs(){
return devtools.prefs._STAR_prefs_STAR_;
});
devtools.prefs.pref = (function devtools$prefs$pref(key){
return key.call(null,devtools.prefs._STAR_prefs_STAR_);
});
devtools.prefs.set_prefs_BANG_ = (function devtools$prefs$set_prefs_BANG_(new_prefs){
return (devtools.prefs._STAR_prefs_STAR_ = new_prefs);
});
devtools.prefs.set_pref_BANG_ = (function devtools$prefs$set_pref_BANG_(key,val){
return devtools.prefs.set_prefs_BANG_.call(null,cljs.core.assoc.call(null,devtools.prefs.get_prefs.call(null),key,val));
});
devtools.prefs.merge_prefs_BANG_ = (function devtools$prefs$merge_prefs_BANG_(m){
return devtools.prefs.set_prefs_BANG_.call(null,cljs.core.merge.call(null,devtools.prefs.get_prefs.call(null),m));
});
devtools.prefs.update_pref_BANG_ = (function devtools$prefs$update_pref_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___21419 = arguments.length;
var i__5727__auto___21420 = (0);
while(true){
if((i__5727__auto___21420 < len__5726__auto___21419)){
args__5732__auto__.push((arguments[i__5727__auto___21420]));

var G__21421 = (i__5727__auto___21420 + (1));
i__5727__auto___21420 = G__21421;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return devtools.prefs.update_pref_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(devtools.prefs.update_pref_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (key,f,args){
var new_val = cljs.core.apply.call(null,f,devtools.prefs.pref.call(null,key),args);
return devtools.prefs.set_pref_BANG_.call(null,key,new_val);
}));

(devtools.prefs.update_pref_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(devtools.prefs.update_pref_BANG_.cljs$lang$applyTo = (function (seq21416){
var G__21417 = cljs.core.first.call(null,seq21416);
var seq21416__$1 = cljs.core.next.call(null,seq21416);
var G__21418 = cljs.core.first.call(null,seq21416__$1);
var seq21416__$2 = cljs.core.next.call(null,seq21416__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21417,G__21418,seq21416__$2);
}));


//# sourceMappingURL=prefs.js.map?rel=1726541909514
