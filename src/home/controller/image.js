'use strict';

import Base from './base.js';
let images = require("images");

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction(){
    let width = this.get("width"),
        height = this.get("height"),
        name = this.get("name");
    this.type("image/png");
    if(width){
      this.end(images(think.UPLOAD_PATH +"/"+ name).size(parseInt(width),parseInt(height)).encode("jpg"));
    }else{
      this.end(images(think.UPLOAD_PATH +"/"+ name).encode("jpg"));
    }
  }
}