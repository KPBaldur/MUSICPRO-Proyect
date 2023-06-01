const express = require('express');

const ProductService = require ('./../services/product.services');

const router = express.Router();
const service = new ProductService();

//Rutas para consultar productos general
router.get('/', (req, res) =>{
    const products = service.find()
    res.json(products);
  });


router.get('/filter', (req, res) => {
    res.send('Yo soy un filter');
  });


//Obtener un producto por ID
router.get('/:id', (req, res) =>{
    const { id } = req.params;
    const product = service.findOne(id);
    res.json(product);
  });






//Metodo para crear productos
router.post('/', (req, res) =>{
  try {
    const{ id, name, precio, stock} = req.body;
    if (!id || !name || !precio || !stock ){
      return res.status(400).json({ error: 'Faltan datos del producto'});
    }
    const newProduct= {
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


//Ruta original POST
router.post('/', (req, res) =>{
  const body = req.body;
  const newProduct = service.create(body);
  res.status(201).json(newProduct);
});



//Metodo para actualizar parcialmente productos (actualizar un solo campo)
router.patch('/:id', (req, res) =>{
  const { id } = req.params;
  const body = req.body;
  const product = service.update(id, body);
  res.json(product);
});

//Metodo para borrar un producto
router.delete('/:id', (req, res) =>{
  const { id } = req.params;
  const rta = service.delete(id)
  res.json(rta);
});



//Exportar ruta como un modulo.
  module.exports = router;
