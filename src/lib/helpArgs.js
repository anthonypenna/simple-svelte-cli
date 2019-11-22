const { print, printAndExit } = require("../util");

const options = [
  {
    flag: "--help, -h",
    description: "Display a list of currently supported options."
  },
  {
    flag: "--ssr",
    description: "Create a server side rendered Sapper application."
  }
];

module.exports = function helpArgs(args) {
  if (args.includes("--help") || args.includes("-h")) {
    let optionsList = "";

    /* build list of available options */
    options.forEach(({ flag, description }) => {
      optionsList += `${flag} | ${description}\r\n`;
    });

    printAndExit(
      `Usage: svelte create <project-name>\r\nAvailable options:\r\n${optionsList}`
    );
  }
  return args;
};
