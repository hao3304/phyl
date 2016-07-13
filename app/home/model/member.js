'use strict';
/**
 * model
 */

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_think$model$mongo) {
    (0, _inherits3.default)(_class, _think$model$mongo);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);
        return (0, _possibleConstructorReturn3.default)(this, _think$model$mongo.apply(this, arguments));
    }

    _class.prototype.findByMemberId = function () {
        var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(userid) {
            var member;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return this.where({ userid: userid }).find();

                        case 2:
                            member = _context.sent;
                            return _context.abrupt('return', member);

                        case 4:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function findByMemberId(_x) {
            return ref.apply(this, arguments);
        }

        return findByMemberId;
    }();

    _class.prototype.addMember = function () {
        var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(member) {
            var d, result;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            d = new Date().getTime();

                            member.created = d;
                            member.update = d;
                            _context2.next = 5;
                            return this.thenAdd(member, { userid: member.userid });

                        case 5:
                            result = _context2.sent;

                            member._id = result.id;
                            return _context2.abrupt('return', member);

                        case 8:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function addMember(_x2) {
            return ref.apply(this, arguments);
        }

        return addMember;
    }();

    return _class;
}(think.model.mongo);

exports.default = _class;
//# sourceMappingURL=member.js.map