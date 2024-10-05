/* Rest Parameter Functions */

// Collecting multiple mlemenst
function calculateSum(...numbers) {
    console.log('Numbers Parameter: ', numbers)
    return numbers.reduce((acc, num) => acc + num, 0)
}
const numbers = [1, 2, 3]
console.log(calculateSum(1, 2, 3)) // Output: 6
console.log(calculateSum(10, 20, 30, 40)) // Output: 100
console.log(calculateSum()) // Output: 0
console.log(calculateSum(...numbers)) // Output: 6
console.log(calculateSum(...numbers, 4, 5)) // Output: 15

function calculateSum1(num1, num2, ...numbers) {
    console.log(`Num1: ${num1}, Num2: ${num2}`)
    console.log('Numbers Parameter: ', numbers)
    let sum = 0;
    for (number of numbers) {
        sum += number
    }
    return sum
}

console.log(calculateSum1())
console.log(calculateSum1(10))
console.log(calculateSum1(10, 20))
console.log(calculateSum1(10, 20, 30))
console.log(calculateSum1(...numbers))
console.log(calculateSum1(10, 20, 30, ...numbers))
console.log(calculateSum1(...numbers, 4))

// Combining Rest parameters with other parameters
function logMessage(level, ...messages) {
    console.log(`[${level}]`, ...messages);
}

logMessage("INFO", "This is an info message."); // Output: [INFO] This is an info message.
logMessage("ERROR", "An error occurred:", "Invalid input!"); // Output: [ERROR] An error occurred: Invalid input!


// Using Rest Parameters in Array manipulation
function joinStrings(separator, ...strings) {
    return strings.join(separator);
}

console.log(joinStrings(", ", "Apple", "Banana", "Cherry")); // Output: "Apple, Banana, Cherry"
console.log(joinStrings(" - ", "2023", "October", "05"));   // Output: "2023 - October - 05"


// Combining Arrays
function combineArrays(...arrays) {
    return [].concat(...arrays); // Combine all arrays into a single array
}

const combined = combineArrays([1, 2], [3, 4], [5, 6]);
console.log(combined); // Output: [1, 2, 3, 4, 5, 6]
