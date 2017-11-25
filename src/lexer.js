// In order to better define what are the operations allowed in our language
// I decided to create a Objects contain all or operations
const OPERATOR = {
  "+": { type: "ADD_OPERATOR", value: "+" }
};

function InvalidToken(char) {
  this.message = `Invalid token '${char}' was found.`;
  this.name = "InvalidToken"
}

// Lexer
//
// Responsible for read a raw String and extract Tokens from it
class Lexer {
  constructor(text) {
    this.chars = text.split("");
    this.pointer = 0;
  }

  // Return the next token.
  next() {
    if (this.isEndOfFile()) {
      return { type: "EOF", value: null };
    }

    const current = this.pointer;
    this.pointer += 1;

    if (OPERATOR[this.chars[current]]) {
      return OPERATOR[this.chars[current]];
    }

    if (!isNaN(this.chars[current])) {
      return { type: "NUMBER", value: parseInt(this.chars[current]) };
    }

    throw new InvalidToken(this.chars[current])
  }

  isEndOfFile() {
    return this.chars[this.pointer] === undefined;
  }
}

module.exports = Lexer;
