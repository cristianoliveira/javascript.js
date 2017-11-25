const Lexer = require('./lexer');
const Parser = require('./parser');

describe("The parser", () => {
  it("should parse the tokens into a abstract sintax tree", () => {
    const lexer = new Lexer("1+3");
    const parser = new Parser(lexer);

    expect(parser.parse()).toEqual(
      {
        type: "BINARY_OPERATION",
        value: "+",
        left: {
          type: "NUMBER",
          value: 1,
          left: null,
          right: null
        },
        right: {
          type: "NUMBER",
          value: 3,
          left: null,
          right: null
        }
      }
    );
  });
});
