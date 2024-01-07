function somar(){
    let soma = 0
    for(let i = 0; i < arguments.length; i++){
        soma += arguments[i]
    }
    return soma
}

console.log(somar(10, 20, 30, 40))

function somarComRest(...args){
    return args.reduce((soma, valor) => soma += valor, 0)
}

console.log(somarComRest(10, 20, 30, 40))

const numeros = [10, 20, 30, 40]

console.log(...numeros)

const timesDeFutebolDeSP = ['Palmeiras', 'Santos', 'São Paulo', 'Bragantino']
const timesDeFutebolDoRio = ['Vasco', 'Flamengo', 'Fluminense', 'Botafogo']

// const timesDeFutebol = timesDeFutebolDeSP.concat(timesDeFutebolDoRio)
const timesDeFutebol = [...timesDeFutebolDeSP, ...timesDeFutebolDoRio]

console.log(timesDeFutebol)

const carroDaJulia = {
    modelo: 'gol',
    marca: 'Volkswagen',
    motor: 1.6
}

const carroDaAna = {
    ...carroDaJulia,
    motor: 1.8
}

console.log(carroDaJulia)
console.log(carroDaAna)

// const motorDoCarroDaJulia = carroDaJulia.motor

const { motor: motorDoCarroDaJulia } = carroDaJulia
const { motor: motorDoCarroDaAna } = carroDaAna

console.log(motorDoCarroDaJulia)
console.log(motorDoCarroDaAna)

const [Item1, Item2, Item3, Item4, ...Outros] = timesDeFutebol

console.log(Item1, Item2, Item3, Item4, Outros)