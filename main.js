const carroDoJoao = {
    modelo: 'Fiesta',
    fabricante: 'Ford',
    anoModelo: 2020,
    anoFabricacao: 2019,
    acelerar: () => {
        console.log('vruum vruum');
    }
}

const carroDaMaria = {
    modelo: 'Ka',
    fabricante: 'Ford',
    anoModelo: 2021,
    anoFabricacao: 2020,
    acelerar: () => {
        console.log('vruum vruum');
    }
}

function Carro (modelo, fabricante, anoModelo, anoFabricacao) {
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;
    this.acelerar = () => {
        console.log('vruum vruum');
    }
}

const carroDoJoao2 = new Carro('Fiesta', 'Ford', 2020, 2019);
const carroDaMaria2 = new Carro('Ka', 'Ford', 2021, 2020);

console.log(carroDoJoao2);
console.log(carroDaMaria2);

const nome = 'João';
const idade = 30;
const ehMaiorDeIdade = true;
const conhecimentos = ['Javascript', 'HTML', 'CSS'];

const pessoa = {
    nome: nome,
    idade: idade,
    ehMaiorDeIdade: ehMaiorDeIdade,
    conhecimentos: conhecimentos
}

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof ehMaiorDeIdade);
console.log(typeof conhecimentos);
console.log(typeof pessoa);

console.log(conhecimentos instanceof Array);
console.log(carroDaMaria2 instanceof Carro);

console.log(pessoa.nome)
console.log(pessoa['nome'])

function exibeAtributo(nomeDoAtributo) {
    console.log(pessoa[nomeDoAtributo]);
}

exibeAtributo('nome');

pessoa['sobrenome'] = null;

Object.freeze(pessoa);

pessoa.nome = 'Maria';

if (pessoa.sobrenome) {
    console.log('Pessoa possui sobrenome');
} else {
    console.log('Pessoa não possui sobrenome');
}

if ('sobrenome' in pessoa) {
    console.log('Pessoa possui sobrenome');
} else {
    console.log('Pessoa não possui sobrenome');
}

console.log(Object.keys(pessoa));
console.log(Object.keys(pessoa).length);
console.log(Object.values(pessoa));
