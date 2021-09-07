<h1>
	Variables
</h1>
<p>
	Una Variable es un espacio de la memoria del computador que permite 
	almacenar información de un determinado tipo de dato. El tipo de dato 
	indica como es el dato que se almacena en la variable, en programación 
	los tipos de datos básicos son los numéricos, los carácter y los lógicos.
	puedes ver mas de los tipos de datos <a href="/doc?link=tuto/values.md">aqui</a>.
</p>
<p>
	Una vez aclarado que son las variables hablaremos de los tipos de variables:
</p>
<h4 class="blue">
	Variables convencionales
</h4>
<p>
	Son aquellas que puedes establecerles un valor y darles un tipado
	su uso es relativamente sencillo, estas puedes de establecerlas de
	la siguiente manera.
</p>
<code type="cls">
# establecer un valor de forma completa
var saludo:String = "Hola mundo!";

# cambia el valor de la variable
saludo = "Saludos!"

# en caso que la variable nunca
# se declare con var el solo
# hacer esto:
# saludo = "Hola mundo!"
# es lo mismo que hacer esto:
# var saludo:Any = "Hola mundo!"

</code>
<p>
	pero que pasaria en el caso de que la variable se intente meter un valor
	que no sea uno del tipo "String"?
</p>
<p>
	pues el resultado seria un crecheo por parte de la aplicacion ya que
	la variable se habia ya definido con un tipo de valor por lo que este
	falla para evitar futuros errores por problemas de tipado
</p>
<code type="cls">
# declaramos la variable
var valor:String = "Hola mundo!";

# no puedes hacer esto
# porque la variable solo
# acepta variables del tipo
# "String"

valor = 12;

</code>
<p>
	pero si simplemente quieres declarar una variable que acepte cualquier
	tipo de valor entonces debes de saltear la parte de asignar el tipo
	de dato y solo ponerlo de la siguiente manera:
</p>
<code type="cls">
# Opcion 1
var saludo = "Hola mundo";

# Opcion 2
var saludo:Any = "Hola mundo";

# Opcion 3
saludo = "Hola mundo";

</code>
<br>
<br>
<h4 class="blue">
	Variables constantes
</h4>
<p>
	Las variables constantes son variables que solo se
	establecen una vez y no se puede cambiar su valor
	iniciar de intentarlo el programa crechea.
	<br>
	<br>
	Las variables constantes se establecen de la siguiente manera:
</p>
<code type="cls">
# define una variable constante
const saludos:String = "Hola mundo!";

# pero no puedes cambiar su valor
saludo = "nuevo valor";


</code>

