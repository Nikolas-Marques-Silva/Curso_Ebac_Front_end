class Aluno {
    /**
     * Constructor function for creating an instance of the class.
     *
     * @param {type} nome - The name parameter.
     * @param {type} nota - The nota parameter.
     */
    constructor(nome, nota) {
        this.nome = nome
        this.nota = nota
    }
}

const joao = new Aluno('João', 5)
const maria = new Aluno('Maria', 7)
const jose = new Aluno('Jose', 9)
const ana = new Aluno('Ana', 3)

const alunos = [joao, maria, jose, ana]

/**
 * Returns whether the student is approved based on their grade.
 *
 * @param {Object} aluno - The student object.
 * @param {number} aluno.nota - The grade of the student.
 * @return {boolean} Whether the student is approved or not.
 */
function retornaAprovados(aluno) {
    return aluno.nota >= 7
}

const aprovados = alunos.filter(retornaAprovados)

// const aprovados = alunos.filter(aluno => {
//     return aluno.nota >= 7
//})
//O exercício especificou uma função, por causa disso não utilizei esse código

console.log(aprovados)

