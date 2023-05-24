const mysql = require('mysql');
const config = require('../config');

const test = {
    id: 1,
    nombre: 'juan',
    edad: 43,
}

function productosTabla(tabla){
    return test ;
}

function productoId(tabla, id){

}

function agregarProducto(tabla, data){

}

function eliminarProducto (tabla, id){

}

module.exports = {
    productosTabla,
    productoId,
    agregarProducto,
    eliminarProducto,
}