class CuentaBancaria {
  #saldo;

  constructor(saldoInicial) {
    this.#saldo = saldoInicial;
  }

  verSaldo() {
    return this.#saldo;
  }
}

const cuenta = new CuentaBancaria(1000);
// console.log(cuenta.#saldo); // Error: Private field '#saldo' must be declared in an enclosing class
console.log(cuenta.verSaldo()); // 1000