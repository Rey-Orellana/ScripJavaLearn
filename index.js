class Calculadora {

    sumar(a, b) {
        return a + b;
    }

    restar(a, b) {
        return a - b;
    }

    multiplicar(a, b) {
        return a * b;
    }

    dividir(a, b) {
        return a / b;
    }
}

const calc = new Calculadora();

console.log(calc.sumar(8, 5));
console.log(calc.multiplicar(6, 4));