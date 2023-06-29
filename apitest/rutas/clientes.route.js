const express = require('express');

const ClientService = require('./../services/clientes.services');
const validatorHandler = require ('./../middlewares/validator.handler');
const { createClientSchema, updateClientSchema, getClientSchema } = require ('./../schemas/client.schema');
const { ro } = require('faker/lib/locales');

const router = express.Router();
const service = new ClientService();

//Ruta para consulta general de clientes
router.get('/', async (req, res) =>{
    const clientes = await service.find()
    res.json(clientes);
  });

//Obtener un cliente por ID
router.get('/:id',
  validatorHandler(getClientSchema, 'params'),
  async (req, res, next) =>{
    try {
      const { id } = req.params;
      const clientes = await service.findOne(id);
      res.json(clientes);
    } catch (error){
      next(error);
    }
  });


//Ruta para POST
router.post('/',
  validatorHandler(createClientSchema, 'body'),
  async(req, res) =>{
  const body = req.body;
  const newClient = await service.create(body);
  res.status(201).json(newClient);
});


//Metodo para actualizar parcialmente productos (actualizar un solo campo)
router.patch('/:id',
validatorHandler(getClientSchema, 'params'),
validatorHandler(updateClientSchema, 'body'),
  async (req, res, next) =>{
    try {
      const { id } = req.params;
      const body = req.body;
      const client = await service.update(id,body);
      res.json(client);
    } catch (error){
      next(error);
    }
  }
);

//Metodo para borrar un producto
router.delete('/:id', async (req, res) =>{
  const { id } = req.params;
  const rta = await service.delete(id)
  res.json(rta);
});

  module.exports = router;
