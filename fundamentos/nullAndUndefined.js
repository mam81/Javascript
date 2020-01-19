/*
Quando trabalha-se com tipos primitivos há um copia por valor,senao(objetos,funcoes) é feita uma atribuicao por referencia 
*/

let valor // nao inicializado - undefined -
console.log(valor)

valor = null // nao está apontamdo para nenhum endereco de memoria - ausencia de valor - 
console.log(valor)

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evitar atribuir como undefined,preferivel o 'null'
console.log(!!produto.preco)
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)





