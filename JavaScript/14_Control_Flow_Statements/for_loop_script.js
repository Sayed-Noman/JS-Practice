/* Control Flow Statements */

//For Loop

for(let i=0; i<5; i++){ // Initialization & Condition  & Update the counter
  console.log(i) // Code to execute
}


const fruits = ['apple', 'banana', 'cherry', 'date', 'fig', 'grape']
for(let index=0; index<fruits.length;index++){
  console.log(`(${index})`,fruits[index])
}


for(let counter=0; counter<Infinity; counter++){
  if (counter > 10) {
    console.log('Counter exceeded 10, exiting loop.')
    break
  }
  console.log(`Counter: ${counter}`)
}


for(let seconds=5;seconds >0;seconds--){
  console.log(`Time left: ${seconds} seconds`)
}
// Optionally print when the countdown finishes
console.log('Time is up!')


// Example using a for loop with break and continue
for (let i = 0; i < 10; i++) {
  if (i === 5) {
      console.log('Breaking the loop at i = 5')
      break; // Exit the loop when i equals 5
  }
  
  if (i % 2 === 0) {
      console.log('Skipping even number:', i)
      continue // Skip the rest of the loop body for even numbers
  }
  
  console.log('Processing odd number:', i)
}
