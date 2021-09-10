<h1>
	Modulos
</h1>
<p>
	Los modulos son un conjunto de variables,
	funciones, clases e incluso modulos que
	se pueden almacenar como atributos en una
	variable que pueden ser entre modulos externos
	y modulos internos como en el ejemplo que veras
	a continuacion.
</p>
<code type=cls>
# creamos un modulo
module MyModule {
	# codigo del modulo
}
</code>
<p>
	Lo que ven aqui arriba es un modulo interno de un
	Script. para dar a entender que es un Script.
</p>
<p class="gold">
	"Un Script es un documento de texto que contiene
	un conjunto de instrucciones para adaptar cierto
	comportamiento con la finalidad de automatizar una
	tarea en cierto lenguaje de programacion".
</p>
<p>
	Ya definido que es un Script podemos proceder a
	diferenciar un modulo interno con un modulo externo.
</p>
<h4 color="green">
	Modulos internos
</h4>
<p>
	Los modulos internos son aquellos que se definen con
	la sintaxis anteriormente mostrada haciendo que sea
	un modulo interno de un Script.
</p>
<code type=cls>
# modulo interno

module prueba {
	function show() {
		print("Hola mundo")
	}
};

# su sintaxis es similar
# a las clases solo que los
# modulos no tienen nesecidad
# de instanciarce para usarce

prueba.show();

# > Hola mundo
</code>
<p>
	Pero los modulos tienen alcance de variables como las
	clases pero en este caso solo esta usa public y private.
	Las public se pueden acceder desde el modulo y las
	private se acceden desde adentro del modulo.
</p>
<p>
	en el siguiente ejemplo veran como se aplica public y private
	en los modulos:
</p>
<code type=cls>
# modulos con private
# y public

module prueba() {
	private var saludo = "Hola mundo";
	
	public function show() {

		print(private.saludo);

		# hacemos referencia a
		# el modulo privado del
		# modulo actual obteniendo
		# el valor de "saludo"
	};
};

# llamamos a la funcion
# show desde el modulo

prueba.show();

# a diferencia de las clases
# los modulos no los instanciamos
</code>
<p>
	los modulos pueden tener funciones, variables,
	clases y hasta modulos. como en el siguiente
	ejemplo:
</p>
<code type=cls>
module prueba {
	# Variable
	public var UnaVariable:int = 0;

	# Funcion
	public function UnaFuncion() {
		# codigo
	};

	# Clase
	public class UnaClase() {
		# codigo
	};

	# Modulo
	public module UnModulo {
		# codigo
	}
}
</code>
<br>
<br>
<h4 class="green">
	Modulos externos/Librerias
</h4>
<p>
	Los modulos externos o mejor dicho librerias son Script
	que tienen porciones de codigo que puedes importar a tu
	aplicaciones y CLS lo instanciara como modulos
</p>
<p>
	en el siguiente ejemplo veremos como crear una libreria
	y como importarla
</p>
<p class="gold">
	creamos dos archivos en el mismo directorio uno con el
	nombre de "main.scls" y el otro con el nombre de "lib.scls"
</p>
<code type="cls">
# este es lib.scls

# usaremos una variable
# que funciona como modulo
# la cual sera lo que vamos
# a exportar de nuestra
# libreria

export.saludo = "Hola mundo";
</code>
<p class="gold">
	"ahora creamos el archivo principal y importamos
	nuestra libreria para usar el modulo que exportamos"
</p>
<code type="cls">
# este es main.scls

# importamos nuestra libreria

# para hacerlo hay varias formas
# la mas comun es usando import

import "lib.scls" as lib;

# ponemos el nombre reservado
# "import" y el nombre del
# archivo que es nuestra libreria
# para finalizar poniendole un
# nombre a la libreria que se
# va a importar

# como obtenemos el valor de saludo
# que creamos en nuestro script
# "lib.scls"?

# pues basta con poner el nombre del
# modulo importado y el atributo

print(lib.saludo);

# > Hola mundo
</code>