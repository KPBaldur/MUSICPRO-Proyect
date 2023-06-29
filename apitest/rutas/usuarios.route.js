const express = require('express');

const UsersService = require ('./../services/usuarios.services');
const validatorHandler = require('./../middlewares/validator.handler');
const {createUserSchema, updateUserSchema, getUserSchema} = require ('./../schemas/user.schema');

const router = express.Router();
const service = new UsersService();

//Consulta general de usuarios
router.get('/', async (req, res) =>{
  const users = await service.find()
  res.json(users);
});


//obtener user por id
router.get('/:id',
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) =>{
    try {
      const { id } = req.params;
      const users = await service.findOne(id);
      res.json(users);
    } catch (error){
      next(error);
    }
  });


router.post('/',
  validatorHandler(createUserSchema, 'body'),
  async (req, res) =>{
  const body = req.body;
  const newUser = await service.create(body);
  res.status(201).json(newUser);
});



router.patch('/:id',
validatorHandler(getUserSchema, 'params'),
validatorHandler(updateUserSchema, 'body'),
  async (req, res, next) =>{
    try {
      const { id } = req.params;
      const body = req.body;
      const product = await service.upddate(id, body);
      res.json(product);
    } catch (error){
      next(error);
    }
  });

router.delete('/:id', async (req, res) =>{
  const { id } = req.params;
  const rta = await service.delete(id)
  res.json(rta);
});


  module.exports = router;
