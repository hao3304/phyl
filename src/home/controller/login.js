'use strict';

import Base from './base.js';

export default class extends Base {

  async indexAction(){
   if(this.isGet()){
     let id =  this.get("userid");
     let m = this.get("model");
     var model = this.model(m);
     let userinfo = await model.find({userid:id});
     if(!think.isEmpty(userinfo)){
       await this.session("userinfo",{_id:userinfo._id,userid:userinfo.userid,type:m});
       this.redirect("/webapp/"+m+"/index.html#!/home");
     }else{
       this.fail("用户不存在");
     }
   }
  }
}