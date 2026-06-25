const inventario = [{ id: 1, item: 'Laptop', stock: 10 }];

// Función simulada de actualización en servidor externo
const simularUpdateAPI = async (id, nuevoStock) => {
    if (nuevoStock < 0) throw new Error('Stock no puede ser negativo');
    
    // Simula retraso de red
    return new Promise((resolve) => setTimeout(() => {
        let art = inventario.find(i => i.id === id);
        if (art) art.stock = nuevoStock;
        resolve('Actualizado en el servidor');
    }, 1200));
};

async function ejecutarFlujoCRUD() {
    try {
        console.log('Intentando actualizar stock...');
        const respuesta = await simularUpdateAPI(1, 15);
        console.log('Resultado API:', respuesta);
        console.log('Inventario final:', inventario);
    } catch (error) {
        console.error('Surgió un problema:', error.message);
    }
}

ejecutarFlujoCRUD();