const pessoa = {
    nome: 'Rebeca', 
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // colocando como 'false' nao será listado e como 'true' serpa listado normalmente
    writable: false, // sendo 'false' nao podera ser modificado o atributo  e sendo 'true' podera ser alterado
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4}
const obj = Object.assign(dest, o1, o2) // concatenação - o valor de a será '4'(sobrescrito) pois foi o ultimo das atribuicoes de 'a' ser considerada - mais abaixo - 
console.log(obj)
