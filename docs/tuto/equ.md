<h1>
	Operaciones comparativas
</h1>
<p>
	Las operaciones comparativas son operaciones que
	se pueden usar para comparar los elementos y estas
	tienden a soltar valores boleanos (true o false)
	estas pueden usarce en sentencias if, elif, for o while.
	Cosa que explicaremos en otra entrada.
</p>
<p>
	Las Operaciones comparativas mas comunes son las de
	igualacion y comparacion numerica la cuales son...
</p>
<p class="gold" style="text-align: center; font-family: cursive;">
	"==" si es igual a <br>
	"!=" si no es igual a <br>
	">=" si es mayor o igual a <br>
	"<=" si es menor o igual a <br>
	">" si es mayor a <br>
	"<" si es menor a <br>
</p>
<p>
	todos estos operadores tienden a soltar valores true o false,
	veamos unos ejemplos
</p>
<code type=cls>
# Comparar

12 == "12"
# false

12 == 12
# true

23 != 23
# false

23 != 25
# true

12 > 3
# true

12 > 12
# false

12 >= 12
# true

3 < 10
# true

24 < 4
# false
</code>
<p>
	Pero hay algo mas que los operadores comparativos
	y son los valores de inversion (Invertir) la cual
	lo que hace es invertir el valor osea si el valor
	es false sera true o si es true sera false como en
	el siguiente ejemplo:
</p>
<code type=cls>
# invertir valores

!false
# > true

!true
# > false
</code>