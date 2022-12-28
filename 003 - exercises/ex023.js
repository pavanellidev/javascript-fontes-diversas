// template strings / literals

const recipient = "James"

// Refactor the email string to use template strings

// const email = "Hey " + recipient + "! How is it going? Cheers Per"

const email = 
`Hey ${recipient}! 
How is it going? 
Cheers Per`

console.log(email)

console.log( Boolean("") )   // false
console.log( Boolean("0") )  // true
console.log( Boolean(100) )  // true
console.log( Boolean(null) ) // false
console.log( Boolean([0]) )  // true
console.log( Boolean(-0) )   // false