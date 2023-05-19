# 0 ejecutamos pip install flask flask-sqlalchemy flask-migrate flask-cors
# 1 Crear modelos 
# 2 Importamos las librerias de flask

from flask import Flask, request, jsonify
from flask_migrate import Migrate
from sqlalchemy import desc
from models import db, Prodcuto, Cliente, Vendedor
from flask_cors import CORS, cross_origin

# 3 instanciamos la app 
app = Flask(__name__)

@app.route('/')
def index():
    return 'Hola Prueba'

if __name__ == "__main__":
    app.run()


# 5 Creamos la ruta por defecto para saber si mi app esta funcionando
# 6 Ejecutamos el comando en la consola: python app.py o python3 app.py o py app.py y revisamos nuestro navegador


# 7 ruta para consultar todos los productos


# 8. comando para iniciar mi app flask: flask db init
# 9. comando para migrar mis modelos:   flask db migrate
# 10. comando para crear nuestros modelos como tablas : flask db upgrade
# 11. comando para iniciar la app flask: flask run