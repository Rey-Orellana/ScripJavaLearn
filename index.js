function crearClaseEntidad(nombrePropiedad) {
  return class {
    constructor(valor) {
      this[nombrePropiedad] = valor;
    }
  };
}

const Producto = crearClaseEntidad("precio");
const tv = new Producto(500);
console.log(tv.precio); // 500