"use strict";
class Conta {
    constructor(numeroConta) {
        this.saldo = 0;
        this.numeroConta = numeroConta;
    }
}
class ContaSalario extends Conta {
    set setSaldo(valor) {
        this.saldo += valor;
    }
}
class ContaCorrente extends Conta {
    constructor() {
        super(...arguments);
        this.taxaTransferencia = 0;
    }
    transfer(destino, valor) {
        try {
            if (this.saldo < valor) {
                throw new Error("Saldo insuficiente");
            }
            this.saldo -= valor - this.taxaTransferencia;
            destino.saldo += valor - this.taxaTransferencia;
            return true;
        }
        catch (error) {
            return false;
        }
    }
    ;
}
