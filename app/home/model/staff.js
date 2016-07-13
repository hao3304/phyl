'use strict';
/**
 * model
 */

exports.__esModule = true;

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_think$model$mongo) {
    (0, _inherits3.default)(_class, _think$model$mongo);

    function _class() {
        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, _class);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _think$model$mongo.call.apply(_think$model$mongo, [this].concat(args))), _this), _this.schema = {
            state: {
                default: 0,
                type: "int"
            },
            age: {
                default: 18,
                type: "int"
            },
            height: {
                default: 165,
                type: "int"
            },
            weight: {
                default: 50,
                type: "int"
            },
            desc: {
                default: "",
                type: "string"
            },
            created: {
                default: function _default() {
                    return new Date().getTime();
                },
                readonly: true
            },
            update: {
                default: function _default() {
                    return new Date().getTime();
                }
            }

        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    _class.prototype.findByStaffId = function () {
        var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(userid) {
            var staff;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return this.where({ userid: userid }).find();

                        case 2:
                            staff = _context.sent;
                            return _context.abrupt("return", staff);

                        case 4:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function findByStaffId(_x) {
            return ref.apply(this, arguments);
        }

        return findByStaffId;
    }();

    _class.prototype.addStaff = function () {
        var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(staff) {
            var result;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            staff.pics = [];
                            _context2.next = 3;
                            return this.thenAdd(staff, { userid: staff.userid });

                        case 3:
                            result = _context2.sent;

                            staff._id = result._id;
                            return _context2.abrupt("return", staff);

                        case 6:
                        case "end":
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function addStaff(_x2) {
            return ref.apply(this, arguments);
        }

        return addStaff;
    }();

    _class.prototype.updateStaff = function () {
        var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(id, data) {
            var d, result;
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            d = new Date().getTime();
                            _context3.next = 3;
                            return this.where({ _id: id }).update(data);

                        case 3:
                            result = _context3.sent;
                            return _context3.abrupt("return", result);

                        case 5:
                        case "end":
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        function updateStaff(_x3, _x4) {
            return ref.apply(this, arguments);
        }

        return updateStaff;
    }();

    _class.prototype.addPic = function () {
        var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(id, pid) {
            var row;
            return _regenerator2.default.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            _context4.next = 2;
                            return this.model("staff").where({ _id: id }).update({ $push: { "pics": pid } });

                        case 2:
                            row = _context4.sent;
                            return _context4.abrupt("return", row);

                        case 4:
                        case "end":
                            return _context4.stop();
                    }
                }
            }, _callee4, this);
        }));

        function addPic(_x5, _x6) {
            return ref.apply(this, arguments);
        }

        return addPic;
    }();

    return _class;
}(think.model.mongo);

exports.default = _class;
//# sourceMappingURL=staff.js.map