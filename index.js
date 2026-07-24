class Motor {
    encender() {
        console.log("Motor encendido");
    }
}

class Auto {
    constructor() {
        this.motor = new Motor();
    }

    conducir() {
        this.motor.encender();
        console.log("El auto está en marcha");
    }
}

const auto = new Auto();
auto.conducir();