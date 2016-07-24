define('components/page/detail/detail', function(require, exports, module) {

/**
 * Created by jack on 16/6/18.
 */

var Vue = require("component_modules/vue.js");
var Service = require("main/service.js");
Vue.component("masker",require("masker/index.js"));
Vue.component("badge",require("badge/index.js"));
Vue.component("x-button",require("x-button/index.js"));
require("component_modules/mui.zoom.js");
require("component_modules/mui.previewimage.js");

module.exports = Vue.extend({
   template:"<div class=\"page-detail\">\n    <masker color=\"F9C90C\" :opacity=\"0\">\n        <div class=\"m-img\" style=\"background-image:url(../member/static/images/_.jpg)\"></div>\n        <div class=\"m-title\">\n            <img class=\"m-pic\" :src=\"info.avatar\" />\n            <p>            {{info.name}}\n            </p>\n        </div>\n    </masker>\n\n    <div class=\"weui_cells weui_cells_form\" style=\"margin-top: 0\">\n        <div class=\"weui_cell\">\n            <div class=\"weui_cell_bd weui_cell_primary\">\n                <div class=\"weui_uploader\">\n                    <div class=\"weui_uploader_bd\">\n                        <ul class=\"weui_uploader_files\">\n                            <li class=\"weui_uploader_file\"  v-for=\"p in info.pics\"  >\n                                <img style=\"width:100%;\" data-preview-src=\"{{'/image/'+p}}\"  :src=\"'/image/100/100/'+p\" data-preview-group=\"1\" >\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"weui_cells\" style=\"margin-top: 0;\">\n        <div class=\"weui_cell\" >\n            <div class=\"weui_cell_bd weui_cell_primary\">\n                <span class=\"vux-badge\">♀  {{info.age||18}}岁</span>\n            </div>\n            <div class=\"weui_cell_ft\">{{info.state|getState}}</div>\n        </div>\n    </div>\n\n    <div class=\"weui_cells_title\">详细信息</div>\n    <div class=\"weui_cells\">\n        <div class=\"weui_cell\"  v-show=\"info.height\">\n            <div class=\"weui_cell_bd weui_cell_primary\">\n                <p>身高</p>\n            </div>\n            <div class=\"weui_cell_ft\">{{info.height}}cm</div>\n        </div>\n        <div class=\"weui_cell\" v-show=\"info.weight\">\n            <div class=\"weui_cell_bd weui_cell_primary\">\n                <p>体重</p>\n            </div>\n            <div class=\"weui_cell_ft\">{{info.weight}}公斤</div>\n        </div>\n        <div class=\"weui_media_box weui_media_text\">\n            <h4 class=\"weui_media_title\">自我介绍</h4>\n            <p class=\"weui_media_desc\">{{info.desc}}</p>\n        </div>\n    </div>\n\n    <div class=\"bd\">\n        <x-button type=\"primary\" text=\"加入预约列表\" @click=\"onPush(info)\"></x-button>\n    </div>\n\n    <loading :show=\"loading\" :text=\"text\"></loading>\n\n\n</div>",
   data: function () {
      return {
         info:{},
         loading:true,
         text:"加载中..."
      }
   },
   methods:{
      render: function (id) {
         var self = this;
         self.loading = true;
         Service.getstaff({id:id}, function (rep) {
            self.info = rep;
            self.loading = false;
            Vue.nextTick(function(){
               self.preview = mui.previewImage({el:self.$el});
               $("#__MUI_PREVIEWIMAGE").removeClass("mui-preview-out");
            });
         });
      },
      onPush: function (info) {
         if(!store.isHav(info._id)){
            store.order.push(info);
         }
         this.$router.go("/home");
      }
   },
   route:{
      data: function () {
         this.render(this.$route.params.id);
      },
      canDeactivate:function(t){
         if($(".mui-preview-in").length>0){
            this.preview.close();
            $("#__MUI_PREVIEWIMAGE").hide();
         }
         t.next();
      }
   }
});

});
