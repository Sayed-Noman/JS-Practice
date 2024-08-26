/* Logical Operators */
const userAge = 18

// AND Operator
console.log((5 > 3) && (8 > 4))
console.log((5 > 3) && (8 > 18))
console.log((userAge >= 12) && (userAge <= 22))
console.log(true && true)
console.log(false && false)
console.log(1 && 2)
console.log(0 && 10)
console.log(12 && undefined)
console.log(undefined && 12)
console.log(NaN && 12)
console.log('' && 10)
console.log(' ' && null)
console.log(10 && console.log(10))
console.log(console.log(10) || 10)


// OR Operator
console.log((5 > 3) || (8 > 4))
console.log((5 > 3) || (8 > 18))
console.log((userAge >= 12) || (userAge <= 2))
console.log(true || true)
console.log(false || false)
console.log(true || false)
console.log(1 || 2)
console.log(0 || 10)
console.log(0 || undefined)
console.log(undefined && 0)
console.log(NaN || ' ')
console.log(' ' || 10)
console.log(Boolean(' ' || 10))
console.log('' || null)
console.log(true || console.log('10'))

// Bitwise AND OR
console.log(3 & 5);  // Output: 1
console.log(3 | 5);  // Output: 7

// NOT Operator
console.log(!null)
console.log(!undefined)
console.log(!true)
console.log(!!true)
console.log(!!null)
console.log(!false)
console.log(!'')
console.log(!100)
