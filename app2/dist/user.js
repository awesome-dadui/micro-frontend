define(function (require, exports, module) {
    "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./user.css");

var _user2 = _interopRequireDefault(require("./user.tpl"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  entry: function entry() {
    console.log('user entry');
    $('#content').html(_user2.default);
  },
  exit: function exit() {
    console.log('user module exit.');
  }
};
exports.default = _default;
})
