console.log('a = ', a)
var a  = 2 // será jogada para cima
console.log('a = ', a)

// O resultado seria desse modo(mesmo detro de uma função - mesmo efeito -):

var a
console.log('a = ', a)
a = 2
console.log('a = ',a)


console.log('b =', b)
let b = 5 // let não tem Hoisting
console.log('b = ', b)