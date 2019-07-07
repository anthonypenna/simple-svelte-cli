const getArguments = require('./getArguments')
const printAndExit = require('./printAndExit')

module.exports = function logInvalidArgsAndExit() {
  const arguments = getArguments()

  if (arguments.length === 1) {
    printAndExit(
      `Unknown argument: ${arguments[0]}`
    )
  } else {
    printAndExit(
      `Unknown arguments: ${arguments.join(', ')}`
    )
  }
}
