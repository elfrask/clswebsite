
let nodoArbol = 0

class Treenodo extends React.Component {
    render() {
        let id = "Treenode" + (nodoArbol++)
        let open = false;
        return (
            <div className="tn" id={id}>
                <div className="title-treenodo" onClick={()=>{
                    go(id).style.height = open?"40px":"max-content";
                    open = !open;
                }}>
                    {this.props.title}
                </div>
                <div className="sub-treenodo">
                    {this.props.children}
                </div>
                
            </div>
        )
    }
}

function render_page(link) {
    let doc = go("docpage");
    fetch("/docs/" + link).then(e=>e.text().then(x=>{
        doc.innerHTML = x
        toConvert.refresh()
        go("panel").style.zIndex = 0
        prop = false

    }))
}


class Nodo extends React.Component {
    render() {
        return (
            <div className="nodo" onClick={() =>{
                render_page(this.props.link)
            }}>
                {this.props.children}
            </div>
        )
    }
}
let prop = false

class Apli extends React.Component {
    render() {


        return (
            <div style={{
                width:"100%",
                height:"100%"
            }}>

                
                <div className="doc-panel" id="panel">
                    <Img size="300" img="/img/logo.png" style={{
                        "backgroundSize":"100px",
                        "backgroundColor":"#333",
                        "cursor":"pointer",
                    }} link="/"/>

                    <div id="tree">

                    </div>
                    
                </div>
                <div className="doc-page" id="docpage">

                </div>

                <div className="port sd" onClick = {() => {
                    go("panel").style.zIndex = prop?0:1
                    prop = !prop
                }}/>

                
            </div>
        )
    }
}

function tree(x) {

    let salida = []

    let data = x.nodes

    for (let i = 0; i < data.length; i++) {
        let e = data[i];
        if (e.tipo === "node") {
            salida.push(
                <Nodo link={e.link}>
                    {e.title}
                </Nodo>
            )
        } else if (e.tipo === "treenode") {
            salida.push(
                <Treenodo title={e.title} link={e.link}>
                    {tree(e)}
                </Treenodo>
            )
        }
    }

    return salida
    
}

ReactDOM.render(<Apli/>, go("__body__"), (e) => {
    let arbol = go("tree");
    fetch("/get_tree_doc").then(e=>e.json().then(x=>{
        let salida = [];
        
        salida = tree({nodes:x})
        
        
        ReactDOM.render(salida, arbol, () => {

            document.title = "CLS Documentacion Oficial"

        })
    }))
})