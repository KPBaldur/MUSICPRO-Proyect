const express = require('express');
const { faker } = require ('@faker-js/faker');

const router = express.Router();


//Rutas para consultar productos general
router.get('/', (req, res) =>{
    const productos = [];
    const { size } = req.query;
    const limit = size || 5;
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
  });


//Obtener un producto por ID
router.get('/:id', (req, res) =>{
    const { id } = req.params;
    if (id === '999'){
      res.status(404).json({
        message: 'not found'
      });
    } else {
      res.status(200).json({
        name: 'Producto1',
        price: 1000
        });
    }
  });



//Metodo para crear productos
router.post('/', (req, res) =>{
  const body = req.body;
  res.status(201).json({
    message: 'created',
    data: body
  });
});

//Metodo para actualizar parcialmente productos (actualizar un solo campo)
router.patch('/:id', (req, res) =>{
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'update',
    data: body,
    id,
  });
});

//Metodo para borrar un producto
router.delete('/:id', (req, res) =>{
  const { id } = req.params;
  res.json({
    message: 'deleted',
    id,
  });
});



//Exportar ruta como un modulo.
  module.exports = router;
