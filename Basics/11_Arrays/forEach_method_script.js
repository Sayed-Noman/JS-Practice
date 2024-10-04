/* forEach() Method */

// Anyonymus Callback function
const fruits = ['apple', 'banana', 'cherry']
fruits.forEach(function (fruit) {
    console.log(`Fruits Element: ${fruit}`)
})

// Arrow Callback function
fruits.forEach((fruit) => {
    console.log(`Fruits Array Element: ${fruit}`)
})


fruits.forEach(fruit => {
    console.log(`Fruits Array Element: ${fruit}`)
})


// Accessing Array Elments
const animals = ['cat', 'dog', 'rabbit']

animals.forEach((animal, index) => {
    console.log(`Aminal Index ${index}: ${animal}`);
});

// Modifying Array Elements
let scores = [70, 85, 90];

scores.forEach((score, index, arr) => {
    arr[index] = score + 10; // Increase each score by 10
});

console.log(scores) // Output: [80, 95, 100]

// forEach with Objects
const person = {
    name: 'Alice',
    age: 30,
    city: 'New York'
}

Object.keys(person).forEach(key => {
    console.log(`${key}: ${person[key]}`);
});

// forEach with other Array Methode

const numbers = [1, 2, 3, 4, 5]

numbers
    .filter(num => num > 2) // Filter numbers greater than 2
    .forEach(num => {
        console.log(num) // Output: 3, 4, 5
    });



