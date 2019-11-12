const { printAndExit } = require("../util");

module.exports = function noArgs(args) {
  if (args.length <= 0) {
    printAndExit(
      `No arguments received. For help regarding usage, enter "--help" or "-h" as options to the CLI.`
    );
  }
  return args;
};
