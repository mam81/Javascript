const  carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]



// Retornar um array apenas com os preços

// MODO 1

const resultado = carrinho.map(function(e) {
    return JSON.parse(e).preco // JSON.parse - transformar JSOn em objeto -
})

console.log(resultado)

// MODO 2

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado1 = carrinho.map(paraObjeto).map(apenasPreco)

console.log(resultado1)