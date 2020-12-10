const Stack = require('./stack');
const Queue = require('./queue');

const reverseString = function (str) {
  let newStr = '';
  const stack = new Stack();
  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }
  while (!stack.isEmpty()) {
    newStr += stack.pop();
  }
  return newStr;
}

const brackets = new Set('[](){}');
const matches = {
  ']': '[',
  ')': '(',
  '}': '{'
}

const isBalanced = function (str) {
  const stack = new Stack();
  for (let i = 0; i < str.length; i++) {
    const c = str[i];
    if (brackets.has(c)) {
      if (matches[c]) {
        if (stack.isEmpty() || stack.pop() !== matches[c]) {
          return false;
        }
      }
      else stack.push(c);
    }
  }
  return stack.isEmpty();
}

const prefixCalc = function (str) {
  try {
    const stack = new Stack();
    str.split(" ").forEach(e => stack.push(e));
    while (stack.size > 1) {
      let op2 = +stack.pop();
      let op1 = +stack.pop();
      let operand = stack.pop();
      switch (operand) {
        case '+':
          stack.push(op1 + op2);
          break;
        case '-':
          stack.push(op1 - op2);
          break;
        case '*':
          stack.push(op1 * op2);
          break;
        case '/':
          stack.push(op1 / op2);
          break;
      }
    }
    return stack.pop();
  } catch (e) {
    throw new Error("invalid syntax");
  }
}

module.exports = { reverseString, isBalanced, prefixCalc };