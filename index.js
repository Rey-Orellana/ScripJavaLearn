class Logger {
  log(msg) { console.log(` LOG: ${msg}`); }
}

class ServicioUsuarios {
  constructor(logger) {
    this.logger = logger; // El logger es inyectado externamente
  }

  crear() {
    this.logger.log("Usuario registrado con éxito");
  }
}

const miLogger = new Logger();
const servicio = new ServicioUsuarios(miLogger);
servicio.crear();