<h1>
	Llamadas y funciones
</h1>
<p>
	En CLS las funciones son un tipo de dato mas pero con la
	singularidad que guardan un bloque de codigo que puedes
	llamar en cualquier momento. 
</p>
<h4 class="green">
	Aque nos referimos?
</h4>
<p>
	Queremos referirnos a que las funciones son porciones de
	codigo asignadas con un nombre que podemos acceder a ellas
	cada vez que la llamemos, las funciones te permite ejecutar
	cierto codigo en casos especificos pasandole argumentos en caso
	de que lo permite y devolviendonos una respuesta o un valor nulo.
</p>
<p>
	Las funciones se pueden crear de dos formas diferentes dividiendose
	en dos tipos de funciones, las funciones nombradas y las funciones
	anonimas. Ambas funciones no tienen diferencias en su funcionalidad
	la unica diferencia es que una se define de forma estatica y otra se
	define como que si fuera un dato, las funciones nombradas se crean a 
	base de la siguiente estructura.
</p>
<p class="gold">
	function NombreDeLaFuncion( Argumentos, ..., ultimo ) <br> { codigo }
</p>
<p>
	Usamos el nombre reservado de cls "function", aunque hay otros como
	(fub, func y method) pero function es la mas comun y la mas usada, 
	seguido del nombre de la funcion, los argumentos dentro de los
	parentesis "()" y el codigo dentro de las llaves "{}".
</p>
<p>
	Pero en el caso de las funciones anonimas el caso cambia un poquito,
	estas pueden tambier adquirir el termino de funciones flechas y se
	estructura de la siguiente manera.
</p>
<p class="gold">
	( Argumentos, ..., ultimo ) -> { codigo }
</p>
<p>
	Ponemos primero los argumentos dentro de los parentesis "()" y le ponemos
	un simbolo con un signo de sustracción "-" y otro de comparacion
	">" el codigo dentro de las llaves "{}".
</p>
<p>
	Veremos el ejemplo en el siguiente codigo:
</p>

<code type="cls">

# funcion nombrada
function mi_funcion() {
	# el codigo de la funcion	
};

# funcion anonima
mi_funcion = () -> {
	# el codigo de la funcion
};
</code>
<p>
	Como podemos ver la funcion nombrada y la funcion anonima
	en este caso son lo mismo y no afecta en nada su funcionamiento
	de cualquiera de las dos formas podemos declararlos. Pero en algunos casos
	no es asi, hay ocaciones en la que las funciones nombradas es mejor usarla para
	crear metodos las cuales se pueden usar con. 
	<a href="/doc?link=tuto/class.md">clases</a>
	para cumplir diferentes labores espesificas pero que se explican 
	<a href="/doc?link=tuto/class.md">aqui</a>.
</p>
<h4 class="green">
	Argumentos
</h4>
<p>
	Los argumentos son datos que se les puede pasar a una funcion que esta siendo
	llamada con el objetivo de que esta opere con los valores que se les paso, se
	puede definir uno o mas argumentos a una funcion y definir sus valores por defecto
	y asignarles un tipado como los siguientes ejemplos que se veran a continuacion:
</p>
<code type="cls">
# sin tipado y sin valores predeterminados
function MyFunction(msg) {
	
	print(msg);

};

# con tipado y sin valores predeterminados
function MyFunction(msg:String) {
	
	print(msg);

};

# sin tipado y con valores predeterminados
function MyFunction(msg="Texto") {
	
	print(msg);

};

# con tipado y con valores predeterminados
function MyFunction(msg:String="Texto") {
	
	print(msg);

};


</code>
<p class="gold">
	"print es una funcion interna que te permite imprimir texto
	en la terminal"
</p>
<p>
	Y puedes incluir mas argumentos separando cada argumento por comas
	como en el ejemplo aqui
</p>
<code type="cls">
# declara una funcion con los argumentos msg y number
# y estableceles un tipado y valor por defecto a cada
# uno
function MyFunction(msg:String = "Texto", number:int = 0) {
	print(msg, numbre)
}
</code>
<h4 class="green">
	Pero como llamamos a la funcion?
