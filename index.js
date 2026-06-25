const hpp = require('hpp');
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
// Si detecta parámetros repetidos, los ignora y se queda solo con el último
app.use(hpp());