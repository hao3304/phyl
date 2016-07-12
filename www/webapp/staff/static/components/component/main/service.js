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

$.delete = function (url,callback) {
    return  $.ajax({
        url:url,
        type:'DELETE',
        contentType: "application/json",
        success:callback
    })
};

function getMine(c){
    $.get(prefix + "/api/mine",co(c))
}

function addPic(p,c){
    $.put(prefix + "/staff/addpic",JSON.stringify(p),c);
}

function delPic(p,c){
    $.delete(prefix + "/staff/picture/"+p,c);
}

function uploadHeadPic(p,c){
    $.put(prefix + "/staff/headpic",JSON.stringify(p),c);
}

function changeState(p,c){
    $.put(prefix + "/staff/state",JSON.stringify(p),c);
}

function updateInfo(p,c){
    $.put(prefix + "/staff/update",JSON.stringify(p),c);
}


function upload(data,c){
    $.ajax({
        url:prefix +"/api/upload",
        type:'POST',
        data:data,
        cache: false,
        contentType: false,
        processData: false,
        success:c
    })
}

module.exports = {
    addPic:addPic,
    delPic:delPic,
    getMine:getMine,
    upload:upload,
    changeState:changeState,
    updateInfo:updateInfo,
    uploadHeadPic:uploadHeadPic
};

});
