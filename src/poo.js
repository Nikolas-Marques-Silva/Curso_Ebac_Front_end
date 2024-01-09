"use strict";
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome,
            this.sobrenome = sobrenome;
    }
    nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }
}
class ContaBancaria {
    constructor(numeroConta) {
        this.saldo = 0;
        this.numeroConta = numeroConta;
    }
    static returnBankNumber() {
        return 125;
    }
    get getSaldo() {
        return this.saldo;
    }
    set setSaldo(valor) {
        this.saldo += valor;
    }
}
class PessoaFisica extends ContaBancaria {
    set setSaldo(valor) {
        this.saldo = valor * 2;
    }
}
const contaDoPedro = new ContaBancaria(123);
ContaBancaria.returnBankNumber();
