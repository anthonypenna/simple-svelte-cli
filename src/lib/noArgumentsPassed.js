module.exports = function noArgumentsPassed() {
  return process.argv.length <= 2 ? true : false
}
