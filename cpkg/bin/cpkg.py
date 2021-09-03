import requests
import os
import shutil
import sys
import git
import json
import pickle

pack = os.path.dirname(__file__)

N="""
"""

class etiquetas:
    def categoria(title="Titulo", cmd=[]) -> list["title":str, "cmds":list]:
        return {"title":title, "cmds":cmd}
    def cmd(cmd="", des=""):
        if isinstance(des, str): des= [des]
        return {"cmd":cmd, "des":des}


ayuda = {
    "head":[
        'CLS - Frask - Vinestar Studio (C) (2021)',
        'CPKG el gestor de paquetes de CLS',
        '',
        'El gestor de paquetes de CPKG es un herramienta que te ayuda a administrar',
        'tus proyectos, compilar, adquirir librerias de CLS, publicar tus librerias',
        'de CLS, administrar tus dominios, configurar el compilador, actualizar tus',
        'librerias, administrar tu cuenta de desarrollador, entre otras cosas para',
        'darte facilidad a la hora de emplear CLS en tu trabajo',
        '',
        'puedes visitar: https://www.test-url.com/',
        'para obtener mas informacion en la pagina oficial'
    ],
    "lista":[
        etiquetas.categoria(
            "Administrar paquetes",
            [
                etiquetas.cmd("cpkg install [paquete]", "instalar un paquete"),
                etiquetas.cmd("cpkg uninstall [paquete]", "desinstalar un paquete"),
                etiquetas.cmd("cpkg list", "listar paquetes instalados"),
                etiquetas.cmd("cpkg update [paquete]", "actualizar un paquete"),
                etiquetas.cmd("cpkg update", "actualizar todos los paquetes"),
            ]
        ),
        etiquetas.categoria(
            "Administrar cuenta de desarrollador",
            [
                etiquetas.cmd("cpkg user-login", "iniciar session"),
                etiquetas.cmd("cpkg user-logout", "cerrar session"),
                etiquetas.cmd("cpkg user-register", "registrar"),
                etiquetas.cmd("cpkg user-save [correo]", "recuperar cuenta"),
                etiquetas.cmd("cpkg user-repass", "cambiar contraseña"),
            ]
        ),
        etiquetas.categoria(
            "Administrar tus paquetes publicos",
            [
                etiquetas.cmd("cpkg is-domain [paquete]", "verifica si el dominio esta tomado"),
                etiquetas.cmd("cpkg get-domain [nuevo paquete]", "reclamar el dominio libre"),
                etiquetas.cmd("cpkg list-domain", "listar mis dominios"),
                etiquetas.cmd("cpkg del-domain [paquete]", "liberar un dominio"),
                etiquetas.cmd("cpkg set-domain [paquete] [repositorio]", "establecer repositorio en un dominio"),
                etiquetas.cmd("cpkg set-domain-page [paquete] [url]", "establecer pagina del dominio"),
                etiquetas.cmd("cpkg mark-update [paquete] [ver/1.0]", "marcar como actualizado y nombrar la version"),
                etiquetas.cmd("cpkg info-domain [paquete]", "mostrar informacion del dominio"),
            ]
        ),
        etiquetas.categoria(
            "Administrar tu proyecto",
            [
                etiquetas.cmd("cpkg gen-app", [
                    "genera un archivo app.json fundamental para administrar o compilar tu proyecto"
                ]),
                etiquetas.cmd("cpkg init", [
                    "crea un proyecto a partir de una plantilla estandar"
                ]),
                etiquetas.cmd("cpkg init [plantilla]", [
                    "crea un proyecto a partir de una plantilla seleccionada"
                ]),
                etiquetas.cmd("cpkg plix [archivo inicial] [modo]", "compila tu proyecto de CLS"),
                etiquetas.cmd("cpkg mode [modo]", [
                    "establecer el modo de interpretar CLS",
                    "los modos que posee cls es:",
                    "",
                    "CLS: CLS comun y corriente",
                    "CLSS: CLS de tipado estatico",
                ]),
                etiquetas.cmd("cpkg conf-datapack [nuevo/editar datapack]", "configurar el datapack de un modo"),
                etiquetas.cmd("cpkg run [play]", "ejecucion de argumentos rapidos asignados por el nombre"),
                etiquetas.cmd("cpkg info", "dar toda la informacion del proyecto"),
            ]
        ),
        
    ]
}

def cwd():
    app_path = ""

    if getattr(sys, 'frozen', False):
        app_path = os.path.dirname(sys.executable)
    elif __file__:
        app_path = os.path.dirname(__file__)

    return app_path

work = cwd()
server = "http://localhost:9000/api/cpkg"

conf = {
    "user":"",
    "pass":"",
    "login":False
}

def save_conf(): 
    pickle.dump(conf, open(work +"/cpkg.conf", "wb"))

if os.path.exists(work +"/cpkg.conf"):
    try:
        conf = pickle.load(open(work +"/cpkg.conf", "rb"))
    except:
        print("el archivos de configuraciones fue corrompido por lo que se ha arreglado") 
        save_conf()
    pass
else:
    save_conf()
    pass




def tobj(ob = []):
    itera = 0
    salida = {}
    for i in ob: 
        salida[itera] = i
        itera+=1
    return salida

def _ayuda():
    
    for i in ayuda["head"]:
        print("  "+i)
        pass
    for i in ayuda["lista"]:
        print(N*2)
        print(f'  +{i["title"]}')
        print()
        for x in i["cmds"]:
            print("    -"+x["cmd"])
            
            for y in x["des"]:
                print("        " + y)
                pass
            print()
            pass
        
        pass
    

    pass

def main(argv = []):
    
    if (len(argv) == 1) or (tobj(argv).get(1, None) in ["-h", "/h", "-H", "/H", "help", "--help", "-help"]):
        
        _ayuda()

        pass
    else:
        #arg = tobj(argv)

        if len(argv) == 3:
            if argv[1] == "install":

                res = requests.post(server+ "/infopkg", {"name":argv[2]})

                if res.status_code == 200:
                    data = res.json()

                    if data.get("exist", False):
                        #descargar desde el git
                        pass
                    else:
                        print(f"el paquete '{argv[2]}' no a sido encontrado")

                    pass
                else:
                    print("no se ha podido establecer conexion con el servidor")

                pass
            elif argv[1] == "unistall":
                pass

            pass


        pass
    pass

if __name__ == "__main__":
    main(sys.argv)