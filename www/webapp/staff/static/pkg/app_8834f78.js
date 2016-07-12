;/*!/components/component/actionsheet/index.js*/
define('actionsheet/index', function(require, exports, module) {

!function(e,t){module.exports=t()}(this,function(){return function(e){function t(i){if(o[i])return o[i].exports;var s=o[i]={exports:{},id:i,loaded:!1};return e[i].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){e.exports=o(4)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{show:{type:Boolean,required:!0,"default":!1,twoWay:!0},showCancel:{type:Boolean,"default":!1},cancelText:{type:String,"default":"cancel"},menus:{type:Object,"default":{}}},methods:{emitEvent:function(e,t){"menu-click"===e&&(this.$emit(e,t),this.show=!1)}}}},function(e,t){},function(e,t){e.exports='<div> <div class=weui_mask_transition :class="{\'weui_fade_toggle\': show}" :style="{display: show ? \'block\' : \'none\'}" @click="show=false"></div> <div class=weui_actionsheet :class="{\'weui_actionsheet_toggle\': show}"> <div class=weui_actionsheet_menu> <div class=weui_actionsheet_cell v-for="(key, text) in menus" @click="emitEvent(\'menu-click\', key)" v-html=text> </div> <div class=vux-actionsheet-gap v-if=showCancel></div> <div class="weui_actionsheet_cell vux-actionsheet-cancel" @click="emitEvent(\'menu-click\', \'cancel\')" v-if=showCancel>{{cancelText}}</div> </div> </div> </div>'},function(e,t,o){var i,s;o(2),i=o(1),s=o(3),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)}])});

});

;/*!/components/component/cell/index.js*/
define('cell/index', function(require, exports, module) {

!function(t,e){module.exports=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){t.exports=n(39)},function(t,e){var n=Object;t.exports={create:n.create,getProto:n.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:n.getOwnPropertyDescriptor,setDesc:n.defineProperty,setDescs:n.defineProperties,getKeys:n.keys,getNames:n.getOwnPropertyNames,getSymbols:n.getOwnPropertySymbols,each:[].forEach}},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var r=n(26),o=n(21);t.exports=function(t){return r(o(t))}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){var n=t.exports={version:"1.2.6"};"number"==typeof __e&&(__e=n)},function(t,e,n){t.exports=!n(7)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(2),o="__core-js_shared__",i=r[o]||(r[o]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){var r=n(10)("wks"),o=n(11),i=n(2).Symbol;t.exports=function(t){return r[t]||(r[t]=i&&i[t]||(i||o)("Symbol."+t))}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(40),i=r(o),u=n(14);e["default"]={components:{InlineDesc:i["default"]},props:{title:String,value:String,isLink:Boolean,inlineDesc:String,primary:{type:String,"default":"title"},link:{type:[String,Object]}},methods:{onClick:function(){(0,u.go)(this.link,this.$router)}}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!/^javas/.test(t)&&t){var n="object"===("undefined"==typeof t?"undefined":(0,c["default"])(t))||"string"==typeof t&&!/http/.test(t);n?e.go(t):window.location.href=t}}function i(t,e){return!e||e._history||"string"!=typeof t||/http/.test(t)?t&&"object"!==("undefined"==typeof t?"undefined":(0,c["default"])(t))?t:"javascript:void(0);":"#!"+t}Object.defineProperty(e,"__esModule",{value:!0});var u=n(16),c=r(u);e.go=o,e.getUrl=i},function(t,e,n){t.exports={"default":n(17),__esModule:!0}},function(t,e,n){"use strict";var r=n(15)["default"];e["default"]=function(t){return t&&t.constructor===r?"symbol":typeof t},e.__esModule=!0},function(t,e,n){n(34),n(33),t.exports=n(5).Symbol},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(28);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var r=n(18);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var r=n(1);t.exports=function(t){var e=r.getKeys(t),n=r.getSymbols;if(n)for(var o,i=n(t),u=r.isEnum,c=0;i.length>c;)u.call(t,o=i[c++])&&e.push(o);return e}},function(t,e,n){var r=n(2),o=n(5),i=n(20),u="prototype",c=function(t,e,n){var s,f,a,l=t&c.F,p=t&c.G,y=t&c.S,d=t&c.P,v=t&c.B,g=t&c.W,x=p?o:o[e]||(o[e]={}),h=p?r:y?r[e]:(r[e]||{})[u];p&&(n=e);for(s in n)f=!l&&h&&s in h,f&&s in x||(a=f?h[s]:n[s],x[s]=p&&"function"!=typeof h[s]?n[s]:v&&f?i(a,r):g&&h[s]==a?function(t){var e=function(e){return this instanceof t?new t(e):t(e)};return e[u]=t[u],e}(a):d&&"function"==typeof a?i(Function.call,a):a,d&&((x[u]||(x[u]={}))[s]=a))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,t.exports=c},function(t,e,n){var r=n(3),o=n(1).getNames,i={}.toString,u="object"==typeof window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return o(t)}catch(e){return u.slice()}};t.exports.get=function(t){return u&&"[object Window]"==i.call(t)?c(t):o(r(t))}},function(t,e,n){var r=n(1),o=n(9);t.exports=n(6)?function(t,e,n){return r.setDesc(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(4);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(4);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(1),o=n(3);t.exports=function(t,e){for(var n,i=o(t),u=r.getKeys(i),c=u.length,s=0;c>s;)if(i[n=u[s++]]===e)return n}},function(t,e){t.exports=!0},function(t,e,n){t.exports=n(25)},function(t,e,n){var r=n(1).setDesc,o=n(8),i=n(12)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e){},function(t,e,n){"use strict";var r=n(1),o=n(2),i=n(8),u=n(6),c=n(23),s=n(31),f=n(7),a=n(10),l=n(32),p=n(11),y=n(12),d=n(29),v=n(24),g=n(22),x=n(27),h=n(19),m=n(3),b=n(9),_=r.getDesc,w=r.setDesc,S=r.create,O=v.get,j=o.Symbol,P=o.JSON,k=P&&P.stringify,D=!1,M=y("_hidden"),E=r.isEnum,N=a("symbol-registry"),F=a("symbols"),C="function"==typeof j,T=Object.prototype,I=u&&f(function(){return 7!=S(w({},"a",{get:function(){return w(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=_(T,e);r&&delete T[e],w(t,e,n),r&&t!==T&&w(T,e,r)}:w,J=function(t){var e=F[t]=S(j.prototype);return e._k=t,u&&D&&I(T,t,{configurable:!0,set:function(e){i(this,M)&&i(this[M],t)&&(this[M][t]=!1),I(this,t,b(1,e))}}),e},W=function(t){return"symbol"==typeof t},A=function(t,e,n){return n&&i(F,e)?(n.enumerable?(i(t,M)&&t[M][e]&&(t[M][e]=!1),n=S(n,{enumerable:b(0,!1)})):(i(t,M)||w(t,M,b(1,{})),t[M][e]=!0),I(t,e,n)):w(t,e,n)},B=function(t,e){h(t);for(var n,r=g(e=m(e)),o=0,i=r.length;i>o;)A(t,n=r[o++],e[n]);return t},G=function(t,e){return void 0===e?S(t):B(S(t),e)},K=function(t){var e=E.call(this,t);return e||!i(this,t)||!i(F,t)||i(this,M)&&this[M][t]?e:!0},L=function(t,e){var n=_(t=m(t),e);return!n||!i(F,e)||i(t,M)&&t[M][e]||(n.enumerable=!0),n},z=function(t){for(var e,n=O(m(t)),r=[],o=0;n.length>o;)i(F,e=n[o++])||e==M||r.push(e);return r},U=function(t){for(var e,n=O(m(t)),r=[],o=0;n.length>o;)i(F,e=n[o++])&&r.push(F[e]);return r},$=function(t){if(void 0!==t&&!W(t)){for(var e,n,r=[t],o=1,i=arguments;i.length>o;)r.push(i[o++]);return e=r[1],"function"==typeof e&&(n=e),!n&&x(e)||(e=function(t,e){return n&&(e=n.call(this,t,e)),W(e)?void 0:e}),r[1]=e,k.apply(P,r)}},q=f(function(){var t=j();return"[null]"!=k([t])||"{}"!=k({a:t})||"{}"!=k(Object(t))});C||(j=function(){if(W(this))throw TypeError("Symbol is not a constructor");return J(p(arguments.length>0?arguments[0]:void 0))},s(j.prototype,"toString",function(){return this._k}),W=function(t){return t instanceof j},r.create=G,r.isEnum=K,r.getDesc=L,r.setDesc=A,r.setDescs=B,r.getNames=v.get=z,r.getSymbols=U,u&&!n(30)&&s(T,"propertyIsEnumerable",K,!0));var H={"for":function(t){return i(N,t+="")?N[t]:N[t]=j(t)},keyFor:function(t){return d(N,t)},useSetter:function(){D=!0},useSimple:function(){D=!1}};r.each.call("hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),function(t){var e=y(t);H[t]=C?e:J(e)}),D=!0,c(c.G+c.W,{Symbol:j}),c(c.S,"Symbol",H),c(c.S+c.F*!C,"Object",{create:G,defineProperty:A,defineProperties:B,getOwnPropertyDescriptor:L,getOwnPropertyNames:z,getOwnPropertySymbols:U}),P&&c(c.S+c.F*(!C||q),"JSON",{stringify:$}),l(j,"Symbol"),l(Math,"Math",!0),l(o.JSON,"JSON",!0)},function(t,e){},function(t,e){},function(t,e){t.exports="<div class=weui_cell :class=\"{'vux-tap-active': isLink || !!link}\" @click=onClick> <div class=weui_cell_hd> <slot name=icon></slot> </div> <div class=weui_cell_bd :class=\"{'weui_cell_primary':primary==='title'}\"> <p> {{title}} <slot name=after-title></slot> </p> <inline-desc>{{inlineDesc}}</inline-desc> </div> <div class=weui_cell_ft :class=\"{'weui_cell_primary':primary==='content', 'with_arrow': isLink || !!link}\"> {{value}} <slot name=value></slot> <slot></slot> </div> </div>"},function(t,e){t.exports="<span class=vux-label-desc><slot></slot></span>"},function(t,e,n){var r,o;n(35),r=n(13),o=n(37),t.exports=r||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)},function(t,e,n){var r,o;n(36),o=n(38),t.exports=r||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)}])});

});

;/*!/components/component/confirm/index.js*/
define('confirm/index', function(require, exports, module) {

!function(t,o){module.exports=o()}(this,function(){return function(t){function o(i){if(e[i])return e[i].exports;var n=e[i]={exports:{},id:i,loaded:!1};return t[i].call(n.exports,n,n.exports,o),n.loaded=!0,n.exports}var e={};return o.m=t,o.c=e,o.p="",o(0)}([function(t,o,e){t.exports=e(5)},function(t,o,e){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(o,"__esModule",{value:!0});var n=e(6),s=i(n);o["default"]={components:{Dialog:s["default"]},props:{show:{type:Boolean,"default":!1,twoWay:!0},title:{type:String,required:!0},confirmText:{type:String,"default":"confirm"},cancelText:{type:String,"default":"cancel"},maskTransition:{type:String,"default":"vux-fade"},dialogTransition:{type:String,"default":"vux-dialog"}},methods:{onConfirm:function(){this.show=!1,this.$emit("on-confirm")},onCancel:function(){this.show=!1,this.$emit("on-cancel")}},watch:{show:function(t){t&&this.$emit("on-show")}}}},function(t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o["default"]={props:{show:{type:Boolean,"default":!1},maskTransition:{type:String,"default":"vux-fade"},dialogTransition:{type:String,"default":"vux-dialog"}},watch:{show:function(t){this.$emit(t?"on-show":"on-hide")}}}},function(t,o){t.exports='<dialog class=weui_dialog_confirm :show=show :mask-transition=maskTransition :dialog-transition=dialogTransition @on-hide="$emit(\'on-hide\')" @on-show="$emit(\'on-show\')"> <div class=weui_dialog_hd><strong class=weui_dialog_title>{{title}}</strong></div> <div class=weui_dialog_bd><slot></slot></div> <div class=weui_dialog_ft> <a href=javascript:; class="weui_btn_dialog default" @click=onCancel>{{cancelText}}</a> <a href=javascript:; class="weui_btn_dialog primary" @click=onConfirm>{{confirmText}}</a> </div> </dialog>'},function(t,o){t.exports="<div class=weui_dialog_alert v-show=show :transition=maskTransition> <div class=weui_mask></div> <div class=weui_dialog v-show=show :transition=dialogTransition> <slot></slot> </div> </div>"},function(t,o,e){var i,n;i=e(1),n=e(3),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},function(t,o,e){var i,n;i=e(2),n=e(4),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)}])});

});

