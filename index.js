class Rectangulo {
  constructor(ancho, alto) {
    this.ancho = ancho;
    this.alto = alto;
  }

  get area() {
    return this.ancho * this.alto;
  }
}

const rect = new Rectangulo(5, 4);
console.log(rect.area); // 20