'use strict';

exports.__esModule = true;

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _base = require('./base.js');

var _base2 = _interopRequireDefault(_base);

var _wechatEnterpriseApi = require('wechat-enterprise-api');

var _wechatEnterpriseApi2 = _interopRequireDefault(_wechatEnterpriseApi);

var _wechat = require('../../../wechat.js');

var _wechat2 = _interopRequireDefault(_wechat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wechat = new _wechatEnterpriseApi2.default(_wechat2.default.corpid, _wechat2.default.corpsecret, 0);

var _class = function (_Base) {
  (0, _inherits3.default)(_class, _Base);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);
    return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));
  }

  /**
   * index action
   * @return {Promise} []
   */

  _class.prototype.indexAction = function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      var view, is_login, url, code, userinfo;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              //auto render template file index_index.html
              view = this.get("view");
              _context.next = 3;
              return this.isLogin(view);

            case 3:
              is_login = _context.sent;
              url = "/webapp/" + view + "/index.html";
              code = this.param("code");

              if (!is_login) {
                _context.next = 10;
                break;
              }

              this.redirect(url);

              _context.next = 32;
              break;

            case 10:
              if (!code) {
                _context.next = 31;
                break;
              }

              userinfo = "";
              _context.t0 = view;
              _context.next = _context.t0 === "staff" ? 15 : _context.t0 === "member" ? 19 : _context.t0 === "admin" ? 23 : 27;
              break;

            case 15:
              _context.next = 17;
              return this.isStaff(code);

            case 17:
              userinfo = _context.sent;
              return _context.abrupt('break', 27);

            case 19:
              _context.next = 21;
              return this.isMember(code);

            case 21:
              userinfo = _context.sent;
              return _context.abrupt('break', 27);

            case 23:
              _context.next = 25;
              return this.isAdmin(code);

            case 25:
              userinfo = _context.sent;
              return _context.abrupt('break', 27);

            case 27:
              this.session("userinfo", { _id: userinfo._id, userid: userinfo.userid, type: view });
              this.redirect(url);

              _context.next = 32;
              break;

            case 31:
              this.redirect(this.getAuthorizeURL());

            case 32:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function indexAction() {
      return ref.apply(this, arguments);
    }

    return indexAction;
  }();

  _class.prototype.isLogin = function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(view) {
      var user, res;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.session("userinfo");

            case 2:
              user = _context2.sent;
              res = think.isEmpty(user) ? false : true;

              if (!res) {
                _context2.next = 7;
                break;
              }

              if (!(user.type != view)) {
                _context2.next = 7;
                break;
              }

              return _context2.abrupt('return', false);

            case 7:
              return _context2.abrupt('return', res);

            case 8:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function isLogin(_x) {
      return ref.apply(this, arguments);
    }

    return isLogin;
  }();

  /**
   * 获取授权地址
   */

  _class.prototype.getAuthorizeURL = function getAuthorizeURL() {
    return Wechat.getAuthorizeURL("http://" + this.http.host + this.http.url, "state", "snsapi_userinfo");
  };

  /**
   *  根据code获取用户id
   * @param code
   * @returns {Promise}
   */


  _class.prototype.getUserId = function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(code) {
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt('return', new _promise2.default(function (resolve, reject) {
                Wechat.getUserIdByCode(code, function (err, result) {
                  if (err) {
                    reject(err);
                  } else {
                    resolve(result);
                  }
                });
              }));

            case 1:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function getUserId(_x2) {
      return ref.apply(this, arguments);
    }

    return getUserId;
  }();

  /**
   * 根据userid获取用户信息
   * @param id
   * @returns {Promise}
   */


  _class.prototype.getUser = function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(id) {
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              return _context4.abrupt('return', new _promise2.default(function (resolve, reject) {
                Wechat.getUser(id, function (err, result) {
                  if (err) {
                    reject(err);
                  } else {
                    resolve(result);
                  }
                });
              }));

            case 1:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function getUser(_x3) {
      return ref.apply(this, arguments);
    }

    return getUser;
  }();

  /**
   * 发送消息
   */


  _class.prototype.sendMsg = function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(to, message) {
      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              return _context5.abrupt('return', new _promise2.default(function (resolve, reject) {
                Wechat.send(to, message, function (err, result) {
                  if (err) {
                    reject(err);
                  } else {
                    resolve(result);
                  }
                });
              }));

            case 1:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function sendMsg(_x4, _x5) {
      return ref.apply(this, arguments);
    }

    return sendMsg;
  }();

  /**
   * 工作人员入口
   */


  _class.prototype.isStaff = function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6(code) {
      var userinfo, result, Model;
      return _regenerator2.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              userinfo = "";
              _context6.next = 3;
              return this.getUserId(code);

            case 3:
              result = _context6.sent;
              Model = this.model("staff");
              _context6.next = 7;
              return Model.findByStaffId(result.UserId);

            case 7:
              userinfo = _context6.sent;

              if (!think.isEmpty(userinfo)) {
                _context6.next = 15;
                break;
              }

              _context6.next = 11;
              return this.getUser(result.UserId);

            case 11:
              userinfo = _context6.sent;
              _context6.next = 14;
              return Model.addStaff(userinfo);

            case 14:
              userinfo = _context6.sent;

            case 15:
              return _context6.abrupt('return', userinfo);

            case 16:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function isStaff(_x6) {
      return ref.apply(this, arguments);
    }

    return isStaff;
  }();

  _class.prototype.isMember = function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7(code) {
      var userinfo, result, Model;
      return _regenerator2.default.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              userinfo = "";
              _context7.next = 3;
              return this.getUserId(code);

            case 3:
              result = _context7.sent;
              Model = this.model("member");
              _context7.next = 7;
              return Model.findByMemberId(result.UserId);

            case 7:
              userinfo = _context7.sent;

              if (!think.isEmpty(userinfo)) {
                _context7.next = 15;
                break;
              }

              _context7.next = 11;
              return this.getUser(result.UserId);

            case 11:
              userinfo = _context7.sent;
              _context7.next = 14;
              return Model.addMember(userinfo);

            case 14:
              userinfo = _context7.sent;

            case 15:
              return _context7.abrupt('return', userinfo);

            case 16:
            case 'end':
              return _context7.stop();
          }
        }
      }, _callee7, this);
    }));

    function isMember(_x7) {
      return ref.apply(this, arguments);
    }

    return isMember;
  }();

  _class.prototype.isAdmin = function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee8(code) {
      var userinfo, result, Model;
      return _regenerator2.default.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              userinfo = "";
              _context8.next = 3;
              return this.getUserId(code);

            case 3:
              result = _context8.sent;
              Model = this.model("admin");
              _context8.next = 7;
              return Model.findByAdminId(result.UserId);

            case 7:
              userinfo = _context8.sent;

              if (!think.isEmpty(userinfo)) {
                _context8.next = 15;
                break;
              }

              _context8.next = 11;
              return this.getUser(result.UserId);

            case 11:
              userinfo = _context8.sent;
              _context8.next = 14;
              return Model.addAdmin(userinfo);

            case 14:
              userinfo = _context8.sent;

            case 15:
              return _context8.abrupt('return', userinfo);

            case 16:
            case 'end':
              return _context8.stop();
          }
        }
      }, _callee8, this);
    }));

    function isAdmin(_x8) {
      return ref.apply(this, arguments);
    }

    return isAdmin;
  }();

  return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=oauth.js.map