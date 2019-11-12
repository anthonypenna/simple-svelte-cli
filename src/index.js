#!/usr/bin/env node
const { noArgs, helpArgs, createArgs, invalidArgs } = require("./lib");
const { pipe } = require("./util");

main(process.argv);

function main(args) {
  /* nodejs process args start from index 2 */
  const arguments = args.filter((_, index) => index >= 2);

  /* pipe arguments through various validations */
  pipe(noArgs, helpArgs, createArgs, invalidArgs)(arguments);
}
