class Figura {
    calcularArea() {
        throw new Error("Debe implementar calcularArea()");
    }
}

class Rectangulo extends Figura {
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
    }

    calcularArea() {
        return this.base * this.altura;
    }
}

const rect = new Rectangulo(5, 4);
console.log(rect.calcularArea());