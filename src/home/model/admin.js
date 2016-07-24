'use strict';
/**
 * model
 */
export default class extends think.model.mongo {

    async findByAdminId(userid){
        let admin = await this.where({userid:userid}).find();
        return admin;
    }

    async addAdmin(admin){

        var d = new Date().getTime();
        admin.created = d;
        admin.update = d;
        let result = await this.thenAdd(admin,{userid:admin.userid});
        admin._id  = result.id;
        return admin;
    }

}