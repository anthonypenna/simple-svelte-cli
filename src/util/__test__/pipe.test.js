const pipe = require("../pipe");

describe("pipe", () => {
  it("returns the correct value", () => {
    let sequence = pipe(
      str => str.toUpperCase(),
      str => `${str}!`,
      str => `${str} ${str}`
    );

    expect(sequence("hello")).toBe("HELLO! HELLO!");
    expect(sequence("svelte")).toBe("SVELTE! SVELTE!");
    expect(sequence("hello svelte")).toBe("HELLO SVELTE! HELLO SVELTE!");

    sequence = pipe(
      num => num + num,
      num => num - 2,
      num => num * 2
    );

    expect(sequence(1)).toBe(0);
    expect(sequence(5)).toBe(16);
    expect(sequence(7)).toBe(24);
  });
});
