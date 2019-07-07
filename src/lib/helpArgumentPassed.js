module.exports = function helpArgumentPassed() {
  return (
    process.argv.includes('--help') ? true : 
    process.argv.includes('-h')     ? true : false
  )
}
