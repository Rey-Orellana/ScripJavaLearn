class Animal {
    sonido() {
        console.log("Sonido genérico");
    }
}

class Gato extends Animal {
    sonido() {
        console.log("Miau");
    }
}

class Vaca extends Animal {
    sonido() {
        console.log("Muu");
    }
}

const animales = [new Gato(), new Vaca()];

animales.forEach(animal => animal.sonido());