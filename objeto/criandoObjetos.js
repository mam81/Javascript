// Formas de se criar um objeto

// 1) Usando a notacao literal

const obj1 = {}
console.log(obj1)

// 2) Objeto em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// 3) Funcoes construtoras
function Produto(nome, preco, desconto) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2899, 0.2)

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// 4) Funcao factory

function criarFuncionario(nome, salarioBase, faltas ) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Joao', 7940, 4)
const f2 = criarFuncionario('Maria', 10000, 1)
console.log(f1.getSalario(), f2.getSalario())

// 5) Object.create

const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// 6) Uma funcao famosa que retorna Objeto....
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)
