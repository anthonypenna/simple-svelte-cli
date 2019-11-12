module.exports = function pipe(...fns) {
  return x => fns.reduce((f, g) => g(f), fns[0](x));
};
