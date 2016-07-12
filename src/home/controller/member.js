'use strict';

import Base from './base.js';

export default class extends Base {



  /**
   * before magic method
   * @return {Promise} []
   */
  async __before(){
    let userinfo = await this.session("userinfo");
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
      let info = await model.field("name,avatar,pics,state,age,height,weight,desc").where({_id:id}).find();
      return this.success(info);
    }
  }
}