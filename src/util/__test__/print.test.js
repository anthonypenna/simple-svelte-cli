const print = require("../print");

describe("print", () => {
  const prefix = "[Svelte CLI]:";

  beforeEach(() => {
    process.stdout.__output__ = undefined;
  });

  it("throws if no message or invalid message type is specified", () => {
    expect(() => print()).toThrow();
    expect(() => print(123)).toThrow();
    expect(() => print({ foo: "bar" })).toThrowError(
      "Invalid argument: message"
    );
  });

  it("injects __output__ property to process.stdout", () => {
    expect(process.stdout.__output__).toBeUndefined();
    print("hello world");
    expect(process.stdout.__output__).toBeDefined();
  });

  it("writes the correct message to stdout", () => {
    print("hello world");
    expect(process.stdout.__output__).toEqual([`${prefix} hello world\r\n`]);

    print("preposterous error message");
    expect(process.stdout.__output__).toEqual([
      `${prefix} hello world\r\n`,
      `${prefix} preposterous error message\r\n`
    ]);

    print("goodbye cruel world...");
    expect(process.stdout.__output__).toEqual([
      `${prefix} hello world\r\n`,
      `${prefix} preposterous error message\r\n`,
      `${prefix} goodbye cruel world...\r\n`
    ]);
  });
});
