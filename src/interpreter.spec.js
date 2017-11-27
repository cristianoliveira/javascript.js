const Lexer = require('./lexer');
const Parser = require('./parser');
const Interpreter = require('./interpreter');

describe("The interpreter", () => {
  it("should eval a given simple expression 1+3", () => {
    let lexer = new Lexer("1+3");
    let parser = new Parser(lexer);
    let interpreter = new Interpreter();

    expect(interpreter.eval(parser.parse())).toBe(4);
  });
})
