const db = require('../../db/mysql')

const TABLAPRODUCTOS = 'productos';

function productosTabla (){
    return db.productosTabla(TABLAPRODUCTOS)
}

module.exports = {
    productosTabla,
}