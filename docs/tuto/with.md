<h1>
	Sentencia with
</h1>
<p>
	La sentencia with es una sentencia la cual te
	permite crear un entorno de variable que te permite
	crear una variable cuyo alcance se limita al bloque
	de codigo que se le asigne
</p>
<p class="gold">
	with <b>NombreVariable</b> ( <b>ValorAIngresar</b> ) { <b>Codigo</b> }
</p>
<p>
	veamos el siguiente ejemplo:
</p>
<code type=cls>
# sentencia with

with x ("Hola mundo!") {
	print(x)
};

# > Hola mundo!
</code>
<p>
	Pero que pasa si intentamos obtener la variable
	fuera del alcance (Bloque de codigo)
</p>
<code type=cls>
# sentencia with

with x ("Hola mundo!") {
	print(x)
};

print(x);

# > Hola mundo!
# pero despues crachearia
# ya que la variable x solo
# existe dentro de ese bloque
# de codigo
</code>
<p>
	La verdad with no tiene usos tan relevantes pero es
	util en algunos casos por ejemplo el ahorrar memoria
	y no llenarla de basura con variables de un solo uso.
</p>