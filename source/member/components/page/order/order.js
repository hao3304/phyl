/**
 * Created by jack on 16/6/16.
 */

var Vue = require("component_modules/vue.js");
Vue.component("confirm",require("confirm/index.js"));
var Service = require('main/service.js');

module.exports = Vue.extend({
    template:__inline("order.html"),
    data: function () {
        return {
            list:store.order,
            activeItem:{},
            confirm:false,
            show:false,
            loading:false
        }
    },
    methods:{
        onSubmit:function () {
            this.show = true;
        },
        onRemove:function (l) {
            this.activeItem = l;
            this.confirm = true;
        },
        onAction:function (action) {
            if(action == '确认'){
                this.list.$remove(this.activeItem);
            }
            if(action == '订单'){
                this.loading =true;
                var self = this;
                Service.postOrder(JSON.stringify(this.list),function (rep) {
                    self.loading = false;
                    alert("提交成功!");
                    self.$router.go({path:'/history',replace:true});
                })
            }
        }
    },
    ready:function () {
        if(this.list.length == 0){
            this.$router.go({path:'/home',replace:true});
        }
    }

});