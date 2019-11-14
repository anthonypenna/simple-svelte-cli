const print = require("../print");

describe("print", () => {
  beforeEach(() => {
    process.stdout.__output__ = undefined;
  });

  it("injects __output__ property to process.stdout", () => {
    expect(process.stdout.__output__).toBeUndefined();
    print("hello world");
    expect(process.stdout.__output__).toBeDefined();
  });

  it("writes the correct message to stdout", () => {
    print("hello world");
    expect(process.stdout.__output__).toEqual([
      "[Svelte CLI]: hello world\r\n"
    ]);

    print("preposterous error message");
    expect(process.stdout.__output__).toEqual([
      "[Svelte CLI]: hello world\r\n",
      "[Svelte CLI]: preposterous error message\r\n"
    ]);
  });
});
