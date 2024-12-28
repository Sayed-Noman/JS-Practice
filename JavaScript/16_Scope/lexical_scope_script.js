/* Scope */
// Lexical Scope
function outerFunction() {
    let outerVar = "I'm from the outer function";

    function innerFunction() {
        console.log(outerVar); // Accessible here
    }

    innerFunction(); // Output: I'm from the outer function
}

outerFunction();
