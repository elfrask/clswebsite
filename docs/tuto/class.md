<h1>
	Clases
</h1>
<p>
	Las clases son una especie de plantilla que se
	usan para crear tipos de datos a partir de un
	modelo y estas al ser llamadas devuelven una
	instancia la cual el tipo de dato es unicamente
	referente a la clase que la instancio
</p>
<p class="gold">
	"Si nosotros incluimos propiedades como (hola) para
	poder obtener acceso a ella debemos instanciar nuestra
	clase para acceder despues a nuestra propiedad hola"
</p>
<p>
	instanciar es en si crear un clon de la plantilla (clase)
	que con esta podremos manejar los valores con el modelo
	establecido
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
	
</p>

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
<h1>
	Acceso
</h1>
<p>
	En este apartado explicaremos los diferentes accesos
	que se le puede otorgar a las variables en las clases
	las cuales son (public, private, static y export).
</p>


<h4 class="green">
	public
</h4>
<p>
	las variables con acceso publico son variables las cuales
	puedes acceder a ellas desde la instancia como en el
	siguiente ejemplo
</p>
<code type="cls">
# creamos la clase
class prueba() {
	function saludar() {
		print("Hola mundo")
	}
};

# instanciamos la clase
test = prueba();

# accedemos a la variable
# desde la instancia

test.saludar();

# > Hola mundo

</code>
<p>
	tambien le podemos dar el prefijo "public" de forma adicional
	pero estaria algo demas
</p>
<code type="cls">
# creamos la clase
class prueba() {
	public function saludar() {
		print("Hola mundo")
	}
};

# instanciamos la clase
test = prueba();

# accedemos a la variable
# desde la instancia

test.saludar();

# > Hola mundo

</code>


<h4 class="green">
	private
</h4>
<p>
	las variables con acceso private son variables las cuales
	no se pueden acceder ni desde la clase o desde la instancia
	la unica forma de acceder a ellas es desde dentro de la
	misma instancia
</p>
<code type="cls">
# creamos la clase
class prueba() {
	private function saludar() {
		print("Hola mundo")
	};

	public function llamar() {

		saludar(); 

		# tambien podemos usar
		# private.saludar()
		# que es la referencia
		# a la instancia privada

	}
};

# instanciamos la clase
test = prueba();

# pero no podemos hacer esto:
test.saludar();

# porque se supone que saludar
# es una propiedad privada de
# la clase por lo que para llegar
# a el es que algunos de los metodos
# lo use como en este ejemplo de arriba  

# procedemos a usar el metodo llamar
test.llamar();

# > Hola mundo


</code>





<h4 class="green">
	static
</h4>
<p>
	las variables con acceso static son variables las cuales
	puedes acceder a ellas desde las clases sin nesecidad de
	instanciarlas como en el siguiente ejemplo:
</p>
<code type=cls>
# creamos la clase
class prueba() {
	static function saludar() {
		print("Hola mundo")
	}
};

# podemos llamar a saludar
# sin instanciar la clase
prueba.saludar();

# > Hola mundo

</code>




<h4 class="green">
	export
</h4>
<p>
	las variables en lo absoluto no cambia su alcance
	sigue siendo variables publicas pero export
	es para permitirles a esta poder identificar
	la exportacion de valores en futuros compiladores.
	(export lista el nombre de las variables a exponer)
</p>
<code type=cls>
# creamos la clase
class prueba() {
	export function saludar() {
		print("Hola mundo")
	}
};

# podemos llamar a saludar
# sin instanciar la clase
test = prueba();

# llamar el metodo saludar
test.saludar();

# > Hola mundo

</code>


<p>
	todo esto no solo pasa con los metodos si no tambien con
	las variables:
</p>
<code type="cls">
class prueba() {

	public var valor:String = "Hola mundo";

	private var valor:String = "Hola mundo";
	
	static var valor:String = "Hola mundo";
	
	export var valor:String = "Hola mundo";

}
</code>
<h4 class="green">
	Herencias
</h4>
<p>
	Las herencias es la caracteristica de la programacion
	que te permite crear una plantilla a partir de otra
	plantilla osea crear una clase a partir de una clase
	ya existente atribuyendo sus propiedades
</p>
<code type="cls">
# creamos una clase
class clase1() {
	function saludo() {
		print("Hola mundo!")
	}
};


# creamos otra clase
# y heredamos de una clase
# heredaremos la clase1 a
# la nueva clase

class clase2(clase1) {
	function prueba() {
		print("Prueba de herencia");
	}
};

test = clase2();

test.saludo();
# > Hola mundo

test.prueba();
# > Prueba de herencia

</code>


