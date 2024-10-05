/* Spread Operator */

// Spread Operator with Arryas
// Shallow Copy Array
const originalArray = [1, 2, 3]
const clonedArray = [...originalArray]

console.log("Cloned Array: ", clonedArray) // Output: [1, 2, 3]
clonedArray.push(4)
console.log("Original Array: ", originalArray) // Output: [1, 2, 3] (original array remains unchanged)
console.log(clonedArray) // Output: [1, 2, 3, 4]

// Concat Array
const array1 = [1, 2, 3]
const array2 = [4, 5, 6]

const combinedArray = [...array1, ...array2]
console.log('Concated Array:', combinedArray) // Output: [1, 2, 3, 4, 5, 6]


// Spread Operator with Objects
//Shallow Copy
const originalObject = { x: 1, y: 2 }
const clonedObject = { ...originalObject }

console.log(clonedObject) // Output: { x: 1, y: 2 }
clonedObject.z = 3
console.log(originalObject) // Output: { x: 1, y: 2 } (original object remains unchanged)

// Shallow Copy of Nested Object
const original = {
    name: 'Alice',
    age: 30,
    hobbies: ['reading', 'traveling']
};

const shallowCopy = { ...original }; // or Object.assign({}, original)

shallowCopy.name = 'Bob';
shallowCopy.hobbies.push('cooking');

console.log('Original Name: ', original.name); // Output: 'Alice' (original name remains unchanged)
console.log('Original Hobbies: ', original.hobbies); // Output: ['reading', 'traveling', 'cooking'] (hobbies are affected)

// Concat Objects
const obj1 = { a: 1, b: 2 }
const obj2 = { b: 3, c: 4 }

const mergedObject = { ...obj1, ...obj2 }
console.log(mergedObject); // Output: { a: 1, b: 3, c: 4 } (obj2's 'b' overwrites obj1's 'b')

// Spread Operator with function call
const numbers = [1, 2, 3]

function sum(a, b, c) {
    return a + b + c
}

const result = sum(...numbers);
console.log('Resut: ', result); // Output: 6 (1 + 2 + 3)

function calculateSum(a, b) {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}

const summation = calculateSum(...numbers)
console.log('Sum: ', summation)

// Spread Operator with Strings
const str = "Hello"
const charArray = [...str]

console.log(charArray) // Output: ['H', 'e', 'l', 'l', 'o']