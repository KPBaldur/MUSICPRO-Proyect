from flask import Flask, request , jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:admin@localhost:3306/BDD_Tienda_MusicPro'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False


db=SQLAlchemy(app)
ma = Marshmallow(app)



class Categoria(db.Model):
    cat_id = db.Column(db.Integer,primary_key=True)
    cat_nom = db.Column(db.String(100))
    cat_desp = db.Column(db.String(100))

    def _init(self,cat_nom,cat_desp):
        self.cat_nom = cat_nom
        self.cat_desp = cat_desp

db.create_all()

class CategoriaSchema(ma.Schema):
    class Meta:
        fielts = ('cat_id', 'cat_nom', 'cat_desp')

#Mensaje de prueba
@app.route('/' ,methods=['GET'])
def index():
    return jsonify('PRUEBA REALIZADA')

if __name__== "__main__":
    app.run(debug=True)