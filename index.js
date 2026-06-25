let videojuegos = [];

// C - Create
function agregarJuego(id, titulo, genero) {
    videojuegos.push({ id, titulo, genero });
}
// R - Read
function listarJuegos() {
    console.log('--- Lista de Juegos ---', videojuegos);
}
// U - Update
function actualizarGenero(id, nuevoGenero) {
    let juego = videojuegos.find(j => j.id === id);
    if (juego) juego.genero = nuevoGenero;
}
// D - Delete
function eliminarJuego(id) {
    videojuegos = videojuegos.filter(j => j.id !== id);
}

// Prueba
agregarJuego(1, 'Zelda', 'Aventura');
agregarJuego(2, 'Doom', 'Shooter');
actualizarGenero(1, 'RPG de Aventura');
eliminarJuego(2);
listarJuegos();