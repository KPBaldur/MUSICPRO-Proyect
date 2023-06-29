const express = require('express');
const UsersService = require ('./../services/usuarios.services');



const router = express.Router();

router.get('/', (req, res) =>{
    const users = service.find();
    res.json(users);
  });


router.get('/:id', (req, res) =>{
    const { id } = req.params;
    const users = service.findOne(id);
    res.json(users);
  });


router.post('/', (req, res) =>{
  const body = req.body;
  res.json({
    message: 'created',
    data: body
  })
})


  module.exports = router;
