const bcrypt = require('bcrypt');

async function registrarUsuario(passwordPlana) {
    const saltRounds = 12; // Factor de costo/lentitud del algoritmo
    const passwordHasheada = await bcrypt.hash(passwordPlana, saltRounds);
    
    // Guardar `passwordHasheada` en la base de datos
    return passwordHasheada;
}