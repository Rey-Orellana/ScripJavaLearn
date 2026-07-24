class Animal {
    hablar() {
        console.log("El animal hace un sonido.");
    }
}

class Perro extends Animal {
    ladrar() {
        console.log("Guau Guau");
    }
}

const perro = new Perro();
perro.hablar();
perro.ladrar();