define('components/page/home/home', function(require, exports, module) {

/**
 * Created by jack on 16/6/4.
 */

var Vue = require("component_modules/vue.js");
var Service = require("main/service.js");
Vue.component("tab",require("tab/index.js"));
Vue.component("tab-item",require("tab-item/index.js"));

module.exports = Vue.extend({
    template:"<div class=\"page-home\">\n    <tab>\n        <tab-item :selected=\"tab === '0'\" @click=\"tab = '0'\">处理中</tab-item>\n        <tab-item :selected=\"tab === '1'\" @click=\"tab = '1'\">已完成</tab-item>\n    </tab>\n    <div class=\"weui_panel weui_panel_access\" v-for=\"l in list.data\">\n        <div v-show=\"l.state == tab\">\n            <div class=\"weui_panel_hd\">\n                下单日期\n                <span style=\"float: right;color: #09bb07;font-weight: bold\">\n                {{new Date(l.created).Format('yyyy-MM-dd hh:mm')}}\n            </span>\n            </div>\n            <div class=\"weui_panel_bd\">\n                <div class=\"weui_cells\" style=\"margin-top:0;\">\n                    <div class=\"weui_cell\">\n                        <div class=\"weui_cell_bd weui_cell_primary\">\n                            <p>客户名称</p>\n                        </div>\n                        <div class=\"weui_cell_ft\">{{l.user.name}}</div>\n                    </div>\n                    <div class=\"weui_cell\">\n                        <div class=\"weui_cell_bd weui_cell_primary\">\n                            <p>联系方式</p>\n                        </div>\n                        <div class=\"weui_cell_ft\">\n                            <a href=\"tel:{{l.user.mobile}}\">{{l.user.mobile}}</a>\n                        </div>\n                    </div>\n                    <div class=\"weui_cell\">\n                        <div class=\"weui_cell_bd weui_cell_primary\">\n                            <p>预约人数</p>\n                        </div>\n                        <div class=\"weui_cell_ft\">{{getCount(l.list)}}人</div>\n                    </div>\n                </div>\n            </div>\n            <a v-link=\"{path:'/detail/'+l._id}\" class=\"weui_panel_ft\">查看详情</a>\n        </div>\n    </div>\n\n    <div class=\"weui_panel weui_panel_access\" v-if=\"(count==0&&tab==0)||list.data.length==0\">\n        <div class=\"msg\">\n            <div class=\"weui_msg\">\n                <div class=\"weui_icon_area\"><i class=\"weui_icon_success weui_icon_msg\"></i></div>\n                <div class=\"weui_text_area\">\n                    <h2 class=\"weui_msg_title\">暂无订单记录</h2>\n                </div>\n            </div>\n        </div>\n    </div>\n    <loading :show=\"loading\" text=\"加载中...\" ></loading>\n</div>",
    data: function () {
        return {
           list:{
               data:[],
               totalPages:0
           },
            tab:0,
            loading:false
        }
    },
    methods:{
        render: function () {
            this.renderList();
        },
        renderList:function () {
            this.loading = true;
            var self = this;
            Service.getOrders({size:100,page:0},function (rep) {
                self.loading = false;
                self.list = rep;
            })
        },
        getCount:function (data) {
            var count = 0;
            for(var i in data){
                count ++;
            }
            return count;
        }
    },
    computed:{
      count:function () {
          var count = 0;
          this.list.data.forEach(function (d) {
              if(d.state == 0){
                  count++;
              }
          });
          return count;
      }  
    },
    ready: function () {
        this.render();
        var self = this;
    }
});

});
