const mysql = require('mysql');
const config = require('../config');

const dbconfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
}

let conexion; 

function conMysql(){
    conexion = mysql.createConnection(dbconfig)

    conexion.conect((err) => {
        if(err){
            console.log('[db err]', err);
            setTimeout(conMysql, 200);
        }else{
            console.log('DB Conectada!')
        }
    });

    conexion.on('error', err=>{
        console.log('[db err]', err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            conMysql();
        }else{
            throw err;
        }
    })
}

conMysql();

function productosTabla(Bodega){
    return test;
}

function productoId(Bodega, id){

}

function agregarProducto(Bodega, data){

}

function eliminarProducto (Bodega, id){

}

module.exports = {
    productosTabla,
    productoId,
    agregarProducto,
    eliminarProducto,
}