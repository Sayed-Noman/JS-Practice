/* Template Literals */
const message = "A Lazy Dog"
const deSanizedMesage = " A Lazy Dog "
const messageA = 'Message A'
const messageB = 'Message B'
const unmaskedDigits = '12'
const templateString = `This is a template literal string. String Meassge: ${message}`

//Indexing
console.log(message[0])
console.log(message[2])
console.log(message[3])
console.log(message[4])
console.log(message[5])
console.log(message[7])
console.log(message[8])
console.log(message[9])

//Properties
console.log(message.length)

//Methodes without Argument
console.log(message.toLocaleLowerCase())
console.log(message.toUpperCase())
console.log(deSanizedMesage.trim())
console.log(deSanizedMesage.trimStart())
console.log(deSanizedMesage.trimEnd())
console.log(deSanizedMesage.trim().toLocaleUpperCase())

// Methodes with Arguments
console.log(message.includes('A'))
console.log(message.includes('Lazy'))
console.log(message.indexOf('A'))
console.log(message.indexOf('La'))
console.log(message.indexOf('Cat'))
console.log(message.replace('Dog', 'Cat'))
console.log(message.replaceAll('a', '@'))
console.log(message.concat(' ',messageB))
console.log(unmaskedDigits.padStart(11, '*'))
console.log(message.charAt(3))
console.log(message.charCodeAt(0))
console.log(message.split(' '))
console.log(templateString)