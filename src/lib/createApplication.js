const { print, printAndExit, run } = require("../util");

module.exports = function createApplication(args) {
  try {
    /* extract project name from arguments */
    const projectName = args[1];
    const isSapper = args.find(arg => arg === "--ssr");

    if (isSapper) {
      print(`Creating new Sapper app: ${projectName}...`);

      /* clone sapper starter template from github */
      run(`npx degit "sveltejs/sapper-template#rollup" ${projectName}`);
    } else {
      print(`Creating new Svelte app: ${projectName}...`);

      /* clone svelte starter template from github */
      run(`npx degit sveltejs/template ${projectName}`);
    }

    /* enter project directory and install npm dependencies */
    run(`cd ${projectName} && npm install`);

    /* print success message and exit */
    printAndExit(
      `Successfully created "${projectName}". To get started: ` +
        `\r\n- cd ${projectName}` +
        `\r\n- npm run dev` +
        `\r\nEnjoy!`
    );
  } catch ({ message }) {
    printAndExit(message);
  }
};
