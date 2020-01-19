function teste1(numero) {
    if (numero > 7)
        console.log(numero)
        console.log('Final') //sem o usi das '{}' só estara dentro do 'if' a parte logo acima e então sempre esta parte sera utilizada - independente de entrar ou nçao dentro da estrutura do 'if'
}

teste1(6)
teste1(8)

function teste2(numero) {
    if(numero > 7); { //cuidade com o ';' - nao usar com as estruturas de controle -
        console.log(numero)
    }
}

teste2(10)
teste2(4)
