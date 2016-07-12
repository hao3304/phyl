;/*!/components/component/actionsheet/index.js*/
define('actionsheet/index', function(require, exports, module) {

!function(e,t){module.exports=t()}(this,function(){return function(e){function t(i){if(o[i])return o[i].exports;var s=o[i]={exports:{},id:i,loaded:!1};return e[i].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){e.exports=o(4)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{show:{type:Boolean,required:!0,"default":!1,twoWay:!0},showCancel:{type:Boolean,"default":!1},cancelText:{type:String,"default":"cancel"},menus:{type:Object,"default":{}}},methods:{emitEvent:function(e,t){"menu-click"===e&&(this.$emit(e,t),this.show=!1)}}}},function(e,t){},function(e,t){e.exports='<div> <div class=weui_mask_transition :class="{\'weui_fade_toggle\': show}" :style="{display: show ? \'block\' : \'none\'}" @click="show=false"></div> <div class=weui_actionsheet :class="{\'weui_actionsheet_toggle\': show}"> <div class=weui_actionsheet_menu> <div class=weui_actionsheet_cell v-for="(key, text) in menus" @click="emitEvent(\'menu-click\', key)" v-html=text> </div> <div class=vux-actionsheet-gap v-if=showCancel></div> <div class="weui_actionsheet_cell vux-actionsheet-cancel" @click="emitEvent(\'menu-click\', \'cancel\')" v-if=showCancel>{{cancelText}}</div> </div> </div> </div>'},function(e,t,o){var i,s;o(2),i=o(1),s=o(3),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)}])});

});

