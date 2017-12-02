// In order to better define what are the operations allowed in our language
// I decided to create a Objects contain all or operations
const OPERATOR = {
  "+": { type: "ADD_OPERATOR", value: "+" }
};

function InvalidToken(char) {
  this.message = `Invalid token '${char}' was found.`;
  this.name = "InvalidToken"
}

function InvalidSintax(expected, got) {
  this.message = `Sintaxe error. Expected: '${expected}' got '${got}'`;
  this.name = "InvalidSintax"
}

function isNumber(char) {
  return !isNaN(char)
}

// Lexer
//
// Responsible for read a raw String and extract Tokens from it
class Lexer {
  constructor(text) {
    this.chars = text.split("");
    this.pointer = 0;
    this.current = null;
  }

  // Return the next token.
  next() {
    if (this.isEndOfFile()) {
      return { type: "EOF", value: null };
    }

    let token = OPERATOR[this.chars[this.pointer]];
    if (token) {
      this.pointer += 1;
      return token
    }

    if (isNumber(this.chars[this.pointer])) {
      token = this.consumeNumber()
      this.pointer += 1;
      return token
    }

    throw new InvalidToken(this.chars[this.pointer])
  }

  consumeNumber() {
    let number = this.chars[this.pointer];

    while (isNumber(this.chars[this.pointer + 1])) {
      number += this.chars[this.pointer + 1];
      this.pointer += 1;
    }

    return { type: "NUMBER", value: parseInt(number) };
  }

  consume(type) {
    this.current = this.next();

    if (this.current.type != type) {
      throw new InvalidSintax(type, this.current.type);
    }

    return this.current;
  }

  isEndOfFile() {
    return this.chars[this.pointer] === undefined;
  }
}

module.exports = Lexer;
