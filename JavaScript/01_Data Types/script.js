/* Data Types */
console.log(typeof(7)) // Number
console.log(typeof(6.5)) // Number
console.log(typeof('This is a String')) // String
console.log(+'100') // Number
console.log(-'100') // Number
console.log(+'String') // NAN
console.log(typeof NAN) // NAN
console.log(parseInt('100dds')) // Number
console.log(parseFloat('10.23df'))
console.log(100 + '') // String
console.log('' + 100) // String
console.log(typeof true) // Boolean
console.log(typeof false) // Boolean
console.log(+true) // Number
console.log(+false) // Number
console.log(typeof undefined) // Undefined
console.log(undefined) // Undefined
console.log(+undefined) // NAN
console.log(-undefined) // NAN
console.log(null) // Null
console.log(typeof null) // Null
console.log(+null) // Number
console.log(-null) //Number
console.log(typeof 9007199254740991n) // BigInt
console.log(typeof BigInt(9007199254740991)) // BigInt
console.log( typeof BigInt('9007199254740991')) // BigInt
console.log(typeof BigInt("0x1fffffffffffff")) // BigInt
console.log(typeof BigInt("0o377777777777777777")) // BigInt
console.log(typeof BigInt("0b11111111111111111111111111111111111111111111111111111", )) // BigInt
console.log(typeof Symbol()) // Symbol
console.log(Symbol('foo') == Symbol('foo')) // Sysmbol Uniqe
console.log( Symbol('foo')) // Symbol