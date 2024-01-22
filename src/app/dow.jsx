
class Apppage extends React.Component {
    render() {
        return (
            <Cuerpo>
                <div style={{width:"100%", height:"max-content", maxWidth:"800px", margin:"auto"}}>

                    <div className="flex spa">

                        <Wid title="CLS" color="yellowgreen">
                            descarga CLS-0.8b para tu equipo (Pc, laptop)
                            <br /><br />
                            <br />
                            <ul>
                                <li>
                                    <a href="#win">Windows 32bits</a>
                                </li>
                                <li>
                                    <a href="#linux">Linux 32bits</a>
                                </li>
                            </ul>
                            <br />
                            <ul>
                                <li>
                                    <a href="#win">Windows 64bits</a>
                                </li>
                                <li>
                                    <a href="#linux">Linux 64bits</a>
                                </li>
                            </ul>
                            
                        </Wid>
                        <Wid title="CLSJS" color="orange">
                            descarga CLSJS-0.4b para tu pagina web
                            <br /><br />
                            <a href="#web">
                                CLSJS
                            </a>
                            <br />
                            <br />
                            descarga CLSJS-Modules-0.4b para complementar CLSJS
                            <br /><br />
                            <a href="#web">
                                CLSJS-Modules
                            </a>
                            
                        </Wid>
                        <Wid title="Codigo fuente" color="dodgerblue">
                            Quieres ir a explorar las entrañas de CLS?
                            <br /><br />
                            <a href="https://github.com/elfrask/cls">
                                CLS Github Oficial
                            </a>
                            
                        </Wid>
                        <Wid title="CLSlin" color="#f0f">
                            Quieres dar resaltado de codigo CLS en tu pagina?
                            <br /><br />
                            <a href="/js/clslin/cls.js" download="CLSlin.js">
                                CLSlin
                            </a>
                            
                        </Wid>

                    </div>
                    
                </div>
            </Cuerpo>
        )
    }
}



ReactDOM.render(<Apppage/>, go("__body__"), (e) => {

})
