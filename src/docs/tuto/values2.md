<h1>
	Tipo de datos 2
</h1>
<br>
<p>
	En la 
	<a href="/doc?link=tuto/values.md">seccion anterior</a> 
	hablamos de los tipos de datos mas comunes
	pero sigamos con los tipos de datos que son fundamentales para
	la estructuracion de base de datos que actualmente casi todos
	los lenguajes de programacion mas conocidos y que dominan el
	mercado poseen.
</p>





<br>
<h3 class="green">
	Array
</h3>
<p>
	El tipo de dato Array es un tipo de dato que te permite guardar
	una lista de valores ordenados por indices que despues puedes iterar, 
	se considera unos de los tipos de datos mas utiles ya que puedes
	hacer recorrido de la lista o hacer otras operaciones con estas.
	<br><br>
	para crear un arreglo debes de poner una lista de elementos encerrada
	en corchetes "[]" y separado por comas ","
	
</p>
<code type="cls">
#Una lista de nombres
[
	"carlos",
	"Juan",
	"Pedro"
]

</code>
<p>
	Pero para que limitarnos a solo usar cadenas de texto? 
	<br><br>
	podemos usar cualquier tipo de dato para almacenar
	en nuestra lista de valores incluso podemos guardar
	Arrays dentro de las Arrays
</p>
<code type="cls">
#Una lista de valores en
#diferentes tipos de datos
[
	"carlos",
	true,
	20,
	2.3,
	off,
	[
		12,
		"juan"
	]
]
</code>







<br>
<h3 class="green">
	Object
</h3>
<p>
	Object es un tipo de dato que te permite alamacenar un conjunto
	de datos que a diferencia de el Array, Object almacena los datos
	no de forma ordenada si no dando acceso a un valor con un nombre
	establecido que se le asigna el termino de clave.
	<br><br>
	Para crear un Objetc debes de encerrarlo en llaves "{}" despues
	de eso debes de asignar nombres a los valores en esa tarea hay
	dos formas de hacerlo usando "cadenas" o poniendo el nombre pero 
	sin operadores que interfieran seguido de ":" y el valor que se
	le asignara a la clave
</p>
<code type="cls">
# Una Objeto con datos
# de una persona (Autor)
{
	nombre:"Frask",
	edad:17,
	casado:false,
	trabajo:"Programador"
}
</code>
<p>
	No puedes poner simbolos en las claves almenos que lo encierres
	en comillas como en el ejemplo siguiente
</p>
<code type="cls">
# esto esta mal
{
	codigo-cls:"print('Hola Mundo')"
}

# esto esta bien
{
	"codigo-cls":"print('Hola Mundo')"
}


</code>