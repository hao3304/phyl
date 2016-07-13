!function(t,e){module.exports=e()}(this,function(){return function(t){function e(n){if(i[n])return i[n].exports;var r=i[n]={exports:{},id:n,loaded:!1};return t[n].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}([function(t,e,i){t.exports=i(30)},function(t,e){"use strict";function i(t){if("string"!=typeof t)throw new TypeError("This library (validator.js) validates strings only")}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=i,t.exports=e["default"]},function(t,e){var i=t.exports={version:"1.2.6"};"number"==typeof __e&&(__e=i)},function(t,e){"use strict";function i(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=arguments[1];for(var i in e)"undefined"==typeof t[i]&&(t[i]=e[i]);return t}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=i,t.exports=e["default"]},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:{type:String},computed:{className:function(){return"weui_icon weui_icon_"+this.type}}}},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=i(8),o=n(r),u=i(6),s=n(u),l=i(28),a=n(l),f=i(29),d=n(f),c=i(22),p=n(c),h=i(24),v=n(h),x={email:{fn:p["default"],msg:"邮箱格式"},"china-mobile":{fn:function(t){return(0,v["default"])(t,"zh-CN")},msg:"手机号码"},"china-name":{fn:function(t){return t.length>=2&&t.length<=6},msg:"中文姓名"}};e["default"]={ready:function(){this.title||this.placeholder||console.warn("no title and no placeholder?"),this.equalWith&&(this.showClear=!1),this.required&&!this.value&&(this.valid=!1),"email"===this.isType&&(this.type="email")},mixins:[s["default"]],components:{Icon:a["default"],InlineDesc:d["default"]},props:{title:{type:String,"default":""},placeholder:String,value:{type:String,"default":"",twoWay:!0},readonly:{type:Boolean,"default":!1},keyboard:String,inlineDesc:String,isType:String,min:Number,max:Number,showClear:{type:Boolean,"default":!0},equalWith:String,type:{type:String,"default":"text"},textAlign:String},computed:{pattern:function(){return"number"===this.keyboard||"china-mobile"===this.isType?"[0-9]*":void 0},labelWidth:function(){return this.title.replace(/[^x00-xff]/g,"00").length/2+1},hasErrors:function(){return(0,o["default"])(this.errors).length>0},inputStyle:function(){return this.textAlign?{textAlign:this.textAlign}:void 0}},methods:{clear:function(){this.value="",this.focus=!0},blur:function(){this.setTouched(),this.validate()},getError:function(){var t=(0,o["default"])(this.errors)[0];this.firstError=this.errors[t]},validate:function(){if(this.equalWith)return void this.validateEqual();if(this.errors={},!this.value&&!this.required)return void(this.valid=!0);if(!this.value&&this.required)return this.valid=!1,void(this.errors.required="必填哦");var t=x[this.isType];if(t){if(this.valid=t.fn(this.value),!this.valid)return void(this.errors.format=t.msg+"格式不对哦~");delete this.errors.format}if(this.min){if(this.value.length<this.min)return this.errors.min=this.$interpolate("最少应该输入{{min}}个字符哦"),void(this.valid=!1);delete this.errors.min}if(this.max){if(this.value.length>this.max)return this.errors.max=this.$interpolate("最多可以输入{{max}}个字符哦"),this.valid=!1,void(this.forceShowError=!0);this.forceShowError=!1,delete this.errors.max}this.valid=!0},validateEqual:function(){var t=this.dirty||this.value.length>=this.equalWith.length;return t&&this.value!==this.equalWith?(this.valid=!1,void(this.errors.equal="输入不一致")):(this.valid=!0,void delete this.errors.equal)}},data:function _(){var _={firstError:"",forceShowError:!1,hasLengthEqual:!1,focus:!1};return _},watch:{focus:function(t){t&&this.$els.input.focus()},valid:function(){this.getError()},value:function(t){this.equalWith?(t.length===this.equalWith.length&&(this.hasLengthEqual=!0),this.validateEqual()):this.validate()}}}},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var r=i(7),o=n(r);e["default"]={mixins:[o["default"]],props:{required:{type:Boolean,"default":!0}},created:function(){this.handleChangeEvent=!1},computed:{dirty:function(){return!this.prisine},invalid:function(){return!this.valid}},methods:{setTouched:function(){this.touched=!0}},watch:{value:function(t){this.prisine===!0&&(this.prisine=!1),this.handleChangeEvent||this.$emit("change",t)}},data:function(){return{errors:{},prisine:!0,touched:!1,valid:!0}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={created:function(){this.uuid=Math.random().toString(36).substring(3,8)}}},function(t,e,i){t.exports={"default":i(9),__esModule:!0}},function(t,e,i){i(18),t.exports=i(2).Object.keys},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,i){var n=i(10);t.exports=function(t,e,i){if(n(t),void 0===e)return t;switch(i){case 1:return function(i){return t.call(e,i)};case 2:return function(i,n){return t.call(e,i,n)};case 3:return function(i,n,r){return t.call(e,i,n,r)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,i){var n=i(15),r=i(2),o=i(11),u="prototype",s=function(t,e,i){var l,a,f,d=t&s.F,c=t&s.G,p=t&s.S,h=t&s.P,v=t&s.B,x=t&s.W,_=c?r:r[e]||(r[e]={}),y=c?n:p?n[e]:(n[e]||{})[u];c&&(i=e);for(l in i)a=!d&&y&&l in y,a&&l in _||(f=a?y[l]:i[l],_[l]=c&&"function"!=typeof y[l]?i[l]:v&&a?o(f,n):x&&y[l]==f?function(t){var e=function(e){return this instanceof t?new t(e):t(e)};return e[u]=t[u],e}(f):h&&"function"==typeof f?o(Function.call,f):f,h&&((_[u]||(_[u]={}))[l]=f))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,t.exports=s},function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},function(t,e){var i=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=i)},function(t,e,i){var n=i(13),r=i(2),o=i(14);t.exports=function(t,e){var i=(r.Object||{})[t]||Object[t],u={};u[t]=e(i),n(n.S+n.F*o(function(){i(1)}),"Object",u)}},function(t,e,i){var n=i(12);t.exports=function(t){return Object(n(t))}},function(t,e,i){var n=i(17);i(16)("keys",function(t){return function(e){return t(n(e))}})},function(t,e){},function(t,e){},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function r(t,e){(0,s["default"])(t);var i=void 0,n=void 0;"object"===("undefined"==typeof e?"undefined":o(e))?(i=e.min||0,n=e.max):(i=arguments[1],n=arguments[2]);var r=encodeURI(t).split(/%..|./).length-1;return r>=i&&("undefined"==typeof n||n>=r)}Object.defineProperty(e,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};e["default"]=r;var u=i(1),s=n(u);t.exports=e["default"]},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function r(t,e){if((0,u["default"])(t),e=(0,l["default"])(e,p),e.allow_display_name){var i=t.match(h);i&&(t=i[1])}var n=t.split("@"),r=n.pop(),o=n.join("@"),s=r.toLowerCase();if("gmail.com"!==s&&"googlemail.com"!==s||(o=o.replace(/\./g,"").toLowerCase()),!(0,f["default"])(o,{max:64})||!(0,f["default"])(r,{max:256}))return!1;if(!(0,c["default"])(r,{require_tld:e.require_tld}))return!1;if('"'===o[0])return o=o.slice(1,o.length-1),e.allow_utf8_local_part?y.test(o):x.test(o);for(var a=e.allow_utf8_local_part?_:v,d=o.split("."),m=0;m<d.length;m++)if(!a.test(d[m]))return!1;return!0}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=r;var o=i(1),u=n(o),s=i(3),l=n(s),a=i(21),f=n(a),d=i(23),c=n(d),p={allow_display_name:!1,allow_utf8_local_part:!0,require_tld:!0},h=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i,v=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,x=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,_=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,y=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;t.exports=e["default"]},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function r(t,e){(0,u["default"])(t),e=(0,l["default"])(e,a),e.allow_trailing_dot&&"."===t[t.length-1]&&(t=t.substring(0,t.length-1));var i=t.split(".");if(e.require_tld){var n=i.pop();if(!i.length||!/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(n))return!1}for(var r,o=0;o<i.length;o++){if(r=i[o],e.allow_underscores&&(r=r.replace(/_/g,"")),!/^[a-z\u00a1-\uffff0-9-]+$/i.test(r))return!1;if(/[\uff01-\uff5e]/.test(r))return!1;if("-"===r[0]||"-"===r[r.length-1])return!1}return!0}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=r;var o=i(1),u=n(o),s=i(3),l=n(s),a={require_tld:!0,allow_underscores:!1,allow_trailing_dot:!1};t.exports=e["default"]},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function r(t,e){return(0,u["default"])(t),e in s?s[e].test(t):!1}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=r;var o=i(1),u=n(o),s={"ar-SY":/^(!?(\+?963)|0)?9\d{8}$/,"en-US":/^(\+?1)?[2-9]\d{2}[2-9](?!11)\d{6}$/,"cs-CZ":/^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,"de-DE":/^(\+?49[ \.\-])?([\(]{1}[0-9]{1,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/,"el-GR":/^(\+?30)?(69\d{8})$/,"en-AU":/^(\+?61|0)4\d{8}$/,"en-GB":/^(\+?44|0)7\d{9}$/,"en-HK":/^(\+?852\-?)?[569]\d{3}\-?\d{4}$/,"en-IN":/^(\+?91|0)?[789]\d{9}$/,"en-NZ":/^(\+?64|0)2\d{7,9}$/,"en-ZA":/^(\+?27|0)\d{9}$/,"en-ZM":/^(\+?26)?09[567]\d{7}$/,"es-ES":/^(\+?34)?(6\d{1}|7[1234])\d{7}$/,"fi-FI":/^(\+?358|0)\s?(4(0|1|2|4|5)?|50)\s?(\d\s?){4,8}\d$/,"fr-FR":/^(\+?33|0)[67]\d{8}$/,"ms-MY":/^(\+?6?01){1}(([145]{1}(\-|\s)?\d{7,8})|([236789]{1}(\s|\-)?\d{7}))$/,"nb-NO":/^(\+?47)?[49]\d{7}$/,"nn-NO":/^(\+?47)?[49]\d{7}$/,"pt-BR":/^(\+?55|0)\-?[1-9]{2}\-?[2-9]{1}\d{3,4}\-?\d{4}$/,"pt-PT":/^(\+?351)?9[1236]\d{7}$/,"ru-RU":/^(\+?7|8)?9\d{9}$/,"tr-TR":/^(\+?90|0)?5\d{9}$/,"vi-VN":/^(\+?84|0)?((1(2([0-9])|6([2-9])|88|99))|(9((?!5)[0-9])))([0-9]{7})$/,"zh-CN":/^(\+?0?86\-?)?((13\d|14[57]|15[^4,\D]|17[678]|18\d)\d{8}|170[059]\d{7})$/,"zh-TW":/^(\+?886\-?|0)?9\d{8}$/};t.exports=e["default"]},function(t,e){t.exports="<i class={{className}}></i>"},function(t,e){t.exports="<span class=vux-label-desc><slot></slot></span>"},function(t,e){t.exports='<div class=weui_cell :class="{\'weui_cell_warn\': !valid}"> <div class=weui_cell_hd> <label class=weui_label :style="{width: labelWidth + \'em\'}" v-if=title>{{title}}</label> <inline-desc v-if=inlineDesc>{{inlineDesc}}</inline-desc> </div> <div class="weui_cell_bd weui_cell_primary"> <input class=weui_input :style=inputStyle :type=type :pattern=pattern placeholder={{placeholder}} v-model=value :readonly=readonly @blur=blur v-el:input/> </div> <div class=weui_cell_ft> <icon type=clear v-show="showClear && value" @click=clear></icon> <icon type=warn title="{{!valid ? firstError : \'\'}}" v-show="!equalWith && ((touched && !valid && firstError) || (forceShowError && !valid && firstError))"></icon> <icon type=warn v-show="hasLengthEqual && dirty && equalWith && !valid"></icon> <icon type=success v-show="equalWith && equalWith===value && valid"></icon> <slot name=right><slot> </slot></slot></div> </div>'},function(t,e,i){var n,r;i(19),n=i(4),r=i(25),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)},function(t,e,i){var n,r;i(20),r=i(26),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)},function(t,e,i){var n,r;n=i(5),r=i(27),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),r&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=r)}])});