class Animal {
  constructor(especie) {
    this.especie = especie;
  }
}

class Gato extends Animal {
  constructor(nombre) {
    super("Felino"); // Llama al constructor de Animal
    this.nombre = nombre;
  }
}

const miGato = new Gato("Michi");
console.log(miGato.especie); // Felino