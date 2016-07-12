'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
   indexAction(){
    this.pullAction();
    return this.display();
  }

  async addAction (){
    var model = this.model('demo');
    await model.add({
      "id" : 6,
      "canshu" : [
        {
          "a" : 1,
          "b" : "111"
        },
        {
          "a" : 2,
          "b" : "222"
        },
        {
          "a" : 3,
          "b" : "333"
        }
      ]
    });
    return this.success();
  }

  async pullAction () {
    var model = this.model('demo');
    await model.where({userid: "ph002"}).update({$push: {'pics': 1},name:"jack"})
  }

}