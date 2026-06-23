class Auto {
  constructor() {
    this.velocidad = 0;
  }

  acelerar() {
    this.velocidad += 10;
    return this; // Clave para el encadenamiento
  }

  frenar() {
    this.velocidad -= 5;
    return this;
  }
}

const miAuto = new Auto();
miAuto.acelerar().acelerar().frenar();
console.log(miAuto.velocidad); // 15