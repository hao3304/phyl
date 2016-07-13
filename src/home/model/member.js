'use strict';
/**
 * model
 */
export default class extends think.model.mongo {

    async findByMemberId(userid){
        let member = await this.where({userid:userid}).find();
        return member;
    }

    async addMember(member){

        var d = new Date().getTime();
        member.created = d;
        member.update = d;
        let result = await this.thenAdd(member,{userid:member.userid});
        member._id  = result.id;
        return member;
    }

}