const Lexer = require('./lexer');

describe("The lexer", () => {
  it("should parse text into tokens", () => {
    const lexer = new Lexer("1+3");

    expect(lexer.next()).toEqual({ type: "NUMBER", value: 1 });
    expect(lexer.next()).toEqual({ type: "ADD_OPERATOR", value: "+" });
    expect(lexer.next()).toEqual({ type: "NUMBER", value: 3 });
    expect(lexer.next()).toEqual({ type: "EOF", value: null });
  })
})
