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
var uuid = require("uuid");

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
                _context.next = 5;
                break;
              }

              return _context.abrupt('return', this.fail("没有权限"));

            case 5:
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

  /**
   * 上传和获取图片
   */


  _class.prototype.uploadAction = function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
      var _this2 = this;

      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (this.isPost()) {
                (function () {
                  var file = _this2.file("file");
                  var self = _this2;
                  fs.readFile(file.path, function (err, data) {
                    var path = think.UPLOAD_PATH;
                    var filename = uuid.v1().replace(/-/g, "") + "." + file.originalFilename.split(".")[1];
                    if (!fs.existsSync(path)) {
                      fs.mkdirSync(path);
                    }
                    fs.writeFile(path + "/" + filename, data, function (err) {
                      if (err) {
                        return self.fail("上传失败!");
                      }
                      self.success({ name: filename });
                    });
                  });
                })();
              }

            case 1:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function uploadAction() {
      return ref.apply(this, arguments);
    }

    return uploadAction;
  }();

  /**
   * 获取个人信息
   * @returns {void|PreventPromise|Promise|*}
   */


  _class.prototype.mineAction = function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
      var info, Model, user;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!this.isGet()) {
                _context3.next = 15;
                break;
              }

              _context3.next = 3;
              return this.session("userinfo");

            case 3:
              info = _context3.sent;

              if (think.isEmpty(info)) {
                _context3.next = 14;
                break;
              }

              _context3.next = 7;
              return this.model(info.type);

            case 7:
              Model = _context3.sent;
              _context3.next = 10;
              return Model.where({ userid: info.userid }).find();

            case 10:
              user = _context3.sent;
              return _context3.abrupt('return', this.success(user));

            case 14:
              return _context3.abrupt('return', this.fail("没有权限"));

            case 15:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function mineAction() {
      return ref.apply(this, arguments);
    }

    return mineAction;
  }();

  return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=api.js.map