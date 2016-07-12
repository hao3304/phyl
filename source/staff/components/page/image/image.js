/**
 * Created by jack on 16/6/16.
 */

var Vue = require("component_modules/vue.js");

module.exports = Vue.extend({
    template:__inline("image.html"),
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