const produto1 = {
    nome: '....',
    preco: 45
}

const produto2 = {
    nome: '....',
    preco: 1234
}

// Criando uma função 'factory' - factory sendo uma função que retorna um objeto - 

// factory simples 

function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome:'Silva'
    }
}

console.log(criarPessoa())