class Cuenta {
  constructor(usuario) {
    this.usuario = usuario;
  }
}

const cuentaOriginal = new Cuenta("Carlos");

const cuentaProtegida = new Proxy(cuentaOriginal, {
  get(target, propiedad) {
    console.log(`Accediendo a la propiedad: ${propiedad}`);
    return target[propiedad] || "Propiedad no encontrada";
  },
  set(target, propiedad, valor) {
    if (propiedad === "usuario" && typeof valor !== "string") {
      throw new TypeError("El usuario debe ser un texto");
    }
    target[propiedad] = valor;
    return true;
  }
});

console.log(cuentaProtegida.usuario); // Accediendo a la propiedad: usuario -> Carlos
cuentaProtegida.usuario = "Sofía"; // Funciona correctamente