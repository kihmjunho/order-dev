"use strict";

require("dotenv/config");
var _server = _interopRequireDefault(require("./server"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var PORT = process.env.PORT;
var handleListening = function handleListening() {
  console.log("server listenting on port http://localhost:".concat(PORT));
};
_server["default"].listen(PORT, handleListening);