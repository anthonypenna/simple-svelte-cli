module.exports = function print(message) {
  const fullMessage = `[Svelte CLI]: ${message}\r\n`;
  process.stdout.write(fullMessage);

  if (process.env.NODE_ENV === "development") {
    process.stdout.__output__ = process.stdout.__output__ || [];
    process.stdout.__output__.push(fullMessage);
  }
};
