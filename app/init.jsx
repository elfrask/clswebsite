



class Apppage extends React.Component {
    render() {
        return (
            <div>
                <Cuerpo>
                    <div style={{width:"100%", height:"50px"}} />
                    <div className="flex c-h" style ={{
                        margin:"auto",
                        width:"100%"
                    }}>
                        <div
                        style={{
                            width:"100%",
                            maxWidth:"500px",

                        }}
                        >

                            <div style={{
                                width:"calc(100% - 40px)",
                                maxWidth:"500px",
                                backgroundColor:"#111",
                                padding:"20px"
                            }}>
                                <Clscode code={
                                    `
#Serie de Fibonacci
function fibonacci(fib) {

    var l = [0, 1];

    while ((l[-2] + l[-1]) < fib) 
    {
        l.append(
            l[-2] + l[-1]
        )
    };

    return l
};

print(fibonacci(30));



                                    `
                                    } />
                            </div>
                            <hr />
                            <div style={{
                                width:"calc(100% - 40px)",
                                maxWidth:"500px",
                                backgroundColor:"#111",
                                padding:"20px"
                            }}>
                                <Clscode code = "> [0, 1, 1, 2, 3, 5, 8, 13, 21]"/>
                            </div>
                        </div>
                    </div>
                    <div style={{width:"100%", height:"50px"}} />
                    <div style={{
                        backgroundColor:"#333", width:"100%", height:"max-content",
                        padding:"0px"
                        }}>
                        <Dow />
                        <Info />
                    </div>
                </Cuerpo>
            </div>
        )
    }
}




class Info extends React.Component {
    render() {
        return (
            <div className="flex c-h" 
            style={{
                margin:"auto",
                

            }}
            >
                <Wid title="Que es?">
                    Cls es un lenguaje de programacion de Scripting
                    de codigo abierto hecho para ser facil de aprender
                    y manejar con una sintaxis parecida a Java concervando
                    algunas caracteristicas de C++ y caracteristicas opcionales.
                </Wid>
                <Wid title="Para que sirve?" color="dodgerblue">
                    Cls esta hecho para crear aplicaciones de escritorio, 
                    aplicaciones web y aplicaciones mobiles 
                    solucionando algunos problemas de JavaScript
                    y dando a cls la capacidad de manejar la Api que desees en caso
                    que quieras incorporarlo a proyectos que soporten plugins, mods,
                    agregados, etc.
                </Wid>
                <Wid title="Que caracteriza a CLS?" color="yellowgreen">
                    Cls es un lenguaje de programacion que seria el indicado
                    para aprender a programar ya que incorpora muchas bases de la
                    programacion en una misma sintaxis de la cual se puede aprender
                    a corto plazo.
                </Wid>
                <Wid title="Que es Cpkg?" color="crimson">
                    Cpkg es el gestor de paquetes oficial de CLS para descargar,
                    gestionar y publicar paquetes hechos con CLS o librerias nativas
                    para la creacion de nuevas funcionalidades con CLS.
                </Wid>
            </div>
        )
    }
}

class Dow extends React.Component {
    render() {
        return (
            <div className="flex c-h" 
            style={{
                margin:"auto",
                backgroundColor:"#444",
                width:"calc(100% - 40px)",
                padding:"20px",
            }}
            >
                <Wid title="Esta disponible?" color="dodgerblue">
                    Cls esta dsiponible en su version beta, hay dos implementaciones
                    de CLS: CLS y CLSJS una dedicada al uso general y otra dedicada
                    solo para la web, puedes descargar CLS <a href="/downloads">aqui</a>
                </Wid>
                <Wid title="Donde esta su codigo?" color="crimson">
                    Cls posee su reposotorio de Github donde encontraras sus dos
                    versiones <a href="https://github.com/elfrask/cls">aqui</a>.
                </Wid>
                <Wid title="Quieres saber mas?">
                    Cls tiene una documentacion online la cual puedes consultar <a href="/doc">aqui</a>.
                </Wid>
                <Wid title="Librerias para CLS?" color="yellowgreen">
                    Cpkg es el gestor de paquetes oficial de CLS pero tiene
                    un buscador online que te permite buscar paquetes para tus
                    proyectos puedes ir al proyecto Cpkg <a href="/cpkg">aqui</a>.
                </Wid>
            </div>
        )
    }
}





ReactDOM.render(<Apppage />, go("__body__"), () => {})
