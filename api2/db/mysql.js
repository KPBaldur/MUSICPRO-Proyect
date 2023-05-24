const mysql = require('mysql');
const config = require('../config');

const dbconfig = {
    host: config.mysql.hotst,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
}

let conexion; 

function conexmysql(){
    conexion = mysql.createConnection(dbconfig)

    conexion.conect((err) => {
        if(err){
            console.log('[db err]', err);
            setTimeout(conexmysql, 200);
        }else{
            console.log('DB Conectada!')
        }
    });

    conexion.on('error', err=>{
        console.log('[db err]', err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            conexmysql();
        }else{
            throw err;
        }
    })
}

conexmysql();

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