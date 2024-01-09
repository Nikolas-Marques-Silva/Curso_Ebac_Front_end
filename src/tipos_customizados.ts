type Aluno = {
    nome: string
    cursos?: string[]
    idade: number
}

const alunos: Aluno[] = [
    {
        nome: "Carlos",
        cursos: ["Javascript", "Typescript"],
        idade: 27
    },
    {
        nome: "Ana",
        cursos: ["Back-end", "UX/UI"],
        idade: 23
    }
]

alunos.push({
    nome: "Julia",
    cursos: ["Arquitetura"],
    idade: 29
})

const novoAluno: Aluno = {
    nome: "João",
    idade: 19
}

alunos.push(novoAluno)

function exibirAluno(aluno: Aluno) {
    console.log(aluno)
}