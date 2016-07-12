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
    template:__inline("edit.html"),
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