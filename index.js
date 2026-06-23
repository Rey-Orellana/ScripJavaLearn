class Boton {
  constructor(texto) {
    this.texto = texto;
    // Vinculamos permanentemente el contexto
    this.hacerClick = this.hacerClick.bind(this);
  }

  hacerClick() {
    console.log(`Click en: ${this.texto}`);
  }
}

const miBoton = new Boton("Guardar");
const ejecutar = miBoton.hacerClick;
ejecutar(); // Click en: Guardar (Sin el bind diría "Click en: undefined")