;/*!/components/component/group/index.js*/
define('group/index', function(require, exports, module) {

!function(t,e){module.exports=e()}(this,function(){return function(t){function e(s){if(o[s])return o[s].exports;var r=o[s]={exports:{},id:s,loaded:!1};return t[s].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var o={};return e.m=t,e.c=o,e.p="",e(0)}([function(t,e,o){t.exports=o(6)},function(t,e,o){"use strict";function s(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=o(5),i=s(r);e["default"]={components:{GroupTitle:i["default"]},props:{title:String,titleColor:String}}},function(t,e){},function(t,e){t.exports="<div class=weui_cells_title> <slot></slot> </div>"},function(t,e){t.exports="<div> <div class=weui_cells_title v-if=title :style={color:titleColor} v-html=title></div> <div class=weui_cells :class=\"{'vux-no-group-title':!title}\"> <slot></slot> </div> </div>"},function(t,e,o){var s,r;r=o(3),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)},function(t,e,o){var s,r;o(2),s=o(1),r=o(4),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)}])});

});

;/*!/components/component/loading/index.js*/
define('loading/index', function(require, exports, module) {

!function(t,e){module.exports=e()}(this,function(){return function(t){function e(s){if(o[s])return o[s].exports;var i=o[s]={exports:{},id:s,loaded:!1};return t[s].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var o={};return e.m=t,e.c=o,e.p="",e(0)}([function(t,e,o){t.exports=o(3)},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:{show:{type:Boolean,"default":!1},text:{type:String,"default":"Loading"}}}},function(t,e){t.exports='<div id=loadingToast class=weui_loading_toast v-show=show> <div class=weui_mask_transparent></div> <div class=weui_toast> <div class=weui_loading> <div class=weui_loading_leaf v-for="i in 12" :class="[\'weui_loading_leaf_\' + i]"></div> </div> <p class=weui_toast_content>{{text}}<slot></slot></p> </div> </div>'},function(t,e,o){var s,i;s=o(1),i=o(2),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=i)}])});

});

