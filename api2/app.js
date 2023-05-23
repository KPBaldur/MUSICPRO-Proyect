const express = require('express');
const config = require('./config');

const productos = require('./modulos/productos/rutas')

const app = express();

//Configuracion de los puertos de la app
app.set('port', config.app.port)

//rutas
app.use('/api/productos', productos)

module.exports = app;