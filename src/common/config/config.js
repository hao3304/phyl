'use strict';
/**
 * config
 */
export default {
    resource_on: true, //是否开启静态资源解析功能
    resource_reg: /^((static|webapp|upload)\/|[^\/]+\.(?!js|html)\w+$)/,
    route_on:true
};