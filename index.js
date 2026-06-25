const jwt = require('jsonwebtoken');

function verificarToken(req, res, next) {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) return res.status(401).send('Acceso denegado');

    try {
        const verificado = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verificado; // Añade los datos del usuario al request
        next();
    } catch (error) {
        res.status(400).send('Token inválido o expirado');
    }
}