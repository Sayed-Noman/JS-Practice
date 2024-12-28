/* Array*/

// Create Using array literal
const fruits = ['apple', 'banana', 'cherry']
console.log(typeof fruits) // object types

const years = new Array(1990, 2000, 2010, 2020)
console.log(typeof years) 
console.log(years)

// Accessing Array Elements
console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])

// Updating Array Elements
fruits[2] = 'mango'
console.log("After Updating Cherry - ", fruits)

// Adding New Elements
fruits[3] = 'orange'
console.log("After Adding orange - ", fruits)
fruits[fruits.length] = 'papaya'
console.log("After Adding papaya - ", fruits)
fruits.push('strawberry')
console.log('After Adding strawberry - ', fruits)
fruits.push('watermelon', 'jackfruit')
console.log('After Adding watermelon & jackfruit - ', fruits)

//Deleting Elements from Array
console.log(fruits.pop()) //Remove Last Element
fruits.pop('watermelon')
console.log('After Deleting Watermelon - ', fruits)

// Multiple Data Types in Array
const multiTypeArray = [null, undefined, 'string', 234, true, false, BigInt(222 ^ 3), Symbol('foo'), {}]
console.log(multiTypeArray)

// Key Value Pairs in Array
const people = []
people.firstName = 'Mr'
people.lastName = 'X'
console.log(people)


/* Array Methodes */
const evenNumbers = [0, 2, 4, 6, 8, 10]
const oddNumbers = [1, 3, 5, 7, 9, 11]
const negativeNumber = [-1, -2, -3, -4, -5, -6]

evenNumbers.push(12) // Adding Arrya Elements
console.log(evenNumbers)
evenNumbers.pop(10) // Removing Arrya Elments
console.log(evenNumbers)
evenNumbers.shift() // Shifting Array Elements to Left
console.log(evenNumbers)
evenNumbers.unshift(0) // Unshifting Arrya Elements to Rigth
console.log(evenNumbers)


const numbers = evenNumbers.concat(oddNumbers, negativeNumber) // Concating Array Elements
console.log("Concated Array - ", numbers)


console.log(numbers.indexOf(10)) // Finding index of an element
console.log(numbers.indexOf(1000))

console.log(numbers.includes(-2)) // Find if an Array Includes an Element
console.log(numbers.includes(1000))

console.log(fruits.reverse()) // Reversing Array Elements

console.log(fruits.sort()) // Sorting Array Elements
console.log(numbers.sort()) // Sort functions sort alphabetically

console.log(fruits.slice()) // Slicing Array Elements
console.log(fruits.slice(3))
console.log(fruits.slice(2, 4))
console.log('After Slicing Array Elements - ', fruits) // Do not have any effect on original array

console.log(fruits.splice(2)) // Splicing Array Elements, if without argument removes exluding upto mentioned index
console.log('Adter Splicing Fruits Array - ', fruits)
console.log(fruits.splice(0, 1))
console.log('Adter Splicing Fruits Array - ', fruits)
console.log(fruits.splice(0, 1, 'grapes', 'lime'))
console.log('Adter Splicing Fruits Array - ', fruits)

/* Multi Dimesional Array */

// Creating a 2D array
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Accessing elements
console.log(matrix[0][0]); // Output: 1
console.log(matrix[1][2]); // Output: 6
console.log(matrix[2][1]); // Output: 8

// Modifying elements
matrix[0][0] = 10;
console.log(matrix[0][0]); // Output: 10

// Iterating over a 2D array
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]); // Output: each element of the matrix
    }
}

// Creating a 3D array
let cube = [
    [
        [1, 2, 3],
        [4, 5, 6]
    ],
    [
        [7, 8, 9],
        [10, 11, 12]
    ]
];

// Accessing elements
console.log(cube[0][1][2]); // Output: 6
console.log(cube[1][0][0]); // Output: 7

// Modifying elements
cube[0][1][2] = 100;
console.log(cube[0][1][2]); // Output: 100

// Iterating over a 3D array
for (let i = 0; i < cube.length; i++) {
    for (let j = 0; j < cube[i].length; j++) {
        for (let k = 0; k < cube[i][j].length; k++) {
            console.log(cube[i][j][k]); // Output: each element of the cube
        }
    }
}


