DROP DATABASE Iplataforma;

CREATE DATABASE Iplataforma;

use Iplataforma;

CREATE TABLE Bodega
(
id int primary key not null,
Nombre VARCHAR (40) not null
);
CREATE TABLE Instrumentos_de_Cuerdas
(
id int primary key not null,
Nombre VARCHAR (40) not null
);
CREATE TABLE Guitarras
(
id int primary key not null,
Nombre VARCHAR (40) not null
);

CREATE TABLE Bajos
(
id int primary key not null,
Nombre VARCHAR (40) not null
);
CREATE TABLE Pianos
(
id int primary key not null,
Nombre VARCHAR (40) not null
);

CREATE TABLE Percucion
(
id int primary key not null,
Nombre VARCHAR (40) not null
);

CREATE TABLE Guitarra_Cuerpo_Solido
(
id int primary key not null,
Codigo VARCHAR (30) not null,
Marca VARCHAR (40) not null,
Nombre VARCHAR (40) not null,
Serie VARCHAR (40) not null,
Stock int not null,
Precio int not null
);

CREATE TABLE Guitarra_Acusticas
(
id int primary key not null,
Codigo VARCHAR (30) not null,
Marca VARCHAR (40) not null,
Nombre VARCHAR (40) not null,
Serie VARCHAR (40) not null,
Stock int not null,
Precio int not null
);
CREATE TABLE Guitarra_Electricas
(
id int primary key not null,
Codigo VARCHAR (30) not null,
Marca VARCHAR (40) not null,
Nombre VARCHAR (40) not null,
Serie VARCHAR (40) not null,
Stock int not null,
Precio int not null
);

CREATE TABLE Bajo_cuatro_cuerdas
(
id int primary key not null,
Codigo VARCHAR (30) not null,
Marca VARCHAR (40) not null,
Nombre VARCHAR (40) not null,
Serie VARCHAR (40) not null,
Stock int not null,
Precio int not null
);

CREATE TABLE Bajo_cinco_cuerdas
(
id int primary key not null,
Codigo VARCHAR (30) not null,
Marca VARCHAR (40) not null,
Nombre VARCHAR (40) not null,
Serie VARCHAR (40) not null,
Stock int not null,
Precio int not null
);

