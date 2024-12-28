/* map, filter, reduce methode */
// Basic Array  usage
const fruits = ['apple', 'cherry', 'mango', 'banana']

let returnedFruits = fruits.map((fruit) => {
    console.log(`Fruits Array: ${fruit}`)
})
console.log(returnedFruits)

returnedFruits = fruits.map((fruit) => {
    console.log(`Fruits Array: ${fruit}`)
    return fruit
})
console.log(returnedFruits)

returnedFruits = fruits.map((fruit, index) => {
    console.log(`Fruits Index ${index}: ${fruit}`)
    return fruit
})
console.log(returnedFruits)

returnedFruits = fruits.map((fruit, index, arr) => {
    console.log(`Fruits Index ${index}: ${fruit}`)
    return arr[index] = fruit.toUpperCase()
})
console.log('Fruits: ', fruits)
console.log('Returned Fruits: ', returnedFruits)

// Transforming Objects in an Array
const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
]
const names = users.map(user => user.name)

console.log(`Person Name: ${names}`)

// Modifying Array elements
const prices = [100, 200, 300]

const discountedPrice = prices.map((price) => {
    return price - (price * 0.2)
})
console.log(discountedPrice)

// Chaining Array Methods
const numbers = [1, 2, 3, 4, 5];

const result = numbers
    .filter(num => num > 2) // First filter numbers greater than 2
    .map(num => num * 10) // Then map to multiply them by 10

console.log(result) // Output: [30, 40, 50]


