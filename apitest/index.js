const express = require('express');
const { faker } = require ('@faker-js/faker');
const app = express();
const port = 3000;

app.get('/', (req, res) =>{
  res.send('Hola prueba de servidor');
});

app.get('/products/filter', (req, res) => {
  res.send('Yo soy un filter');
})

app.get('/productos/:id', (req, res) =>{
  const { id } = req.params;
  res.json({
    name: 'Producto1',
    
    price: 1000
    });
});

app.get('/productos', (req, res) =>{
  const productos = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++){
    productos.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      imagen: faker.image.imageUrl(),
    })
  }
  res.json(productos);
});


app.get('/categories/:categoryId/productos/:productId', (req, res) =>{
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
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

