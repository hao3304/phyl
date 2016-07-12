define('main/service', function(require, exports, module) {

/**
 * Created by jack on 16/6/16.
 */

var Vue = require("component_modules/vue.js");

var prefix = "";

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


module.exports = {
    getMine:getMine,
    getList:getList,
    getstaff:getstaff
};

});