;/*!/components/component/main/service.js*/
define('main/service', function(require, exports, module) {

/**
 * Created by jack on 16/6/16.
 */

var Vue = require("component_modules/vue.js");

var prefix = "";

function co(callback){
 return function (rep) {
     if(rep.errno == 0){
         return callback.call(this,rep.data);
     }else{
         alert(rep.errmsg);
     }
 }
}

$.put = function (url,data,callback) {
    return  $.ajax({
        url:url,
        type:'PUT',
        data:data,
        contentType: "application/json",
        success:callback
    })
};

$.delete = function (url,callback) {
    return  $.ajax({
        url:url,
        type:'DELETE',
        contentType: "application/json",
        success:callback
    })
};

function getMine(c){
    $.get(prefix + "/api/mine",co(c))
}

function addPic(p,c){
    $.put(prefix + "/staff/addpic",JSON.stringify(p),c);
}

function delPic(p,c){
    $.delete(prefix + "/staff/picture/"+p,c);
}

function uploadHeadPic(p,c){
    $.put(prefix + "/staff/headpic",JSON.stringify(p),c);
}

function changeState(p,c){
    $.put(prefix + "/staff/state",JSON.stringify(p),c);
}

function updateInfo(p,c){
    $.put(prefix + "/staff/update",JSON.stringify(p),c);
}


function upload(data,c){
    $.ajax({
        url:prefix +"/api/upload",
        type:'POST',
        data:data,
        cache: false,
        contentType: false,
        processData: false,
        success:c
    })
}

module.exports = {
    addPic:addPic,
    delPic:delPic,
    getMine:getMine,
    upload:upload,
    changeState:changeState,
    updateInfo:updateInfo,
    uploadHeadPic:uploadHeadPic
};

});

;/*!/components/component/toast/index.js*/
define('toast/index', function(require, exports, module) {

!function(t,e){module.exports=e()}(this,function(){return function(t){function e(o){if(s[o])return s[o].exports;var i=s[o]={exports:{},id:o,loaded:!1};return t[o].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var s={};return e.m=t,e.c=s,e.p="",e(0)}([function(t,e,s){t.exports=s(4)},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:{show:{type:Boolean,"default":!1},time:{type:Number,"default":2e3},type:{type:String,"default":"success"},transition:{type:String,"default":"vux-fade"},width:{type:String,"default":"7.6em"}},computed:{toastClass:function(){return{weui_toast_forbidden:"warn"===this.type,weui_toast_cancel:"cancel"===this.type,weui_toast_success:"success"===this.type,weui_toast_text:"text"===this.type}}},watch:{show:function(t){var e=this;t&&(clearTimeout(this.timeout),this.timeout=setTimeout(function(){e.show=!1},this.time))}}}},function(t,e){},function(t,e){t.exports='<div v-show=show class=vux-toast :transition=transition> <div class=weui_mask_transparent></div> <div class=weui_toast :style="{width: width}" :class=toastClass> <i class=weui_icon_toast v-show="type !== \'text\'"></i> <p class=weui_toast_content><slot></slot></p> </div> </div>'},function(t,e,s){var o,i;s(2),o=s(1),i=s(3),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=i)}])});

});

;/*!/components/page/home/home.js*/
define('components/page/home/home', function(require, exports, module) {

/**
 * Created by jack on 16/6/4.
 */

var Vue = require("component_modules/vue.js");
var Service = require("main/service.js");
Vue.component("actionsheet",require("actionsheet/index.js"));
Vue.component("confirm",require("confirm/index.js"));
Vue.component("toast",require("toast/index.js"));

module.exports = Vue.extend({
    template:"<div class=\"page-home\">\n    <div class=\"weui_cells\">\n        <div class=\"weui_cell weui_cell_select weui_select_after\">\n            <div class=\"weui_cell_hd\">\n                <label for=\"\" class=\"weui_label\">我的状态</label>\n            </div>\n            <div class=\"weui_cell_bd weui_cell_primary\">\n                <select class=\"weui_select\" v-model=\"info.state\" @change=\"onStateChange\" number>\n                    <option value=\"{{$key}}\" v-for=\"s in state\">{{s}}</option>\n                </select>\n            </div>\n        </div>\n        <div class=\"weui_cells weui_cells_form\" style=\"margin-top: 0\">\n            <div class=\"weui_cell\">\n                <div class=\"weui_cell_bd weui_cell_primary\">\n                    <div class=\"weui_uploader\">\n                        <div class=\"weui_uploader_hd weui_cell\">\n                            <div class=\"weui_cell_bd weui_cell_primary\">我的照片</div>\n                            <div class=\"weui_cell_ft\">{{info.pics.length}}/4</div>\n                        </div>\n                        <div class=\"weui_uploader_bd\">\n                            <ul class=\"weui_uploader_files\">\n                                <li class=\"weui_uploader_file\" @click=\"onClickImg(p)\" v-for=\"p in info.pics\" :style=\"{'background-image':'url(/image/100/100/'+p+')'}\"></li>\n                            </ul>\n                            <div class=\"weui_uploader_input_wrp\" v-if=\"info.pics.length<4\">\n                                <input class=\"weui_uploader_input\" @change=\"onUpload($event)\" type=\"file\" accept=\"image/jpg,image/jpeg,image/png,image/gif\" multiple=\"\">\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"weui_cell weui_cells_access my-pic\">\n            <div class=\"weui_cell_bd weui_cell_primary\">\n                <p>我的头像</p>\n            </div>\n            <div class=\"weui_cell_ft\">\n                <img :src=\"info.avatar\" style=\"width: 66px;height:66px;border-radius: 5px;\" alt=\"\">\n                <input class=\"weui_uploader_input\" @change=\"onUploadHead($event)\" type=\"file\" accept=\"image/jpg,image/jpeg,image/png,image/gif\" multiple=\"\">\n            </div>\n        </div>\n\n        <a class=\"weui_cell weui_cells_access\" v-link=\"{path:'/edit/name/'+info.name+'/string'}\">\n            <div class=\"weui_cell_bd weui_cell_primary\">\n                <p>我的名字</p>\n            </div>\n            <div class=\"weui_cell_ft\">\n                {{info.name}}\n            </div>\n        </a>\n        <a class=\"weui_cell weui_cells_access\"  v-link=\"{path:'/edit/mobile/'+info.mobile+'/string'}\">\n            <div class=\"weui_cell_bd weui_cell_primary\">\n                <p>手机号码</p>\n            </div>\n            <div class=\"weui_cell_ft\">\n                {{info.mobile}}\n            </div>\n        </a>\n        <a class=\"weui_cell weui_cells_access\" v-link=\"{path:'/edit/age/'+info.age +'/int'}\">\n            <div class=\"weui_cell_bd weui_cell_primary\">\n                <p>我的年龄</p>\n            </div>\n            <div class=\"weui_cell_ft\">\n                {{info.age}}岁\n            </div>\n        </a>\n        <a class=\"weui_cell weui_cells_access\" v-link=\"{path:'/edit/height/'+(info.height||165) +'/int'}\">\n            <div class=\"weui_cell_bd weui_cell_primary\">\n                <p>我的身高</p>\n            </div>\n            <div class=\"weui_cell_ft\">\n                {{info.height?info.height+'cm':'请填写'}}\n            </div>\n        </a>\n\n        <a class=\"weui_cell weui_cells_access\"  v-link=\"{path:'/edit/weight/'+(info.weight||50) +'/int'}\">\n            <div class=\"weui_cell_bd weui_cell_primary\">\n                <p>我的体重</p>\n            </div>\n            <div class=\"weui_cell_ft\">\n                {{info.weight?info.weight+'公斤':'请填写'}}\n            </div>\n        </a>\n\n        <div class=\"weui_cells weui_cells_access\" style=\"margin-top:0;\">\n            <a  v-link=\"{path:'/edit/desc/'+(info.desc||'暂无') +'/string'}\" class=\"weui_cell \" >\n                <div class=\"weui_cell_bd weui_cell_primary\">\n                    <h3 style=\"font-size:17px;font-weight:normal;\">自我介绍</h3>\n                    <p style=\"font-size:13px;color:#999;\">{{info.desc||'暂无'}}</p>\n                </div>\n                <span class=\"weui_cell_ft\"></span>\n                </a>\n        </div>\n\n    </div>\n    <toast :show.sync=\"showToast\" :time=\"1000\">更新状态成功!</toast>\n    <loading :show=\"loading\" :text=\"text\"></loading>\n    <actionsheet :menus=\"menus\" :show.sync=\"showSheet\" @menu-click=\"onSheetClick\" show-cancel cancel-text=\"取消\"></actionsheet>\n    <confirm :show.sync=\"showConfirm\"  cancel-text=\"取消\" confirm-text=\"确定\" @on-confirm=\"onDelPic\" title=\"\"><p style=\"text-align:center;\">确定删除该图片?</p></confirm>\n</div>",
    data: function () {
        return {
            info:{
                pics:[],
                state:0
            },
            loading:true,
            text:"加载中",
            showSheet:false,
            showConfirm:false,
            showToast:false,
            state:{
                0:"现在空闲",
                1:"正在工作",
                2:"今日休息"
            },
            menus:{
                detail: '查看大图',
                del: '删除图片'
            },
            selectImg:null
        }
    },
    methods:{
        render: function () {
            this.renderInfo();
        },
        renderInfo: function () {
            var self = this;
            this.loading = true;
            this.text = "加载中";
            Service.getMine(function (rep) {
                self.info  = rep;
                if(!self.info.pics){
                    self.$set("info.pics",[]);
                }
                self.loading = false;
            })
        },
        onUpload: function (e) {
            var file = e.target.files[0];
            var self = this;
            this.loading = true;
            this.text = "上传中";
            lrz(file, {
                width: 500,
                done: function (rep) {
                    var data = new FormData();
                    data.append("file",rep.origin);
                    Service.upload(data, function (rep) {
                        self.info.pics.push(rep.data.name);
                        Service.addPic({pid:rep.data.name}, function (rep) {
                            self.loading = false;
                        });
                    });
                }
            });
        },
        onUploadHead:function(e){
            var file = e.target.files[0];
            var self = this;
            this.loading = true;
            this.text = "上传中";
            lrz(file, {
                width: 500,
                done: function (rep) {
                    var data = new FormData();
                    data.append("file",rep.origin);
                    Service.upload(data, function (rep) {
                        Service.uploadHeadPic({pid:rep.data.name}, function (rep) {
                            self.info.avatar = rep.data;
                            self.loading = false;
                        });
                    });
                }
            });
        },
        onClickImg: function (img) {
            this.showSheet = true;
            this.selectImg = img;
        },
        onSheetClick: function (e) {
            if(e != "cancel"){
                if(e == "del"){
                    this.showConfirm = true;

                }else if(e == "detail"){
                    this.$router.go("/image/"+encodeURIComponent(this.selectImg));
                }
            }
        },
        onDelPic: function () {
            this.info.pics.$remove(this.selectImg);
            Service.delPic(this.selectImg);
        },
        update: function () {
            var self = this;
            Service.update(this.info, function (rep) {
                self.loading = false;
            })
        },
        onStateChange: function () {
            var self = this;
            Service.changeState({state:this.info.state,msg:"当前状态-"+this.state[this.info.state]}, function () {
                self.showToast = true;
            })
        }
    },
    events:{
        reload:function(){
            this.render();
        }
    },
    ready: function () {
        this.render();
    }
});

});

