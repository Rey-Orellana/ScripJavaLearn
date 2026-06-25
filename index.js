class GestorLibros {
    constructor() {
        this.libros = [];
    }

    crear(titulo, autor) {
        const nuevoLibro = { id: Date.now(), titulo, autor };
        this.libros.push(nuevoLibro);
        console.log(`Agregado: "${titulo}"`);
    }

    leer() {
        return this.libros;
    }

    actualizar(id, nuevosDatos) {
        this.libros = this.libros.map(libro => 
            libro.id === id ? { ...libro, ...nuevosDatos } : libro
        );
    }

    borrar(id) {
        this.libros = this.libros.filter(libro => libro.id !== id);
    }
}

const biblioteca = new GestorLibros();
biblioteca.crear('Cien años de soledad', 'Gabo');
console.log('Biblioteca actual:', biblioteca.leer());