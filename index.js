const mongoSanitize = require('express-mongo-sanitize');
const express = require('express');
const app = express();

app.use(express.json());
// Busca y elimina cualquier "$" o "." de los inputs del usuario
app.use(mongoSanitize());