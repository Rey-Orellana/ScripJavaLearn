app.use(session({
    secret: 'un_secreto_muy_fuerte_123',
    cookie: {
        httpOnly: true, // Bloquea acceso desde JavaScript (Mitiga XSS)
        secure: true,   // Solo se envía a través de HTTPS
        sameSite: 'strict', // Previene ataques CSRF
        maxAge: 3600000 // 1 hora de expiración
    }
}));