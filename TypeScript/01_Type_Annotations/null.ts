// Example: Using `null` to represent an intentionally empty value
let currentUser: { name: string | null, age: number | null } = {
    name: null,  // No name set yet
    age: null,   // No age set yet
};

console.log(currentUser);  // { name: null, age: null }

// Later, we might update the fields with actual values
currentUser.name = "John Doe";
currentUser.age = 30;

console.log(currentUser);  // { name: "John Doe", age: 30 }
