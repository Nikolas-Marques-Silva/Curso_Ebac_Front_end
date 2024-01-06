const minhaFunçao = () => "Hello World"

console.log(minhaFunçao())

const retornaCarro = () => ({
        modelo: 'Ka',
        marca: 'Ford',
        ano: 2020,
        cor: 'preto'
})

console.log(carro())

const carro = {
    velocidadeAtual: 40,
    acelerar: function () {
        this.velocidadeAtual += 10
    },
    frear: () => this.velocidadeAtual -= 10
}

carro.acelerar()
carro.frear()

console.log(carro.velocidadeAtual)