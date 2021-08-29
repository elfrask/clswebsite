

let go = e=>document.getElementById(e);
let asi = (e, t)=>Object.assign(e, t);
let genlink = (e) => ()=>{if (e) document.location.assign(e)}

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
                <Img img="/img/logo.png" size="75" link="/"/>
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
                    <Bt link="/dowloads">Descarga</Bt>

                </div>
            </div>
        )
    }
}

class Img extends React.Component {//style, size, className, link
    
    render() {

        let toli = asi(
            this.props.style||{},
            {
                backgroundImage:`url("${this.props.img||""}")`,
                width:(this.props.ancho||this.props.size||"100")+"px",
                height:(this.props.alto||this.props.size||"100")+"px",
            });
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
                <div>
                    <Img img="/img/icon/github.png" className="dilink" size="50" link="https://github.com/elfrask/cls" />
                </div>
                <div></div>
            </div>
        )
    }
}

class Body extends React.Component {
    render() {
        return (
            <div className="page">
                {this.props.children}
            </div>
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
