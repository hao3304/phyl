define('components/page/detail/detail', function(require, exports, module) {

/**
 * Created by jack on 16/6/18.
 */

var Vue = require("component_modules/vue.js");
var Service = require("main/service.js");
Vue.component("confirm",require("confirm/index.js"));
require("component_modules/mui.zoom.js");
require("component_modules/mui.previewimage.js");

module.exports = Vue.extend({
   template:"<div class=\"page-detail\">\n    <div class=\"weui_cells_title\">{{new Date(info.created).Format('yyyy-MM-dd hh:mm')}}</div>\n    <div class=\"weui_cells\">\n        <div class=\"weui_cell\">\n            <div class=\"weui_cell_bd weui_cell_primary\">\n                <p>客户名称</p>\n            </div>\n            <div class=\"weui_cell_ft\">{{info.user.name}}</div>\n        </div>\n        <div class=\"weui_cell\">\n            <div class=\"weui_cell_bd weui_cell_primary\">\n                <p>联系方式</p>\n            </div>\n            <div class=\"weui_cell_ft\"> <a href=\"tel:{{info.user.mobile}}\">{{info.user.mobile}}</a></div>\n        </div>\n    </div>\n\n    <div class=\"weui_panel weui_panel_access\">\n        <div class=\"weui_panel_hd\">预约列表</div>\n        <div class=\"weui_panel_bd\">\n            <div  class=\"weui_media_box weui_media_appmsg\" v-for=\"v in info.list\">\n                <div class=\"weui_media_hd\">\n                    <img class=\"weui_media_appmsg_thumb\" :src=\"v.avatar\" alt=\"\">\n                </div>\n                <div class=\"weui_media_bd\">\n                    <h4 class=\"weui_media_title\">{{v.name}}\n                        <span style=\"float: right\">\n                            <a href=\"tel:{{v.mobile}}\">{{v.mobile}}</a>\n                        </span>\n                    </h4>\n                    <p class=\"weui_media_desc\">\n                        <span class=\"vux-badge\">♀  {{v.age||18}}岁</span> |\n                        <span>升高:{{v.height}}cm</span> |\n                        <span>体重:{{v.weight}}公斤</span>\n                    </p>\n                    <p class=\"weui_media_desc\">{{v.desc}}</p>\n\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"weui_cells\">\n        <div class=\"weui_cell\">\n            <div class=\"weui_cell_bd weui_cell_primary\">\n                <p>订单状态</p>\n            </div>\n            <div class=\"weui_cell_ft\">{{info.state | orderState}}</div>\n        </div>\n    </div>\n\n    <div class=\"bd spacing\" v-show=\"info.state==0\">\n        <a href=\"javascript:;\" class=\"weui_btn weui_btn_primary\" @click=\"onSubmit(1)\">处理完成</a>\n        <a href=\"javascript:;\" class=\"weui_btn weui_btn_warn\"  @click=\"onSubmit(-1)\" >取消订单</a>\n    </div>\n\n    <confirm :show.sync=\"confirm\" title=\"处理说明\" confirm-text=\"确定\" cancel-text=\"取消\"  @on-confirm=\"onAction('确认')\" @on-cancel=\"onAction('取消')\">\n        <div class=\"weui_cells weui_cells_form\">\n            <div class=\"weui_cell\">\n                <div class=\"weui_cell_bd weui_cell_primary\">\n                    <textarea class=\"weui_textarea\" placeholder=\"请输入处理说明\" rows=\"3\" v-model=\"desc\"></textarea>\n                </div>\n            </div>\n        </div>\n    </confirm>\n\n    <loading :show=\"loading\" :text=\"text\"></loading>\n\n\n</div>",
   data: function () {
      return {
         info:{
            user:{}
         },
         loading:true,
         text:"加载中...",
         confirm:false,
         desc:"",
         type:""
      }
   },
   methods:{
      render: function (id) {
         var self = this;
         self.loading = true;
         Service.getOrder({id:id}, function (rep) {
            self.info = rep;
            self.loading = false;

         });
      },
      onPush: function (info) {
         if(!store.isHav(info._id)){
            store.order.push(info);
         }
         this.$router.go("/home");
      },
      onAction:function (action) {
         if(action == "确认"){
            this.info.state = this.type;
            this.info.desc = this.desc;
            this.loading = true;
            var self = this;

            Service.putOrder(JSON.stringify(this.info),function (rep) {
               self.loading = false;
               self.$router.go({path:'/home',replace:true});
               self.$root.$broadcast("reload");
            })
         }
      },
      onSubmit:function (action) {
         this.type = action;
         this.confirm = true;
      }
   },
   route:{
      data: function () {
         this.render(this.$route.params.id);
      }
   }
});

});
