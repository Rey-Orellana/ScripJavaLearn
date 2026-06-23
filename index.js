class Calculadora {
  static sumar(a, b) {
    return a + b;
  }
}

// No se usa "new", se llama directo desde la clase
console.log(Calculadora.sumar(5, 10)); // 15