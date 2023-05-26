const { Router } = require('express');

//Creacion de va
const productsRouter = require('./productos.route')
const userRouter = require('./usuarios.route')
const clientRouter = require('./clientes.route')
const categoryRouter = require('./categorias.route')
const subCategoryRouter = require('./subcategoria.route')

function routerApi(app) {
    app.use('/productos', productsRouter);
    app.use('/usuarios', userRouter);
    app.use('/clientes', clientRouter);
    app.use('/categorias', categoryRouter);
    app.use('/subcategoria', subCategoryRouter)
}

//Exportacion de rutas como modulo
module.exports = routerApi;
