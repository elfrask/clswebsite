<h1>
	Clases
</h1>
<p>
	Las clases son un tipo de dato que expulsan un tipo de
	dato que procede de estas mismas las cuales se llaman
	instancias
</p>
<code type="cls">
class Main() {
	# codigo de la clase
}
</code>
<p>
	Las clases se estructuran como las
	<a href="/doc?link=tuto/calls.md">funciones nombradas</a>
	a dierencia que las clases en vez de argumentos
	son clases que se piensan heredar y atribuir sus 
	propiedades a si mismas y el codigo en vez de ser bloques
	de codigo a ejecutar es una serie de instrucciones que estructura una
	serie de atributos para encapsular datos, la clase y puede
	variar de propiedades y tipos. desde valores hasta metodos,
	desde publicos hasta privados
</p>
<code type="cls">

function funcion() {
	function show() {
		print("Saludos")
	}
};

class clase() {
	function show() {
		print("Saludos")
	}
};

# la funcion no atribuye las
# sub funciones que esta tenga

# ambos casos son erroneos
funcion().show()
funcion.show()

# esta si funciona
clase().show()
</code>

<p>
	Pero no solo podemos declarar metodos si no tambien
	variables dentro de las clases como se ve en el suguiente
	ejemplo:
</p>
<code type=cls>
# creamos la clase
class clase() {
	var hola = "Hola mundo";
	function main() {

	}
};

#imprimimos el valor
print(clase().hola) # > Hola mundo
</code>
<p>
	las variables tiene varios tipos de
	alcance en las clases de cls que se
	definen con public, private, static
	y export.
</p>
<p>
	
</p>