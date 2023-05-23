const express = require('express');
const config = require('./config');

const clientes = require('./modulos/clientes/rutas')

const app = express();

//Configuracion de los puertos de la app
app.set('port', config.app.port)

//rutas
app.use('/api/clientes', clientes)

module.exports = app;