</h4>
<p>
	Pues esto solo basta con poner el nombre de la funcion
	o para ser mas especificos el nombre de la variable donde 
	se guarda la funcion ya que esta al nombrarlas le asignamos
	un espacio en la memoria dentro de una variable
</p>
<code type="cls">
# en este caso creamos una funcion nombrada

function MyFunction(msg) {
	print(msg)
};

# ahora para llamar a esta funcion debemos de poner
# el nombre de la funcion acompañado de los argumentos
# encerrados en un parentesis despues del nombre
# osea de esta manera:

MyFunction("Hola mundo!") # > "Hola mundo!"
</code>

<p>
	Lo que pasa en el codigo es que declaramos "MyFunction"
	como una funcion para despues llamarla y pasa el primer 
	argumento por lo que msg termina siendo "Hola mundo!"
	durante el tiempo que dure la funcion ya despues msg
	se borra de la memoria he igual pasa si declaramos una
	variable o una funcion dentro de una funcion, esta  
	terminara siendo eliminadas al finalizar la funcion.
</p>
<code type="cls">
# declaramos la funcion
function main() {
	var saludos = "Hola";
};

main();
print(saludos);

# esto ultimo provocaria un error ya que intentamos
# acceder a un valor cuyo alcance esta dentro de una
# funcion y no afuera de esta

</code>
<p>
	Para las funciones anonimas la cosa no cambia mucho
	todo lo relacionado a lo que es los argumentos y el
	alcance de las variables es lo mismo.
</p>
<code type="cls">

var MyFunction = (msg) -> {
	var saludo = "Hola";
	print(msg)
};

MyFunction("Hola mundo");
print(saludo) 
# no se puede acceder a la variable
# "saludo"
</code>
<h4 class="green">
	Retornar valores
</h4>
<p>
	CLS y la mayoria de lenguajes de programacion tienen un nombre 
	reservado muy util que se llama "return" la cual puedes usar
	para retornar valores dentro de una funcion (no funciona en el
	contexto global) en el siguiente codigo podras ver un ejemplo:
</p>
<code type="cls">

# funcion nombrada
function main() {
	return "Hola mundo";
};

# funcion anonima
main = () -> {
	return "Hola mundo";
}

print(main()) # > "Hola mundo"

</code>
<p>
	Las funciones dejan un valor en el lugar donde fue llamadas
	esta sera la que devuelven pero si no devuelven ninguna entonces
	dejan un valor nulo por ejemplo el codigo anterior que al
	llamar (main) esta llama a la funcion con el nombre main y
	con el uso del nombre reservado "return" entonces devuelve el
	valor que le sigue ("Hola mundo") haciendo que al llamar
	main este devuelva el texto "Hola mundo".
</p>

<p>
	<center class="gold">
		main() -> "Hola mundo"
	</center>
</p>
<br>
<h4 class="green">
	Tipado de retorno
</h4>
<p>
	El ultimo punto de esta entrada es el tipado de retorno,
	ahora vamos a decirle a las funciones que solo devuelvan
	un tipo de dato, en esta entrada
	<a href="/doc?link=tuto/vars.md">Variables</a>
	hablamos del tipado estatico que solo le permite a las
	variables solo devolver un tipo de valor, pues aqui
	haremos lo mismo pero con lo que devuelven las funciones.
</p>
<p>
	En el siguiente codigo le decimos a una funcion que solo
	devuelva valores de texto (String):
</p>
<code type="cls">
# declaramos nuestra funcion
function main() -> String {
	return "Hola mundo";
};

# el mismo caso pero en funcion
# anonima
main = () -> String {
	return "Hola mundo";
}

print(main()) # Hola mundo
</code>
<p>
	Hasta aqui todo bien, pero que pasa si nos da por devolver
	un valor que no sea del tipo asignado? 
	<br>
	<br>
	Pues no pasaria mas que un error de tipado seguido de un
	cracheo pero esto es para evitar problemas de tipado
	que podrian resultar en perdidas o para evitar problemas
	con el auto completado en futuros editores de codigo
	que decidan implementar CLS como lenguaje de programacion
	codificable.
</p>