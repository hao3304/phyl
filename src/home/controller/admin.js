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
    }else if(userinfo.type !="admin"){
      return this.fail("没有权限");
    }
  }

  async ordersAction(){
    if(this.isGet()){
      let page = this.get("page")||0;
      let size = this.get("size")||20;
      let model = this.model("order");
      let list = await model.page(page,size).order("created DESC").countSelect();
      return this.success(list);
    }
  }


  async orderAction(){
    if(this.isGet()){
      let id = this.get("id");
      var model = this.model("order");
      let row = await model.where({_id:id}).find();
      return this.success(row);
    }

    if(this.isAjax('put')){
     let data = this.post();
      let id = data._id;
      delete data._id;
      let result = await this.model('order').where({_id:id}).update(data);

      let oauth = this.controller("oauth");
      console.log("userid:"+data.user.userid);
      oauth.sendMsg({
        "touser": data.user.userid
      },{
        "msgtype": "text",
        "text": {
          "content": "您的订单已经处理。"+data.desc||""
        },
        "safe":"0"
      });

      return this.success(result);
    }
  }
}