CREATE TABLE Bajo_activos
(
id int primary key not null,
Codigo VARCHAR (30) not null,
Marca VARCHAR (40) not null,
Nombre VARCHAR (40) not null,
Serie VARCHAR (40) not null,
Stock int not null,
Precio int not null
);
CREATE TABLE Bajo_pasivos
(
id int primary key not null,
Codigo VARCHAR (30) not null,
Marca VARCHAR (40) not null,
Nombre VARCHAR (40) not null,
Serie VARCHAR (40) not null,
Stock int not null,
Precio int not null
);
CREATE TABLE Piano_media_cola
(
id int primary key not null,
Codigo VARCHAR (30) not null,
Marca VARCHAR (40) not null,
Nombre VARCHAR (40) not null,
Serie VARCHAR (40) not null,
Stock int not null,
Precio int not null
);
CREATE TABLE Piano_cola_entera
(
id int primary key not null,
Codigo VARCHAR (30) not null,
Marca VARCHAR (40) not null,
Nombre VARCHAR (40) not null,
Serie VARCHAR (40) not null,
Stock int not null,
Precio int not null
);
CREATE TABLE Pianolas
(
id int primary key not null,
Codigo VARCHAR (30) not null,
Marca VARCHAR (40) not null,
Nombre VARCHAR (40) not null,
Serie VARCHAR (40) not null,
Stock int not null,
Precio int not null
);
CREATE TABLE Baterias_Acusticas
(
id int primary key not null,
Nombre VARCHAR (40) not null
);
CREATE TABLE Tama
(
id int primary key not null,
Codigo VARCHAR (30) not null,
Marca VARCHAR (40) not null,
Nombre VARCHAR (40) not null,
Serie VARCHAR (40) not null,
Stock int not null,
Precio int not null
);
CREATE TABLE Pearl
(
id int primary key not null,
Codigo VARCHAR (30) not null,
Marca VARCHAR (40) not null,
Nombre VARCHAR (40) not null,
Serie VARCHAR (40) not null,
Stock int not null,
Precio int not null
);
CREATE TABLE Sonor
(
id int primary key not null,
Codigo VARCHAR (30) not null,
Marca VARCHAR (40) not null,
Nombre VARCHAR (40) not null,
Serie VARCHAR (40) not null,
Stock int not null,
Precio int not null
);
CREATE TABLE Mapex
(
id int primary key not null,
Codigo VARCHAR (30) not null,
Marca VARCHAR (40) not null,
Nombre VARCHAR (40) not null,
Serie VARCHAR (40) not null,
Stock int not null,
Precio int not null
);
CREATE TABLE Bateria_Electronica
(
id int primary key not null,
Nombre VARCHAR (40) not null
);
CREATE TABLE Roland
(
id int primary key not null,
Codigo VARCHAR (30) not null,
Marca VARCHAR (40) not null,
Nombre VARCHAR (40) not null,
Serie VARCHAR (40) not null,
Stock int not null,
Precio int not null
);
CREATE TABLE Alesis
(
id int primary key not null,
Codigo VARCHAR (30) not null,
Marca VARCHAR (40) not null,
Nombre VARCHAR (40) not null,
Serie VARCHAR (40) not null,
Stock int not null,
Precio int not null
);
CREATE TABLE Amplificadores
(
id int primary key not null,
Nombre VARCHAR (40) not null
);
CREATE TABLE Cabezales
(
id int primary key not null,
Nombre VARCHAR (40) not null
);
CREATE TABLE Marshall
(
id int primary key not null,
Codigo VARCHAR (30) not null,
Marca VARCHAR (40) not null,
Nombre VARCHAR (40) not null,
Serie VARCHAR (40) not null,
Stock int not null,
Precio int not null
);
CREATE TABLE ENGL
(
id int primary key not null,
Codigo VARCHAR (30) not null,
Marca VARCHAR (40) not null,
Nombre VARCHAR (40) not null,
Serie VARCHAR (40) not null,
Stock int not null,
Precio int not null
);
CREATE TABLE Pavey
(
id int primary key not null,
Codigo VARCHAR (30) not null,
Marca VARCHAR (40) not null,
Nombre VARCHAR (40) not null,
Serie VARCHAR (40) not null,
Stock int not null,
Precio int not null
);
CREATE TABLE EVH
(
id int primary key not null,
Codigo VARCHAR (30) not null,
Marca VARCHAR (40) not null,
Nombre VARCHAR (40) not null,
Serie VARCHAR (40) not null,
Stock int not null,
Precio int not null
);
CREATE TABLE Cajas
(
id int primary key not null,
Nombre VARCHAR (40) not null
);
CREATE TABLE Caja_Marshall
(
id int primary key not null,
Codigo VARCHAR (30) not null,
Marca VARCHAR (40) not null,
Nombre VARCHAR (40) not null,
Serie VARCHAR (40) not null,
Stock int not null,
Precio int not null
);
CREATE TABLE Caja_ENGL
(
id int primary key not null,
Codigo VARCHAR (30) not null,
Marca VARCHAR (40) not null,
Nombre VARCHAR (40) not null,
Serie VARCHAR (40) not null,
Stock int not null,
Precio int not null
);
CREATE TABLE Caja_Pavey
(
id int primary key not null,
Codigo VARCHAR (30) not null,
Marca VARCHAR (40) not null,
Nombre VARCHAR (40) not null,
Serie VARCHAR (40) not null,
Stock int not null,
Precio int not null
);
CREATE TABLE Caja_EVH
(
id int primary key not null,
Codigo VARCHAR (30) not null,
Marca VARCHAR (40) not null,
Nombre VARCHAR (40) not null,
Serie VARCHAR (40) not null,
Stock int not null,
Precio int not null
);
CREATE TABLE Accesorios_varios
(
id int primary key not null,
Nombre VARCHAR (40) not null
);
CREATE TABLE Audifonos
(
id int primary key not null,
Nombre VARCHAR (40) not null
);
CREATE TABLE Monitores
(
id int primary key not null,
Nombre VARCHAR (40) not null
);
CREATE TABLE Parlantes
(
id int primary key not null,
Nombre VARCHAR (40) not null
);
CREATE TABLE Cables
(
id int primary key not null,
Nombre VARCHAR (40) not null
);
CREATE TABLE Microfonos
(
id int primary key not null,
Nombre VARCHAR (40) not null
);
CREATE TABLE Interfaces
(
id int primary key not null,
Nombre VARCHAR (40) not null
);
CREATE TABLE Mixers
(
id int primary key not null,
Nombre VARCHAR (40) not null
);





 
 /*--Todas las relacion--*/
 
 ALTER TABLE Accesorios_varios
