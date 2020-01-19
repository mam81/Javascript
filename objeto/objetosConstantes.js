// pessoa -> 123 -> (...)

const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> (...)

//pessoa = { nome: 'Ana' } // da um erro pela troca de endereco de memoria de uma constante

Object.freeze(pessoa) // depois de utilizado o 'Object.freeze' o objeto é fixamente inalteravel

pessoa.nome = 'Maria' // nao da um erro porem o nome permanece inalterado
console.log(pessoa)

pessoa.endereco = 'Rua ABC'
console.log(pessoa) // permanece inalterado - apenas com o atributo de 'nome' -

delete pessoa.nome
console.log(pessoa) // nao é possivel deletar pois o objeto está inalterado

// Entao depois de inserido o 'Object.freeze' o objeto nao pode ser alterado - adicionar ,deletar ou mesmo alterar atributos -  

const pessoaConstante = Object.freeze({ nome: 'Joao' }) // já e declarado como inalterado no momento da declaração



