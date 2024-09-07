/* Copy Objects */

/* Shallow Copy */
// Using Object.assign()
const people1 = {
    firstName: 'Mr',
    lastName: 'X',
    gender: 'Male',
    adderss: {
        city: 'Clouds',
        pincode: 1234
    }
}
const people2 = Object.assign({}, people1);
console.log('After Shallow Copy People 2 - ', people2); // Output: {firstName: Mr, lastName: X, gender: Male}

people1.gender = 'Female'
console.log('After Modifiying Pelpople 1 Object- ', people1)
console.log('People 2 Object After Modifying People 1 Object - ', people2)

// Using the Spread Operator
const people3 = {...people1}
console.log('After copying using spread operator - ', people3)

// Modifying nested object address object ubder people1
people1.adderss.city = 'Romdo'
console.log('After Modifying city if people 1 Object - ', people1)
console.log('People 2 Object After Modifying People 1 Object - ', people2) // Nested Objects have same shared address in memory

/* Deep Copy */
// Using JSON.parse() and JSON.stringify(
const originalObject = {a: 1, b: {c: 2}};
const deepCopy = JSON.parse(JSON.stringify(originalObject));
console.log(deepCopy); // Output: {a: 1, b: {c: 2}}

// Using a Custom Recursive Function
function deepCopyObject(obj) {
    if (obj === null || typeof obj !== 'object') return obj;
    let copy = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepCopyObject(obj[key]);
        }
    }
    return copy;
}

let originalObject1 = {a: 1, b: {c: 2}};
let deepCopy1 = deepCopyObject(originalObject1);
console.log(deepCopy1); // Output: {a: 1, b: {c: 2}}


/* Copy Arrays */ 

/* Shallow Copy */  
// Using Object.assign() - usually not used for Array
const fruits = ['apple', 'banana', 'cherry']

const fruits1 = Object.assign([], fruits)
console.log('After Shallow Copy fruits Array - ', fruits1)

fruits[fruits.length] = 'orange'
console.log('After Modifying fruits Array - ', fruits)
console.log('fruits1 Array After Modifying fruits Array - ', fruits1)

// Using the Spread Operator
const fruits3 = [...fruits1]
console.log('After copying using spread operator - ', fruits3)

// Using the concat Method
const fruits4 = [].concat(fruits1)
console.log('After copying using Array.concat() method - ', fruits4)

// Using the Slice Method
const fruits5 = fruits1.slice()
console.log('After copying using Array.slice() method - ', fruits5)

// Using Array.from() Method
const fruits6 = Array.from(fruits1)
console.log('After copying using Array.from() method - ', fruits6)


// Modifying nested array matrxi 
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
const matrix1 = [...matrix]
matrix[0][0] = -1
console.log('After modifying matrix array - ', matrix)
console.log('matrix 1 After modifying matrix array - ', matrix1) // Nested Objects have same shared address in memory

/* Deep Copy */
// Using JSON.parse() and JSON.stringify()
const originalArray1 = [[1, 2], [3, 4]];
const deepCopyArray1 = JSON.parse(JSON.stringify(originalArray1));
console.log(deepCopyArray1); // Output: [[1, 2], [3, 4]]

// Using a Custom Recursive Function
function deepCopyArray(arr) {
    return arr.map(item => Array.isArray(item) ? deepCopyArray(item) : item);
}

const originalArray2 = [[1, 2], [3, 4]];
const deepCopyArray2 = deepCopyArray(originalArray2);
console.log(deepCopyArray2); // Output: [[1, 2], [3, 4]]






