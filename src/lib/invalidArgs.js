const { printAndExit } = require("../util");

module.exports = function invalidArgs(args) {
  switch (args.length) {
    case 1:
      printAndExit(`Invalid argument: ${args[0]}`);
    default:
      printAndExit(`Invalid arguments: ${args.join(", ")}`);
  }
};
