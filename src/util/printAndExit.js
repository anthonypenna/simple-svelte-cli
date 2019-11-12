const exit = require("./exit");
const print = require("./print");

module.exports = function printAndExit(message) {
  print(message);
  exit();
};
