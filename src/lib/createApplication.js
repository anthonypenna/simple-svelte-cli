const { print, printAndExit, run } = require("../util");

module.exports = function createApplication(args) {
  try {
    /* extract project name from arguments */
    const projectName = args[1];
    print(`Creating new Svelte app: ${projectName}...`);

    /* clone svelte starter template from github */
    run(`npx degit sveltejs/template ${projectName}`);

    /* enter project directory and install npm dependencies */
    run(`cd ${projectName} && npm install`);

    /* print success message and exit */
    printAndExit(
      `Successfully created "${projectName}". To get started: ` +
        `\r\n- cd ${projectName}` +
        `\r\n- npm run dev` +
        `\r\n\r\nEnjoy!`
    );
  } catch ({ message }) {
    printAndExit(message);
  }
};