;/*!/components/component/main/main.js*/
define('main/main', function(require, exports, module) {

/**
 * Created by jack on 16/2/17.
 */

var Vue = require("component_modules/vue.js");
var Router = require("component_modules/vue-router.js");

var home = require("components/page/home/home");

var loading = require("loading/index.js");
Vue.component("loading",loading);

Vue.use(Router);


store = {
   
};

router = new Router();
var App = Vue.extend({});


router.redirect({
    "/":"/home"
});

router.map({
    "/home":{
        component:home
    },
    "image/:url":{
        component: function (resolve) {
            require.async(["components/page/image/image"], function (c) {
                resolve(c);
            })
        }
    },
    "edit/:field/:value/:type":{
        component: function (resolve) {
            require.async(["components/page/edit/edit"], function (c) {
                resolve(c);
            })
        }
    },
});

router.start(App,'#app');



});

;/*!/components/page/image/image.js*/
define('components/page/image/image', function(require, exports, module) {

/**
 * Created by jack on 16/6/16.
 */

var Vue = require("component_modules/vue.js");

module.exports = Vue.extend({
    template:"<div class=\"page-image\">\n    <img :src=\"url\" alt=\"\" style=\"width: 100%\">\n</div>",
    data: function () {
        return {
            url:""
        }
    },
    methods:{
        
    },
    route:{
        data: function () {
            this.url = decodeURIComponent("/image/"+this.$route.params.url);
        }
    }
});

});

