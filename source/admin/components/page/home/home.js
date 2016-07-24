/**
 * Created by jack on 16/6/4.
 */

var Vue = require("component_modules/vue.js");
var Service = require("main/service.js");
Vue.component("tab",require("tab/index.js"));
Vue.component("tab-item",require("tab-item/index.js"));

module.exports = Vue.extend({
    template:__inline("home.html"),
    data: function () {
        return {
           list:{
               data:[],
               totalPages:0
           },
            tab:0,
            loading:false
        }
    },
    methods:{
        render: function () {
            this.renderList();
        },
        renderList:function () {
            this.loading = true;
            var self = this;
            Service.getOrders({size:100,page:0},function (rep) {
                self.loading = false;
                self.list = rep;
            })
        },
        getCount:function (data) {
            var count = 0;
            for(var i in data){
                count ++;
            }
            return count;
        }
    },
    computed:{
      count:function () {
          var count = 0;
          this.list.data.forEach(function (d) {
              if(d.state == 0){
                  count++;
              }
          });
          return count;
      }  
    },
    ready: function () {
        this.render();
        var self = this;
    }
});