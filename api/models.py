from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()

class Producto(db.Model):
    __tablename__ = 'Producto'
    id_producto = db.Column(db.Integer, primary_key=True)
    codigo = db.Column(db.String(250), nullable= False)
    nombre = db.Column(db.String(250), nullable= False)
    valor_venta = db.Column(db.Integer, nullable= False)
    stock = db.Column(db.String(500), nullable= False)
    descripcion = db.Column(db.String(500), nullable= False)
    imagen = db.Column(db.String(250), nullable= True)
    estado = db.Column(db.String(1), nullable= False)

    def serialize(self):
        return{
            "id_producto": self.id_producto,
            "codigo": self.codigo,
            "nombre": self.nombre,
            "valor_venta": self.valor_venta,
            "stock": self.stock,
            "descripcion": self.descripcion,
            "imagen": self.imagen,
            "estado": self.estado

        }
    
    def save(self):
        db.session.add(self)
        db.session.commit()
    
    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()



class Cliente(db.Model):
    __tablename__ = 'Cliente'
    id_usuario = db.Column(db.Integer, primary_key=True)
    rut = db.Column(db.Integer, nullable=False)
    dv = db.Column(db.String(1), nullable=False)
    primer_nombre = db.Column(db.String(250), nullable=False)
    segundo_nombre = db.Column(db.String(250), nullable=True)
    apellido_paterno = db.Column(db.String(250), nullable=False)
    apellido_materno = db.Column(db.String(250), nullable=True)
    direccion = db.Column(db.String(250), nullable=False)
    fono = db.Column(db.Integer, nullable=False)
    correo = db.Column(db.String(250), nullable=False)
    estado = db.Column(db.String(1), nullable=False)
    comuna_id = db.Column(db.Integer, nullable= True)
    

    def serialize(self):
        return{
            "id_usuario": self.id_usuario,
            "rut": self.rut,
            "dv": self.dv,
            "primer_nombre": self.primer_nombre,
            "segundo_nombre": self.segundo_nombre,
            "apellido_paterno": self.apellido_paterno,
            "apellido_materno": self.apellido_materno,
            "direccion": self.direccion,
            "fono": self.fono,
            "correo": self.correo,
            "estado": self.estado,
            "comuna_id": self.comuna_id

        }
    
    def save(self):
        db.session.add(self)
        db.session.commit()
    
    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()


class Vendedor(db.Model):
    __tablename__ = 'Vendedor'
    id_vendedor = db.Column(db.Integer, primary_key=True)
    rut = db.Column(db.Integer, nullable=False)
    dv = db.Column(db.String(1), nullable=False)
    primer_nombre = db.Column(db.String(250), nullable=False)
    segundo_nombre = db.Column(db.String(250), nullable=True)
    apellido_paterno = db.Column(db.String(250), nullable=False)
    apellido_materno = db.Column(db.String(250), nullable=True)
    direccion = db.Column(db.String(250), nullable=False)
    fono = db.Column(db.Integer, nullable=False)
    correo = db.Column(db.String(250), nullable=False)
    estado = db.Column(db.String(1), nullable=False)
    comuna_id = db.Column(db.Integer, nullable= True)
    

    def serialize(self):
        return{
            "id_vendedor": self.id_vendedor,
            "rut": self.rut,
            "dv": self.dv,
            "primer_nombre": self.primer_nombre,
            "segundo_nombre": self.segundo_nombre,
            "apellido_paterno": self.apellido_paterno,
            "apellido_materno": self.apellido_materno,
            "direccion": self.direccion,
            "fono": self.fono,
            "correo": self.correo,
            "estado": self.estado,
            "comuna_id": self.comuna_id

        }
    
    def save(self):
        db.session.add(self)
        db.session.commit()
    
    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()