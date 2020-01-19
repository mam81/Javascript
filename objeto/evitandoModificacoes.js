// Object.preventExtensions

const produto = Object.preventExtensions({ 
    nome: 'Qualquer', preco: 1.99, tag: 'promocao'
})
console.log('Extensivel', Object.isExtensible(produto))

// * CONSEGUE ALTERAR E DELETAR ATRIBUTOS MAS NAO CONSEGUE ADICIONAR ATRIBUTOS AO OBJETO *

produto.nome = 'Borracha' // permitido
produto.descricao = 'Borracha escolar branca' // nao permitido - nao surgira efeito pois não é permitido adicionar atributos ao objeto
delete produto.tag // permitido
console.log(produto)

// Object.seal
const pessoa = { nome: 'Juliana', idade:35 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))


// * CONSEGUE ALTERAR MAS NAO CONSEGUE ADICIONAR OU REMOVER ATRIBUTOS DO OBJETO *

pessoa.sobrenome = 'Silva'
delete pessoa.nome // nao permitido
pessoa.idade = 29
console.log(pessoa)

// Object.freeze(completamente constante) = selando + valores constantes