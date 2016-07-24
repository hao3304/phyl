define('main/service', function(require, exports, module) {

/**
 * Created by jack on 16/6/16.
 */

var Vue = require("component_modules/vue.js");

var prefix = "";

Date.prototype.Format = function (fmt) { //author: meizz
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};

function co(callback){
 return function (rep) {
     if(rep.errno == 0){
         return callback.call(this,rep.data);
     }else{
         alert(rep.errmsg);
     }
 }
}

$.put = function (url,data,callback) {
    return  $.ajax({
        url:url,
        type:'PUT',
        data:data,
        contentType: "application/json",
        success:callback
    })
};

function getMine(c){
    $.get(prefix + "/api/mine",co(c))
}

function getList(p,c){
    $.get(prefix + "/member/staffs",p,co(c));
}

function getstaff(p,c){
    $.get(prefix +"/member/getstaff",p,co(c));
}


function postOrder(p,c){
    $.ajax({
        type:"post",
        contentType:"application/json",
        data:p,
        url:prefix +"/member/order",
        success:c
    });
}

function getOrder(p,c) {
    $.get(prefix +"/member/order",p,co(c));
}

module.exports = {
    getMine:getMine,
    getList:getList,
    getstaff:getstaff,
    postOrder:postOrder,
    getOrder:getOrder
};

});
