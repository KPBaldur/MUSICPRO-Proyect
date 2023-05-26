const express = require('express');
const { faker } = require ('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res) =>{
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

router.get('/filter', (req, res) => {
    res.send('Yo soy un filter');
  })
  

router.get('/:id', (req, res) =>{
    const { id } = req.params;
    res.json({
      name: 'Producto1',
      
      price: 1000
      });
  });
  
  module.exports = router;
 
  
  
  app.get('/categories/:categoryId/productos/:productId', (req, res) =>{
    const { categoryId, productId } = req.params;
    res.json({
      categoryId,
      productId,
    });
  });