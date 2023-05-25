const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) =>{
  res.send('Hola prueba de servidor');
});

app.get('/nueva-ruta', (req, res) =>{
  res.send('<iframe width="560" height="315" src="https://www.youtube.com/embed/Etb6GNVREtY?start=42" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>');
});

app.get('/nueva-ruta2', (req, res) =>{
  res.json({
    name: 'Producto1',
    price: 1000
  });
});

app.listen(port, () =>{
  console.log('Mi port' + port);
});

