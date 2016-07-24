'use strict';

import Base from './base.js';
import API from 'wechat-enterprise-api';
import Config from '../../../wechat.js';
let Wechat = new API(Config.corpid,Config.corpsecret,2);
export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  async indexAction(){
    //auto render template file index_index.html
    let view = this.get("view");
    let is_login = await this.isLogin(view);
    let url = "/webapp/"+view+"/index.html";
    let code = this.param("code");

    if(is_login){
      this.redirect(url);

    } else if(code){

      let userinfo = "";
      switch (view){
        case  "staff":{
          userinfo = await this.isStaff(code);
        }break;
        case "member":{
          userinfo = await this.isMember(code);
        }break;
        case "admin":{
          userinfo = await this.isAdmin(code);
        }break;
      }
      this.session("userinfo",{_id:userinfo._id,userid:userinfo.userid,type:view});
      this.redirect(url);

    }else{
      this.redirect(this.getAuthorizeURL());
    }
  }

  async isLogin(view){
    let user = await this.session("userinfo");


    let res = think.isEmpty(user)?false:true;

    if(res){
      if(user.type != view){
        return false;
      }
    }

    return res;
  }

  /**
   * 获取授权地址
   */

  getAuthorizeURL(){
    return Wechat.getAuthorizeURL("http://"+this.http.host+this.http.url,"state","snsapi_userinfo");
  }

  /**
   *  根据code获取用户id
   * @param code
   * @returns {Promise}
   */
  async getUserId(code){
    return new Promise((resolve,reject)=>{
      Wechat.getUserIdByCode(code, function (err,result) {
        if(err){
          reject(err);
        }else{
          resolve(result);
        }
      })
    })
  }



  /**
   * 根据userid获取用户信息
   * @param id
   * @returns {Promise}
   */
  async getUser(id){
    return new Promise((resolve,reject)=>{
      Wechat.getUser(id, function (err,result) {
        if(err){
          reject(err);
        }else{
          resolve(result);
        }
      })
    })
  }


  /**
   * 发送消息
   */
  async sendMsg(to,message){
    return new Promise((resolve,reject)=>{
      Wechat.send(to,message, function (err,result) {
        if(err){
          reject(err);
        }else{
          resolve(result);
        }
      })
    })
  }

  /**
   * 工作人员入口
   */
  async isStaff(code){
    let userinfo = "";
    let result = await this.getUserId(code);
    let Model =  this.model("staff");
    userinfo = await Model.findByStaffId(result.UserId);
    if(think.isEmpty(userinfo)){
      userinfo = await this.getUser(result.UserId);
      userinfo = await Model.addStaff(userinfo);
    }
    return userinfo;
  }

  async isMember(code){
    let userinfo = "";
    let result = await this.getUserId(code);
    let Model =  this.model("member");
    userinfo = await Model.findByMemberId(result.UserId);

    if(think.isEmpty(userinfo)){
      userinfo = await this.getUser(result.UserId);
      userinfo = await Model.addMember(userinfo);
    }
    return userinfo;
  }


  async isAdmin(code){
    let userinfo = "";
    let result = await this.getUserId(code);
    let Model =  this.model("admin");
    userinfo = await Model.findByAdminId(result.UserId);

    if(think.isEmpty(userinfo)){
      userinfo = await this.getUser(result.UserId);
      userinfo = await Model.addAdmin(userinfo);
    }
    return userinfo;
  }




}