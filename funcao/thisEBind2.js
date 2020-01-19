function Pessoa() {
    this.idade = 0

    const self = this
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000 ) // a cada x milesegundos a funcao sera disparada novamente(1000ms = 1s)
}

new Pessoa