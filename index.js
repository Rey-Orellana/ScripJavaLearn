const express = require('express');
const app = express();

// Elimina la cabecera X-Powered-By: Express
app.disable('x-powered-by');