const element = new Image();
Object.defineProperty(element, 'id', { get: () => { console.log('Herramientas de desarrollador detectadas'); } });
console.log('%c', element);