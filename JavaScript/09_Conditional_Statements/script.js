/* Conditional Statements*/
// If Statements
let number = 10
if (number > 5) {
    console.log('The number is greater than 5.')
}

// else Statement
number = 3

if (number > 5) {
    console.log('The number is greater than 5.')
} else {
    console.log('The number is not greater than 5.')
}

// else if Statement
number = 7

if (number > 10) {
    console.log('The number is greater than 10.')
} else if (number > 5) {
    console.log('The number is greater than 5 but not greater than 10.')
} else {
    console.log('The number is 5 or less.')
}

// Nested if else
let age = 25; // Age of the person
let isMember = true; // Membership status

if (isMember) {
    // If the person is a member, check their age for discount eligibility
    if (age < 18) {
        console.log('You are a minor member. You receive a 20% discount.');
    } else if (age >= 18 && age <= 25) {
        console.log('You are a young adult member. You receive a 15% discount.');
    } else {
        console.log('You are an adult member. You receive a 10% discount.');
    }
} else {
    // If the person is not a member, check their age for eligibility
    if (age < 18) {
        console.log('You are a minor and not a member. No discount available.');
    } else if (age >= 18 && age <= 25) {
        console.log('You are a young adult and not a member. No discount available.');
    } else {
        console.log('You are an adult and not a member. No discount available.');
    }
}

// Switch Statement
let fruit = 'apple'

switch (fruit) {
    case 'apple':
        console.log('You chose an apple.')
        break
    case 'banana':
        console.log('You chose a banana.')
        break
    case 'orange':
        console.log('You chose an orange.')
        break
    default:
        console.log('Fruit not recognized.')
}

// Ternary Operator
age = 20
let canDrink = (age >= 18) ? 'Yes, you can drink.' : 'No, you are too young to drink.'
console.log(canDrink)

age = 20;
let category = (age < 13) ? 'Child' :
               (age >= 13 && age <= 19) ? 'Teenager' :
               'Adult'
console.log(category) // Output: Adult

