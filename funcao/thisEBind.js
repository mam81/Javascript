const pessoa = {
    saudacao: 'bom dia', 
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa) // o bind é reponsavel por 'amarrar' um determinado objeto para ele ser o dono da execucao daquele metodo sempre que for chamado
falarDePessoa()