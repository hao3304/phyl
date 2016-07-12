/**
 * Created by jack on 16/6/4.
 */

var Vue = require("component_modules/vue.js");
var Service = require("main/service.js");
Vue.component("actionsheet",require("actionsheet/index.js"));
Vue.component("confirm",require("confirm/index.js"));
Vue.component("toast",require("toast/index.js"));

module.exports = Vue.extend({
    template:__inline("home.html"),
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
                        self.info.pics.push(rep.data.name);
                        Service.addPic({pid:rep.data.name}, function (rep) {
                            self.loading = false;
                        });
                    });
                }
            });
        },
        onUploadHead:function(e){
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
                        Service.uploadHeadPic({pid:rep.data.name}, function (rep) {
                            self.info.avatar = rep.data;
                            self.loading = false;
                        });
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
            Service.delPic(this.selectImg);
        },
        update: function () {
            var self = this;
            Service.update(this.info, function (rep) {
                self.loading = false;
            })
        },
        onStateChange: function () {
            var self = this;
            Service.changeState({state:this.info.state,msg:"当前状态-"+this.state[this.info.state]}, function () {
                self.showToast = true;
            })
        }
    },
    events:{
        reload:function(){
            this.render();
        }
    },
    ready: function () {
        this.render();
    }
});