'use strict';
/**
 * relation model
 */
export default class extends think.model.relation {
  /**
   * init
   * @param  {} args []
   * @return {}         []
   */
  init(...args){
    super.init(...args);

    this.relation = {
      user:{
        type:this.model.HAS_ONE,
        fKey:"id",
        key:"user_id"
      }
    }
  }

  getList(){

    return this.select();

  }
}