;/*!/components/component/x-input/index.js*/
define('x-input/index', function(require, exports, module) {

!function(t,e){module.exports=e()}(this,function(){return function(t){function e(n){if(i[n])return i[n].exports;var r=i[n]={exports:{},id:n,loaded:!1};return t[n].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}([function(t,e,i){t.exports=i(30)},function(t,e){"use strict";function i(t){if("string"!=typeof t)throw new TypeError("This library (validator.js) validates strings only")}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=i,t.exports=e["default"]},function(t,e){var i=t.exports={version:"1.2.6"};"number"==typeof __e&&(__e=i)},function(t,e){"use strict";function i(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=arguments[1];for(var i in e)"undefined"==typeof t[i]&&(t[i]=e[i]);return t}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=i,t.exports=e["default"]},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:{type:String},computed:{className:function(){return"weui_icon weui_icon_"+this.type}}}},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=i(8),o=n(r),u=i(6),s=n(u),l=i(28),a=n(l),f=i(29),d=n(f),c=i(22),p=n(c),h=i(24),v=n(h),x={email:{fn:p["default"],msg:"邮箱格式"},"china-mobile":{fn:function(t){return(0,v["default"])(t,"zh-CN")},msg:"手机号码"},"china-name":{fn:function(t){return t.length>=2&&t.length<=6},msg:"中文姓名"}};e["default"]={ready:function(){this.title||this.placeholder||console.warn("no title and no placeholder?"),this.equalWith&&(this.showClear=!1),this.required&&!this.value&&(this.valid=!1),"email"===this.isType&&(this.type="email")},mixins:[s["default"]],components:{Icon:a["default"],InlineDesc:d["default"]},props:{title:{type:String,"default":""},placeholder:String,value:{type:String,"default":"",twoWay:!0},readonly:{type:Boolean,"default":!1},keyboard:String,inlineDesc:String,isType:String,min:Number,max:Number,showClear:{type:Boolean,"default":!0},equalWith:String,type:{type:String,"default":"text"},textAlign:String},computed:{pattern:function(){return"number"===this.keyboard||"china-mobile"===this.isType?"[0-9]*":void 0},labelWidth:function(){return this.title.replace(/[^x00-xff]/g,"00").length/2+1},hasErrors:function(){return(0,o["default"])(this.errors).length>0},inputStyle:function(){return this.textAlign?{textAlign:this.textAlign}:void 0}},methods:{clear:function(){this.value="",this.focus=!0},blur:function(){this.setTouched(),this.validate()},getError:function(){var t=(0,o["default"])(this.errors)[0];this.firstError=this.errors[t]},validate:function(){if(this.equalWith)return void this.validateEqual();if(this.errors={},!this.value&&!this.required)return void(this.valid=!0);if(!this.value&&this.required)return this.valid=!1,void(this.errors.required="必填哦");var t=x[this.isType];if(t){if(this.valid=t.fn(this.value),!this.valid)return void(this.errors.format=t.msg+"格式不对哦~");delete this.errors.format}if(this.min){if(this.value.length<this.min)return this.errors.min=this.$interpolate("最少应该输入{{min}}个字符哦"),void(this.valid=!1);delete this.errors.min}if(this.max){if(this.value.length>this.max)return this.errors.max=this.$interpolate("最多可以输入{{max}}个字符哦"),this.valid=!1,void(this.forceShowError=!0);this.forceShowError=!1,delete this.errors.max}this.valid=!0},validateEqual:function(){var t=this.dirty||this.value.length>=this.equalWith.length;return t&&this.value!==this.equalWith?(this.valid=!1,void(this.errors.equal="输入不一致")):(this.valid=!0,void delete this.errors.equal)}},data:function _(){var _={firstError:"",forceShowError:!1,hasLengthEqual:!1,focus:!1};return _},watch:{focus:function(t){t&&this.$els.input.focus()},valid:function(){this.getError()},value:function(t){this.equalWith?(t.length===this.equalWith.length&&(this.hasLengthEqual=!0),this.validateEqual()):this.validate()}}}},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=i(7),o=n(r);e["default"]={mixins:[o["default"]],props:{required:{type:Boolean,"default":!0}},created:function(){this.handleChangeEvent=!1},computed:{dirty:function(){return!this.prisine},invalid:function(){return!this.valid}},methods:{setTouched:function(){this.touched=!0}},watch:{value:function(t){this.prisine===!0&&(this.prisine=!1),this.handleChangeEvent||this.$emit("change",t)}},data:function(){return{errors:{},prisine:!0,touched:!1,valid:!0}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={created:function(){this.uuid=Math.random().toString(36).substring(3,8)}}},function(t,e,i){t.exports={"default":i(9),__esModule:!0}},function(t,e,i){i(18),t.exports=i(2).Object.keys},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,i){var n=i(10);t.exports=function(t,e,i){if(n(t),void 0===e)return t;switch(i){case 1:return function(i){return t.call(e,i)};case 2:return function(i,n){return t.call(e,i,n)};case 3:return function(i,n,r){return t.call(e,i,n,r)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,i){var n=i(15),r=i(2),o=i(11),u="prototype",s=function(t,e,i){var l,a,f,d=t&s.F,c=t&s.G,p=t&s.S,h=t&s.P,v=t&s.B,x=t&s.W,_=c?r:r[e]||(r[e]={}),y=c?n:p?n[e]:(n[e]||{})[u];c&&(i=e);for(l in i)a=!d&&y&&l in y,a&&l in _||(f=a?y[l]:i[l],_[l]=c&&"function"!=typeof y[l]?i[l]:v&&a?o(f,n):x&&y[l]==f?function(t){var e=function(e){return this instanceof t?new t(e):t(e)};return e[u]=t[u],e}(f):h&&"function"==typeof f?o(Function.call,f):f,h&&((_[u]||(_[u]={}))[l]=f))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,t.exports=s},function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},function(t,e){var i=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=i)},function(t,e,i){var n=i(13),r=i(2),o=i(14);t.exports=function(t,e){var i=(r.Object||{})[t]||Object[t],u={};u[t]=e(i),n(n.S+n.F*o(function(){i(1)}),"Object",u)}},function(t,e,i){var n=i(12);t.exports=function(t){return Object(n(t))}},function(t,e,i){var n=i(17);i(16)("keys",function(t){return function(e){return t(n(e))}})},function(t,e){},function(t,e){},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function r(t,e){(0,s["default"])(t);var i=void 0,n=void 0;"object"===("undefined"==typeof e?"undefined":o(e))?(i=e.min||0,n=e.max):(i=arguments[1],n=arguments[2]);var r=encodeURI(t).split(/%..|./).length-1;return r>=i&&("undefined"==typeof n||n>=r)}Object.defineProperty(e,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};e["default"]=r;var u=i(1),s=n(u);t.exports=e["default"]},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function r(t,e){if((0,u["default"])(t),e=(0,l["default"])(e,p),e.allow_display_name){var i=t.match(h);i&&(t=i[1])}var n=t.split("@"),r=n.pop(),o=n.join("@"),s=r.toLowerCase();if("gmail.com"!==s&&"googlemail.com"!==s||(o=o.replace(/\./g,"").toLowerCase()),!(0,f["default"])(o,{max:64})||!(0,f["default"])(r,{max:256}))return!1;if(!(0,c["default"])(r,{require_tld:e.require_tld}))return!1;if('"'===o[0])return o=o.slice(1,o.length-1),e.allow_utf8_local_part?y.test(o):x.test(o);for(var a=e.allow_utf8_local_part?_:v,d=o.split("."),m=0;m<d.length;m++)if(!a.test(d[m]))return!1;return!0}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=r;var o=i(1),u=n(o),s=i(3),l=n(s),a=i(21),f=n(a),d=i(23),c=n(d),p={allow_display_name:!1,allow_utf8_local_part:!0,require_tld:!0},h=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i,v=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,x=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,_=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,y=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;t.exports=e["default"]},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function r(t,e){(0,u["default"])(t),e=(0,l["default"])(e,a),e.allow_trailing_dot&&"."===t[t.length-1]&&(t=t.substring(0,t.length-1));var i=t.split(".");if(e.require_tld){var n=i.pop();if(!i.length||!/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(n))return!1}for(var r,o=0;o<i.length;o++){if(r=i[o],e.allow_underscores&&(r=r.replace(/_/g,"")),!/^[a-z\u00a1-\uffff0-9-]+$/i.test(r))return!1;if(/[\uff01-\uff5e]/.test(r))return!1;if("-"===r[0]||"-"===r[r.length-1])return!1}return!0}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=r;var o=i(1),u=n(o),s=i(3),l=n(s),a={require_tld:!0,allow_underscores:!1,allow_trailing_dot:!1};t.exports=e["default"]},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function r(t,e){return(0,u["default"])(t),e in s?s[e].test(t):!1}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=r;var o=i(1),u=n(o),s={"ar-SY":/^(!?(\+?963)|0)?9\d{8}$/,"en-US":/^(\+?1)?[2-9]\d{2}[2-9](?!11)\d{6}$/,"cs-CZ":/^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,"de-DE":/^(\+?49[ \.\-])?([\(]{1}[0-9]{1,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/,"el-GR":/^(\+?30)?(69\d{8})$/,"en-AU":/^(\+?61|0)4\d{8}$/,"en-GB":/^(\+?44|0)7\d{9}$/,"en-HK":/^(\+?852\-?)?[569]\d{3}\-?\d{4}$/,"en-IN":/^(\+?91|0)?[789]\d{9}$/,"en-NZ":/^(\+?64|0)2\d{7,9}$/,"en-ZA":/^(\+?27|0)\d{9}$/,"en-ZM":/^(\+?26)?09[567]\d{7}$/,"es-ES":/^(\+?34)?(6\d{1}|7[1234])\d{7}$/,"fi-FI":/^(\+?358|0)\s?(4(0|1|2|4|5)?|50)\s?(\d\s?){4,8}\d$/,"fr-FR":/^(\+?33|0)[67]\d{8}$/,"ms-MY":/^(\+?6?01){1}(([145]{1}(\-|\s)?\d{7,8})|([236789]{1}(\s|\-)?\d{7}))$/,"nb-NO":/^(\+?47)?[49]\d{7}$/,"nn-NO":/^(\+?47)?[49]\d{7}$/,"pt-BR":/^(\+?55|0)\-?[1-9]{2}\-?[2-9]{1}\d{3,4}\-?\d{4}$/,"pt-PT":/^(\+?351)?9[1236]\d{7}$/,"ru-RU":/^(\+?7|8)?9\d{9}$/,"tr-TR":/^(\+?90|0)?5\d{9}$/,"vi-VN":/^(\+?84|0)?((1(2([0-9])|6([2-9])|88|99))|(9((?!5)[0-9])))([0-9]{7})$/,"zh-CN":/^(\+?0?86\-?)?((13\d|14[57]|15[^4,\D]|17[678]|18\d)\d{8}|170[059]\d{7})$/,"zh-TW":/^(\+?886\-?|0)?9\d{8}$/};t.exports=e["default"]},function(t,e){t.exports="<i class={{className}}></i>"},function(t,e){t.exports="<span class=vux-label-desc><slot></slot></span>"},function(t,e){t.exports='<div class=weui_cell :class="{\'weui_cell_warn\': !valid}"> <div class=weui_cell_hd> <label class=weui_label :style="{width: labelWidth + \'em\'}" v-if=title>{{title}}</label> <inline-desc v-if=inlineDesc>{{inlineDesc}}</inline-desc> </div> <div class="weui_cell_bd weui_cell_primary"> <input class=weui_input :style=inputStyle :type=type :pattern=pattern placeholder={{placeholder}} v-model=value :readonly=readonly @blur=blur v-el:input/> </div> <div class=weui_cell_ft> <icon type=clear v-show="showClear && value" @click=clear></icon> <icon type=warn title="{{!valid ? firstError : \'\'}}" v-show="!equalWith && ((touched && !valid && firstError) || (forceShowError && !valid && firstError))"></icon> <icon type=warn v-show="hasLengthEqual && dirty && equalWith && !valid"></icon> <icon type=success v-show="equalWith && equalWith===value && valid"></icon> <slot name=right><slot> </slot></slot></div> </div>'},function(t,e,i){var n,r;i(19),n=i(4),r=i(25),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)},function(t,e,i){var n,r;i(20),r=i(26),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)},function(t,e,i){var n,r;n=i(5),r=i(27),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)}])});

});

