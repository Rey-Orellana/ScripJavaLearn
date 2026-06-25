const cors = require('cors');

const corsOptions = {
    origin: 'https://mi-frontend-seguro.com', // Solo este dominio puede acceder
    methods: ['GET', 'POST'],
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));