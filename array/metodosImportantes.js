const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

// REMOCAO
pilotos.shift() // remove o primeiro elemento
pilotos.pop() // remove o ultimo elemento

// INSERCAO
pilotos.unshift('Hamilton') // insere no inicio do array
pilotos.push('Verstappen') // insere o elemento no final do array

// SPLICE pode adicionar e/ou remover elementos

// ADICIONAR
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// REMOVER
pilotos.splice(3, 1) // 'Massa' deletado
console.log(pilotos)


// SLICE - pega uma parte do array - 

const algunsPilotos1 = pilotos.slice(2) // novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // vai do indice 1 ate o 3 (o indice 4 nao entra)
console.log(algunsPilotos2)


