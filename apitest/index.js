const express = require('express');
const routerApi = require('./rutas')

const { logErrors, errorHandler, boomerrorHandler } = require('./middlewares/error.handler')

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) =>{
  res.send('Hola prueba de servidor');
});

routerApi(app);

app.use(logErrors);
app.use(boomerrorHandler);
app.use(errorHandler);

app.listen(port, () =>{
  console.log('Mi port' + port);
});

