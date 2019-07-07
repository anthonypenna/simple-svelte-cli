const getArguments = require('./getArguments')
const printAndExit = require('./printAndExit')

module.exports = function createApplication() {
  const arguments = getArguments()

  if (arguments.length === 1) {
    printAndExit('Please specify a project name.')
  } else {
    const projectName = arguments[1]
  }
}
