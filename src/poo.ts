class Pessoa {
    nome: string;
    sobrenome?: string;

    constructor(nome: string, sobrenome?: string){
        this.nome = nome,
        this.sobrenome = sobrenome
    }

    nomeCompleto(): string {
        return `${this.nome} ${this.sobrenome}`
    }
}

class ContaBancaria {
    protected saldo: number = 0;
    public numeroConta: number;

    constructor(numeroConta: number){
        this.numeroConta = numeroConta;
    }

    static returnBankNumber(){
        return 125;
    }

    private get getSaldo(){
        return this.saldo;
    }

    public set setSaldo(valor: number){
        this.saldo += valor;    
    }
}

class PessoaFisica extends ContaBancaria {
    public set setSaldo(valor: number) {
        this.saldo = valor * 2;
    }
}

const contaDoPedro = new ContaBancaria(123);

ContaBancaria.returnBankNumber()