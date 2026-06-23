class Ave {
  volar() {
    return "El ave está volando";
  }
}

class Pinguino extends Ave {
  volar() {
    return "Los pingüinos no pueden volar, pero nadan excelente";
  }
}

const pingu = new Pinguino();
console.log(pingu.volar());