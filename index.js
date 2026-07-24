class Libro {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
        this.disponible = true;
    }

    prestar() {
        if (this.disponible) {
            this.disponible = false;
            console.log(`${this.titulo} ha sido prestado.`);
        } else {
            console.log(`${this.titulo} no está disponible.`);
        }
    }

    devolver() {
        this.disponible = true;
        console.log(`${this.titulo} ha sido devuelto.`);
    }
}

class Biblioteca {
    constructor() {
        this.libros = [];
    }

    agregarLibro(libro) {
        this.libros.push(libro);
    }

    mostrarLibros() {
        this.libros.forEach(libro => {
            console.log(`${libro.titulo} - ${libro.autor} (${libro.disponible ? "Disponible" : "Prestado"})`);
        });
    }
}

const biblioteca = new Biblioteca();

const libro1 = new Libro("Clean Code", "Robert C. Martin");
const libro2 = new Libro("JavaScript", "Eloquent JavaScript");

biblioteca.agregarLibro(libro1);
biblioteca.agregarLibro(libro2);

libro1.prestar();

biblioteca.mostrarLibros();