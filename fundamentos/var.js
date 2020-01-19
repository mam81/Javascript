{
    {
        {
            {
                var sera = 'Sera?'
            }
        }
    }
}

console.log(sera) // estará visivel(o 'var') fora do bloco

function teste() {
    var local = 123
    console.log(local)
}
teste() // so é visivel dentro da funcao!
