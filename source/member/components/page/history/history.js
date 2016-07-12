/**
 * Created by jack on 16/6/16.
 */

var Vue = require("component_modules/vue.js");
Vue.component("tab",require("tab/index.js"));
Vue.component("tab-item",require("tab-item/index.js"));

module.exports = Vue.extend({
    template:__inline("history.html"),
    data: function () {
        return {
            url:""
        }
    },
    methods:{
        
    },
    route:{
        data: function () {
        }
    }
});