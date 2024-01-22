<h1>
	Condiciones (Setencia if)
</h1>
<p>
	En la programacion un if es una sentencia que
	te permite manejar condiciones de si o no. en
	CLS la forma de decirle a CLS que una condicion
	se cumple o no es que el valor que este procese
	deba ser un boleano o un valor que pueda devolver
	un valor true o false de lo contrario por defecto
	sera true.
</p>
<p>
	asi es como se estructura una condicion if
</p>
<p class="gold">
	if (
	<b>
		condicion
	</b>
	) { 
	<b>
		codigo
	</b>
	}
</p>
<p>
	En el siguiente ejemplo vemos como aplicar una
	concicion.
</p>
<code type=cls>
# sentencia if

if (true) {
	print("Prueba con IF")
}

# > Prueba con IF
</code>
<p>
	Este codigo sin dudas va a imprimir el texto
	ingresado ya que el valor ingresado por if
	es verdadero osea es decir que la condicion
	si se cumple.
</p>

<code type=cls>
# sentencia if
# pero con false

if (false) {
	print("Prueba con IF")
}

# (no se muestra nada)
</code>
<p>
	En este caso no se imprime ya que le estamos
	diciendo a nuestro programa que la condicion
	no se cumple porque el valor ingresado por if
	es falso por lo que termina saltando el bloque 
	de codigo.
</p>
<p>
	Ahora hay varios nombres reservados que se usan con
	if para poder dar usa respuesta cuando una condicion
	no se cumple como lo es "else". Else se estructura
	de la siguiente manera:
</p>
<p class="gold">
	if (
	<b>
		condicion
	</b>
	) { 
	<b>
		codigo
	</b>
	} else {
	<b>
		codigoDeElse
	</b>
	}
</p>
<p>
	En el siguiente ejemplo podemos ver un caso en que if se
	cumple y if no se cumple.
</p>
<code type=cls>
# se cumple if

if (true) {
	print("se cumple")
} else {
	print("no se cumple")
};

# > se cumple
</code>

<code type=cls>
# no se cumple if

if (false) {
	print("se cumple")
} else {
	print("no se cumple")
};

# > no se cumple
</code>

<p>
	Hay un ultimo nombre reservado que no se debe de ignorar
	y este es elif. este nombre reservado esta hecho para reducir
	el codigo que pondrias al poner un if dentro de un else como asi
</p>

<code type=cls>
# forma poco limpia

if (false) {
	# codigo
} else {
	if (false) {
		# codigo 2
	} else {
		if (true) {
			# codigo 3
		} else {
			# si ninguno se cumple
		}
	}
}
</code>
<p>
	en vez de hacerlo de esta forma poco ordenada y menos optimizada
	podemos hacer uso de elif como en el siguiente caso
</p>
<code type=cls>
# forma hecha con elif

if (false) {
	# si se cumple

} elif (false) {
	# si el segundo se cumple
	
} elif (false) {
	# si el tercero se cumple

} else {
	# o si ninguno se cumple

}
</code>