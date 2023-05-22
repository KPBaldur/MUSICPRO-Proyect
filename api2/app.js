const express = require('express');
const config = require('./config');

const app = express();

//Configuracion de los puertos de la app
app.set('port', config.app.port)


//Configuracion de las rutas
app.use('/api/clientes', clientes)


module.exports = app;