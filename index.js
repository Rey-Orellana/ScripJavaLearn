class Profesor {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

class Curso {
    constructor(nombre, profesor) {
        this.nombre = nombre;
        this.profesor = profesor;
    }

    mostrar() {
        console.log(`${this.nombre} es impartido por ${this.profesor.nombre}`);
    }
}

const profesor = new Profesor("Carlos");
const curso = new Curso("JavaScript", profesor);

curso.mostrar();