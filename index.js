const usuarios = [
    { id: 1, nombre: 'Ana', rol: 'admin' },
    { id: 2, nombre: 'Carlos', rol: 'user' },
    { id: 3, nombre: 'Beatriz', rol: 'user' }
];

// Leer un usuario por ID
const usuarioId2 = usuarios.find(u => u.id === 2);
console.log('Usuario con ID 2:', usuarioId2);

// Filtrar usuarios por rol (Read avanzado)
const usuariosNormales = usuarios.filter(u => u.rol === 'user');
console.log('Usuarios con rol "user":', usuariosNormales);