const Lexer = require('./lexer')
const Parser = require('./parser')
const Interpreter = require('./interpreter')

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'jsjs> '
})

rl.prompt()
rl.on('line', (line) => {
  let interpreter = new Interpreter()

  switch(line.trim()) {
    case 'exit':
      rl.close()
      break

    default:
      let lexer = new Lexer(line)
      let parser = new Parser(lexer)
      console.log(interpreter.eval(parser.parse()))
      break

  }

  rl.prompt()
})
