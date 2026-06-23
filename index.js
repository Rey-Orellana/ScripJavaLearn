class Motor {
  encender() { return "Motor encendido..."; }
}

class Automovil {
  constructor() {
    this.motor = new Motor(); // Composición
  }

  arrancar() {
    return this.motor.encender() + " ¡Vámonos!";
  }
}

const coche = new Automovil();
console.log(coche.arrancar());