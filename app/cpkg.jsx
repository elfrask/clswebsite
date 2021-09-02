

class Apli extends React.Component {
    render() {
        return (
            <Cuerpo>
                <div className="ancho">
                    <div className="d2 flex" style={{
                        justifyContent:"center"
                    }}>
                        <Wid title="Cpkg" color="dodgerblue">
                            CLS Package es el administrador de paquetes
                            oficial de CLS que te permite descargar, administrar,
                            y subir tu propios paquetes de cls o librerias nativas 
                            para CLS.
                        </Wid>
                        <Wid title="Como instalar un paquete?" color="dodgerblue">
                            el solo instalar un paquete es tan facil como poner:
                            <br /><br />
                            <code type="cls">cpkg -i [paquete]</code> 
                            <br />
                            <br />
                            <br />
                            <code type="cls">cpkg -i -g [paquete]</code>
                        </Wid>
                    </div>
                    <div className="d2">
                        <div style={{
                            padding:"40px",
                            width:"calc(100% - 80px)"
                        }}>

                            <input 
                            type="text" 
                            id="find" 
                            placeholder="Buscar un paquete" 
                            style={{
                                width:"calc(100% - 67px)",
                                fontSize:"18px",
                                backgroundColor:"#222",
                                padding:"20px",
                                fontFamily:"imp",
                                borderColor:"transparent"
                            }}
                            />
                            <div className="imgb" style={{
                                backgroundImage:`url("/img/lupa.png")`,
                                backgroundSize:"70%",
                                width:"67px",
                                height:"67px",
                                cursor:"pointer",
                                float:"right",
                                backgroundColor:"#222"
                            }} onClick={() => {
                                let res = go("res");
                                let find = go("find");

                                let sendi = {name:find.value};
                                console.log("enviado:", sendi)

                                send("/findpkg", sendi)
                                    .then(e=>e.json().then((e) => {
                                        //let data = JSON.parse(e);
                                        let data = (e);
                                        let va = data.map(e=> {
                                            return(
                                                <Result title={e.name} link={e.page||""}>
                                                    ({e.name}-{e.ver}) {e.desc}
                                                </Result>
                                            )
                                        });

                                        if (va.length === 0) {
                                            va = (
                                                <div className="ancho" style={{textAlign:"center"}}>
                                                    Ups... no hemos conseguido algo referente
                                                    a su busqueda.
                                                </div>
                                            )
                                        }

                                        ReactDOM.render(va, res, () => {})
                                    }
                                )).catch(e => {
                                    alert("error: no se puso hacer la busqueda intentelo mas tarde");
                                    console.log("error:", e)
                                })


                            }}/>
                            <div 
                            
                            style={{
                                padding:"30px",
                                backgroundColor:"#222",
                                width:"calc(100% - 60px)"
                            }}
                            id="res"
                            >
                                <div className="ancho" style={{textAlign:"center"}}>
                                    Buscar paquetes
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </Cuerpo>
        )
    }
}



ReactDOM.render(<Apli/>, go("__body__"), (e) => {

})