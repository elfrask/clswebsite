<h1>
	Importar librerias
</h1>
<p>
	Las librerias son porciones de codigo externa con funciones
	he implementaciones hechas para ser utilizada en cualquier
	aplicacion que la adquiera.
</p>
<p>
	Para adquirir una libreria en tu aplicacion debes de 
	importarla, como importamos nuestra libreria? pues en CLS
	hay 3 formas de hacerlo usando from, import he include.
</p>
<h4 class="green">
	Import
</h4>
<p>
	import es un nombre reservado el cual te permite importar
	una libreria con la siguiente estructura
</p>
<p class="gold">
	import "libreria.scls" as NombreParaDarle;
</p>
<p>
	Podremos ver un ejemplo en el siguiente codigo pero
	primero antes que nada creamos una libreria simple
	y la llamaremos "lib.scls".
</p>
<code type=cls>
# lib.scls

export.hola = "Hola mundo";
</code>
<p>
	ahora proseguimos con usar import en un archivo
	llamado "import.scls"
</p>
<code type=cls>
# import.scls

# importamos lib.scls
import "lib.scls" as lib;

# y imprimimos unas de sus
# propiedades
print(lib.hola)

# > Hola mundo

</code>
<p>
	"export" es un nombre reservado en cls que solo existe
	cuando el archivo es una libreria (osea se esta importando)
	esto para permitir a la libreria exportar las variables
</p>
<p>
	cuando usamos "lib" en el ejemplo arriba en realidad estamos
	usando "export" del Script de lib.scls
</p>
<br>
<br>
<h4 class="green">
	From
</h4>
<p>
	"from" se usa cuando queremos importar un fragmento de una
	libreria nada mas, usaremos el mismo "lib.scls" y en un nuevo
	archivo llamado "from.scls" creamos otro script pero con from
</p>



<code type=cls>
# lib.scls

export.hola = "Hola mundo";
</code>
<p>
	ahora proseguimos con usar from en un archivo
	llamado "from.scls", la estructura de from es
	de la siguiente manera
</p>
<p class="gold">
	from "libreria.scls" import fragmento as nombre;
</p>
<p>
	osea importamos la libreria le decimos el fragmento que
	deseamos extraer y despues le damos un nombre
</p>
<code type=cls>
# from.scls

# importamos lib.scls
from "lib.scls" import hola as saludo;

# y imprimimos la variable
# importada
print(saludo)

# > Hola mundo
</code>

<h4 class="green">
	Include
</h4>
<p>
	include lo que hace exactamente es combinar la libreria
	que se desea importar con la aplicacion osea extrae cada
	varlo de la libreria (modulo export) y lo importa con su
	respectivo nombre en la aplicacion, su estructura es la
	mas simple
</p>
<p class="gold">
	include "libreria.scls";
</p>
<p>
	veamos un ultimo ejemplo pero con include usando la misma
	libreria "lib.scls" y craremos un nuevo script llamado
	"include.scls"
</p>

<code type=cls>
# lib.scls

export.hola = "Hola mundo";
</code>

<p>
	y ahora vamos con el archivo "include.scls" y incluimos
	el codigo de la libreria en nuestra app
</p>

<code type=cls>
# include.scls

# importamos lib.scls
include "lib.scls";

# basta con poner el nombre
# del atributo nada mas

print(hola)

# > Hola mundo
</code>