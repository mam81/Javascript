// Array é um objeto

console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // no caso como nao possui  indice no array retorna 'undefined'

aprovados[3] = 'Paulo' // inserir elemento
aprovados.push('Abia') // inserir elemento
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados, aprovados.length)
console.log(aprovados[8] === undefined)

aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2) //(indice,numero de elementos a serem deletados, elementos a serem inseridos)
console.log(aprovados)