class Conta {
    constructor(saldo){
        this.saldo = saldo;
    }

    deposito(valor){
        this.saldo += valor;
    }

    saque(valor){
        this.saldo -= valor;
    }
}

let felipe = new Conta(1000);

felipe.deposito(1000);

console.log(felipe.saldo);

felipe.saque(500);

console.log(felipe.saldo);