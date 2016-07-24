define('main/main', function(require, exports, module) {

/**
 * Created by jack on 16/2/17.
 */

var Vue = require("component_modules/vue.js");
var Router = require("component_modules/vue-router.js");
var home = require("components/page/home/home");
var loading = require("loading/index.js");
Vue.component("loading",loading);
Vue.component("icon",require("icon/index.js"));

Vue.use(Router);


store = {
    order:[], //已选列表
    isHav:function (id) {
        for (var i = 0; i < this.order.length; i++) {
            var obj = this.order[i];
            if(obj._id == id){
                return true;
            }
        }
        return false;
    }
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
    "detail/:id":{
        component: function (reslove) {
            require.async(["components/page/detail/detail"], function (c) {
                reslove(c);
            })
        }
    }
});

Vue.filter("getState", function (v) {

    switch (parseInt(v)){
        case 0:{
            return "现在空闲";
        }break;
        case 1:{
            return "正在工作";
        }break;
        case 2:{
            return "今日休息";
        }break;
    }

});


Vue.filter("orderState", function (v) {

    switch (parseInt(v)){
        case 0:{
            return "正在处理中";
        }break;
        case 1:{
            return "处理完成";
        }break;
        case -1:{
            return "订单取消";
        }break;
    }

});

router.start(App,'#app');



});
