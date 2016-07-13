'use strict';

exports.__esModule = true;

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fs = require("fs");

var _class = function (_Base) {
  (0, _inherits3.default)(_class, _Base);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);
    return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));
  }

  /**
   * before magic method
   * @return {Promise} []
   */

  _class.prototype.__before = function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      var userinfo;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.session("userinfo");

            case 2:
              userinfo = _context.sent;

              if (!think.isEmpty(userinfo)) {
                _context.next = 7;
                break;
              }

              return _context.abrupt('return', this.fail("没有权限"));

            case 7:
              if (!(userinfo.type != "staff")) {
                _context.next = 9;
                break;
              }

              return _context.abrupt('return', this.fail("没有权限"));

            case 9:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function __before() {
      return ref.apply(this, arguments);
    }

    return __before;
  }();

  _class.prototype.getAction = function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
      var model, data;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              model = this.model("staff");
              data = void 0;

              if (!this.id) {
                _context2.next = 8;
                break;
              }

              _context2.next = 5;
              return model.find({ _id: this.id });

            case 5:
              data = _context2.sent;
              _context2.next = 11;
              break;

            case 8:
              _context2.next = 10;
              return model.page(this.get("page")).countSelect();

            case 10:
              data = _context2.sent;

            case 11:
              return _context2.abrupt('return', this.success(data));

            case 12:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function getAction() {
      return ref.apply(this, arguments);
    }

    return getAction;
  }();

  /**
   *  更换头像
   */


  _class.prototype.headpicAction = function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
      var userinfo, data, m, path, row;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!this.isAjax("put")) {
                _context3.next = 16;
                break;
              }

              _context3.next = 3;
              return this.session("userinfo");

            case 3:
              userinfo = _context3.sent;
              data = this.post();

              if (!think.isEmpty(data)) {
                _context3.next = 7;
                break;
              }

              return _context3.abrupt('return', this.fail("data is empty"));

            case 7:
              _context3.next = 9;
              return this.model("staff").where({ _id: userinfo._id }).find();

            case 9:
              m = _context3.sent;

              if (!think.isEmpty(m)) {
                fs.unlink(think.UPLOAD_PATH + "/" + m.avatar.replace("/upload", ""));
              }
              path = "/upload/" + data.pid;
              _context3.next = 14;
              return this.model("staff").where({ _id: userinfo._id }).update({ avatar: path });

            case 14:
              row = _context3.sent;
              return _context3.abrupt('return', this.success(path));

            case 16:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function headpicAction() {
      return ref.apply(this, arguments);
    }

    return headpicAction;
  }();

  _class.prototype.addpicAction = function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4() {
      var userinfo, data, row;
      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (!this.isAjax("put")) {
                _context4.next = 11;
                break;
              }

              _context4.next = 3;
              return this.session("userinfo");

            case 3:
              userinfo = _context4.sent;
              data = this.post();

              if (!think.isEmpty(data)) {
                _context4.next = 7;
                break;
              }

              return _context4.abrupt('return', this.fail("data is empty"));

            case 7:
              _context4.next = 9;
              return this.model("staff").addPic(userinfo._id, data.pid);

            case 9:
              row = _context4.sent;
              return _context4.abrupt('return', this.success(row));

            case 11:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function addpicAction() {
      return ref.apply(this, arguments);
    }

    return addpicAction;
  }();

  _class.prototype.delpicAction = function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5() {
      var pid, userinfo, row;
      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              pid = this.get("id");

              if (!pid) {
                _context5.next = 12;
                break;
              }

              _context5.next = 4;
              return this.session("userinfo");

            case 4:
              userinfo = _context5.sent;
              _context5.next = 7;
              return this.model("staff").where({ _id: userinfo._id }).update({ $pull: { "pics": pid } });

            case 7:
              row = _context5.sent;

              if (row) {
                fs.unlink(think.UPLOAD_PATH + "/" + pid);
              }
              return _context5.abrupt('return', this.success(row));

            case 12:
              return _context5.abrupt('return', this.fail("data in empty"));

            case 13:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function delpicAction() {
      return ref.apply(this, arguments);
    }

    return delpicAction;
  }();

  /**
   * 修改状态
   * @returns {*}
     */


  _class.prototype.stateAction = function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6() {
      var userinfo, data, row, oauth;
      return _regenerator2.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              if (!this.isAjax("put")) {
                _context6.next = 13;
                break;
              }

              _context6.next = 3;
              return this.session("userinfo");

            case 3:
              userinfo = _context6.sent;
              data = this.post();

              if (!(!data && data.state)) {
                _context6.next = 7;
                break;
              }

              return _context6.abrupt('return', this.fail("data is empty"));

            case 7:
              _context6.next = 9;
              return this.model("staff").updateStaff(userinfo._id, { state: data.state });

            case 9:
              row = _context6.sent;
              oauth = this.controller("oauth");


              oauth.sendMsg({
                "touser": userinfo.userid
              }, {
                "msgtype": "text",
                "text": {
                  "content": data.msg
                },
                "safe": "0"
              });
              return _context6.abrupt('return', this.success(row));

            case 13:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function stateAction() {
      return ref.apply(this, arguments);
    }

    return stateAction;
  }();

  _class.prototype.updateAction = function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee7() {
      var data, auth, canbe, i, model, user, row;
      return _regenerator2.default.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              if (!this.isAjax("put")) {
                _context7.next = 18;
                break;
              }

              data = this.post();
              auth = ["name", "age", "desc", "weight", "height", "mobile"];
              canbe = true;

              for (i in data) {
                if (auth.indexOf(i) == -1) {
                  canbe = false;
                }
              }

              if (!canbe) {
                _context7.next = 16;
                break;
              }

              model = this.model("staff");
              _context7.next = 9;
              return this.session("userinfo");

            case 9:
              user = _context7.sent;
              _context7.next = 12;
              return model.where({ _id: user._id }).update(data);

            case 12:
              row = _context7.sent;
              return _context7.abrupt('return', this.success(row));

            case 16:
              return _context7.abrupt('return', this.fail("没有权限"));

            case 17:
              return _context7.abrupt('return', this.fail("不支持请求类型"));

            case 18:
            case 'end':
              return _context7.stop();
          }
        }
      }, _callee7, this);
    }));

    function updateAction() {
      return ref.apply(this, arguments);
    }

    return updateAction;
  }();

  return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=staff.js.map