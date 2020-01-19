alunos = [
    { nome: 'Joao', nota: 7.9 },
    { nome: 'Maria', nota: 9.2 }
]

// IMPERATIVO - Como fazer - delega muitas responsabilidades

let total = 0
for(let i = 0; i < alunos.length; i ++) {
    total += alunos[i].nota
    
}
console.log(total / alunos.length)

// DECLARATIVO (recomendado) - O que fazer - a linguagem em si resolve(detalhes resolvidos internamente)

const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual

const total1 = alunos.map(getNota).reduce(soma)
console.log(total1 / alunos.length)