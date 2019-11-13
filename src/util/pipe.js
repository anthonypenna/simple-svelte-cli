module.exports = function pipe(...fns) {
  return x => fns.reduce((f, g) => g(f), x);
};
