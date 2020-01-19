let isAtivo = 1
console.log(!isAtivo)
console.log(!!isAtivo)


console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!'texto')
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!('' || null || 0 || 'epa'))

let nome = ''

console.log(nome || 'Desconhecido')