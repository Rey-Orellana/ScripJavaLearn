class BaseDeDatos {
  constructor() {
    if (this.constructor === BaseDeDatos) {
      throw new Error("No puedes instanciar una clase abstracta directamente.");
    }
  }

  conectar() {
    throw new Error("El método 'conectar()' debe ser implementado.");
  }
}

// const db = new BaseDeDatos(); // Error
class MySQL extends BaseDeDatos {}
// new MySQL().conectar(); // Error: El método debe ser implementado