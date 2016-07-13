/**
 * Created by jack on 16/6/4.
 */

var Vue = require("component_modules/vue.js");
var Service = require("main/service.js");
Vue.component("scroller",require("scroller/index.js"));
Vue.component("x-button",require("x-button/index.js"));

module.exports = Vue.extend({
    template:__inline("home.html"),
    data: function () {
        return {
           list:{
               data:[],
               totalPages:0
           },
            order:[],
            params:{
                page:0,
                size:21
            },
            loading:true,
            text:"",
            scrollHeight:document.documentElement.clientHeight - 88 +"px",
            pullupConfig: {
                content: '刷新中...',
                downContent: '刷新中...',
                upContent: '',
                loadingContent: ''
            },
            pulldownConfig: {
                content: '刷新中...',
                downContent: '刷新中...',
                upContent: '',
                loadingContent: ''
            }
        }
    },
    methods:{
        render: function () {
            this.renderList();
        },
        renderList: function () {
            var self = this;
            this.loading = true;
            this.text = "加载中";
            Service.getList(this.params,function (rep) {
                //var d = self.doPager(rep);
                var d = rep;
                if(self.params.page == 0){
                    self.list  = d;
                }else{
                    self.list.data = self.list.data.concat(d.data);
                }
                self.loading = false;
                Vue.nextTick(function () {
                        self.$refs.scroller.reset();
                        self.$broadcast('pullup:reset', self.$refs.scroller.uuid);
                        self.$broadcast('pulldown:reset', self.$refs.scroller.uuid);
                })
            })
        },
        onPullUp: function () {
            if(this.params.page<this.list.totalPages-1){
                this.params.page +=1;
                this.renderList();
            }
        },
        onPullDown: function () {
            this.params.page = 0;
            this.renderList();
        },
        doPager: function (rep) {
            var list = [];
            var data = rep.data;
            if(data.length>0){
                for (var i = 0; i < data.length; i=i+3) {
                    list.push([data[i]||{},data[i+1]||{},data[i+2]||{}])
                }

            }
            rep.data = list;
            return rep;
        },
        getAvatar:function(src){
            if(src.indexOf("http")>-1){
                return src;
            }else{
                return src.replace("/upload/","/image/100/100/");

            }
        }
    },
    ready: function () {
        this.render();
        var self = this;
    }
});