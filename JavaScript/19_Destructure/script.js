/* Destrucure */

// Array Destructuring
const fruits = ['apple', 'banana', 'cherry']

// Destructuring
const [first, second, third] = fruits
console.log(first)  // Output: apple
console.log(second) // Output: banana
console.log(third)  // Output: cherry 

const [, , eL3] = fruits
const [, , , eL4] = fruits

console.log(eL3) // Output: Cherry
console.log(eL4) // Output: 

const {3 : cherry} = fruits
console.log(cherry)

const [firstFruit, , thirdFruit] = fruits // Skipping the second fruit
console.log(firstFruit)  // Output: apple
console.log(thirdFruit)  // Output: cherry

const [firstFruits, ...restFruits] = fruits; // Using rest operator
console.log(restFruits) // Output: ['banana', 'cherry']


// Object Destructuring
const person = {
    name: 'Alice',
    age: 30,
    city: 'New York'
}

// Destructuring
const { name, age } = person

console.log(name) // Output: Alice
console.log(age)  // Output: 30

const { name: fullName, age: years } = person // Renaming Variables

console.log(fullName) // Output: Alice
console.log(years)    // Output: 30

const { name: nickName, gender = 'not specified' } = person // Default Value

console.log(gender); // Output: not specified

// Nested Destructuring
const book = {
    title: 'JavaScript: The Good Parts',
    author: {
        firstName: 'Douglas',
        lastName: 'Crockford',
    },
    publication: {
        year: 2008,
        publisher: 'O\'Reilly Media',
    },
}

// Nested destructuring
const {
    title,
    author: { firstName, lastName },
    publication: { year, publisher },
} = book

console.log(title);        // Output: JavaScript: The Good Parts
console.log(firstName);    // Output: Douglas
console.log(lastName);     // Output: Crockford
console.log(year);         // Output: 2008
console.log(publisher);     // Output: O'Reilly Media


// Function Destructuring
function introduceMe({name, age, city}){
    console.log(name, age, city)
}

introduceMe(person)

function PrintArray([val1, val2, , val4]){
    console.log(val1, val2, val4)
}

PrintArray([1, 2, 3, 4])


function PrintColor({3: color3}){
    console.log(color3)
}

PrintColor(['red', 'blue', 'black', 'yellow'])
