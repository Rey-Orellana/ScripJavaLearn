// Creador de estado inmutable (Factory pattern)
const crearStoreCRUD = () => {
    let estado = []; // Privado, no accesible desde fuera directamente

    return {
        create: (item) => {
            estado = [...estado, { ...item, creadoEn: new Date() }];
        },
        read: () => Object.freeze([...estado]), // Devuelve copia congelada (inmutable)
        update: (id, updates) => {
            estado = estado.map(item => item.id === id ? { ...item, ...updates } : item);
        },
        delete: (id) => {
            estado = estado.filter(item => item.id !== id);
        }
    };
};

// Inicialización del Store
const tareasStore = crearStoreCRUD();

tareasStore.create({ id: 't1', desc: 'Aprender patrones de diseño' });
tareasStore.create({ id: 't2', desc: 'Ir al gimnasio' });
tareasStore.update('t1', { desc: 'Aprender patrones de diseño en JS' });
tareasStore.delete('t2');

console.log('Estado final protegido:', tareasStore.read());