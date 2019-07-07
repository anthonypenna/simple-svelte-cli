const getArguments = require('./getArguments')

module.exports = function noArgumentsPassed() {
  return getArguments().length === 0 ? true : false
}
