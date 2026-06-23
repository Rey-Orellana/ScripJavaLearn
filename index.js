class Validador {
  #encriptar(texto) {
    return btoa(texto); // Simulación básica
  }

  procesarUsuario(pass) {
    return this.#encriptar(pass);
  }
}

const auth = new Validador();
console.log(auth.procesarUsuario("12345")); // "MTIzNDU="