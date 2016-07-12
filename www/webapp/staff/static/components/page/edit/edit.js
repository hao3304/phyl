define('components/page/edit/edit', function(require, exports, module) {

/**
 * Created by jack on 16/6/20.
 */

var Vue = require("component_modules/vue.js");
Vue.component("group",require("group/index.js"));
Vue.component("x-input",require("x-input/index.js"));
Vue.component("x-button",require("x-button/index.js"));
Vue.component("x-textarea",require("x-textarea/index.js"));
Vue.component("range",require("range/index.js"));
Vue.component("cell",require("cell/index.js"));
Vue.component("loading",require("loading/index.js"));

var Service = require("main/service.js");

module.exports = Vue.extend({
    template:"<div>\n    <group v-if=\"field=='height'\">\n        <cell  :title=\"value+'cm'\"  primary=\"content\">\n            <range slot=\"value\" :value.sync=\"value\" :max=\"200\" :min=\"120\"></range>\n        </cell>\n    </group>\n    <group v-if=\"field=='weight'\">\n        <cell  :title=\"value+'公斤'\"  primary=\"content\">\n            <range slot=\"value\" :value.sync=\"value\" :max=\"100\" :min=\"30\"></range>\n        </cell>\n    </group>\n    <group v-if=\"field=='age'\">\n        <cell  :title=\"value+'岁'\"  primary=\"content\">\n            <range slot=\"value\" :value.sync=\"value\" :max=\"60\" :min=\"16\"></range>\n        </cell>\n    </group>\n    <group v-if=\"field=='name'\">\n            <x-input title=\"名字\" :value.sync=\"value\" placeholder=\"请填写名字\"></x-input>\n    </group>\n    <group v-if=\"field=='mobile'\">\n        <x-input title=\"手机号码\" :value.sync=\"value\" placeholder=\"请填写手机号码\" is-type=\"china-mobile\"></x-input>\n    </group>\n    <group title=\"自我介绍\" v-if=\"field=='desc'\">\n        <x-textarea :max=\"200\" placeholder=\"喜欢看电影,听歌,渴望每天体验不一样的生活。\" :value.sync=\"value\" ></x-textarea>\n    </group>\n    <div class=\"weui_cells_tips\">请按真实情况填写。</div>\n    <div v-show=\"field=='desc'\" class=\"weui_cells_tips\">请勿填写你的联系方式,如手机号码,QQ,微信,陌陌等,如有发现,将有封号风险。</div>\n    <x-button style=\"position:absolute;width:100%;bottom:5px;\" type=\"primary\" @click=\"onSubmit\"  text=\"提交修改\"></x-button>\n    <loading :show=\"loading\" text=\"更新中\"></loading>\n</div>",
    data:function(){
        return {
            field:"",
            value:"",
            comp:"",
            disabled:true,
            loading:false
        }
    },
    methods:{
        update:function(){

        },
        onSubmit:function(){
            if(this.comp == this.value){
                this.$router.replace("/home");
            }else{
                this.loading = true;
                var self = this;
                Service.updateInfo(this.getData(),function(rep){
                    self.loading = false;
                    self.$root.$broadcast("reload");
                    self.$router.replace("/home");
                })
            }
        },
        getData:function(){
            var model = {
                age:null,
                weight:null,
                height:null,
                desc:null,
                name:null
            };
            model[this.field] = this.value;
            for(var i in model){
                if(! model[i]){
                    delete model[i];
                }
            }
            return model;
        }
    },
    route:{
        data:function(){
            var v = this.$route.params.value,
                type = this.$route.params.type;

            if(type == "int"){
                v = parseInt(v);
            }
            if(v == '暂无'){
                v = "";
            }

            this.field = this.$route.params.field;
            this.value = v;
            this.comp = v;
        }
    }
});

});
