let compararComThis = function(param) {
    console.log(this === param)
}

compararComThis(global) 

const obj = {}
compararComThis = compararComThis.bind(obj)
compararComThis(global)
compararComThis(obj)

// o this de uma funcao arrow é um this associado no contexto em que a funcao foi escrita - sem variacao - 

let compararComThisArrow = param => console.log(this === param)

compararComThisArrow(global)
compararComThisArrow(module.exports)
compararComThisArrow(this)

compararComThisArrow = compararComThisArrow.bind(obj)
compararComThisArrow(obj)
compararComThisArrow(module.exports)
