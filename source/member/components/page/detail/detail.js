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
   template:__inline("detail.html"),
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