class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

class Estudiante extends Persona {

    constructor(nombre, carrera) {
        super(nombre);
        this.carrera = carrera;
    }

    mostrar() {
        console.log(`${this.nombre} estudia ${this.carrera}`);
    }
}

const estudiante = new Estudiante("Ana", "Ingeniería");
estudiante.mostrar();