/* for of loop */ 

// Iterate over Array Object
const fruits = ['apple', 'mango', 'cherry', 'banana']

for (const fruit of fruits){
    console.log(`Fruits Array Element: ${fruit}`)
}

// Iterate over String
const word = 'Fox'

for(const letter of word){
    console.log(`String Element: ${letter}`)
}

// Iterate over a Set
const numberSet = new Set([1, 2, 3, 4])

for (const number of numberSet){
    console.log(`Set Element: ${number}`)
}

// Iterate over a Map
const fruitsInventory = new Map([
    ['apple', 10],
    ['orange', 5],
    ['grapes', 9]
])

for(const [fruit,quantity] of fruitsInventory){
    console.log(`Inventory Map has ${quantity} ${fruit}`)
}


// for off loop with confitional statemets

const colors = ['red', 'green', 'blue', 'yellow'];

for (const color of colors) {
    if (color === 'blue') {
        console.log('Found blue!');
        break; 
    }
}
