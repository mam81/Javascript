const filhas = ['Ana', 'Bia', 'Clara']
const filhos = ['Carlos', 'Douglas', 'Eduardo']

const todos = filhas.concat(filhos, 'Fulano')
console.log(todos, filhas, filhos)

console.log([].concat([1, 2], [3, 4], 5, [[6, 7]]))