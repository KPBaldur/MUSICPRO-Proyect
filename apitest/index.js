const express = require('express');
const routerApi = require('./rutas')

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) =>{
  res.send('Hola prueba de servidor');
});






routerApi(app);


app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset
    });
  } else {
    res.send('No hay parametros');
  }
})

app.listen(port, () =>{
  console.log('Mi port' + port);
});