;/*!/components/component/confirm/index.js*/
define('confirm/index', function(require, exports, module) {

!function(t,o){module.exports=o()}(this,function(){return function(t){function o(i){if(e[i])return e[i].exports;var n=e[i]={exports:{},id:i,loaded:!1};return t[i].call(n.exports,n,n.exports,o),n.loaded=!0,n.exports}var e={};return o.m=t,o.c=e,o.p="",o(0)}([function(t,o,e){t.exports=e(5)},function(t,o,e){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(o,"__esModule",{value:!0});var n=e(6),s=i(n);o["default"]={components:{Dialog:s["default"]},props:{show:{type:Boolean,"default":!1,twoWay:!0},title:{type:String,required:!0},confirmText:{type:String,"default":"confirm"},cancelText:{type:String,"default":"cancel"},maskTransition:{type:String,"default":"vux-fade"},dialogTransition:{type:String,"default":"vux-dialog"}},methods:{onConfirm:function(){this.show=!1,this.$emit("on-confirm")},onCancel:function(){this.show=!1,this.$emit("on-cancel")}},watch:{show:function(t){t&&this.$emit("on-show")}}}},function(t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o["default"]={props:{show:{type:Boolean,"default":!1},maskTransition:{type:String,"default":"vux-fade"},dialogTransition:{type:String,"default":"vux-dialog"}},watch:{show:function(t){this.$emit(t?"on-show":"on-hide")}}}},function(t,o){t.exports='<dialog class=weui_dialog_confirm :show=show :mask-transition=maskTransition :dialog-transition=dialogTransition @on-hide="$emit(\'on-hide\')" @on-show="$emit(\'on-show\')"> <div class=weui_dialog_hd><strong class=weui_dialog_title>{{title}}</strong></div> <div class=weui_dialog_bd><slot></slot></div> <div class=weui_dialog_ft> <a href=javascript:; class="weui_btn_dialog default" @click=onCancel>{{cancelText}}</a> <a href=javascript:; class="weui_btn_dialog primary" @click=onConfirm>{{confirmText}}</a> </div> </dialog>'},function(t,o){t.exports="<div class=weui_dialog_alert v-show=show :transition=maskTransition> <div class=weui_mask></div> <div class=weui_dialog v-show=show :transition=dialogTransition> <slot></slot> </div> </div>"},function(t,o,e){var i,n;i=e(1),n=e(3),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},function(t,o,e){var i,n;i=e(2),n=e(4),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)}])});

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

function getMine(c){
    $.get(prefix + "/api/mine",co(c))
}

function update(p,c){
    $.put(prefix + "/staff/picture",JSON.stringify(p),c);
}

function changeState(p,c){
    $.put(prefix + "/staff/state",JSON.stringify(p),c);
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
    update:update,
    getMine:getMine,
    upload:upload,
    changeState:changeState
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
    template:"<div class=\"page-home\">\n    <div class=\"weui_cells\">\n        <div class=\"weui_cell\">\n            <div class=\"weui_cell_bd weui_cell_primary\">\n                <p>头像</p>\n            </div>\n            <div class=\"weui_cell_ft\">\n                <img :src=\"info.avatar\" style=\"height: 60px;border-radius: 5px;\" alt=\"\">\n            </div>\n        </div>\n        <div class=\"weui_cell\">\n            <div class=\"weui_cell_bd weui_cell_primary\">\n                <p>名字</p>\n            </div>\n            <div class=\"weui_cell_ft\">\n               {{info.name}}\n            </div>\n        </div>\n        <div class=\"weui_cell\">\n            <div class=\"weui_cell_bd weui_cell_primary\">\n                <p>手机号码</p>\n            </div>\n            <div class=\"weui_cell_ft\">\n                {{info.mobile}}\n            </div>\n        </div>\n        <div >\n\n        </div>\n        <div class=\"weui_cell weui_cell_select weui_select_after\">\n            <div class=\"weui_cell_hd\">\n                <label for=\"\" class=\"weui_label\">我的状态</label>\n            </div>\n            <div class=\"weui_cell_bd weui_cell_primary\">\n                <select class=\"weui_select\" v-model=\"info.state\" @change=\"onStateChange\" number>\n                    <option value=\"{{$key}}\" v-for=\"s in state\">{{s}}</option>\n                </select>\n            </div>\n        </div>\n        <div class=\"weui_cells weui_cells_form\" style=\"margin-top: 0\">\n            <div class=\"weui_cell\">\n                <div class=\"weui_cell_bd weui_cell_primary\">\n                    <div class=\"weui_uploader\">\n                        <div class=\"weui_uploader_hd weui_cell\">\n                            <div class=\"weui_cell_bd weui_cell_primary\">我的照片</div>\n                            <div class=\"weui_cell_ft\">{{info.pics.length}}/4</div>\n                        </div>\n                        <div class=\"weui_uploader_bd\">\n                            <ul class=\"weui_uploader_files\">\n                                <li class=\"weui_uploader_file\" @click=\"onClickImg(p)\" v-for=\"p in info.pics\" :style=\"{'background-image':'url(/image/100/100/'+p+')'}\"></li>\n                            </ul>\n                            <div class=\"weui_uploader_input_wrp\" v-if=\"info.pics.length<4\">\n                                <input class=\"weui_uploader_input\" @change=\"onUpload($event)\" type=\"file\" accept=\"image/jpg,image/jpeg,image/png,image/gif\" multiple=\"\">\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <toast :show.sync=\"showToast\" :time=\"1000\">更新状态成功!</toast>\n    <loading :show=\"loading\" :text=\"text\"></loading>\n    <actionsheet :menus=\"menus\" :show.sync=\"showSheet\" @menu-click=\"onSheetClick\" show-cancel cancel-text=\"取消\"></actionsheet>\n    <confirm :show.sync=\"showConfirm\"  cancel-text=\"取消\" confirm-text=\"确定\" @on-confirm=\"onDelPic\" title=\"\"><p style=\"text-align:center;\">确定删除该图片?</p></confirm>\n</div>",
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
                        self.update();
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
            this.update();
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
        component: function (relove) {
            require.async(["components/page/image/image"], function (c) {
                relove(c);
            })
        }
    }
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
