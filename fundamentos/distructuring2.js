const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8] // , , serve como desconsiderar o valor - pular -
console.log(n1, n3, n5, n6) // n5 estará fora do array,logo sera definido como 'undefined'

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)