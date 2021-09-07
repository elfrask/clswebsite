

function get_args() {
    let ser = document.location.search.substr(1);
    let ma = ser.split("&")
    let salida= {}

    ma.forEach(x=>{
        let d= x.split("=")
        salida[d[0]] = d[1]
    })
    return salida
}


let go = e=>document.getElementById(e);
let asi = (e, t)=>Object.assign(e, t);
let genlink = (e) => ()=>{if (e) document.location.assign(e)}
let send = (link, data) => fetch(link, 
    {
        method:"POST",
        body:JSON.stringify(data||{}),
        headers:{
            'Content-Type': 'application/json'
        }
    }
);

class Result extends React.Component {
    render() {
        return (
            <div
                className="resul-box"
            >
                <div className="resul-title">
                    {this.props.title}
                </div>
                <div className="resul-cont">
                    {this.props.children}
                </div>
                
                
            </div>
        )
    }
}

class Bt extends React.Component {
    render() {
        return (
            <div 
            className={"bt "+ (this.props.className||"")}
            style={(this.props.style||{})}
            onClick={genlink(this.props.link||"")}
            >
                {this.props.children}
            </div>
        )
    }
}

class Cabeza extends React.Component {
    render() {
        return (
            <div className="head flex c-v">
                <Img img="/img/logo.png" size="75" link="/" style={{cursor:"pointer"}}/>
                <div
                    className="land up_bt"
                    style={{
                        float:"right",
                        width:"max-content",
                        height:"max-content",
                    }}
                >
                    <Bt link="/doc">Documentacion</Bt>
                    <Bt link="https://github.com/elfrask/cls">Github</Bt>
                    <Bt link="/downloads">Descarga</Bt>
                    <Bt link="/cpkg">CPKG</Bt>
                </div>
                <div
                    className="port up_bt"
                    style={{
                        float:"right",
                        width:"max-content",
                        height:"max-content",
                    }}
                >
                    <Bt link="#pie">Opciones</Bt>
                </div>
            </div>
        )
    }
}

class Img extends React.Component {//style, size, className, link, img
    
    render() {

        let toli = asi(
            asi(
                this.props.style||{},
                {
                    backgroundImage:`url("${this.props.img||""}")`,
                    width:(this.props.ancho||this.props.size||"100")+"px",
                    height:(this.props.alto||this.props.size||"100")+"px",
                }), 
            this.props.post_style||{});
        //console.log(toli)
        return (
            <div 
            className={"imgb " + (this.props.className||"")}
            style={toli}
            onClick={genlink(this.props.link||"")} 
            >
                
            </div>
        )
    }
}

class Suelo extends React.Component {
    render() {
        return (
            <div className="suelo aco medio">
                <section id="pie"></section>
                <div className="medio sparcing" style={{
                        width: "100%",
                        justifyContent: "space-around",
                        maxWidth:"500px",
                        minWidth:"315px"
                    }}>
                    <Img img="/img/icon/dowload.png" className="dilink" size="60" link="/downloads" />
                    <Img img="/img/icon/doc.png" className="dilink" size="60" link="/doc" />
                    <Img img="/img/icon/pkg.png" className="dilink" size="60" link="/cpkg" style={{backgroundSize:"75%"}} />
                    <Img img="/img/icon/github.png" className="dilink" size="60" link="https://github.com/elfrask/cls" />
                </div>
                <div style={{margin:"50px", fontSize:"20px"}}>
                    Creador: <a href="/frask" style={{fontSize:"20px", color:"gold"}}>Frask</a> <br /> 
                   
                </div>
                <div>
                    CLS Project (2021)
                </div>
            </div>
        )
    }
}

class Body extends React.Component {
    render() {
        return (
            <div className="page flex">
                {this.props.children}
            </div>
        )
    }
}

class Clscode extends React.Component {
    render() {
        return (
            <div dangerouslySetInnerHTML={{__html: Clslin(this.props.code)}} />
        )
    }
}

class Cuerpo extends React.Component {
    render() {
        return (
            <div>
                <Cabeza />
                <Body>
                    {this.props.children}
                </Body>
                <Suelo />
            </div>
        )
    }
}

class Wid extends React.Component {
    render() {

        let tx = 0;

        if (this.props.rpos) {
            let men = parseInt((Math.random()+"").substr(2))%60
            tx = men-30
        }


        return (
            <div className="wid-box" style={{
                transform:`translate(${tx}px, 0px)`,
                borderBottomColor:this.props.color||"gold"
            }}>
                <div className="wid-title" style={{color:this.props.color||"gold"}}>
                    {this.props.title||""}
                </div>
                <hr />
                <div className="wid-desc">
                    {this.props.children||""}
                </div>
            </div>
        )
    }
}