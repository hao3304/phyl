'use strict';
/**
 * model
 */
export default class extends think.model.mongo {

    schema = {
        state:{
            default:0,
            type:"int"
        },
        age:{
            default:18,
            type:"int"
        },
        height:{
            default:165,
            type:"int"
        },
        weight:{
            default:50,
            type:"int"
        },
        desc:{
            default:"",
            type:"string"
        },
        created:{
            default: function () {
                return new Date().getTime();
            },
            readonly:true
        },
        update:{
            default:function (){
                return new Date().getTime();
            }
        }

    };

    async findByStaffId(userid){
        let staff = await this.where({userid:userid}).find();
        return staff;
    }

    async addStaff(staff){
        staff.pics = [];
        let result = await this.thenAdd(staff,{userid:staff.userid});
        staff._id  = result._id;
        return staff;
    }

    async updateStaff(id,data){
        let d = new Date().getTime();
        let result = await this.where({_id:id}).update(data);
        return result;
    }

    async addPic(id,pid){
        let row = await this.model("staff").where({_id:id}).update({$push: {"pics": pid}});
        return row;
    }


}