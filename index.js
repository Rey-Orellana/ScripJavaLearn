const dbEmpleados = [];

const crearEmpleado = (empleado) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!empleado.nombre) reject('Nombre requerido');
            dbEmpleados.push(empleado);
            resolve('Empleado contratado con éxito');
        }, 1000);
    });
};

const mostrarEmpleados = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(dbEmpleados), 500);
    });
};

// Uso con promesas
crearEmpleado({ id: 101, nombre: 'Lucía' })
    .then(msg => {
        console.log(msg);
        return mostrarEmpleados();
    })
    .then(datos => console.log('DB actual:', datos))
    .catch(err => console.error(err));