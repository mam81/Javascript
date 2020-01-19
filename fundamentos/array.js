const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) // como nao existe o idice no array retorna 'undefined'

valores[4] = 10.3

console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

delete valores[0]
console.log(valores)

console.log(valores.pop())
console.log(valores)

console.log(typeof valores)