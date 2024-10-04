/* Functions */

// Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
  }
  console.log(greet('Alice')); // Output: Hello, Alice!

// Function Expression
const areaOfCircle = function(radius) {
  return Math.PI * radius * radius;
};
console.log(areaOfCircle(5)); // Output: 78.53981633974483

  
// Function Declaration vs Function Expression
console.log(hoistedFunction()); // Works due to hoisting
function hoistedFunction() {
    return "I am hoisted!";
}

// console.log(expressionFunction()); // Error: expressionFunction is not defined
const expressionFunction = function() {
    return "I am not hoisted!";
};
