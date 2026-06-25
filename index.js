// 1. CREATE (Crear)
let tareas = ['Aprender JS'];
tareas.push('Practicar CRUD'); 
console.log('Después de Create:', tareas);

// 2. READ (Leer)
console.log('Leyendo primera tarea:', tareas[0]);

// 3. UPDATE (Actualizar)
tareas[0] = 'Masterizar JS';
console.log('Después de Update:', tareas);

// 4. DELETE (Eliminar)
tareas.splice(1, 1); // Elimina 1 elemento desde la posición 1
console.log('Después de Delete:', tareas);