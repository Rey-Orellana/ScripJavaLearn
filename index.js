class Libro {

    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
    }

    informacion() {
        return `${this.titulo} - ${this.autor}`;
    }
}

const libro = new Libro("El Quijote", "Miguel de Cervantes");

console.log(libro.informacion());