;/*!/components/component/x-button/index.js*/
define('x-button/index', function(require, exports, module) {

!function(t,e){module.exports=e()}(this,function(){return function(t){function e(n){if(o[n])return o[n].exports;var s=o[n]={exports:{},id:n,loaded:!1};return t[n].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var o={};return e.m=t,e.c=o,e.p="",e(0)}([function(t,e,o){t.exports=o(3)},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:{type:{"default":"default"},disabled:{type:Boolean,"default":!1},mini:{type:Boolean,"default":!1},plain:{type:Boolean,"default":!1},text:String},computed:{classes:function(){return[{weui_btn_disabled:this.disabled,weui_btn_mini:this.mini},"weui_btn_"+this.type,this.plain?"weui_btn_plain_"+this.type:""]}}}},function(t,e){t.exports="<button class=weui_btn :class=classes :disabled=disabled> {{text}}<slot></slot> </button>"},function(t,e,o){var n,s;n=o(1),s=o(2),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),s&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=s)}])});

});

;/*!/components/component/x-textarea/index.js*/
define('x-textarea/index', function(require, exports, module) {

!function(e,t){module.exports=t()}(this,function(){return function(e){function t(i){if(o[i])return o[i].exports;var n=o[i]={exports:{},id:i,loaded:!1};return e[i].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){e.exports=o(7)},function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(2),r=i(n),s=o(6),u=i(s);t["default"]={minxins:[r["default"]],components:{GroupTitle:u["default"]},props:{showCounter:{type:Boolean,"default":!0},max:Number,value:{type:String,"default":"",twoWay:!0},placeholder:{type:String,"default":""},rows:{type:Number,"default":3},cols:{type:Number,"default":30},height:Number},watch:{value:function(e){this.max&&this.value.length>this.max&&(this.value=e.slice(0,this.max)),this.$emit("on-change",this.value)}},computed:{count:function(){return this.value.length},textareaStyle:function(){return this.height?{height:this.height+"px"}:void 0}}}},function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(3),r=i(n);t["default"]={mixins:[r["default"]],props:{required:{type:Boolean,"default":!0}},created:function(){this.handleChangeEvent=!1},computed:{dirty:function(){return!this.prisine},invalid:function(){return!this.valid}},methods:{setTouched:function(){this.touched=!0}},watch:{value:function(e){this.prisine===!0&&(this.prisine=!1),this.handleChangeEvent||this.$emit("change",e)}},data:function(){return{errors:{},prisine:!0,touched:!1,valid:!0}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={created:function(){this.uuid=Math.random().toString(36).substring(3,8)}}},function(e,t){e.exports="<div class=weui_cells_title> <slot></slot> </div>"},function(e,t){e.exports='<div class=weui_cell> <div class="weui_cell_bd weui_cell_primary"> <textarea class=weui_textarea placeholder={{placeholder}} :rows=rows :cols=cols v-model=value :style=textareaStyle></textarea> <div class=weui_textarea_counter v-show="showCounter && max"><span>{{count}}</span>/{{max}}</div> </div> </div>'},function(e,t,o){var i,n;n=o(4),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),n&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=n)},function(e,t,o){var i,n;i=o(1),n=o(5),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),n&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=n)}])});

});

