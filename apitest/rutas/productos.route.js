const express = require('express');

const ProductService = require ('./../services/product.services');

const router = express.Router();
const service = new ProductService();

//Rutas para consultar productos general
router.get('/', async (req, res) =>{
    const products = await service.find()
    res.json(products);
  });


router.get('/filter', (req, res) => {
    res.send('Yo soy un filter');
  });


//Obtener un producto por ID
router.get('/:id', async (req, res, next) =>{
    try {
      const { id } = req.params;
      const product = await service.findOne(id);
      res.json(product);
    } catch (error){
      next(error);
    }
  });


//Ruta original POST
router.post('/', async (req, res) =>{
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json(newProduct);
});



//Metodo para actualizar parcialmente productos (actualizar un solo campo)
router.patch('/:id', async (req, res, next) =>{
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.json(product);
  } catch (error){
    next(error);
  }
});

//Metodo para borrar un producto
router.delete('/:id', async (req, res) =>{
  const { id } = req.params;
  const rta = await service.delete(id)
  res.json(rta);
});



//Exportar ruta como un modulo.
  module.exports = router;
