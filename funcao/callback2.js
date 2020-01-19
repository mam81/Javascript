const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// SEM CALLBACK

const notasBaixas1 = []
for (let i in notas) {
    if(notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

// COM CALLBACK

// notasBaixas2 = notas.filter(nota => nota < 7 {
//     return nota < 7
// })

//const notasBaixas2 = notas.filter(nota => nota < 7)

const notasMenor7 = nota => nota < 7
const notasBaixas2 = notas.filter(notasMenor7)

console.log(notasBaixas2)