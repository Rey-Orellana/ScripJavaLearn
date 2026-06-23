class Configuracion {
  constructor() {
    if (Configuracion.instancia) {
      return Configuracion.instancia;
    }
    this.tema = "oscuro";
    Configuracion.instancia = this;
  }
}

const config1 = new Configuracion();
const config2 = new Configuracion();
console.log(config1 === config2); // true (Son exactamente el mismo objeto)