const db = require('../../db/mysql')

function productosTabla (){
    return db.productosTabla('productos')
}