const Joi = require('joi');

const esquemaRegistro = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,30}$')).required(),
    email: Joi.string().email().required()
});

// Uso en middleware
const { error, value } = esquemaRegistro.validate(req.body);
if (error) {
    return res.status(400).send('Datos de entrada inválidos');
}