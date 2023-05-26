const express = require('express');
const routerApi = require('./rutas')

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) =>{
  res.send('Hola prueba de servidor');
});

routerApi(app);


/* Se deben crear las rutas para los siguientes endpoints
administradores, vendedores, usuarios, categorias, subcategorias, etc.

app.get('/administradores', (req, res) =>{
  res.json([
    {
    id: '0001',
    name: 'Admin',
    }
  ]);
});

app.get('/vendedores', (req, res) =>{
  res.json([
    {
    id: '0001',
    name: 'Admin',
    }
  ]);
});
*/

app.listen(port, () =>{
  console.log('Mi port' + port);
});

