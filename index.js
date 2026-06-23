class Usuario {
  #edad;

  set edad(valor) {
    if (valor < 0) throw new Error("La edad no puede ser negativa");
    this.#edad = valor;
  }

  get edad() {
    return this.#edad;
  }
}

const user = new Usuario();
user.edad = 30; // Funciona
// user.edad = -5; // Lanza Error