'use strict';
/**
 * db config
 * @type {Object}
 */

exports.__esModule = true;
exports.default = {
  type: 'mongo',
  adapter: {
    //mysql: {
    //  host: '127.0.0.1',
    //  port: '3306',
    //  database: 'PHYL',
    //  user: 'jack',
    //  password: 'hao3304',
    //  prefix: '',
    //  encoding: 'utf8'
    //},
    mongo: {
      host: "127.0.0.1",
      port: "27017",
      database: "PHYL",
      prefix: ""
    }
  }
};
//# sourceMappingURL=db.js.map