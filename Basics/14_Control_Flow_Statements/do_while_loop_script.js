/* Control Flow Statements */

// Do While Loop

let i = 0; // Initialization
do {
  console.log(i)
  i++ // Update Counter
} while (i < 5) // Condition


const fruits = ['apple', 'banana', 'cherry', 'date', 'fig', 'grape']
let index = 0
do {
  console.log(`(${index})`, fruits[index])
  index++
} while (index < fruits.length)


let counter = 0
do {
  if (counter > 10) {
    console.log('Counter exceeded 10, exiting loop.')
    break
  }
  console.log(`Counter: ${counter}`)
  counter++
} while (counter < Infinity)


let seconds = 5
do {
  console.log(`Time left: ${seconds} seconds`)
  seconds--
} while (seconds > 0)
// Optionally print when the countdown finishes
console.log('Time is up!')


// Example using a for loop with break and continue
let j = 0
do {
  if (j === 5) {
    console.log('Breaking the loop at j = 5')
    break // Exit the loop when i equals 5
  }

  if (j % 2 === 0) {
    console.log('Skipping even number:', j)
    j++
    continue // Skip the rest of the loop body for even numbers
  }

  console.log('Processing odd number:', j)

  j++

} while (j < 10)
