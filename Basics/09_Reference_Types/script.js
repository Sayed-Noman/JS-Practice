/* Non-Primitive or Reference Types*/

// Object delcaration
const people = {
    firstName: 'Mr',
    lastName: 'X',
    age: 23,
    'address': {
        city: "Dhaka",
        state: 'Bangladesh',
        postcode: '1221'
    }
}

// Accessing Object element in dot notation
console.log("First Name: ", people.firstName)
console.log("Last Name: ", people.lastName)
console.log("Age: ", people.age)
console.log(`Address:  City - ${people.address.city}, State- ${people.address.state}, Postcode- ${people.address.postcode}`)

// Accessing Object element in dot notation
console.log("First Name: ", people['firstName'])
console.log("Last Name: ", people['lastName'])
console.log("Age: ", people['age'])
console.log(`Address:  City - ${people.address['city']}, State- ${people.address['state']}, Postcode- ${people.address['postcode']}`)

// Updating Object Elements
people.firstName = 'Mrs'
people.lastName = 'Y'
people['age'] = 21
people['address']['city'] = 'Miami'
people.address['state'] = 'Florid'
people.address.postcode = 1222

console.log("Updated First Name: ", people.firstName)
console.log("Updated Last Name: ", people.lastName)
console.log("Updated Age: ", people.age)
console.log(`Updated Address:  City - ${people.address.city}, State- ${people.address.state}, Postcode- ${people.address.postcode}`)

// Adding new element in object
people.mobile = '88017******90' 
console.log('New People Object: ', people)

// Delete element from object
delete people.mobile
console.log("After Delete People object: ",people)

// Sealing Object
Object.seal(people)

people.age = 25
console.log('Modification of Sealed Obect: ', people) //allowed
console.log(delete people.firstName) //not allowed
people.profession = 'Employed' //wont have effect
console.log(people)

// Freezing Object
Object.freeze(people)

people.age = 34
console.log('Modification of Freezed Obect: ', people) //wont have effect
console.log(delete people.firstName) //not allowed
people.nid = '22******22'
console.log('Addition of element in freezed Object: ', people) //wont have effect

// in Keyword
console.log('firstName' in people)
console.log('lastName' in people)
console.log('address' in people)
console.log('city' in people.address)
console.log('isGraduate' in people)

