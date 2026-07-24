class Empleado {
    constructor(nombre, sueldo) {
        this.nombre = nombre;
        this.sueldo = sueldo;
    }

    aumentarSueldo(porcentaje) {
        this.sueldo += this.sueldo * porcentaje / 100;
    }
}

const e = new Empleado("Pedro", 5000);
e.aumentarSueldo(10);

console.log(e);