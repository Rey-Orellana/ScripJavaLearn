class Contador {
  static cuentaGlobal = 0;

  constructor() {
    Contador.cuentaGlobal++;
  }
}

new Contador();
new Contador();
console.log(Contador.cuentaGlobal); // 2