// Funcao sem retorno
function imprimir_soma(a, b) {
    console.log(a + b)
}

imprimir_soma(2, 3)
imprimir_soma(2) // um dos valores será 'undefined'
imprimir_soma(2, 3, 4, 5, 6, 7) // pegará apenas as dois primeiros valores

// Funcao com retorno
function soma(a, b = 0) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())


