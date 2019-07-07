#!/usr/bin/env node

const printAndExit            = require('./lib/printAndExit')
const getArguments            = require('./lib/getArguments')
const noArgumentsPassed       = require('./lib/noArgumentsPassed')
const helpArgumentPassed      = require('./lib/helpArgumentPassed')
const createArgumentPassed    = require('./lib/createArgumentPassed')

if (noArgumentsPassed()) {
  printAndExit(
    'No arguments received.\r\n' +
    'For help regarding usage, ' +
    'enter "--help" or "-h" as arguments to the CLI.'
  )
}

if (helpArgumentPassed()) {
  printAndExit(
    'Usage: svelte create <project-name>'
  )
} 

if (createArgumentPassed()) {
  // 
} else {
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
