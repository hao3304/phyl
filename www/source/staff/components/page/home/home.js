/**
 * Created by jack on 16/6/4.
 */

var Vue = require("component_modules/vue.js");
var Service = require("main/service.js");
Vue.component("actionsheet",require("actionsheet/index.js"));
Vue.component("confirm",require("confirm/index.js"));
Vue.component("toast",require("toast/index.js"));

module.exports = Vue.extend({
    template:"<div class=\"page-home\">\n    <div class=\"weui_cells\">\n        <div class=\"weui_cell\">\n            <div class=\"weui_cell_bd weui_cell_primary\">\n                <p>头像</p>\n            </div>\n            <div class=\"weui_cell_ft\">\n                <img :src=\"info.avatar\" style=\"height: 60px;border-radius: 5px;\" alt=\"\">\n            </div>\n        </div>\n        <div class=\"weui_cell\">\n            <div class=\"weui_cell_bd weui_cell_primary\">\n                <p>名字</p>\n            </div>\n            <div class=\"weui_cell_ft\">\n               {{info.name}}\n            </div>\n        </div>\n        <div class=\"weui_cell\">\n            <div class=\"weui_cell_bd weui_cell_primary\">\n                <p>手机号码</p>\n            </div>\n            <div class=\"weui_cell_ft\">\n                {{info.mobile}}\n            </div>\n        </div>\n        <div class=\"weui_cell weui_cell_select weui_select_after\">\n            <div class=\"weui_cell_hd\">\n                <label for=\"\" class=\"weui_label\">我的状态</label>\n            </div>\n            <div class=\"weui_cell_bd weui_cell_primary\">\n                <select class=\"weui_select\" v-model=\"info.state\" @change=\"onStateChange\">\n                    <option value=\"{{$key}}\" v-for=\"s in state\">{{s}}</option>\n                </select>\n            </div>\n        </div>\n        <div class=\"weui_cells weui_cells_form\" style=\"margin-top: 0\">\n            <div class=\"weui_cell\">\n                <div class=\"weui_cell_bd weui_cell_primary\">\n                    <div class=\"weui_uploader\">\n                        <div class=\"weui_uploader_hd weui_cell\">\n                            <div class=\"weui_cell_bd weui_cell_primary\">我的照片</div>\n                            <div class=\"weui_cell_ft\">{{info.pics.length}}/4</div>\n                        </div>\n                        <div class=\"weui_uploader_bd\">\n                            <ul class=\"weui_uploader_files\">\n                                <li class=\"weui_uploader_file\" @click=\"onClickImg(p)\" v-for=\"p in info.pics\" :style=\"{'background-image':'url('+p+')'}\"></li>\n                            </ul>\n                            <div class=\"weui_uploader_input_wrp\" v-if=\"info.pics.length<4\">\n                                <input class=\"weui_uploader_input\" @change=\"onUpload($event)\" type=\"file\" accept=\"image/jpg,image/jpeg,image/png,image/gif\" multiple=\"\">\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <toast :show.sync=\"showToast\" :time=\"1000\">更新状态成功!</toast>\n    <loading :show=\"loading\" :text=\"text\"></loading>\n    <actionsheet :menus=\"menus\" :show.sync=\"showSheet\" @menu-click=\"onSheetClick\" show-cancel cancel-text=\"取消\"></actionsheet>\n    <confirm :show.sync=\"showConfirm\"  cancel-text=\"取消\" confirm-text=\"确定\" @on-confirm=\"onDelPic\" title=\"\"><p style=\"text-align:center;\">确定删除该图片?</p></confirm>\n</div>",
    data: function () {
        return {
            info:{
                pics:[],
                state:0
            },
            loading:true,
            text:"加载中",
            showSheet:false,
            showConfirm:false,
            showToast:false,
            state:{
                0:"现在空闲",
                1:"正在工作",
                2:"今日休息"
            },
            menus:{
                detail: '查看大图',
                del: '删除图片'
            },
            selectImg:null
        }
    },
    methods:{
        render: function () {
            this.renderInfo();
        },
        renderInfo: function () {
            var self = this;
            this.loading = true;
            this.text = "加载中";
            Service.getMine(function (rep) {
                self.info  = rep;
                if(!self.info.pics){
                    self.$set("info.pics",[]);
                }
                self.loading = false;
            })
        },
        onUpload: function (e) {
            var file = e.target.files[0];
            var self = this;
            this.loading = true;
            this.text = "上传中";
            lrz(file, {
                width: 500,
                done: function (rep) {
                    var data = new FormData();
                    data.append("file",rep.origin);
                    Service.upload(data, function (rep) {
                        self.info.pics.push(rep.data.path);
                        self.update();
                    });
                }
            });

        },
        onClickImg: function (img) {
            this.showSheet = true;
            this.selectImg = img;
        },
        onSheetClick: function (e) {
            if(e != "cancel"){
                if(e == "del"){
                    this.showConfirm = true;

                }else if(e == "detail"){
                    this.$router.go("/image/"+encodeURIComponent(this.selectImg));
                }
            }
        },
        onDelPic: function () {
            this.info.pics.$remove(this.selectImg);
            this.update();
        },
        update: function () {
            var self = this;
            Service.update(this.info, function (rep) {
                self.loading = false;
            })
        },
        onStateChange: function () {
            var self = this;
            debugger
            Service.changeState({state:this.info.state,msg:this.state[this.info.state]}, function () {
                self.showToast = true;
            })
        }
    },
    ready: function () {
        this.render();
    }
});