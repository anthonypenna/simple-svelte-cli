const util         = require('util')
const childProcess = require('child_process')

const print        = require('./print')
const clear        = require('./clear')
const getArguments = require('./getArguments')
const printAndExit = require('./printAndExit')

module.exports = async function createApplication() {
  const arguments = getArguments()
  const projectName = arguments[1] || null

  if (arguments.length === 1)
    printAndExit('Please specify a project name.')

  if (projectName) {
    print(`Creating new Svelte app: ${projectName}...`)

    try {
      const exec = util.promisify(childProcess.exec)
      await exec(`npx degit sveltejs/template ${projectName}`)

      clear()
      printAndExit(
        `${projectName} successfully created.\r\n`     +
        'To get up and running:              \r\n\r\n' +
        `  cd ${projectName}                 \r\n`     +
        '  npm install                       \r\n'     +
        '  npm run dev                       \r\n'
      )
    } catch (error) {
      throw new Error(error)
    }
  }
}