ADD Bodega_id int not null;

ALTER TABLE Accesorios_varios
ADD CONSTRAINT fk_Bodega_Accesorios_varios
FOREIGN KEY (Bodega_id) REFERENCES Bodega(id);
 
 ALTER TABLE Instrumentos_de_Cuerdas
ADD Bodega_id int not null;

ALTER TABLE Instrumentos_de_Cuerdas
ADD CONSTRAINT fk_Bodega_Instrumentos_de_Cuerdas
FOREIGN KEY (Bodega_id) REFERENCES Bodega(id);

ALTER TABLE Percucion
ADD Bodega_id int not null;

ALTER TABLE Percucion
ADD CONSTRAINT fk_Bodega_Percucion
FOREIGN KEY (Bodega_id) REFERENCES Bodega(id);

ALTER TABLE Amplificadores
ADD Bodega_id int not null;

ALTER TABLE Amplificadores
ADD CONSTRAINT fk_Bodega_Amplificadores
FOREIGN KEY (Bodega_id) REFERENCES Bodega(id);
 

 ALTER TABLE Guitarras
ADD Instrumentos_de_Cuerdas_id int not null;

ALTER TABLE Guitarras
ADD CONSTRAINT fk_Instrumentos_de_Cuerdas_Guitarras
FOREIGN KEY (Instrumentos_de_Cuerdas_id) REFERENCES Instrumentos_de_Cuerdas(id);

ALTER TABLE Guitarra_Cuerpo_Solido
ADD Guitarras_id int;

ALTER TABLE Guitarra_Cuerpo_Solido
ADD CONSTRAINT fk_Guitarras_Guitarra_Cuerpo_Solido
FOREIGN KEY (Guitarras_id) REFERENCES Guitarras(id);

ALTER TABLE Guitarra_Acusticas
ADD Guitarras_id int;

ALTER TABLE Guitarra_Acusticas
ADD CONSTRAINT fk_Guitarras_Guitarra_Acusticas
FOREIGN KEY (Guitarras_id) REFERENCES Guitarras(id);

ALTER TABLE Guitarra_Electricas
ADD Guitarras_id int;

ALTER TABLE Guitarra_Electricas
ADD CONSTRAINT fk_Guitarras_Guitarra_Electricas
FOREIGN KEY (Guitarras_id) REFERENCES Guitarras(id);



ALTER TABLE Bajos
ADD Instrumentos_de_Cuerdas_id int not null;

ALTER TABLE Bajos
ADD CONSTRAINT fk_Instrumentos_de_Cuerdas_Bajos
FOREIGN KEY (Instrumentos_de_Cuerdas_id) REFERENCES Instrumentos_de_Cuerdas(id);

ALTER TABLE Bajo_cuatro_cuerdas
ADD Bajos_id int;

ALTER TABLE Bajo_cuatro_cuerdas
ADD CONSTRAINT fk_Bajos_Bajo_cuatro_cuerdas
FOREIGN KEY (Bajos_id) REFERENCES Bajos(id);

ALTER TABLE Bajo_cinco_cuerdas
ADD Bajos_id int;

ALTER TABLE Bajo_cinco_cuerdas
ADD CONSTRAINT fk_Bajos_Bajo_cinco_cuerdas
FOREIGN KEY (Bajos_id) REFERENCES Bajos(id);

ALTER TABLE Bajo_activos
ADD Bajos_id int;

ALTER TABLE Bajo_activos
ADD CONSTRAINT fk_Bajos_Bajo_activos
FOREIGN KEY (Bajos_id) REFERENCES Bajos(id);

ALTER TABLE Bajo_pasivos
ADD Bajos_id int;

ALTER TABLE Bajo_pasivos
ADD CONSTRAINT fk_Bajos_Bajo_pasivos
FOREIGN KEY (Bajos_id) REFERENCES Bajos(id);



ALTER TABLE Pianos
ADD Instrumentos_de_Cuerdas_id int not null;

ALTER TABLE Pianos
ADD CONSTRAINT fk_Instrumentos_de_Cuerdas_Pianos
FOREIGN KEY (Instrumentos_de_Cuerdas_id) REFERENCES Instrumentos_de_Cuerdas(id);

ALTER TABLE Piano_media_cola
ADD Pianos_id int;

ALTER TABLE Piano_media_cola
ADD CONSTRAINT fk_Pianos_Piano_media_cola
FOREIGN KEY (Pianos_id) REFERENCES Pianos(id);

