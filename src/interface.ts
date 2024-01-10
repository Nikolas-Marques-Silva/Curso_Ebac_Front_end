class Conta {
    numeroConta: number;
    saldo: number = 0;

    constructor(numeroConta: number){
        this.numeroConta = numeroConta;
    }
}

class ContaSalario extends Conta {
    public set setSaldo(valor: number) {
        this.saldo += valor;
    } 
}

interface ITransacional {
    transfer: (destino: Conta, valor: number) => boolean;
    taxaTransferencia: number;
}

class ContaCorrente extends Conta implements ITransacional {
    transfer(destino: Conta, valor: number) {
        try {
            if (this.saldo < valor) {
                throw new Error("Saldo insuficiente");
            }
            this.saldo -= valor - this.taxaTransferencia;
            destino.saldo += valor - this.taxaTransferencia;
            return true;
        } catch (error) {
            return false;
        }
    };
    taxaTransferencia: number = 0;
}