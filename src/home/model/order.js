'use strict';
/**
 * model
 */
export default class extends think.model.mongo {
    schema = {
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
        },
        desc:{
            default:"",
            type:"string"
        },
        state:{
            default:0,
            type:"int"
        }
    };
}