define('components/page/history/history', function(require, exports, module) {

/**
 * Created by jack on 16/6/16.
 */

var Vue = require("component_modules/vue.js");
Vue.component("tab",require("tab/index.js"));
Vue.component("tab-item",require("tab-item/index.js"));

var Service = require('main/service.js');

module.exports = Vue.extend({
    template:"<div class=\"page-history\">\n    <tab>\n        <tab-item :selected=\"tab === '0'\" @click=\"tab = '0'\">处理中</tab-item>\n        <tab-item :selected=\"tab === '1'\" @click=\"tab = '1'\">已完成</tab-item>\n    </tab>\n\n        <div class=\"weui_panel weui_panel_access\" v-for=\"l in list.data\" v-if=\"l.state == tab\">\n            <div class=\"weui_panel_hd\">\n                预约日期\n                <span style=\"float: right;color: #09bb07;font-weight: bold\">  {{new Date(l.created).Format('yyyy-MM-dd hh:mm')}}\n</span>\n            </div>\n            <div class=\"weui_panel_bd\">\n                <a href=\"javascript:void(0);\" class=\"weui_media_box weui_media_appmsg\" v-for=\"v in l.list\">\n                    <div class=\"weui_media_hd\">\n                        <img class=\"weui_media_appmsg_thumb\" :src=\"v.avatar\" alt=\"\">\n                    </div>\n                    <div class=\"weui_media_bd\">\n                        <h4 class=\"weui_media_title\">{{v.name}}\n                            <span class=\"vux-badge\">♀  {{v.age||18}}岁</span>\n                        </h4>\n                        <p class=\"weui_media_desc\">\n                            <span>升高:{{v.height}}cm</span> |\n                            <span>体重:{{v.weight}}公斤</span>\n                        </p>\n                        <p class=\"weui_media_desc\">{{v.desc}}</p>\n                    </div>\n                </a>\n            </div>\n            <div class=\"weui_cells\">\n                <div class=\"weui_cell\">\n                    <div class=\"weui_cell_bd weui_cell_primary\">\n                        <p>当前状态</p>\n                    </div>\n                    <div class=\"weui_cell_ft\">{{l.state | orderState}}</div>\n                </div>\n            </div>\n\n            <div class=\"weui_cells_title\">处理说明</div>\n            <div class=\"weui_cells weui_cells_form\">\n                <div class=\"weui_cell\">\n                    <div class=\"weui_cell_bd weui_cell_primary\">\n                        {{l.desc}}\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    <loading :show=\"loading\" text=\"加载中...\"></loading>\n</div>",
    data: function () {
        return {
            tab:0,
            loading:false,
            size:100,
            page:0,
            list:{
                data:[]
            }
        }
    },
    methods:{
        render:function () {
            var self = this;
            this.loading =true;
            Service.getOrder({size:this.size,page:this.page},function (rep) {
                self.list = rep;
                self.loading = false;
            })
        }
    },
    route:{
        data: function () {
            this.render();
        }
    }
});

});
