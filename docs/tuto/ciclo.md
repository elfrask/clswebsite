<h1>
	Ciclos y blucles
</h1>
<p>
	los ciclos y bucles en la programacion normalmente
	son caracteristicas de la programacion que te permite
	reccorrer (iterar) o manejar valores y datos por medio
	de un bloque que se repite hasta una rutura o hasta
	un punto determinado
</p>
<h4 class="green">
	Bucles
</h4>
<p>
	Los bucles son bloques de codigo que se ejecutan siempre y 
	cuando la condicion se cupla, esta es una sentencia similar
	al "if" pero a diferencia que el bloque de codigo se ejecutara
	hasta que la condicion ingresada deje de cumplirce.
</p>
<p>
	Un ejemplo es el siguiente codigo:
</p>
<code type="cls">
# uso de while

while (true) {
	print("bucle")
};

# (+999) > bucle
</code>
<p>
	Como true es un valor constante siempre va a ser verdadero
	por lo cual se ejecutara infinitamente el codigo dentro
	de la sentencia.
</p>
<p>
	Ahora apliquemos una condicion real como la siguiente
</p>
<code type="cls">
# while pero con condicion real

var num:int = 0;

while (num < 10) {
	print("el valor es:", num);
	num++;
};

# > el valor es: 0
# > el valor es: 1
# > el valor es: 2
# > el valor es: 3
# > el valor es: 4
# > el valor es: 5
# > el valor es: 6
# > el valor es: 7
# > el valor es: 8
# > el valor es: 9
</code>
<p>
	Lo que hacemos aqui es decirle a nuestra aplicacion
	que cree una variable numerica "num" y le establesca 0
	como valor inicial y despues con la sentencia while creamos
	un blucle que hace que num imprima "el valor es:" mas el valor
	de "num" hasta que num deje de ser menor a 10.
</p>
<code type="cls">
# while pero con break

var num:int = 0;

while (num < 10) {

	print("el valor es:", num);
	
	# con un if que establece
	# si num es 5 entonces que
	# se rompa el bucle

	if (num == 5) {
		break;
	};


	num++;
};

# > el valor es: 0
# > el valor es: 1
# > el valor es: 2
# > el valor es: 3
# > el valor es: 4
# > el valor es: 5

</code>
<p>
	En esta ocacion vemos que no se completa el bucle, esto
	sucede ya por la condicion la cual es si "num" es igual a 5
	entonces ejecuta un nombre reservado que es "break" la cual
	esta es normalmente usada para romper ciclos y bucles y continuar
	con la aplicacion
</p>
<h4 class="green">
	Ciclos
</h4>
<p>
	Los ciclos son bloques de codigo que comunmente son usados para recorrer
	una lista determinada de valores o para tener una funcion mas similar
	a while
</p>
<p>
	"for" es una sentencia la cual es mas comunmente usada para los Arrays
	normalmente para extraer valores de un arreglos para diferentes finalidades.
	En CLS hay varios tipos de for, el for manual y el for each.
</p>
<h4 class="green">
	For
</h4>
<p>
	For es mas parecido a while solo que incluye un inicio y un mientras.
	Que quiero decir?
</p>
<p>
	For hace que la sintaxis del primer ejemplo sea mas corta
</p>
<code type="cls">
# while pero con condicion real

var num:int = 0;

while (num < 10) {
	print("el valor es:", num);
	num++;
};

# > el valor es: 0
# > el valor es: 1
# > el valor es: 2
# > el valor es: 3
# > el valor es: 4
# > el valor es: 5
# > el valor es: 6
# > el valor es: 7
# > el valor es: 8
# > el valor es: 9
</code>
<p>
	Porque usar este metodo si hay una forma mas sencilla de usar? La
	estructuracion de for manual es de la siguiente manera:
</p>
<p class="gold">
	for (<b>Inicio</b>; <b>Condicion</b>; <b>mientras</b>) { <b>Codigo</b> }
</p>
<p>
	de esta manera podemos reducir nuestro metodo anterior de la siguiente manera:
</p>
<code type=cls>
# ciclo for

for (num = 0; num < 10; num++) {
	
	print("el valor es:", num)

};

