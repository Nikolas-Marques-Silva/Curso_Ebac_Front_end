function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.dizOi = () => {
        console.log(`Oi, eu sou ${this.nome} ${this.sobrenome}`)
    }
}

function Funcionario (nome, sobrenome, cargo, salorio) {
    this.cargo = cargo
    let _salario = salorio

    this.getSalario = () => {
        return _salario
    }

    this.setSalario = (salario) => {
        if (typeof salario === 'number') {
            _salario = salario
        }
    }

    this.dizCargo = () => {
        console.log(`Eu trabalho como ${this.cargo}`)
    }

    this.increaseSalario = () => {
        const newSalario = _salario * 1.1
        _salario = newSalario
    }

    Pessoa.call(this, nome, sobrenome)
}

function Estagiario(nome, sobrenome) {
    Funcionario.call(this, nome, sobrenome, 'Estagiário', 1000)

    this.increaseSalario = () => {
        const newSalario = this.getSalario() * 1.07
        this.setSalario(newSalario) 
    }
}

function Gerente(nome, sobrenome) {
    Funcionario.call(this, nome, sobrenome, 'Gerente', 10000)

    this.increaseSalario = () => {
        const newSalario = this.getSalario() * 1.2
        this.setSalario(newSalario)
    }
}

const funcionario1 = new Funcionario('Maria', 'Silva', 'Desenvolvedora', 2000)
const funcionario2 = new Estagiario('João', 'Silva')
const funcionario3 = new Gerente('Pedro', 'Silva')

funcionario1.increaseSalario()
console.log(funcionario1.getSalario())

funcionario2.increaseSalario()
console.log(funcionario2.getSalario())

funcionario3.increaseSalario()
console.log(funcionario3.getSalario())