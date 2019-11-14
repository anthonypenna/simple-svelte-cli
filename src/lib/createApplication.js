const { print, printAndExit, task } = require("../util");

module.exports = async function createApplication(args) {
  try {
    const projectName = args[1];
    const isSapper = args.find(arg => arg === "--ssr");

    if (isSapper) {
      print(`Creating new Sapper app: ${projectName}...`);

      /* clone sapper starter template from github */
      await task(`npx degit "sveltejs/sapper-template#rollup" ${projectName}`, {
        inProgress: "Downloading template...",
        completed: "Done."
      });
    } else {
      print(`Creating new Svelte app: ${projectName}...`);

      /* clone svelte starter template from github */
      await task(`npx degit sveltejs/template ${projectName}`, {
        inProgress: "Downloading template...",
        completed: "Done."
      });
    }

    /* enter project directory and install npm dependencies */
    await task(`cd ${projectName} && npm install`, {
      inProgress: "Installing dependencies...",
      completed: "Done."
    });

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
