class Persona {

    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    toString() {
        return `${this.nombre} (${this.edad})`;
    }
}

const persona = new Persona("Laura", 22);

console.log(persona.toString());