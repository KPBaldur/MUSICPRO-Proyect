const express = require('express');
const app = express();
const mysql = require('mysql')


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'Iplataforma'
})

// Conexión a la base de datos
connection.connect((err) => {
    if (err) {
      console.error('Error al conectar a la base de datos:', err);
    } else {
      console.log('Conexión exitosa a la base de datos');
      // Realizar consultas y operaciones con la base de datos aquí
    }
  });
  
  // Obtener productos desde la base de datos
  connection.query('SELECT * FROM productos', (err, results) => {
    if (err) {
      console.error('Error al obtener productos:', err);
    } else {
      console.log('Productos:', results);
      // Trabajar con los resultados aquí
    }
  });
  
  // Cerrar la conexión a la base de datos cuando hayas terminado
  connection.end();