define('main/main', function(require, exports, module) {

/**
 * Created by jack on 16/2/17.
 */

var Vue = require("component_modules/vue.js");
var Router = require("component_modules/vue-router.js");

var home = require("components/page/home/home");

var loading = require("loading/index.js");
Vue.component("loading",loading);

Vue.use(Router);


store = {
   
};

router = new Router();
var App = Vue.extend({});


router.redirect({
    "/":"/home"
});

router.map({
    "/home":{
        component:home
    },
    "image/:url":{
        component: function (resolve) {
            require.async(["components/page/image/image"], function (c) {
                resolve(c);
            })
        }
    },
    "edit/:field/:value/:type":{
        component: function (resolve) {
            require.async(["components/page/edit/edit"], function (c) {
                resolve(c);
            })
        }
    },
});

router.start(App,'#app');



});
