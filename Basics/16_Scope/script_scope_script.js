/* Scope */
// Script Scope
var scriptScopedVar = "I'm script scoped"; // Script-scoped variable

function showScriptScopedVar() {
    console.log(scriptScopedVar); // Accessible here
}

showScriptScopedVar(); // Output: I'm script scoped

// This variable can also be accessed globally
console.log(window.scriptScopedVar); // Output: I'm script scoped
