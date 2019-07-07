#!/usr/bin/env node

const noArgumentsPassed  = require('./lib/noArgumentsPassed')
const helpArgumentPassed = require('./lib/helpArgumentPassed')
const print              = require('./lib/print')

if (noArgumentsPassed()) {
  print(
    'No arguments received.\r\n'        +
    'For a list of available options, ' +
    'enter "--help" or "-h" as arguments to the CLI.'
  )
}

if (helpArgumentPassed()) {
  // ...
}
