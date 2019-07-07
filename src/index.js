#!/usr/bin/env node

const printAndExit          = require('./lib/printAndExit')
const noArgumentsPassed     = require('./lib/noArgumentsPassed')
const helpArgumentPassed    = require('./lib/helpArgumentPassed')
const createArgumentPassed  = require('./lib/createArgumentPassed')
const logInvalidArgsAndExit = require('./lib/logInvalidArgsAndExit')

const noArgumentMessage     = 'No arguments received.\r\n' +
                              'For help regarding usage, ' +
                              'enter "--help" or "-h" as arguments to the CLI.'

const helpArgumentMessage   = 'Usage: svelte create <project-name>'

if (noArgumentsPassed())
  printAndExit(noArgumentMessage)

if (helpArgumentPassed())
  printAndExit(helpArgumentMessage)

if (createArgumentPassed())
  console.log('createeeeeee')

else logInvalidArgsAndExit()
