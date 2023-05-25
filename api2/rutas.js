// Importa el paquete de enrutamiento de Express
const express = require('express');
const router = express.Router();
// Importa el paquete de MySQL
const mysql = require('mysql');

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'tu_usuario',
  password: 'tu_contraseña',
  database: 'nombre_de_la_base_de_datos'
});

// Ruta para obtener los productos
router.get('/productos', (req, res) => {
  // Realiza la consulta a la base de datos
  connection.query('SELECT * FROM productos', (err, results) => {
    if (err) {
      console.error('Error al obtener productos:', err);
      res.status(500).json({ error: 'Error al obtener productos' });
    } else {
      // Devuelve los productos como respuesta
      res.json(results);
    }
  });
});

// Exporta el enrutador
module.exports = rutas;


const express = require('express');
const app = express();

// Importa el enrutador de productos
const productosRouter = require('./rutas/productos');

// Registra el enrutador de productos
app.use('/api', productosRouter);

// Resto de configuraciones y rutas de tu API

// Inicia el servidor
app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
