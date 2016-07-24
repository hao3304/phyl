/**
 * Created by jack on 16/6/16.
 */

var Vue = require("component_modules/vue.js");
Vue.component("tab",require("tab/index.js"));
Vue.component("tab-item",require("tab-item/index.js"));

var Service = require('main/service.js');

module.exports = Vue.extend({
    template:__inline("history.html"),
    data: function () {
        return {
            tab:0,
            loading:false,
            size:100,
            page:0,
            list:{
                data:[]
            }
        }
    },
    methods:{
        render:function () {
            var self = this;
            this.loading =true;
            Service.getOrder({size:this.size,page:this.page},function (rep) {
                self.list = rep;
                self.loading = false;
            })
        }
    },
    route:{
        data: function () {
            this.render();
        }
    }
});