;/*!/components/component/range/index.js*/
define('range/index', function(require, exports, module) {

!function(t,e){module.exports=e()}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var s=n[i]={exports:{},id:i,loaded:!1};return t[i].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){t.exports=n(23)},function(t,e){"use strict";var n=window.addEventListener?"addEventListener":"attachEvent",i=window.removeEventListener?"removeEventListener":"detachEvent",s="addEventListener"!==n?"on":"";e.bind=function(t,e,i,o){return t[n](s+e,i,o||!1),i},e.unbind=function(t,e,n,o){return t[i](s+e,n,o||!1),n}},function(t,e){"use strict";e.isNumber=function(t){return"number"==typeof t},e.of=function(t,n){return e.isNumber(t)&&e.isNumber(n)?t/100*n:void 0},e.from=function(t,n){return e.isNumber(t)&&e.isNumber(n)?t/n*100:void 0}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(17);e["default"]={props:{decimal:{type:Boolean,"default":!1},value:{"default":0,type:Number,twoWay:!0},min:{"default":0},minHTML:String,maxHTML:String,max:{"default":100},step:{"default":0},disabled:{type:Boolean,"default":!1},disabledOpacity:{"default":.75},rangeBarHeight:{type:Number,"default":1},rangeHandleHeight:{type:Number,"default":30}},ready:function(){var t=this,e={decimal:t.decimal,start:t.value,min:t.min,max:t.max,minHTML:t.minHTML,maxHTML:t.maxHTML,disable:t.disabled,disabledOpacity:t.disabledOpacity,callback:function(){}};0!==t.step&&(e.step=t.step),this.range=new i(this.$el.querySelector(".vux-range-input"),e);var n=(this.rangeHandleHeight-this.rangeBarHeight)/2;this.$el.querySelector(".range-handle").style.top="-"+n+"px",this.$el.querySelector(".range-bar").style.height=this.rangeBarHeight+"px"},watch:{value:function(t){this.range.setStart(t)}},beforeDestroy:function(){}}},function(t,e,n){"use strict";function i(){a.apply(this,arguments),this.options.step&&this.step(this.slider.offsetWidth,this.handle.offsetWidth),this.setStart(this.options.start)}var s=n(15),o=n(6),r=n(2),a=n(16);t.exports=i,s(i,a),i.prototype.setStart=function(t){var e=null===t?this.options.min:t,n=r.from(e-this.options.min,this.options.max-this.options.min)||0,i=r.of(n,this.slider.offsetWidth-this.handle.offsetWidth),s=this.options.step?o.find(i,this.steps):i;this.setPosition(s),this.setValue(this.handle.style.left,this.slider.offsetWidth-this.handle.offsetWidth)},i.prototype.setPosition=function(t){this.handle.style.left=t+"px",this.slider.querySelector(".range-quantity").style.width=t+"px"},i.prototype.onmousedown=function(t){t.touches&&(t=t.touches[0]),this.startX=t.clientX,this.handleOffsetX=this.handle.offsetLeft,this.restrictHandleX=this.slider.offsetWidth-this.handle.offsetWidth,this.unselectable(this.slider,!0)},i.prototype.onmousemove=function(t){t.preventDefault(),t.touches&&(t=t.touches[0]);var e=this.handleOffsetX+t.clientX-this.startX,n=this.steps?o.find(e,this.steps):e;0>=e?this.setPosition(0):e>=this.restrictHandleX?this.setPosition(this.restrictHandleX):this.setPosition(n),this.setValue(this.handle.style.left,this.slider.offsetWidth-this.handle.offsetWidth)},i.prototype.onmouseup=function(t){this.unselectable(this.slider,!1)}},function(t,e,n){"use strict";function i(t){if(!t||!t.nodeType)throw new Error("A DOM element reference is required");this.el=t,this.list=t.classList}var s=n(11),o=/\s+/,r=Object.prototype.toString;t.exports=function(t){return new i(t)},i.prototype.add=function(t){if(this.list)return this.list.add(t),this;var e=this.array(),n=s(e,t);return~n||e.push(t),this.el.className=e.join(" "),this},i.prototype.remove=function(t){if("[object RegExp]"===r.call(t))return this.removeMatching(t);if(this.list)return this.list.remove(t),this;var e=this.array(),n=s(e,t);return~n&&e.splice(n,1),this.el.className=e.join(" "),this},i.prototype.removeMatching=function(t){for(var e=this.array(),n=0;n<e.length;n++)t.test(e[n])&&this.remove(e[n]);return this},i.prototype.toggle=function(t,e){return this.list?("undefined"!=typeof e?e!==this.list.toggle(t,e)&&this.list.toggle(t):this.list.toggle(t),this):("undefined"!=typeof e?e?this.add(t):this.remove(t):this.has(t)?this.remove(t):this.add(t),this)},i.prototype.array=function(){var t=this.el.getAttribute("class")||"",e=t.replace(/^\s+|\s+$/g,""),n=e.split(o);return""===n[0]&&n.shift(),n},i.prototype.has=i.prototype.contains=function(t){return this.list?this.list.contains(t):!!~s(this.array(),t)}},function(t,e){"use strict";e.find=function(t,e){for(var n=null,i=null,s=e[0],o=0;o<e.length;o++)n=Math.abs(t-s),i=Math.abs(t-e[o]),n>i&&(s=e[o]);return s}},function(t,e,n){"use strict";function i(t,e,n){for(n=n||document.documentElement;t&&t!==n;){if(s(t,e))return t;t=t.parentNode}return s(t,e)?t:null}var s=n(12);t.exports=i},function(t,e,n){"use strict";var i=n(7),s=n(1);e.bind=function(t,e,n,o,r){return s.bind(t,n,function(n){var s=n.target||n.srcElement;n.delegateTarget=i(s,e,!0,t),n.delegateTarget&&o.call(t,n)},r)},e.unbind=function(t,e,n,i){s.unbind(t,e,n,i)}},function(t,e){"use strict";function n(t){return t?i(t):void 0}function i(t){for(var e in n.prototype)t[e]=n.prototype[e];return t}t.exports=n,n.prototype.on=n.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},n.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this},n.prototype.off=n.prototype.removeListener=n.prototype.removeAllListeners=n.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},!arguments.length)return this._callbacks={},this;var n=this._callbacks["$"+t];if(!n)return this;if(1===arguments.length)return delete this._callbacks["$"+t],this;for(var i,s=0;s<n.length;s++)if(i=n[s],i===e||i.fn===e){n.splice(s,1);break}return this},n.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),n=this._callbacks["$"+t];if(n){n=n.slice(0);for(var i=0,s=n.length;s>i;++i)n[i].apply(this,e)}return this},n.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},n.prototype.hasListeners=function(t){return!!this.listeners(t).length}},function(t,e,n){"use strict";function i(t,e){if(!(this instanceof i))return new i(t,e);if(!t)throw new Error("element required");if(!e)throw new Error("object required");this.el=t,this.obj=e,this._events={}}function s(t){var e=t.split(/ +/);return{name:e.shift(),selector:e.join(" ")}}var o=n(1),r=n(8);t.exports=i,i.prototype.sub=function(t,e,n){this._events[t]=this._events[t]||{},this._events[t][e]=n},i.prototype.bind=function(t,e){var n=s(t),i=this.el,a=this.obj,u=n.name;e=e||"on"+u;var l=[].slice.call(arguments,2),h=function(){var t=[].slice.call(arguments).concat(l);a[e].apply(a,t)};return n.selector?h=r.bind(i,n.selector,u,h):o.bind(i,u,h),this.sub(u,e,h),h},i.prototype.unbind=function(t,e){if(0===arguments.length)return this.unbindAll();if(1===arguments.length)return this.unbindAllOf(t);var n=this._events[t];if(n){var i=n[e];i&&o.unbind(this.el,t,i)}},i.prototype.unbindAll=function(){for(var t in this._events)this.unbindAllOf(t)},i.prototype.unbindAllOf=function(t){var e=this._events[t];if(e)for(var n in e)this.unbind(t,n)}},function(t,e){"use strict";t.exports=function(t,e){if(t.indexOf)return t.indexOf(e);for(var n=0;n<t.length;++n)if(t[n]===e)return n;return-1}},function(t,e,n){"use strict";function i(t,e){if(!t||1!==t.nodeType)return!1;if(r)return r.call(t,e);for(var n=s.all(e,t.parentNode),i=0;i<n.length;++i)if(n[i]===t)return!0;return!1}var s=n(14),o=Element.prototype,r=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.msMatchesSelector||o.oMatchesSelector;t.exports=i},function(t,e,n){"use strict";function i(t,e){this.obj=e||{},this.el=t}var s=n(9),o=n(1);t.exports=function(t,e){return new i(t,e)},s(i.prototype),i.prototype.bind=function(){function t(s){n.onmouseup&&n.onmouseup(s),o.unbind(document,"mousemove",e),o.unbind(document,"mouseup",t),i.emit("up",s)}function e(t){n.onmousemove&&n.onmousemove(t),i.emit("move",t)}var n=this.obj,i=this;return i.down=function(s){n.onmousedown&&n.onmousedown(s),o.bind(document,"mouseup",t),o.bind(document,"mousemove",e),i.emit("down",s)},o.bind(this.el,"mousedown",i.down),this},i.prototype.unbind=function(){o.unbind(this.el,"mousedown",this.down),this.down=null}},function(t,e){"use strict";function n(t,e){return e.querySelector(t)}e=t.exports=function(t,e){return e=e||document,n(t,e)},e.all=function(t,e){return e=e||document,e.querySelectorAll(t)},e.engine=function(t){if(!t.one)throw new Error(".one callback required");if(!t.all)throw new Error(".all callback required");return e.all=t.all,e}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function s(){var t=a.call(arguments);if(t.length)return"function"!=typeof t[0]?u.merge(t):void u.inherits.apply(null,t)}var o=n(18),r=i(o),a=Array.prototype.slice,u=t.exports=s;u.extend=function(t,e){var n=this,i=function(){return n.apply(this,arguments)};return u.merge([i,this]),u.inherits(i,this),t&&u.merge([i.prototype,t]),e&&u.merge([i,e]),i.extend=this.extend,i},u.inherits=function(t,e){t.super_=e,r["default"]?t.prototype=(0,r["default"])(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}):(t.prototype=new e,t.prototype.constructor=t)},u.merge=function(t){for(var e=2===t.length?t.shift():{},n=null,i=0,s=t.length;s>i;i++){n=t[i];for(var o in n)n.hasOwnProperty(o)&&(e[o]=n[o])}return e}},function(t,e,n){"use strict";function i(t,e){return this instanceof i?(this.element=t,this.options=e||{},this.slider=this.create("span","range-bar"),void(null!==this.element&&"text"===this.element.type&&this.init())):new i(t,e)}var s=n(13),o=n(10),r=n(5),a=n(2);t.exports=i,i.prototype.bindEvents=function(){this.handle=this.slider.querySelector(".range-handle"),this.touch=o(this.handle,this),this.touch.bind("touchstart","onmousedown"),this.touch.bind("touchmove","onmousemove"),this.touch.bind("touchend","onmouseup"),this.mouse=s(this.handle,this),this.mouse.bind()},i.prototype.hide=function(){this.element.style.display="none"},i.prototype.append=function(){var t=this.generate();this.insertAfter(this.element,t)},i.prototype.generate=function(){var t={handle:{type:"span",selector:"range-handle"},min:{type:"span",selector:"range-min"},max:{type:"span",selector:"range-max"},quantity:{type:"span",selector:"range-quantity"}};for(var e in t)if(t.hasOwnProperty(e)){var n=this.create(t[e].type,t[e].selector);this.slider.appendChild(n)}return this.slider},i.prototype.create=function(t,e){var n=document.createElement(t);return n.className=e,n},i.prototype.insertAfter=function(t,e){t.parentNode.insertBefore(e,t.nextSibling)},i.prototype.extraClass=function(t){this.options.klass&&r(this.slider).add(t)},i.prototype.setRange=function(t,e){"number"!=typeof t||"number"!=typeof e||this.options.hideRange||(this.slider.querySelector(".range-min").innerHTML=this.options.minHTML||t,this.slider.querySelector(".range-max").innerHTML=this.options.maxHTML||e)},i.prototype.setValue=function(t,e){var n=a.from(parseFloat(t),e),i=a.of(n,this.options.max-this.options.min)+this.options.min,s=!1;i=this.options.decimal?Math.round(100*i)/100:Math.round(i),s=this.element.value!==i,this.element.value=i,this.options.callback(),s&&this.changeEvent()},i.prototype.step=function(t,e){for(var n=t-e,i=a.from(this.checkStep(this.options.step),this.options.max-this.options.min),s=a.of(i,n),o=[],r=0;n>=r;r+=s)o.push(r);return this.steps=o,this.steps},i.prototype.checkValues=function(t){t<this.options.min&&(this.options.start=this.options.min),t>this.options.max&&(this.options.start=this.options.max),this.options.min>=this.options.max&&(this.options.min=this.options.max)},i.prototype.checkStep=function(t){return 0>t&&(t=Math.abs(t)),this.options.step=t,this.options.step},i.prototype.disable=function(){(this.options.min===this.options.max||this.options.min>this.options.max||this.options.disable)&&(this.mouse.unbind(),this.touch.unbind(),this.slider.style.opacity=this.options.disableOpacity,r(this.handle).add("range-disabled"))},i.prototype.unselectable=function(t,e){r(this.slider).has("unselectable")||e!==!0?r(this.slider).remove("unselectable"):r(this.slider).add("unselectable")},i.prototype.changeEvent=function(t){if("function"!=typeof Event&&document.fireEvent)this.element.fireEvent("onchange");else{var e=document.createEvent("HTMLEvents");e.initEvent("change",!1,!0),this.element.dispatchEvent(e)}},i.prototype.init=function(){this.hide(),this.append(),this.bindEvents(),this.extraClass(this.options.klass),this.checkValues(this.options.start),this.setRange(this.options.min,this.options.max),this.disable()}},function(t,e,n){"use strict";var i=n(4),s={callback:function(){},decimal:!1,disable:!1,disableOpacity:.5,hideRange:!1,klass:"",min:0,max:100,start:null,step:null,vertical:!1};t.exports=function(t,e){e=e||{};for(var n in s)null==e[n]&&(e[n]=s[n]);return new i(t,e)}},function(t,e,n){t.exports={"default":n(19),__esModule:!0}},function(t,e,n){var i=n(20);t.exports=function(t,e){return i.create(t,e)}},function(t,e){var n=Object;t.exports={create:n.create,getProto:n.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:n.getOwnPropertyDescriptor,setDesc:n.defineProperty,setDescs:n.defineProperties,getKeys:n.keys,getNames:n.getOwnPropertyNames,getSymbols:n.getOwnPropertySymbols,each:[].forEach}},function(t,e){},function(t,e){t.exports="<div class=vux-range-input-box style=position:relative;margin-right:30px;margin-left:50px> <input class=vux-range-input v-model=value number> </div>"},function(t,e,n){var i,s;n(21),i=n(3),s=n(22),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),s&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=s)}])});

});

