/* reduce() Method */

// Basic Array usage
const numbers = [1, 2, 3, 4, 5]

let sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, 0) // Initial value is 0
console.log('Sum: ', sum) // Output: 15

sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
},)
console.log('Sum: ', sum) // Output: 15

sum = numbers.reduce((accumulator, number, index) => {
    console.log(`Number ${index}: ${number}`)
    return accumulator + number
}, 0); // Initial value is 0
console.log('Sum: ', sum) // Output: 15

sum = numbers.reduce((accumulator, number, index, arr) => {
    console.log(`Number ${index}: ${number}`)
    arr[index] = number * 2
    return accumulator + number
}, 0); // Initial value is 0
console.log('Sum: ', sum) // Output: 15
console.log('Numbers: ', numbers)

// Flatten Array 
const nestedArrays = [[1, 2], [3, 4], [5]];
const flatArray = nestedArrays.reduce((accumulator, currentValue) => {
    return accumulator.concat(currentValue);
}, []); // Initial value is an empty array

console.log(flatArray); // Output: [1, 2, 3, 4, 5]

// Chaing method - Mapping & Reducing
const cart = [
    { item: 'Apple', price: 1.00, quantity: 3 },
    { item: 'Banana', price: 0.50, quantity: 5 },
    { item: 'Orange', price: 0.75, quantity: 2 }
]

// Calculate total price of items in the cart
const totalPrice = cart
    .map(item => item.price * item.quantity) // Step 1: Calculate total price per item
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0) // Step 2: Sum up all prices

console.log(totalPrice) // Output: 7


