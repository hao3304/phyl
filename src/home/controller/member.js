'use strict';

import Base from './base.js';

export default class extends Base {



  /**
   * before magic method
   * @return {Promise} []
   */
  async __before(){
    let userinfo  = this.userinfo = await this.session("userinfo");
    if(think.isEmpty(userinfo)){
      return this.fail("没有权限");
    }else if(userinfo.type !="member"){
      return this.fail("没有权限");
    }
  }

  async staffsAction(){
    if(this.isGet()){
      let page = this.get("page")||0;
      let size = this.get("size")||20;
      let model = this.model("staff");
      let list = await model.field("name,avatar,age,avatar").page(page,size).where({state:0}).order("update DESC").countSelect();
      return this.success(list);
    }
  }

  async getstaffAction(){
    if(this.isGet()){
      let id = this.get("id");
      let model = this.model("staff");
      let info = await model.where({_id:id}).find();
      return this.success(info);
    }
  }

  async orderAction(){
    if(this.isPost()){
      let data = this.post();
      if(think.isEmpty(data)){
        return this.fail("data is empty");
      }
      let user = await this.model('member').where({_id:this.userinfo._id}).find();
      let row = await this.model('order').add({user:user,list:data});


      let oauth = this.controller("oauth");

      oauth.sendMsg({
        "touser": this.userinfo.userid
      },{
        "msgtype": "text",
        "text": {
          "content": "您的订单提交成功,我们的工作人员将会尽快联系您,请勿重复提交。"
        },
        "safe":"0"
      });

      oauth.sendMsg({
        "toparty": "10"
      },{
        "msgtype": "text",
        "text": {
          "content": "有新的订单,请注意查看。"
        },
        "safe":"0"
      });

      return this.success(row);
    }
    if(this.isGet()){
      let page = this.get("page")||0;
      let size = this.get("size")||20;
      let model = this.model("order");
      let list = await model.page(page,size).where({"user.userid":this.userinfo.userid}).order("created DESC").countSelect();
      return this.success(list);
    }
  }

}