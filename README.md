<div>
  <h3>MUSICPRO-Proyect</h3>
<h1>Proyecto Semestral MUSICPRO-PROYECT</h1> </div>



<h3> Participantes del proyecto <br> </h3>
Kevin Pizarro <br>
Jairo Alvarez <br>
Celeste Vera <br>
Josue Espinoza <br>
Julio Contesse <br>



<p>Informe desarrollado por Kevin Pizarro<p>


<h2>Presentacion del proyecto</h2>

<p>El proyecto se enfoca en la creación y desarrollo de la distribuidora de instrumentos y accesorios musicales "MusicPro". La industria de fabricación de instrumentos musicales ha experimentado un crecimiento constante desde los años 50, impulsado por el surgimiento de nuevos géneros musicales que requieren una amplia variedad de instrumentos y accesorios. Esto ha llevado al aumento de fabricantes y marcas que ofrecen opciones de compra según los gustos y necesidades de los clientes.
  
  Descripción de "MusicPro":
  "MusicPro" es una distribuidora de instrumentos y accesorios musicales que fue fundada en el año 1988. Su tienda central se encuentra en la comuna de Providencia en Santiago de Chile. A lo largo de los años, han abierto sedes adicionales en Maipú (desde 2001), Santiago (desde 2003) y Vitacura (desde 2010), lo que les permite cubrir una amplia área metropolitana y facilitar la distribución de sus productos.
  
  Conclusiones:
  El proyecto de "MusicPro" como distribuidora de instrumentos y accesorios musicales se desarrolla en el contexto de una industria en constante crecimiento y evolución. La empresa se ha destacado por su amplia gama de productos y su asociación con marcas reconocidas, lo que la convierte en una opción popular entre los músicos y amantes de la música en Chile. Con su presencia tanto en tiendas físicas como en línea, "MusicPro" busca satisfacer las necesidades de sus clientes de manera rápida y conveniente, consolidándose como una distribuidora líder en el mercado de instrumentos musicales.</p>



<h2>Tecnologias utilizadas</h2>

<ul>
  <li>NodeJS</li>
  <li>Javascript</li>
  <li>MySQL</li>
  <li>Postman</li>
</ul>

<h2>Liberias y frameworks utilizados</h2>

<ul>
  <li>express</li>
  <li>nodemon</li>
  <li>prettier</li>
  <li>Faker</li>
  <li>Happi Boom</li>
  
</ul>

<h3>Tecnologias, librerias y frameworks descartados</h3>

<ul>
  <li>Python</li>
  <li>flask</li>
  <li>SQLAlchemy</li>
</ul>


<h2>Porque se descartaron estas tecnologias</h2>

Al comienzo del proyecto, utilice lenguaje PYTHON3 para poder levantar la aplicacion y dar comienzo a las primeras configuraciones de la API. Se crearon las rutas sin mayor problema hasta el momento de realizar las prebas de funcionalidad. Como se describio anteriormente utilice la libreria FLASK para poder correr la aplicacion API. 

Pero al momento de correr la aplicacion API, tuvimos varios problemas con respecto a la configuracion de flask. Desde problemas para instalar flask en los equipos de DUOC hasta en mi equipo personal y de mis demas compañeros de grupo que no pudieron correr flask.

![image](https://github.com/KPBaldur/MUSICPRO-Proyect/assets/101760063/29c1dc8a-1ca7-4e6c-abf4-373654d6a91d)

El unico lugar y entorno que logre correr PYTHON FLASK fue en un equipo de mi oficina de trabajo el cual es un equipo de prestamo. Lo que ya me lleve una amonestacion, trabajando en el codigo en horario laboral, aun en los tiempos muertos se me hacia imposible seguir con el codigo.

![image](https://github.com/KPBaldur/MUSICPRO-Proyect/assets/101760063/ca5d5bd2-b125-4e73-8941-112d96fea729)


<h3>Pruebas para resolver el problema con Python Flask</h3>

Se gasto cerca de 2 semanas intentando hacer funcionar Python Flask, utilizando ayuda de foros como Stackoverflow en el cual nos recomendaban Instalar Linux, o formatear por completo nuestro equipo. Utilizamos Chat-GP3 para poder solicitar ayuda con respecto a esta inicidencia, lo que dejaremos adjunta la respuesta que nos entrego en ese momento. Intentamos levantarlo tambien en una maquina virtual para corroborar que problemas presentamos pero ya se nos estaba agotando el tiempo.

Hasta que llegada la ultima semana, tomamos la desesperada desicion de migrar de tecnologia, para no seguir perdiendo tiempo intentando hacer funcionar flask, asi que de esta manera tomamos la desicion de migrar a NodeJs. 



<h2>Porque se utilizaron estas Tecnologias</h2>

<p>Se tomo la desicion de la utilizacion de NodeJs junto con Javascript debido a problemas para ejecutar la libreria Flask. Tambien tome en cuenta que NodeJs cuenta con una curva de aprendizaje bastante baja, lo suficiente como para poder aprender en el corto lapso de tiempo que se disponia. Otro punto del porque decidi cambiar a NodeJs fue por su facil conexion con el lenguaje de programacion MySQL. Esto para poder manejar de forma mas rapida y simple el flujo de datos con el que se espera trabajar
</p>

<p>Para poder desarrollar la API para su desarrollo se utilizo la libreria "nodemon" el cual permite realizar cambios en la aplicacion API y poder visualizarlos de manera mas rapida, sin tener que bajar y levantar la aplicacion por cada cambio realizado. Otra libreria que utilizamos tambien fue express para poder realizar las consultas y exportaciones de modulos y rutas para poder realizar el proceso de responsabilidad de archivos y definir una ruta para cada dependencia de nuestra aplicacion una ruta para: productos, usuarios, categorias, vendedores, administrades, etc. 

  Tambien utilizamos la libreria "prettier" quien se encarga de analizar y revisar el codigo para detectar faltas de signos o terminos de sentencias como la conocida ausencia del simbolo ";" despues de cada linea de codigo en JS. Y finalmente hasta el momento utilizamos la libreria "faker" que en el proceso de pruebas nos entrega datos ficticios de usuarios o productos como por ejemplo:
  
  <ul>
    <li>id de usuario</li>
    <li>correo de usuario</li>
    <li>direccion de usuario</li>
    <li>imagen para producto</li>
    <li>detalles para producto</li>
    <li>SKU para producto</li>
    <li>etc</li>
  </ul>
  
  <h3>Ejemplo de uso de la libreria Faker</h3>
  
  Como podemos apreciar. primero realizamos la instalacion de faker en su version 5.5.3 y no la version 6.3 debido a un problema de seguridad. 

Instale Faker con el siguiente comando: npm i faker@5.5.3 -S
  
![image](https://github.com/KPBaldur/MUSICPRO-Proyect/assets/101760063/a0e44667-b92d-4669-bc74-ff4b3ae71310)

Y luego se creo una constante y exporto faker a esta constante, para poder traer los datos ficticios para los productos para realizar las pruebas del CRUD de la aplicacion.


<h3>Uso de la libreria Happi Boom</h3>

Para poder tener un mayor control y conocimiento con respecto a los datos que estamos introduccion en nuestra lista de productos, esto para poder entregar datos de informacion correctos segun el tipo de error.

En otras palabras si al buscar un produto y este no se encuentre en la lista de productos, nos entregue un codigo (404) mas un mensaje de error de "Producto no enccontrado" si cargamos un producto nos envie un codigo (201) de "OK" y asi sucesivamente


</p>

