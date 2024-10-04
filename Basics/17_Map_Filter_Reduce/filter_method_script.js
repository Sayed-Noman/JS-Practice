/* Filter Method */

// Basic usage
const fruits = ['apple', 'cherry', 'mango', 'banana']

let returnedFruits = fruits.filter((fruit) => {
    console.log(`Fruits Array: ${fruit}`)
})
console.log(returnedFruits)

returnedFruits = fruits.filter((fruit) => {
    console.log(`Fruits Array: ${fruit}`)
    return fruit.includes('a')
})
console.log(returnedFruits)

returnedFruits = fruits.filter((fruit, index) => {
    console.log(`Fruits Array ${index}:${fruit}`)
    return fruit
})
console.log(returnedFruits)

returnedFruits = fruits.filter((fruit, index, arr) => {
    console.log(`Fruits Array ${index}:${fruit}`)
    return arr[index] = fruit.toUpperCase()
})
console.log('Fruits: ', fruits)
console.log('Returned Fruits: ', returnedFruits)

// Filter By Length
const words = ['hello', 'world', 'JavaScript', 'is', 'fun']

const longWords = words.filter(word => word.length > 4)
console.log(longWords); // Output: ['hello', 'world', 'JavaScript']

// Filter based on multiple condition
const products = [
    { name: 'Laptop', price: 1200, inStock: true },
    { name: 'Phone', price: 800, inStock: false },
    { name: 'Tablet', price: 600, inStock: true },
    { name: 'Monitor', price: 300, inStock: true },
]

const affordableProducts = products.filter(product => product.inStock && product.price < 1000)
console.log(affordableProducts) // Output: [{ name: 'Tablet', price: 600, inStock: true }, { name: 'Monitor', price: 300, inStock: true }]


// Chaning methods - Filtering & Mapping
const numbers = [1, 2, 3, 4, 5, 6]

const doubledEvenNumbers = numbers
    .filter(number => number % 2 === 0) // Filter even numbers
    .map(number => number * 2)         // Double each even number

console.log(doubledEvenNumbers) // Output: [4, 8, 12]

const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 },
    { name: 'David', age: 20 },
]

// Filter users older than 25 and map to their names
const namesOfOlderUsers = users
    .filter(user => user.age > 25)     // Filter users older than 25
    .map(user => user.name)            // Get their names

console.log(namesOfOlderUsers) // Output: ['Bob', 'Charlie']
