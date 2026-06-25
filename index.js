const KEY_STORAGE = 'mis_notas';

// Guardar/Crear
function guardarNotas(notas) {
    localStorage.setItem(KEY_STORAGE, JSON.stringify(notas));
}

// Leer
function obtenerNotas() {
    const notas = localStorage.getItem(KEY_STORAGE);
    return notas ? JSON.parse(notas) : [];
}

// Flujo de actualización rápido
let notasActuales = obtenerNotas();
notasActuales.push({ id: 1, texto: 'Comprar leche' });
guardarNotas(notasActuales);

console.log('Notas desde LocalStorage:', obtenerNotas());