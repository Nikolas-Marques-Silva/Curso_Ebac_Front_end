const redesSociais = [
    'Facebook',
    'Instagram',
    'Twitter',
]

for (let i = 0; i < redesSociais.length; i++) {
    console.log(`Eu tenho um perfil na rede social: ${redesSociais[i]}`)
}

redesSociais.forEach((redesSociais, index) => {
    console.log(`#${index} Eu tenho um perfil na rede social: ${redesSociais}`)
})

const alunos = [
    'João',
    'Maria',
    'Pedro',
    'Joaquim',
    'Ana',
]

const alunosInscritos = alunos.map((aluno) => {
    return {
        nome: aluno,
        curso: 'Front-end'
    }
})

console.log(alunosInscritos)

const joaquim = alunosInscritos.find((aluno) => {
    return aluno.nome === 'Joaquim'
})

console.log(joaquim)

const indexjoaquim = alunosInscritos.findIndex((aluno) => {
    return aluno.nome === 'Joaquim'
})

const todosAlunosSaoDeFrontEnd = alunosInscritos.every((aluno) => {
    return aluno.curso === 'Front-end'
})

console.log(todosAlunosSaoDeFrontEnd)

alunosInscritos.push({
    nome: 'Paulo',
    curso: 'Back-end'
})

console.log(todosAlunosSaoDeFrontEnd)

const existeAlgumAlunoDeBackEnd = alunosInscritos.some((aluno) => {
    return aluno.curso === 'Back-end'
})

console.log(existeAlgumAlunoDeBackEnd)

const alunosDeBackEnd = alunosInscritos.filter((aluno) => {
    return aluno.curso === 'Back-end'
})

console.log(alunosDeBackEnd)

const numeros = [
    1,
    2,
    3,
    4,
    5,
]
const dobroDosNumeros = numeros.map((numero) => {
    return numero * 2
})

console.log(dobroDosNumeros)

const multiplosDeDez = [
    10,
    20,
    30,
    40
]

const somaDosMultiplosDeDez = multiplosDeDez.reduce((soma, multiplo) => {
    return soma += multiplo
}, 0)

console.log(somaDosMultiplosDeDez)

const nomesDosAlunos = alunosInscritos.reduce((nomes, aluno) => {
    return nomes += `${aluno.nome}, `
}, '')

console.log(nomesDosAlunos)