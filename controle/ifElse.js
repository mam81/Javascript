const imprimirResultado = function(nota) {
    if (nota >= 7) {
        console.log('Aprovado! :)')
    } else {
        console.log('Reprovado :(')
    }
}

imprimirResultado(7.4)
imprimirResultado(6.3)
imprimirResultado('Epa') // por JS ser uma linguagem fracamente tipada - cuidado -