const { exec } = require("child_process");
const { promisify } = require("util");
const ora = require("ora");

const execAsync = promisify(exec);

module.exports = function task(command, options) {
  return new Promise((resolve, reject) => {
    const { inProgress, completed } = options;
    const spinner = ora(inProgress).start();

    execAsync(command)
      .then(() => resolve(spinner.succeed(completed)))
      .catch(({ message }) => reject(spinner.fail(message)));
  });
};
