# 0 ejecutamos pip install flask flask-sqlalchemy flask-migrate flask-cors
# 1 Crear modelos 
# 2 Importamos las librerias de flask

from flask import Flask, request, jsonify
from flask_migrate import Migrate, MigrateCommand
from sqlalchemy import desc
from models import db, Producto, Cliente, Vendedor
from flask_cors import CORS, cross_origin

# 3 instanciamos la app 
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
app.url_map.strict_slashes = False
app.config['DEBUG'] = False
app.config['ENV'] = 'development'
app.config['SQLALCHEMY_TRACK_MODIFICATION'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'

db.init_app(app)
migrate = Migrate(app, db)

# 5 Creamos la ruta por defecto para saber si mi app esta funcionando
# 6 Ejecutamos el comando en la consola: python app.py o python3 app.py o py app.py y revisamos nuestro navegador
@app.route('/')
def index():
    return 'Hola Prueba - Visualizar cambio'




# 7.1 ruta para consultar todos los productos
@app.route('/producto', methods=['GET'])
def getProducto():
    user = Producto.query.all()
    user = list(map(lambda x: x.serialize(), user))
    return jsonify(user),200

#7.2 Ruta para agregar producto
@app.route('/producto', methods=['POST'])
def addProducto():
    user = Producto()
    # asignar a variables lo que recibo mediante post

    user.codigo = request.json.get('codigo')
    user.nombre = request.json.get('nombre')
    user.valor_venta = request.json.get('valor_venta')
    user.stock = request.json.get('stock')
    user.descripcion = request.json.get('descripcion')
    user.imagen = request.json.get('imagen')
    user.estado = request.json.get('estado')

    Producto.save(user)

    return jsonify(user.serialize()),200


# 4 Configuramos los puertos de nuestra app (ESTA LINEA DEBE QUEDAR SIEMPRE AL FINAL PARA QUE PUEDA INICIALIZAR LA API Y PUEDA ASIGNAR LA PUERTA Y ACTIVE EL DEBUG POR DEFECTO PARA TRABAJAR
# EN PRODUCCION)
if __name__ == "__main__":
    app.run(port=5000, debug=True)

# 8. comando para iniciar mi app flask: flask db init
# 9. comando para migrar mis modelos:   flask db migrate
# 10. comando para crear nuestros modelos como tablas : flask db upgrade
# 11. comando para iniciar la app flask: flask run