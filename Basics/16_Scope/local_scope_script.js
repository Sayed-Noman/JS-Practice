/* Scope */
// Local Scope
function exampleFunction() {
    let localVar = "I'm local to this function"; // Local scope
    console.log(localVar); // Accessible here
}

exampleFunction(); // Output: I'm local to this function
console.log(localVar); // ReferenceError: localVar is not defined
