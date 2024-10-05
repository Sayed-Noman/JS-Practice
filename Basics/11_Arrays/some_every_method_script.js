/* Some() every() method */
// Basic Array usage
const numbers = [1, 2, 3, 4, 5]

// Check if there is any even number in the array
const hasEvenNumber = numbers.some(num => num % 2 === 0)
console.log(hasEvenNumber); // Output: true

// Check if there is any negative number in the array
const hasNegative = numbers.some(num => num < 0)
console.log(hasNegative) // Output: false

// Accessing Array Elements
numbers.some((num, index) => {
    console.log(`Numbers ${index}: ${num}`)
})

// Modifying Array Elements
const isAltered = numbers.some((num, index, arr) => {
    arr[index] = num * 2
    if (index + 1 == numbers.length) return true
    return false
})
console.log('Numbers Array: ', numbers)
console.log("is Altered: ", isAltered)

// Aray of Onjects usage
const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 17 },
    { name: 'Charlie', age: 30 }
]

// Check if there is any user under 18
const hasUnderageUser = users.some(user => user.age < 18)
console.log(hasUnderageUser) // Output: true

/*every() method */

// Basic Array usage
const allPositive = numbers.every(num => num > 0)
console.log(allPositive) // Output: true

// Check if there is any even number in the array
const allEvenNumber = numbers.every(num => num % 2 === 0)
console.log(hasEvenNumber) // Output: false

// Accessing Array Elements
numbers.every((num, index) => {
    console.log(`Numbers ${index}: ${num}`)
    return true
})

// Modifying Array Elements
const isModified = numbers.every((num, index, arr) => {
    arr[index] = num / 2
    return true
})
console.log('Numbers Array: ', numbers)
console.log("is Modified: ", isModified)

// Array of Objects usage
const formInputs = [
    { name: 'username', value: 'john_doe' },
    { name: 'email', value: 'john@example.com' },
    { name: 'password', value: 'securepassword' }
]

const allFieldsFilled = formInputs.every(input => input.value !== '')
console.log(allFieldsFilled); // Output: true





