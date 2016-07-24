define('components/page/home/home', function(require, exports, module) {

/**
 * Created by jack on 16/6/4.
 */

var Vue = require("component_modules/vue.js");
var Service = require("main/service.js");
Vue.component("scroller",require("scroller/index.js"));
Vue.component("x-button",require("x-button/index.js"));

module.exports = Vue.extend({
    template:"<div class=\"page-home\">\n    <div class=\"weui_search_bar weui_search_focusing\" id=\"search_bar\">\n        <form class=\"weui_search_outer\">\n            <div class=\"weui_search_inner\">\n                <i class=\"weui_icon_search\"></i>\n                <input type=\"search\" class=\"weui_search_input\" id=\"search_input\" placeholder=\"搜索\" required=\"\">\n                <a href=\"javascript:\" class=\"weui_icon_clear\" id=\"search_clear\"></a>\n            </div>\n            <label for=\"search_input\" class=\"weui_search_text\" id=\"search_text\">\n                <i class=\"weui_icon_search\"></i>\n                <span>昵称搜索</span>\n            </label>\n        </form>\n        <a v-link=\"{path:'/history'}\" class=\"weui_search_cancel\" id=\"search_cancel\">我的订单</a>\n    </div>\n    <scroller lock-x :scrollbar-x=\"false\" :height=\"scrollHeight\" :pullup-config=\"pullupConfig\" :pulldown-config=\"pulldownConfig\" v-ref:scroller use-pulldown use-pullup @pullup:loading=onPullUp  @pulldown:loading=onPullDown >\n        <div class=\"weui_grids my-table\">\n            <a v-link=\"{path:'/detail/'+d._id}\" class=\"weui_grid\" v-for=\" d in list.data\">\n                <img  :src=\"getAvatar(d.avatar)\" style=\"width:100%\" alt=\"\">\n                <icon type=\"success\" v-if=\"d.isOrder\"></icon>\n                <p>\n                    <span class=\"pull-left\" style=\"margin-left:5px;\">{{d.name}}</span>\n                    <span class=\"pull-right\" style=\"margin-right:5px;\">{{d.age}}岁</span>\n                </p>\n            </a>\n        </div>\n    </scroller>\n    <div class=\"bottom-bar\">\n        <span class=\"bd\" style=\"margin-top: 0;\">\n            <template v-if=\"order.length==0\">\n                请先选择\n            </template>\n            <template v-if=\"order.length>0\">\n                已经选择 <span class=\"text-import\">{{order.length}}</span> 位\n            </template>\n        </span>\n        <a href=\"javascript:;\" class=\"weui_btn weui_btn_primary weui_btn_mini weui_btn_disabled\" v-show=\"order.length==0\">选好了</a>\n        <a @click=\"toOrder\" class=\"weui_btn weui_btn_primary weui_btn_mini \" v-show=\"order.length>0\" >选好了</a>\n    </div>\n    <x-button></x-button>\n</div>",
    data: function () {
        return {
           list:{
               data:[],
               totalPages:0
           },
            order:store.order,
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
        },
        toOrder:function () {
            this.$router.go({path:'/order'})
        }
    },
    watch:{
        order:function () {
            this.list.data.forEach(function (l) {
                Vue.set(l,"isOrder",store.isHav(l._id));
            })
        }  
    },
    ready: function () {
        this.render();
        var self = this;
    }
});

});
