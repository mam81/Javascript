// Callback é você passar uma função e essa funcao sera chamada quando o evento acontecer - no exemplo a seguir seria o loop(forEach) na lista - 

const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice) {
    console.log(`${indice + 1}.${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))