ALTER TABLE Piano_cola_entera
ADD Pianos_id int;

ALTER TABLE Piano_cola_entera
ADD CONSTRAINT fk_Pianos_Piano_cola_entera
FOREIGN KEY (Pianos_id) REFERENCES Pianos(id);

ALTER TABLE Pianolas
ADD Pianos_id int;

ALTER TABLE Pianolas
ADD CONSTRAINT fk_Pianos_Pianolas
FOREIGN KEY (Pianos_id) REFERENCES Pianos(id);



ALTER TABLE Baterias_Acusticas
ADD Percucion_id int not null;

ALTER TABLE Baterias_Acusticas
ADD CONSTRAINT fk_Percucion_Baterias_Acusticas
FOREIGN KEY (Percucion_id) REFERENCES Percucion(id);

ALTER TABLE Tama
ADD Baterias_Acusticas_id int;

ALTER TABLE Tama
ADD CONSTRAINT fk_Baterias_Acusticas_Tama
FOREIGN KEY (Baterias_Acusticas_id) REFERENCES Baterias_Acusticas(id);

ALTER TABLE Pearl
ADD Baterias_Acusticas_id int;

ALTER TABLE Pearl
ADD CONSTRAINT fk_Baterias_Acusticas_Pearl
FOREIGN KEY (Baterias_Acusticas_id) REFERENCES Baterias_Acusticas(id);

ALTER TABLE Sonor
ADD Baterias_Acusticas_id int;

ALTER TABLE Sonor
ADD CONSTRAINT fk_Baterias_Acusticas_Sonor
FOREIGN KEY (Baterias_Acusticas_id) REFERENCES Baterias_Acusticas(id);

ALTER TABLE Mapex
ADD Baterias_Acusticas_id int;

ALTER TABLE Mapex
ADD CONSTRAINT fk_Baterias_Acusticas_Mapex
FOREIGN KEY (Baterias_Acusticas_id) REFERENCES Baterias_Acusticas(id);



ALTER TABLE Bateria_Electronica
ADD Percucion_id int not null;

ALTER TABLE Bateria_Electronica
ADD CONSTRAINT fk_Percucion_Bateria_Electronica
FOREIGN KEY (Percucion_id) REFERENCES Percucion(id);

ALTER TABLE Roland
ADD Bateria_Electronica_id int;

ALTER TABLE Roland
ADD CONSTRAINT fk_Bateria_Electronica_Roland
FOREIGN KEY (Bateria_Electronica_id) REFERENCES Bateria_Electronica(id);

ALTER TABLE Alesis
ADD Bateria_Electronica_id int;

ALTER TABLE Alesis
ADD CONSTRAINT fk_Bateria_Electronica_Alesis
FOREIGN KEY (Bateria_Electronica_id) REFERENCES Bateria_Electronica(id);



ALTER TABLE ENGL
ADD Cabezales_id int;

ALTER TABLE ENGL
ADD CONSTRAINT fk_Cabezales_ENGL
FOREIGN KEY (Cabezales_id) REFERENCES Cabezales(id);

ALTER TABLE Marshall
ADD Cabezales_id int;

ALTER TABLE Marshall
ADD CONSTRAINT fk_Cabezales_Marshall
FOREIGN KEY (Cabezales_id) REFERENCES Cabezales(id);

ALTER TABLE Cabezales
ADD Amplificadores_id int not null;

ALTER TABLE Cabezales
ADD CONSTRAINT fk_Amplificadores_Cabezales
FOREIGN KEY (Amplificadores_id) REFERENCES Amplificadores(id);

ALTER TABLE Pavey
ADD Cabezales_id int;

ALTER TABLE Pavey
ADD CONSTRAINT fk_Cabezales_Pavey
FOREIGN KEY (Cabezales_id) REFERENCES Cabezales(id);

ALTER TABLE EVH
ADD Cabezales_id int;

ALTER TABLE EVH
ADD CONSTRAINT fk_Cabezales_EVH
FOREIGN KEY (Cabezales_id) REFERENCES Cabezales(id);

	
    
    ALTER TABLE Cajas
ADD Amplificadores_id int not null;

ALTER TABLE Cajas
ADD CONSTRAINT fk_Amplificadores_Cajas
FOREIGN KEY (Amplificadores_id) REFERENCES Amplificadores(id);

ALTER TABLE Caja_Marshall
ADD Cajas_id int;

