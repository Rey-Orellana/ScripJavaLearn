class Usuario {

    static total = 0;

    constructor(nombre) {
        this.nombre = nombre;
        Usuario.total++;
    }

    static cantidadUsuarios() {
        return Usuario.total;
    }
}

new Usuario("Ana");
new Usuario("Luis");
new Usuario("Carlos");

console.log(Usuario.cantidadUsuarios());