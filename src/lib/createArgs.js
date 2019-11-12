const createApplication = require("./createApplication");
const { printAndExit } = require("../util");

module.exports = function createArgs(args) {
  if (args.includes("create")) {
    if (args.length < 2) {
      printAndExit("Please specify a project a name.");
    }
    createApplication(args);
  }
  return args;
};
