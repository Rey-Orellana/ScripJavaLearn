class Persona {
    constructor(nombre = "Sin nombre", edad = 0) {
        this.nombre = nombre;
        this.edad = edad;
    }

    mostrar() {
        console.log(`${this.nombre} - ${this.edad} años`);
    }
}

const p1 = new Persona();
const p2 = new Persona("Luis", 30);

p1.mostrar();
p2.mostrar();