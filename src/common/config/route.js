/**
 * Created by jack on 16/6/5.
 */


export default [
    ["oauth/:view","home/oauth/index"],
    ["image/:width/:height/:name","home/image/index"],
    ["image/:name","home/image/index"],
    ["staff/picture/:id",{
        delete:"home/staff/delpic"
    }]
]