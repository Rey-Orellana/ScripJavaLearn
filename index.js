class Perro {
  constructor(nombre) {
    this.nombre = nombre;
  }

  ladrar() {
    return `${this.nombre} dice: ¡Guau!`;
  }
}

const miPerro = new Perro("Toby");
console.log(miPerro.ladrar()); // Toby dice: ¡Guau!