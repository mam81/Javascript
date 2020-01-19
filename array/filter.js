const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copop de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plastico', preco: 18.99, fragil: false }
]

console.log(produtos.filter(function(p) {
    return p.preco > 500 && p.fragil == true
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil // ja retorna true ou false

const resultado = produtos.filter(caro).filter(fragil)
console.log(resultado)