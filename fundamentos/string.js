const escola = "Teste"

console.log(escola.charAt(4)) // mostra a letra na posicao 4(comecando na posicao 0(zero))

console.log(escola.charAt(5)) // como nao foi encontrada nada retorna um vazio - nao da um erro -

console.log(escola.charCodeAt(3)) // pega a posicao passada e verifica o indice na tabela Ascii - no caso foi pego a letra 't' -

console.log(escola.indexOf('t'))

console.log(escola.substring(1)) // retorna a palavra apartir do indice passado - um slice - 

console.log(escola.substring(0, 4)) // vai do indice 0 ao 3 no caso

console.log('Escola'.concat(escola).concat("!"))

console.log('Escola' + escola + "!")

console.log(escola.replace('e', 3)) // pega a primeira ocorencia para a substituicao

console.log(escola.replace(/\d/, 'e')) // significa 'substitua todos os digitos na palavra pela letra 'e'

console.log(escola.replace(/\w/, 'e')) // pega a primeira ocorencia para a substituicao

console.log(escola.replace(/\w/g, 'e')) //substitui todas as ocorrencias

console.log('Ana, Maria, Pedro'.split(',')) // transforma em um array