;/*!/components/page/edit/edit.js*/
define('components/page/edit/edit', function(require, exports, module) {

/**
 * Created by jack on 16/6/20.
 */

var Vue = require("component_modules/vue.js");
Vue.component("group",require("group/index.js"));
Vue.component("x-input",require("x-input/index.js"));
Vue.component("x-button",require("x-button/index.js"));
Vue.component("x-textarea",require("x-textarea/index.js"));
Vue.component("range",require("range/index.js"));
Vue.component("cell",require("cell/index.js"));
Vue.component("loading",require("loading/index.js"));

var Service = require("main/service.js");

module.exports = Vue.extend({
    template:"<div>\n    <group v-if=\"field=='height'\">\n        <cell  :title=\"value+'cm'\"  primary=\"content\">\n            <range slot=\"value\" :value.sync=\"value\" :max=\"200\" :min=\"120\"></range>\n        </cell>\n    </group>\n    <group v-if=\"field=='weight'\">\n        <cell  :title=\"value+'公斤'\"  primary=\"content\">\n            <range slot=\"value\" :value.sync=\"value\" :max=\"100\" :min=\"30\"></range>\n        </cell>\n    </group>\n    <group v-if=\"field=='age'\">\n        <cell  :title=\"value+'岁'\"  primary=\"content\">\n            <range slot=\"value\" :value.sync=\"value\" :max=\"60\" :min=\"16\"></range>\n        </cell>\n    </group>\n    <group v-if=\"field=='name'\">\n            <x-input title=\"名字\" :value.sync=\"value\" placeholder=\"请填写名字\"></x-input>\n    </group>\n    <group v-if=\"field=='mobile'\">\n        <x-input title=\"手机号码\" :value.sync=\"value\" placeholder=\"请填写手机号码\" is-type=\"china-mobile\"></x-input>\n    </group>\n    <group title=\"自我介绍\" v-if=\"field=='desc'\">\n        <x-textarea :max=\"200\" placeholder=\"喜欢看电影,听歌,渴望每天体验不一样的生活。\" :value.sync=\"value\" ></x-textarea>\n    </group>\n    <div class=\"weui_cells_tips\">请按真实情况填写。</div>\n    <div v-show=\"field=='desc'\" class=\"weui_cells_tips\">请勿填写你的联系方式,如手机号码,QQ,微信,陌陌等,如有发现,将有封号风险。</div>\n    <x-button style=\"position:absolute;width:100%;bottom:5px;\" type=\"primary\" @click=\"onSubmit\"  text=\"提交修改\"></x-button>\n    <loading :show=\"loading\" text=\"更新中\"></loading>\n</div>",
    data:function(){
        return {
            field:"",
            value:"",
            comp:"",
            disabled:true,
            loading:false
        }
    },
    methods:{
        update:function(){

        },
        onSubmit:function(){
            if(this.comp == this.value){
                this.$router.replace("/home");
            }else{
                this.loading = true;
                var self = this;
                Service.updateInfo(this.getData(),function(rep){
                    self.loading = false;
                    self.$root.$broadcast("reload");
                    self.$router.replace("/home");
                })
            }
        },
        getData:function(){
            var model = {
                age:null,
                weight:null,
                height:null,
                desc:null,
                name:null
            };
            model[this.field] = this.value;
            for(var i in model){
                if(! model[i]){
                    delete model[i];
                }
            }
            return model;
        }
    },
    route:{
        data:function(){
            var v = this.$route.params.value,
                type = this.$route.params.type;

            if(type == "int"){
                v = parseInt(v);
            }
            if(v == '暂无'){
                v = "";
            }

            this.field = this.$route.params.field;
            this.value = v;
            this.comp = v;
        }
    }
});

});
