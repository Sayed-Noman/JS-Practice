/* Control Flow Statements */

//While Loop

let i = 0 // Initialization

while (i < 5) { // Condition
  console.log(i) // Code to execute
  i++ // Update the counter
}


const fruits = ['apple', 'banana', 'cherry', 'date', 'fig', 'grape']
let index = 0
while (index < fruits.length) {
  console.log(`(${index})`, fruits[index])
  index++
}


let counter = 0

while (true) {
  counter++
  if (counter > 10) {
    console.log('Counter exceeded 10, exiting loop.')
    break
  }
  console.log(`Counter: ${counter}`)
}


let seconds = 5 // Number of seconds to countdown

while (seconds > 0) {
  console.log(`Time left: ${seconds} seconds`)
  seconds-- // Decrement the counter
}

// Optionally print when the countdown finishes
console.log('Time is up!')


// Example using a while loop with break and continue
let j = 0
while (j < 10) {
  if (j === 5) {
    console.log('Breaking the loop at J = 5')
    break // Exit the loop when i equals 5
  }

  if (j % 2 === 0) {
    console.log('Skipping even numer:', j)
    j++
    continue // Skip the rest of the loop body for even numbers
  }

  console.log('Processing odd number:', j)

  j++
}
