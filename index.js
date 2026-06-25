const productos = [];

function crearProducto(producto) {
    // Validaciones básicas antes de insertar
    if (!producto.nombre || typeof producto.precio !== 'number') {
        console.error('Error: Datos del producto inválidos.');
        return;
    }
    productos.push(producto);
    console.log('Producto añadido con éxito.');
}

crearProducto({ nombre: 'Mouse', precio: 25 }); // Válido
crearProducto({ nombre: 'Teclado', precio: 'gratis' }); // Error en consola