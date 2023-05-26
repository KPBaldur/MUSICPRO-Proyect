const express = require('express');
const { faker } = require ('@faker-js/faker');
const app = express();
const port = 3000;

app.get('/', (req, res) =>{
  res.send('Hola prueba de servidor');
});



app.get('/Administradores', (req, res) =>{
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


app.listen(port, () =>{
  console.log('Mi port' + port);
});

