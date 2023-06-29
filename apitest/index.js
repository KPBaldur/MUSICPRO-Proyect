const express = require('express');
const cors = require('cors');
const routerApi = require('./rutas');
const { checkApiKey } = require('./middlewares/auth.handler');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());


//--------CORS PARA LIMITAR ACCESO
/*
const whitelist = ['http://localhost:8080', 'https://myapp.co'];
const options = {
  origin: (origin, callback) =>{
    if (whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback (new Error('No esta permitido, vaya a chupar limon'));
    }
  }
};
app.use(cors(options));
*/

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/nueva-ruta', checkApiKey ,(req, res) => {
  res.send('Hola, soy una nueva ruta');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(port, () => {
  console.log('Mi port' +  port);
});
