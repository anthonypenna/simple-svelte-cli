module.exports = function getArguments() {
  return process.argv.filter((_arg, index) => index >= 2)
}
