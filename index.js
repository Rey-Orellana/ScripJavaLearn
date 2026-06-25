const { doubleCsrf } = require("csrf-csrf");

const { doubleCsrfProtection } = doubleCsrf({
    cookieName: "x-csrf-token",
    secret: "secreto_super_seguro_para_csrf",
    cookieOptions: { httpOnly: true, secure: true, sameSite: "lax" }
});

// Middleware aplicado a rutas mutables (POST, PUT, DELETE)
app.post('/api/transferir-dinero', doubleCsrfProtection, (req, res) => {
    res.send("Transferencia segura completada");
});