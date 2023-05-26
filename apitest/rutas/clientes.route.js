const express = require('express');

const router = express.Router();

router.get('/', (req, res) =>{
    const productos = [];
    const { size } = req.query;
    const limit = size || 1;
    for (let index = 0; index < limit; index++){
      productos.push({
        name: 'Alex',
        id: '001',
        mail: 'Alex@correo.cl',
      })
    }
    res.json(productos);
  });

router.get('/filter', (req, res) => {
    res.send('Filter de clientes');
  })


router.get('/:id', (req, res) =>{
    const { id } = req.params;
    res.json({
      name: 'Producto1',

      price: 1000
      });
  });

router.post('/', (req, res) =>{
  const body = req.body;
  res.json({
    message: 'created',
    data: body
  })
})

  module.exports = router;
