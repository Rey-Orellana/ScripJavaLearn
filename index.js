class Producto {

    constructor(nombre) {
        this._nombre = nombre;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(valor) {
        this._nombre = valor;
    }
}

const p = new Producto("Laptop");
console.log(p.nombre);

p.nombre = "Monitor";
console.log(p.nombre);