const rateLimit = require('express-rate-limit');

const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // Ventana de 15 minutos
    max: 5, // Máximo 5 intentos de login por IP
    message: 'Demasiados intentos de inicio de sesión. Intenta en 15 minutos.'
});

app.use('/api/login', loginLimiter);