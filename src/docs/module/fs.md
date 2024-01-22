<h1>
	Modulo fs
</h1>
<p>
	El modulo fs es una libreria hecha para el manejo
	del sistema de archivos del equipo, manejar archivos,
	manejar directorios, etc
</p>
<ul>
	<li class="gold">
		open(path:String) -> fs.open
		<div class="green">
			Open es una clase que te permite manipular archivos
			crear, escribirlo, leerlo, etc
			<p>
				-path: Direccion del archivo que se va a manejar
			</p>
			<ul style="padding-left: 40px">
				<li class="gold">
					read() -> String
					<div class="green">
						Leer el archivo
					</div>
				</li>
				<br>
				<li class="gold">
					write(data: String)
					<div class="green">
						Escribir archivo
					</div>
				</li>
				<br>
				<li class="gold">
					readb() -> Bytes
					<div class="green">
						Leer el archivo de Bytes
					</div>
				</li>
				<br>
				<li class="gold">
					writeb(data: Bytes)
					<div class="green">
						Escribir archivo de Bytes
					</div>
				</li>
			</ul>
		</div>
	</li>
	<br>
	<li class="gold">
		dir(path:String) -> fs.dir
		<div class="green">
			Dir es una clase la cual te deja manejar
			directorios en CLS
			<p>
				-path: la direccion de la carpeta o nueva carpeta
			</p>
			<ul style="padding-left: 40px">
				<li class="gold">
					read() -> String[]
					<div class="green">
						Listar el nombre de los archivos y directorios
						que haya en la carpeta.
					</div>
				</li>
				<br>
				<li class="gold">
					write(files:String[])
					<div class="green">
						Crear una serie de archivos listados
					</div>
				</li>
			</ul>
		</div>
	</li>
	<br>
	<li class="gold">
		exist -> Module
		<div class="green">
			"exist" es un modulo que permite determinar los
			elementos en un sistema de archivos.
			<br><br>
			<ul style="padding-left: 40px">
				<li class="gold">
					path(path:String) -> Boolean
					<div class="green">
						determina si un archivo, enlace, carpeta o unidad existe
						<p>
							-path: Direccion
						</p>
					</div>
				</li>
				<br>
				<li class="gold">
					file(path:String) -> Boolean
					<div class="green">
						determina si un archivo existe
						<p>
							-path: Direccion
						</p>
					</div>
				</li>
				<br>
				<li class="gold">
					dir(path:String) -> Boolean
					<div class="green">
						determina si un directorio existe
						<p>
							-path: Direccion
						</p>
					</div>
				</li>
				<br>
				<li class="gold">
					link(path:String) -> Boolean
					<div class="green">
						determina si un enlace o acceso directo existe
						<p>
							-path: Direccion
						</p>
					</div>
				</li>
				<br>
				<li class="gold">
					mount(path:String) -> Boolean
					<div class="green">
						determina si una unidad existe
						<p>
							-path: Direccion
						</p>
					</div>
				</li>
			</ul>
		</div>
	</li>
	<br>
	<li class="gold">
		Async -> Module
		<div class="green">
			"Async" es un modulo que permite escribir y leer
			archivos de forma asincrona.
			<br><br>
			<ul style="padding-left: 40px">
				<li class="gold">
					read(path:String, callback:Function(String, Async_err))
					<div class="green">
						leer archivo
						<p>
							-path: Direccion
						</p>
						<p>
							-callback: Funcion al finalizar
						</p>
					</div>
				</li>
				<br>
				<li class="gold">
					readb(path:String, callback:Function(Bytes, Async_err))
					<div class="green">
						leer archivo de bytes
						<p>
							-path: Direccion
						</p>
						<p>
							-callback: Funcion al finalizar
						</p>
					</div>
				</li>
				<br>
				<li class="gold">
					write(path:String, data:String, callback:Function(Async_err))
					<div class="green">
						Escribir archivo
						<p>
							-path: Direccion
						</p>
						<p>
							-data: Contenido que se se va a escribir
						</p>
						<p>
							-callback: Funcion al finalizar
						</p>
					</div>
				</li>
				<br>
				<li class="gold">
					writeb(path:String, data:Bytes, callback:Function(Async_err))
					<div class="green">
						Escribir archivo de bytes
						<p>
							-path: Direccion
						</p>
						<p>
							-data: Contenido que se se va a escribir
						</p>
						<p>
							-callback: Funcion al finalizar
						</p>
					</div>
				</li>
				<br>
			</ul>
		</div>
	</li>
	<br>
	<li class="gold">
		mkfile(path: String)
		<div class="green">
			Crea un Archivo nuevo
			<p>
				-path: Direccion
			</p>
		</div>
	</li>
	<br>
	<li class="gold">
		mkdir(path: String)
		<div class="green">
			Crea un Directorio nuevo
			<p>
				-path: Direccion
			</p>
		</div>
	</li>
	<br>
	<li class="gold">
		delete(path: String)
		<div class="green">
			Elimina un archivo o directorio
			<p>
				-path: Direccion
			</p>
		</div>
	</li>
	<br>
	<li class="gold">
		copy(path: String, to: String)
		<div class="green">
			Copiar un archivo de un lugar a otro
			<p>
				-path: Archivo que se va a copiar
			</p>
			<p>
				-to: Direccion de destino
			</p>
		</div>
	</li>
	<br>
	<li class="gold">
		move(path: String, to: String)
		<div class="green">
			Mover un archivo de un lugar a otro
			<p>
				-path: Archivo que se va a mover
			</p>
			<p>
				-to: Direccion de destino
			</p>
		</div>
	</li>
	<br>


</ul>