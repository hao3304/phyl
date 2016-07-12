'use strict';

import Base from './base.js';
let fs = require("fs");

export default class extends Base {
  /**
   * before magic method
   * @return {Promise} []
   */
  async __before(){
    let userinfo = await this.session("userinfo");
    if(think.isEmpty(userinfo)){
      return this.fail("没有权限");
    }else if(userinfo.type !="staff"){
      return this.fail("没有权限");
    }
  }


  async getAction(){
    let model = this.model("staff");
    let data;
    if(this.id){
      data = await model.find({_id:this.id});
    }else{
      data = await model.page(this.get("page")).countSelect();
    }
    return this.success(data);
  }

  /**
   *  更换头像
   */
  async headpicAction(){
    if(this.isAjax("put")){
      let userinfo = await this.session("userinfo");
      let data = this.post();
      if(think.isEmpty(data)){
        return this.fail("data is empty");
      }
      let m = await this.model("staff").where({_id:userinfo._id}).find();
      if(!think.isEmpty(m)){
        fs.unlink(think.UPLOAD_PATH +"/"+ m.avatar.replace("/upload",""));
      }
      let path = "/upload/"+data.pid;
      let row = await this.model("staff").where({_id:userinfo._id}).update({avatar:path});
      return this.success(path);
    }
  }

  async addpicAction(){
    if(this.isAjax("put")){
      let userinfo = await this.session("userinfo");
      let data = this.post();
      if(think.isEmpty(data)){
        return this.fail("data is empty");
      }
      let row = await this.model("staff").addPic(userinfo._id,data.pid);
      return this.success(row);
    }
  }

  async delpicAction(){
    let pid = this.get("id");
    if(pid){
      let userinfo = await this.session("userinfo");
      let row = await this.model("staff").where({_id:userinfo._id}).update({$pull: {"pics": pid}});
      if(row){
        fs.unlink(think.UPLOAD_PATH +"/"+pid);
      }
      return this.success(row);
    }else{
      return this.fail("data in empty");
    }
  }

  /**
   * 修改状态
   * @returns {*}
     */
  async stateAction(){

    if(this.isAjax("put")){
      let userinfo = await this.session("userinfo");
      let data = this.post();
      if(!data&&data.state){
        return this.fail("data is empty");
      }
      let row = await this.model("staff").updateStaff(userinfo._id,{state:data.state});
      let oauth = this.controller("oauth");

      oauth.sendMsg({
        "touser": userinfo.userid
      },{
        "msgtype": "text",
        "text": {
          "content": data.msg
        },
        "safe":"0"
      });
      return this.success(row);
    }
  }

  async updateAction(){

    if(this.isAjax("put")){
      let data = this.post();
      let auth = ["name","age","desc","weight","height","mobile"];
      let canbe = true;
      for(var i in data){
        if(auth.indexOf(i) == -1){
          canbe = false;
        }
      }

      if(canbe){
        let model = this.model("staff");
        let user = await this.session("userinfo");
        let row = await model.where({_id:user._id}).update(data);
        return this.success(row);
      }else{
        return this.fail("没有权限");
      }

      return this.fail("不支持请求类型");
    }
  }

}