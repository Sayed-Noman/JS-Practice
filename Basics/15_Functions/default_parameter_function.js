/* default parameters functions */
function rollADice(numberOfSides = 6) {
    return Math.floor(Math.random() * numberOfSides) + 1
  }
  
  console.log(rollADice()) // argument: undefined, output: 1 - 6 random number
  console.log(rollADice(undefined)) // output: 1 - 6 random number
  console.log(rollADice(null)) // output: 1
  console.log(rollADice('')) // output: 1
  console.log(rollADice(10)) // output: 1 - 10 random number
  console.log(rollADice(true)) // output: 1
  console.log(rollADice(false)) // output: 1
  console.log(rollADice(NaN)) // output: NaN
  
  function calculateArea(length = 1, width = 1) {
    return length * width
  }
  
  console.log(calculateArea())           // Output: 1 (1 * 1)
  console.log(calculateArea(5))          // Output: 5 (5 * 1)
  console.log(calculateArea(5, 10))      // Output: 50 (5 * 10)
  