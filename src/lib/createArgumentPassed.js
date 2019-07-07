module.exports = function createArgumentPassed() {
  const arguments = process.argv
  return (
    arguments.includes('create') && 
    arguments.indexOf('create') === 2 ? true : false
  )
}
