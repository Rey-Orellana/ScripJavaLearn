class Vehiculo {

    mover() {
        console.log("El vehículo se mueve");
    }
}

class Automovil extends Vehiculo {

    conducir() {
        console.log("Conduciendo automóvil");
    }
}

class Taxi extends Automovil {

    cobrar() {
        console.log("Cobrando carrera");
    }
}

const taxi = new Taxi();

taxi.mover();
taxi.conducir();
taxi.cobrar();