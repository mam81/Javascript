function rand({ min = 0, max = 1000 }) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40])) //ha a troca de valores min:40 e max:50
console.log(rand([992])) // min = 992 e max = 1000
console.log(rand([, 10])) // min = 0 e max = 10
console.log(rand([])) // entre 0 e 1000
