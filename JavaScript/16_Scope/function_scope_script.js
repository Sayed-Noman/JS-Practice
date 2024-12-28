/* Scope */
// Function Scope
function myFunction() {
    let functionVar = "I'm local to this function";
    console.log(functionVar); // Accessible here
}

myFunction(); // Output: I'm local to this function
console.log(functionVar); // ReferenceError: functionVar is not defined
