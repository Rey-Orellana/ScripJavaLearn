class Coleccion {
  constructor() {
    this.items = ["Item A", "Item B", "Item C"];
  }

  *[Symbol.iterator]() { // Generador para simplificar el iterador
    for (let item of this.items) {
      yield item;
    }
  }
}

const miLista = new Coleccion();
for (let elemento of miLista) {
  console.log(elemento); // Imprime A, B y C individualmente
}