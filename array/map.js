// Map serve para transformar um array em outro  (com mesmo tamanho) - nao causando modificação no array atual - 

const nums = [1, 2, 3, 4, 5]

// for com proposito
let resultado = nums.map(function(e) {
    return e * 2
})
 
console.log(resultado, nums)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro) // faz na ordem da esquerda para direita
console.log(resultado)



