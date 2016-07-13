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
              if (!(userinfo.type != "member")) {
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

  _class.prototype.staffsAction = function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
      var page, size, model, list;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!this.isGet()) {
                _context2.next = 8;
                break;
              }

              page = this.get("page") || 0;
              size = this.get("size") || 20;
              model = this.model("staff");
              _context2.next = 6;
              return model.field("name,avatar,age,avatar").page(page, size).where({ state: 0 }).order("update DESC").countSelect();

            case 6:
              list = _context2.sent;
              return _context2.abrupt('return', this.success(list));

            case 8:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function staffsAction() {
      return ref.apply(this, arguments);
    }

    return staffsAction;
  }();

  _class.prototype.getstaffAction = function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
      var id, model, info;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!this.isGet()) {
                _context3.next = 7;
                break;
              }

              id = this.get("id");
              model = this.model("staff");
              _context3.next = 5;
              return model.field("name,avatar,pics,state,age,height,weight,desc").where({ _id: id }).find();

            case 5:
              info = _context3.sent;
              return _context3.abrupt('return', this.success(info));

            case 7:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function getstaffAction() {
      return ref.apply(this, arguments);
    }

    return getstaffAction;
  }();

  return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=member.js.map