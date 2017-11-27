class Interpreter {
  eval(tree) {
    let result = this.visit(tree);
    return result;
  }

  visit(node) {
    switch (node.type) {

      case "BINARY_OPERATION":
        let left = this.visit(node.left);
        let right = this.visit(node.right);

        return this.binary_operation(left, node.value, right)

      case "NUMBER":
        return node.value

      default:
        return ""
    }
  }

  binary_operation(left, operator, right) {
    switch (operator) {
      case "+":
        return left + right;
        break
    }
  }
}

module.exports = Interpreter;
