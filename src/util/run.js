const { execSync } = require("child_process");

module.exports = function run(command) {
  execSync(command);
};
