function identity(x) {
  return x
}

function identityF(num) {
  function numberReturner() {
    return num
  }
  return numberReturner
}

function add(num1, num2) {
  return num1 + num2
}

function subtract(num1, num2) {
  return num1 - num2}

function multiply(num1, num2) {
  return num1 * num2}

function increment(num) {
  return num += 1
}

function addF(addedNum) {
  function addNums(num) {
    return num + addedNum
  }
  return addNums
}

function curry(callbackFunc, binaryNum) {
  function newFunction(num) {
    return callbackFunc(binaryNum, num)
  }
  return newFunction
}

function liftF(callbackFunc) {
  function cbFunctionResult(num1) {
    function lastFunction(num2) {
      return callbackFunc(num1, num2)
    }
    return lastFunction
  }
  return cbFunctionResult
}

function twice() {}

function composeU() {}

function composeB() {}

function limit() {}

function from() {}

function to() {}

function fromTo() {}

function element() {}

function collect() {}

function filter() {}

function concat() {}

function fibonacciF() {}

function genSymF() {}

function genSymFF() {}

function counter() {}

function revokable() {}

module.exports = {
  identity,
  identityF,
  add,
  subtract,
  multiply,
  increment,
  addF,
  curry,
  liftF,
  twice,
  composeU,
  composeB,
  limit,
  from,
  to,
  fromTo,
  element,
  collect,
  filter,
  concat,
  fibonacciF,
  genSymF,
  genSymFF,
  counter,
  revokable,
};
