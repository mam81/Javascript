// Armazenando uma funcao em uma variavel

const imprimir_soma = function(a, b) {
    console.log(a + b)
}

imprimir_soma(2, 3)

// Armazenando uma funcao arrow em uma variavel

const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// Retorno implicito
const subtracao = (a, b) => a - b

console.log(subtracao(3, 1))

const imprimir_parametro = a => console.log(a)

imprimir_parametro('Hello World')