class VehiculoGamaAlta { info() { return "Auto de lujo"; } }
class VehiculoGamaBaja { info() { return "Auto económico"; } }

class FabricaVehiculos {
  crear(tipo) {
    if (tipo === 'lujo') return new VehiculoGamaAlta();
    if (tipo === 'economico') return new VehiculoGamaBaja();
    throw new Error("Tipo no soportado");
  }
}

const fabrica = new FabricaVehiculos();
const miAutoNuevo = fabrica.crear('lujo');
console.log(miAutoNuevo.info()); // Auto de lujo