class Parser {
  constructor(lexer) {
    this.lexer = lexer;
  }

  parse() {
    return this.expr()
  }

  /*
  * Parser
  *
  * expr -> NUMBER ADD_OPERATOR NUMBER
  **/
  expr() {
    let left_value = this.lexer.consume("NUMBER");
    let operator = this.lexer.consume("ADD_OPERATOR");
    let right_value = this.lexer.consume("NUMBER");

    return {
      type: "BINARY_OPERATION",
      value: operator.value,
      left: {
        ...left_value,
        left: null,
        right: null
      },
      right: {
        ...right_value,
        left: null,
        right: null
      }
    }
  }
}

module.exports = Parser
