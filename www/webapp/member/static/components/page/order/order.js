define('components/page/order/order', function(require, exports, module) {

/**
 * Created by jack on 16/6/16.
 */

var Vue = require("component_modules/vue.js");
Vue.component("confirm",require("confirm/index.js"));
var Service = require('main/service.js');

module.exports = Vue.extend({
    template:"<div class=\"page-order\">\n\n    <div class=\"weui_panel weui_panel_access\">\n        <div class=\"weui_panel_hd\">已选列表</div>\n        <div class=\"weui_panel_bd\">\n            <a href=\"javascript:void(0);\" class=\"weui_media_box weui_media_appmsg\" v-for=\"l in list\">\n                <div class=\"weui_media_hd\">\n                    <img class=\"weui_media_appmsg_thumb\" :src=\"l.avatar\" alt=\"\">\n                </div>\n                <div class=\"weui_media_bd\">\n                    <h4 class=\"weui_media_title\">{{l.name}}\n                        <span class=\"vux-badge\">♀  {{l.age||18}}岁</span>\n                        <i style=\"float:right\" class=\"weui_icon weui_icon_cancel\" @click=\"onRemove(l)\"></i>\n                    </h4>\n                    <p class=\"weui_media_desc\">\n                        <span>升高:{{l.height}}cm</span> |\n                        <span>体重:{{l.weight}}公斤</span>\n                    </p>\n                    <p class=\"weui_media_desc\">{{l.desc}}</p>\n\n                </div>\n            </a>\n            <a href=\"javascript:void(0);\" class=\"weui_media_box weui_media_appmsg\" v-show=\"list.length==0\">\n                您的列表空空,请先去选择。\n            </a>\n        </div>\n    </div>\n\n    <div class=\"bd spacing\">\n        <a href=\"javascript:;\" class=\"weui_btn weui_btn_primary\" @click=\"onSubmit\" v-show=\"list.length>0\">确认提交订单</a>\n\n        <a v-link=\"{path:'/home'}\" class=\"weui_btn weui_btn_warn\" >返回</a>\n\n    </div>\n\n    <confirm :show.sync=\"confirm\" confirm-text=\"确定\" cancel-text=\"取消\" title=\"操作提示\" @on-confirm=\"onAction('确认')\">\n        <p style=\"text-align:center;\">确定移除该选择?</p>\n    </confirm>\n\n    <confirm :show.sync=\"show\" confirm-text=\"确定\" cancel-text=\"取消\" title=\"操作提示\" @on-confirm=\"onAction('订单')\">\n        <p style=\"text-align:center;\">提交订单后,我们的工作人员将会联系您。确认现在提交订单?</p>\n    </confirm>\n\n    <loading :show.sync=\"loading\" text=\"提交中...\"></loading>\n</div>",
    data: function () {
        return {
            list:store.order,
            activeItem:{},
            confirm:false,
            show:false,
            loading:false
        }
    },
    methods:{
        onSubmit:function () {
            this.show = true;
        },
        onRemove:function (l) {
            this.activeItem = l;
            this.confirm = true;
        },
        onAction:function (action) {
            if(action == '确认'){
                this.list.$remove(this.activeItem);
            }
            if(action == '订单'){
                this.loading =true;
                var self = this;
                Service.postOrder(JSON.stringify(this.list),function (rep) {
                    self.loading = false;
                    alert("提交成功!");
                    self.$router.go({path:'/history',replace:true});
                })
            }
        }
    },
    ready:function () {
        if(this.list.length == 0){
            this.$router.go({path:'/home',replace:true});
        }
    }

});

});