ALTER TABLE Caja_Marshall
ADD CONSTRAINT fk_Cajas_Caja_Marshall
FOREIGN KEY (Cajas_id) REFERENCES Cajas(id);

ALTER TABLE Caja_ENGL
ADD Cajas_id int;

ALTER TABLE Caja_ENGL
ADD CONSTRAINT fk_Cajas_Caja_ENGL
FOREIGN KEY (Cajas_id) REFERENCES Cajas(id);

ALTER TABLE Caja_Pavey
ADD Cajas_id int;

ALTER TABLE Caja_Pavey
ADD CONSTRAINT fk_Cajas_Caja_Pavey
FOREIGN KEY (Cajas_id) REFERENCES Cajas(id);

ALTER TABLE Caja_EVH
ADD Cajas_id int;

ALTER TABLE Caja_EVH
ADD CONSTRAINT fk_Cajas_Caja_EVH
FOREIGN KEY (Cajas_id) REFERENCES Cajas(id);



ALTER TABLE Audifonos
ADD Accesorios_varios_id int;

ALTER TABLE Audifonos
ADD CONSTRAINT fk_Accesorios_varios_Audifonos
FOREIGN KEY (Accesorios_varios_id) REFERENCES Accesorios_varios(id);

ALTER TABLE Monitores
ADD Accesorios_varios_id int;

ALTER TABLE Monitores
ADD CONSTRAINT fk_Accesorios_varios_Monitores
FOREIGN KEY (Accesorios_varios_id) REFERENCES Accesorios_varios(id);

ALTER TABLE Parlantes
ADD Accesorios_varios_id int;

ALTER TABLE Parlantes
ADD CONSTRAINT fk_Accesorios_varios_Parlantes
FOREIGN KEY (Accesorios_varios_id) REFERENCES Accesorios_varios(id);

ALTER TABLE Cables
ADD Accesorios_varios_id int;

ALTER TABLE Cables
ADD CONSTRAINT fk_Accesorios_varios_Cables
FOREIGN KEY (Accesorios_varios_id) REFERENCES Accesorios_varios(id);

ALTER TABLE Microfonos
ADD Accesorios_varios_id int;

ALTER TABLE Microfonos
ADD CONSTRAINT fk_Accesorios_varios_Microfonos
FOREIGN KEY (Accesorios_varios_id) REFERENCES Accesorios_varios(id);

ALTER TABLE Interfaces
ADD Accesorios_varios_id int;

ALTER TABLE Interfaces
ADD CONSTRAINT fk_Accesorios_varios_Interfaces
FOREIGN KEY (Accesorios_varios_id) REFERENCES Accesorios_varios(id);

ALTER TABLE Mixers
ADD Accesorios_varios_id int;

ALTER TABLE Mixers
ADD CONSTRAINT fk_Accesorios_varios_Mixers
FOREIGN KEY (Accesorios_varios_id) REFERENCES Accesorios_varios(id);

INSERT INTO Guitarra_Cuerpo_Solido (id, Codigo, Marca, Nombre, Serie, Stock, Precio) VALUES ( '1', 'GCS001', 'XGTR', 'L200-BK', '1A', '3', '239000');
INSERT INTO Guitarra_Cuerpo_Solido (id, Codigo, Marca, Nombre, Serie, Stock, Precio) VALUES ( '2', 'GCS001', 'TRX', 'L300-BK', '2A', '3', '209000');
INSERT INTO Guitarra_Cuerpo_Solido (id, Codigo, Marca, Nombre, Serie, Stock, Precio) VALUES ( '3', 'GCS002', 'TX', 'L400-BK', '2A', '1', '2000');

INSERT INTO Guitarra_Acusticas (id, Codigo, Marca, Nombre, Serie, Stock, Precio) VALUES ( '1', 'GA001', 'ABCD', 'A200-B', '1B', '4', '200000');
INSERT INTO Guitarra_Acusticas (id, Codigo, Marca, Nombre, Serie, Stock, Precio) VALUES ( '2', 'GA002', 'AD', 'A211-B', '2B', '2', '150000');

INSERT INTO Guitarra_Electricas (id, Codigo, Marca, Nombre, Serie, Stock, Precio) VALUES ( '1', 'GE001', 'CQL', 'A3000-E', '1C', '1', '500000');
INSERT INTO Guitarra_Electricas (id, Codigo, Marca, Nombre, Serie, Stock, Precio) VALUES ( '2', 'GE002', 'CQA', 'A3111-E', '2C', '5', '450000');



