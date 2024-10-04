/* for in loopp */

// Iterate over Object
const person = {
    name: 'Alice',
    age: 25,
    city: 'New York'
}

for (const key in person){
    console.log(`Person ${key}: ${person[key]}`)
}

// Iterate over Array - Not Recommended
const fruits = ['apple', 'banana', 'cherry'];

for (const index in fruits) {
    console.log(` Array Index ${index}: ${fruits[index]}`);
}


// Itterate over nested Object 
const car = {
    brand: 'Toyota',
    model: 'Camry',
    features: {
        color: 'blue',
        year: 2020
    }
};

for (const key in car) {
    console.log(`Car has ${key}: ${car[key]}`);
    
    // Check if the property is an object itself
    if (typeof car[key] === 'object') {
        for (const subKey in car[key]) {
            console.log(` Car has ${subKey}: ${car[key][subKey]}`);
        }
    }
}
