class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    esMayorQue(otraPersona) {
        return this.edad > otraPersona.edad;
    }
}

const persona1 = new Persona("Juan", 30);
const persona2 = new Persona("Pedro", 25);

console.log(persona1.esMayorQue(persona2)); // true