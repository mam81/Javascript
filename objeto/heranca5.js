console.log(typeof String, typeof Array, typeof Object) // como tratase de funções tem 'prototype'

String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse())

String.prototype.toString = function() {
    return 'Lascou tudo'
}

console.log('Escola Cod3r'.reverse()) // caiusou um 'efeito colateral'

Array.prototype.first = function() {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())


