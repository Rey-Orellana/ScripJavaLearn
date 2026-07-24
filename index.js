class Producto {

    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

class Carrito {

    constructor() {
        this.productos = [];
    }

    agregar(producto) {
        this.productos.push(producto);
    }

    total() {
        return this.productos.reduce((suma, p) => suma + p.precio, 0);
    }
}

const carrito = new Carrito();

carrito.agregar(new Producto("Mouse", 80));
carrito.agregar(new Producto("Teclado", 150));

console.log(carrito.total());