'use strict';

import Base from './base.js';
let fs = require("fs");
let uuid = require("uuid");

export default class extends Base {

  /**
   * before magic method
   * @return {Promise} []
   */
  async __before(){
    let userinfo = await this.session("userinfo");
    if(think.isEmpty(userinfo)){
      return this.fail("没有权限");
    }
  }

  /**
   * 上传和获取图片
   */
  async uploadAction(){
    if(this.isPost()){
      let file = this.file("file");
      let self = this;
      fs.readFile(file.path, function (err,data) {
        let path = think.UPLOAD_PATH;
        let filename = uuid.v1().replace(/-/g,"")+"."+ file.originalFilename.split(".")[1];
        if (!fs.existsSync(path)) {
          fs.mkdirSync(path);
        }
        fs.writeFile(path+"/"+filename ,data, function (err) {
          if(err){
            return self.fail("上传失败!");
          }
          self.success({name:filename})
        })
      })
    }
  }


  /**
   * 获取个人信息
   * @returns {void|PreventPromise|Promise|*}
   */
  async mineAction(){
    if(this.isGet()){
      let info = await this.session("userinfo");
      if(!think.isEmpty(info)){
        let Model = await this.model(info.type);
        let user = await Model.where({userid:info.userid}).find();
        return this.success(user);

      }else{
        return this.fail("没有权限");
      }
    }
  }
}