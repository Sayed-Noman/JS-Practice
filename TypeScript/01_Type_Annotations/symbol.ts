// Example: Using symbols as unique keys for object properties
const userId: symbol = Symbol("userId");
const userAge: symbol = Symbol("userAge");

const user = {
    [userId]: 101,   // Unique symbol key
    [userAge]: 30    // Another unique symbol key
};

console.log(user);  // { [Symbol(userId)]: 101, [Symbol(userAge)]: 30 }

// Even though both symbols have the same description, they are unique
const anotherUserId = Symbol("userId");
console.log(user[userId]);  // 101
console.log(user[anotherUserId]);  // undefined, because it's a different symbol
