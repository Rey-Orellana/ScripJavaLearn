class BaseDatos {

    static instancia = null;

    constructor() {
        if (BaseDatos.instancia) {
            return BaseDatos.instancia;
        }

        this.conexion = "Conectado";
        BaseDatos.instancia = this;
    }
}

const db1 = new BaseDatos();
const db2 = new BaseDatos();

console.log(db1 === db2);