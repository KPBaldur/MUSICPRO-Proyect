# 0 ejecutamos pip install flask flask-sqlalchemy flask-migrate flask-cors
# 1 Crear modelos
# 2 importamos las librerias de flask

from flask import Flask, request, jsonify
from flask_migrate import Migrate
from sqlalchemy import desc
from models import db, Prodcuto, Cliente, Vendedor
from flask_cors import CORS, cross_origin

# 3 Se crea la instancia para la app
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Conten-Type'
app.url_map.strict_slashes = False
app.config['DEBUG'] = False
app.config['ENV'] = 'development'
app.config['SQLALCHEMY_TRACK_MODIFICATION'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'

db.init_app(app)

Migrate(app, db)



if __name__ == '__main__':
    app.run(port=5500, debug=True)