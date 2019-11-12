const { printAndExit } = require("../util");

module.exports = function helpArgs(args) {
  if (args.includes("--help") || args.includes("-h")) {
    printAndExit(`Usage: svelte create <project-name>`);
  }
  return args;
};
