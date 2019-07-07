const getArguments = require('./getArguments')

module.exports = function helpArgumentPassed() {
  const arguments = getArguments()

  return (
    arguments.includes('--help') ? true : 
    arguments.includes('-h')     ? true : false
  )
}
