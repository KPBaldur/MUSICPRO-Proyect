const express = require('express');
const { faker } = require ('@faker-js/faker');

const router = express.Router();


//Rutas para consultar productos general
router.get('/', (req, res) =>{
    const productos = [];
    const { size } = req.query;
    const limit = size || 5;
    for (let index = 0; index < limit; index++){
      productos.push([
        {
          id: '001',
          name: 'Guitarra Acustica Mcqueen',
          precio: '120000',
          stock: '15'
        },
        {
          id: '002',
          name: 'Guitarra-Electrica-Jonson',
          precio: '150000',
          stock: '4'
        },
        {
          id: '003',
          name: 'Guitarra Emerson',
          precio: '180000',
          stock: '1'
        },
      ])
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
        precio: 1000
        });
    }
  });



//Metodo para crear productos
router.post('/', (req, res) =>{
  try {
    const{ id, name, precio, stock} = req.body;
    if (!id || !name || !precio || !stock ){
      return res.status(400).json({ error: 'Faltan datos del producto'});
    }
    const nuevoProducto = {
      id,
      name,
      precio,
      stock
    };

    res.status(201).json({
      message: 'Producto agregado exitosamente',
      producto: nuevoProducto,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ha ocurrido un error al agregar el producto'});
  }
});

/* Ruta original POST
router.post('/', (req, res) =>{
  const body = req.body;
  res.status(201).json({
    message: 'created',
    data: body
  });
});
*/


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
