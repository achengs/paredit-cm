// Compiled by ClojureScript 1.11.132 {:optimizations :none}
goog.provide('devtools.formatters.core');
goog.require('cljs.core');
goog.require('devtools.prefs');
goog.require('devtools.format');
goog.require('devtools.protocols');
goog.require('devtools.reporter');
goog.require('devtools.formatters.templating');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('devtools.formatters.markup');
goog.require('devtools.formatters.budgeting');
devtools.formatters.core.want_value_QMARK__STAR_ = (function devtools$formatters$core$want_value_QMARK__STAR_(value){
var and__5000__auto__ = cljs.core.not.call(null,devtools.formatters.state.prevent_recursion_QMARK_.call(null));
if(and__5000__auto__){
var or__5002__auto__ = devtools.formatters.helpers.cljs_value_QMARK_.call(null,value);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return devtools.formatters.templating.surrogate_QMARK_.call(null,value);
}
} else {
return and__5000__auto__;
}
});
devtools.formatters.core.header_STAR_ = (function devtools$formatters$core$header_STAR_(value){
var json_ml = ((devtools.formatters.templating.surrogate_QMARK_.call(null,value))?devtools.formatters.templating.render_markup.call(null,devtools.formatters.markup._LT_surrogate_header_GT_.call(null,value)):(cljs.core.truth_((function (){try{if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$format$IDevtoolsFormat$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.format.IDevtoolsFormat,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.format.IDevtoolsFormat,value);
}
}catch (e22139){var e__20691__auto__ = e22139;
return false;
}})())?devtools.format._header.call(null,value):(cljs.core.truth_((function (){try{if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IFormat$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IFormat,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IFormat,value);
}
}catch (e22141){var e__20691__auto__ = e22141;
return false;
}})())?devtools.protocols._header.call(null,value):devtools.formatters.templating.render_markup.call(null,devtools.formatters.markup._LT_header_GT_.call(null,value))
)));
return devtools.formatters.budgeting.alter_json_ml_to_fit_in_remaining_budget_BANG_.call(null,value,json_ml);
});
devtools.formatters.core.has_body_STAR_ = (function devtools$formatters$core$has_body_STAR_(value){
if(cljs.core.truth_(devtools.formatters.budgeting.was_over_budget_QMARK__BANG_.call(null,value))){
return false;
} else {
return cljs.core.boolean$.call(null,((devtools.formatters.templating.surrogate_QMARK_.call(null,value))?(!((devtools.formatters.templating.get_surrogate_body.call(null,value) == null))):(cljs.core.truth_((function (){try{if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$format$IDevtoolsFormat$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.format.IDevtoolsFormat,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.format.IDevtoolsFormat,value);
}
}catch (e22143){var e__20691__auto__ = e22143;
return false;
}})())?devtools.format._has_body.call(null,value):(cljs.core.truth_((function (){try{if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IFormat$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IFormat,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IFormat,value);
}
}catch (e22145){var e__20691__auto__ = e22145;
return false;
}})())?devtools.protocols._has_body.call(null,value):false
))));
}
});
devtools.formatters.core.body_STAR_ = (function devtools$formatters$core$body_STAR_(value){
devtools.formatters.state.update_current_state_BANG_.call(null,devtools.formatters.state.reset_depth_limits);

if(devtools.formatters.templating.surrogate_QMARK_.call(null,value)){
return devtools.formatters.templating.render_markup.call(null,devtools.formatters.markup._LT_surrogate_body_GT_.call(null,value));
} else {
if(cljs.core.truth_((function (){try{if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$format$IDevtoolsFormat$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.format.IDevtoolsFormat,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.format.IDevtoolsFormat,value);
}
}catch (e22147){var e__20691__auto__ = e22147;
return false;
}})())){
return devtools.format._body.call(null,value);
} else {
if(cljs.core.truth_((function (){try{if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IFormat$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IFormat,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IFormat,value);
}
}catch (e22149){var e__20691__auto__ = e22149;
return false;
}})())){
return devtools.protocols._body.call(null,value);
} else {
return null;
}
}
}
});
devtools.formatters.core.config_wrapper = (function devtools$formatters$core$config_wrapper(raw_fn){
return (function (value,config){
var _STAR_current_state_STAR__orig_val__22151 = devtools.formatters.state._STAR_current_state_STAR_;
var _STAR_current_state_STAR__temp_val__22152 = (function (){var or__5002__auto__ = config;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return devtools.formatters.state.get_default_state.call(null);
}
})();
(devtools.formatters.state._STAR_current_state_STAR_ = _STAR_current_state_STAR__temp_val__22152);

try{return raw_fn.call(null,value);
}finally {(devtools.formatters.state._STAR_current_state_STAR_ = _STAR_current_state_STAR__orig_val__22151);
}});
});
devtools.formatters.core.want_value_QMARK_ = devtools.formatters.core.config_wrapper.call(null,devtools.formatters.core.want_value_QMARK__STAR_);
devtools.formatters.core.header = devtools.formatters.core.config_wrapper.call(null,devtools.formatters.core.header_STAR_);
devtools.formatters.core.has_body = devtools.formatters.core.config_wrapper.call(null,devtools.formatters.core.has_body_STAR_);
devtools.formatters.core.body = devtools.formatters.core.config_wrapper.call(null,devtools.formatters.core.body_STAR_);
devtools.formatters.core.wrap_with_exception_guard = (function devtools$formatters$core$wrap_with_exception_guard(f){
return (function() { 
var G__22154__delegate = function (args){
try{return cljs.core.apply.call(null,f,args);
}catch (e22153){var e = e22153;
devtools.reporter.report_internal_error_BANG_.call(null,e,"an exception was raised during value formatting");

return null;
}};
var G__22154 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22155__i = 0, G__22155__a = new Array(arguments.length -  0);
while (G__22155__i < G__22155__a.length) {G__22155__a[G__22155__i] = arguments[G__22155__i + 0]; ++G__22155__i;}
  args = new cljs.core.IndexedSeq(G__22155__a,0,null);
} 
return G__22154__delegate.call(this,args);};
G__22154.cljs$lang$maxFixedArity = 0;
G__22154.cljs$lang$applyTo = (function (arglist__22156){
var args = cljs.core.seq(arglist__22156);
return G__22154__delegate(args);
});
G__22154.cljs$core$IFn$_invoke$arity$variadic = G__22154__delegate;
return G__22154;
})()
;
});
devtools.formatters.core.build_api_call = (function devtools$formatters$core$build_api_call(raw_fn,pre_handler_key,post_handler_key){

var handler = (function (value,config){
var pre_handler = (function (){var or__5002__auto__ = devtools.prefs.pref.call(null,pre_handler_key);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.identity;
}
})();
var post_handler = (function (){var or__5002__auto__ = devtools.prefs.pref.call(null,post_handler_key);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.identity;
}
})();
var preprocessed_value = pre_handler.call(null,value);
var result = (cljs.core.truth_(devtools.formatters.core.want_value_QMARK_.call(null,preprocessed_value,config))?raw_fn.call(null,preprocessed_value,config):null);
return post_handler.call(null,result);
});
return devtools.formatters.core.wrap_with_exception_guard.call(null,handler);
});
devtools.formatters.core.header_api_call = devtools.formatters.core.build_api_call.call(null,devtools.formatters.core.header,new cljs.core.Keyword(null,"header-pre-handler","header-pre-handler",-1997722262),new cljs.core.Keyword(null,"header-post-handler","header-post-handler",514828618));
devtools.formatters.core.has_body_api_call = devtools.formatters.core.build_api_call.call(null,devtools.formatters.core.has_body,new cljs.core.Keyword(null,"has-body-pre-handler","has-body-pre-handler",1787020038),new cljs.core.Keyword(null,"has-body-post-handler","has-body-post-handler",-863451271));
devtools.formatters.core.body_api_call = devtools.formatters.core.build_api_call.call(null,devtools.formatters.core.body,new cljs.core.Keyword(null,"body-pre-handler","body-pre-handler",1211926529),new cljs.core.Keyword(null,"body-post-handler","body-post-handler",-1040905424));

//# sourceMappingURL=core.js.map?rel=1726541910683
