/* arguments keyword */

// Arguments Keyword with function declaration
function add(num1, num2) {
    console.log(arguments) // Logging arguments
    for (let i = 0; i < arguments.length; i++) { // Looping arguments
      console.log(`argument[${i}] : ${arguments[i]}`)
    }
    return num1 + num2
  }
  add(10, 20)
  add(10, 20, 30, 40)
  
  // Arguments Keyword with function expression
  const sub = function (num1, num2) {
    console.log(arguments) // Logging arguments
    for (let i = 0; i < arguments.length; i++) { // Looping arguments
      console.log(`argument[${i}] : ${arguments[i]}`)
    }
    return num1 - num2
  }
  sub(10, 20)
  sub(10, 20, 30, 40)
  
  // Arguments Keyword with arrow function
  const mul = (num1, num2) => {
    // console.log(arguments) // Logging arguments doesnt work with arrow function
    // for (let i = 0; i < arguments.length; i++) { // Looping arguments doesnt work with arrow function
    //   console.log(`argument[${i}] : ${arguments[i]}`)
    // }
    return num1 * num2
  }
  mul(10, 20)
  mul(10, 20, 30, 40)
  
  // Convert Arguments keyword into Array
  const div = function (num1, num2) {
    let argumentsArray = []
    for (let i = 0; i < arguments.length; i++) {
      argumentsArray.push(arguments[i]);
    }
    console.log(argumentsArray)
    return num1 / num2
  }
  div(10, 2)
  div(10, 2, 30, 3)
  