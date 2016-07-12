define('components/page/image/image', function(require, exports, module) {

/**
 * Created by jack on 16/6/16.
 */

var Vue = require("component_modules/vue.js");

module.exports = Vue.extend({
    template:"<div class=\"page-image\">\n    <img :src=\"url\" alt=\"\" style=\"width: 100%\">\n</div>",
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

});
