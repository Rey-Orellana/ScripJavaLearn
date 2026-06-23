class Notificador {
  constructor() { this.suscriptores = []; }
  suscribir(fn) { this.suscriptores.push(fn); }
  notificar(datos) { this.suscriptores.forEach(fn => fn(datos)); }
}

const boletin = new Notificador();
boletin.suscribir(data => console.log(`Lector 1 recibió: ${data}`));
boletin.suscribir(data => console.log(`Lector 2 recibió: ${data}`));

boletin.notificar("Nueva actualización de JS disponible");