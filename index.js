const express = require('express');
const helmet = require('helmet');
const app = express();

// Aplica 15+ cabeceras de seguridad de golpe
app.use(helmet());