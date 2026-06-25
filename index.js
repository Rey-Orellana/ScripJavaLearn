const API_URL = 'https://jsonplaceholder.typicode.com/posts';

// READ (GET)
async function obtenerPosts() {
    const res = await fetch(`${API_URL}?_limit=2`);
    const data = await res.json();
    console.log('Posts obtenidos:', data);
}

// CREATE (POST)
async function crearPost() {
    const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'Nuevo Post', body: 'Contenido', userId: 1 })
    });
    console.log('Post Creado (Respuesta servidor):', await res.json());
}

// DELETE (DELETE)
async function eliminarPost(id) {
    const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    console.log(`Status de eliminación del id ${id}:`, res.status); // 200 significa OK
}

// Ejecución
obtenerPosts().then(crearPost).then(() => eliminarPost(1));