# > el valor es: 0
# > el valor es: 1
# > el valor es: 2
# > el valor es: 3
# > el valor es: 4
# > el valor es: 5
# > el valor es: 6
# > el valor es: 7
# > el valor es: 8
# > el valor es: 9
</code>
<p>
	Como podemos observar la diferencia es enorme y mas optima
	para nuestra aplicacion, pero ahora lo usaremos con un arreglo:
</p>
<code type=cls>
# ciclo for

var lista = [
	"Hola",
	"Mundo",
	"Como",
	"Estan",
];


for (i = 0; i < len(lista); i++) {
	var e = lista[i];

	print("text:", e);

};

# > text: Hola
# > text: Mundo
# > text: Como
# > text: Estan
</code>
<p>
	Pero el for manual tiende usarce mas para el mejor manejo de la iteracion
	ya que el valor de iteracion "i" se puede modificar dentro del bloque esta
	no es constante y puede tener mejor manipulacion del ciclo.
</p>
<p>
	Esto no quiere decir que while sea inutil. todo lo contrario, while en algunos
	casos es util solo depende del programador en que lo quiere aplicar
</p>
<p>
	pero hay aun una forma mas facil de trabajar con el recorrido de los arreglos
	y es usando "for each"
</p>
<h4 class="green">
	For each 
</h4>
<p>
	"For each" esta dedicado para hacer un recorrido de un arreglo o cualquier objeto
	iterable y su sintaxis es totalmente sencilla. esta lleva la siguiente estructura:
</p>
<p class="gold">
	for each <b>NombreDelResultado</b> (<b>ValorQueSeVaAIterar</b>) { <b>Codigo</b> }
</p>
<code type=cls>
# ejemplo for each

var val = [
	"Hola",
	"Mundo",
	"Como",
	"Esta?",
];

for each x (val) {
	print("valor:", x);	
};

# > valor: Hola
# > valor: Mundo
# > valor: Como
# > valor: Esta?
</code>
<p>
	Esto puede usarce con todos los valores que puedan iterarce, pero ahora
	vamos con un ultimo el cual solo funciona con los Arrays. Esta se hace
	con un metodo ya existente en cls en cual se llama "forEach" y le pertenece
	a los Arrays, veremos un ejemplo:
</p>
<code type=cls>
# uso de Array.forEach


var val = [
	"Hola",
	"Mundo",
	"Como",
	"Esta?",
];

val.forEach((x) -> {
	print("x es:", x)
});

# > x es: Hola
# > x es: Mundo
# > x es: Como
# > x es: Esta?

</code>
<p>
	Este metodo requiere el uso de una funcion anonima que sera llamada
	con cada unos de los valores que recorre el metodo "Array.forEach".
</p>
<p>
	pero hay un nombre reservado que se usa para continuar el ciclo o bucle el
	cual es "continue" esto lo que hace es obviar el resto de codigo que hay en
	el bloque y lo que hace es iterar el siguiente valor en caso de for, si es
	while solo vuelve al inicio del bloque tal como aparece en el siguiente ejemplo:
</p>

<code type="cls">
# while con continue

var num:int = 0;

while (num < 10) {
	
	# si num es igual a 9
	# entonces que continue
	# el bucle

	if (num < 9) {
		continue;
	};

	print("el valor es:", num);
	num++;
};


# > el valor es: 9
</code>
<p>
	Como podemos ver el resto de valores a sido obviados porque la
	condicion no dejaba imprimir valores menores a 9, lo mismo pasa
	con for y for each
</p>

<code type=cls>
# ciclo for y continue

for (num = 0; num < 10; num++) {
	
	# si es menor a 8
	# continuar el ciclo

	if (num < 8) {
		continue;
	}
	
	print("el valor es:", num)

};


# > el valor es: 8
# > el valor es: 9
</code>
<p>
	aqui aplicamos casi lo mismo pero lo bajamos a 8 y lo usamos en un ciclo
	for, en for each sucede lo mismo
</p>
<p class="gold">
	Algo a destacar que en el metodo Array.forEach no funciona solo en casos donde
	el bloque de codigo donde se implemente le pertenesca a un ciclo o bucle
</p>
