'use strict';

exports.__esModule = true;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _base = require('./base.js');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var images = require("images");

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

  _class.prototype.indexAction = function indexAction() {
    var width = this.get("width"),
        height = this.get("height"),
        name = this.get("name");
    this.type("image/png");
    if (width) {
      this.end(images(think.UPLOAD_PATH + "/" + name).size(parseInt(width), parseInt(height)).encode("jpg"));
    } else {
      this.end(images(think.UPLOAD_PATH + "/" + name).encode("jpg"));
    }
  };

  return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=image.js.map