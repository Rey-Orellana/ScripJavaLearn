class Estudiante {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

class Universidad {

    constructor(nombre) {
        this.nombre = nombre;
        this.estudiantes = [];
    }

    agregar(estudiante) {
        this.estudiantes.push(estudiante);
    }
}

const u = new Universidad("UMSA");

u.agregar(new Estudiante("María"));
u.agregar(new Estudiante("Carlos"));

console.log(u.estudiantes);