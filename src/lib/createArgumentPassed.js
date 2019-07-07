const getArguments = require('./getArguments')

module.exports = function createArgumentPassed() {
  const arguments = getArguments()

  return (
    arguments.includes('create') && 
    arguments.indexOf('create') === 0 ? true : false
  )
}
