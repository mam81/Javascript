function tratarErrorELancar(erro) {
   // throw new Error('Desculpe pelo ocorrido, espere // um momento ....')

   // throw 10

   // throw true

   // throw 'message'

   /*throw {
       nome: erro.name,
       msg: erro.message,
       date: new Date
   }
   */
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErrorELancar(e)
    } finally {
        console.log('final!') // será chamado de qualquer maneira - com erro ou não - 
    }
}

const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)