const { Router } = require('express');
const productsRouter = require('./productos')

function routerApi(app) {
    app.use('/productos', productsRouter);
}

module.exports = routerApi