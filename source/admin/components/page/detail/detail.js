/**
 * Created by jack on 16/6/18.
 */

var Vue = require("component_modules/vue.js");
var Service = require("main/service.js");
Vue.component("confirm",require("confirm/index.js"));
require("component_modules/mui.zoom.js");
require("component_modules/mui.previewimage.js");

module.exports = Vue.extend({
   template:__inline("detail.html"),
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