/* Scope */
// Block Scope
{
    let blockVar = "I'm inside a block";
    console.log(blockVar); // Accessible here
}

console.log(blockVar); // ReferenceError: blockVar is not defined
