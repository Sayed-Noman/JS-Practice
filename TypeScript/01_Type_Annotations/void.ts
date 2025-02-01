// Example where `void` is used for function result storage
let callbackResult: void;

function executeCallback(callback: () => void): void {
  callback();
}

// Assigning the result of a function call to `callbackResult`
callbackResult = executeCallback(() => console.log("Callback executed!")); 
// `callbackResult` is `undefined` because the function does not return anything
console.log(callbackResult);  // undefined
