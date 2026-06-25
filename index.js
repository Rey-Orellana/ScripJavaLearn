// MALO: `SELECT * FROM users WHERE email = '${req.body.email}'` (Vulnerable)

// BUENO: Valores parametrizados
const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
db.execute(query, [req.body.email, req.body.password], (err, results) => {
    // El motor de la BD trata los inputs estrictamente como datos, no como código
});