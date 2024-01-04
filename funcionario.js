function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.dizOi = () => {
        console.log(`Oi, eu sou ${this.nome} ${this.sobrenome}`)
    }
}

function Funcionario (nome, sobrenome, cargo, salorio) {
    this.cargo = cargo
    this.salario = salorio

    this.dizCargo = () => {
        console.log(`Eu trabalho como ${this.cargo}`)
    }

    Pessoa.call(this, nome, sobrenome)
}

const funcionario1 = new Funcionario('Maria', 'Silva', 'Desenvolvedora', 2000)

funcionario1.dizOi()
funcionario1.dizCargo()

console.log(funcionario1)
