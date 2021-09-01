let express = require('express');
let pb = require('body-parser');
let galleta = require('cookie-parser');
let fs = require('fs')
let app = express();

app.use(pb.urlencoded({extended:true}));
app.use(galleta(["CLSJS", "CLS", "VINESTAR", "SDIQNEJAIDOWMDOLA", "SDOANNDODAKFLSKE"]));

function plantilla(d = "") {
    return((o) => {

        return (
            fs.readFileSync(d, "utf-8")
                .replace("${{body}}", o)
        )
    })
}

let page = plantilla("./html/index.html")

;(() => {
    app.get("/", (req, res, next) => {
    
        res.send(
            page(fs.readFileSync("./html/public/init.html"))
        )
    });
    
    app.get("/downloads", (req, res, next) => {
    
        res.send(
            page(fs.readFileSync("./html/public/dow.html"))
        )
    });
    
    app.get("/cpkg", (req, res, next) => {
    
        res.send(
            page(fs.readFileSync("./html/public/cpkg.html"))
        )
    });
    
    app.post("/findpkg", (req, res, next) => {
        let nombre = req.body.name;
        let salida = [];

        let dire = fs.readdirSync("./cpkg/pkgs", "utf-8");

        dire.forEach(e => {
            if (e.includes(nombre)) salida.push(e)
        })

        res.send(JSON.stringify(salida.map(e => {
            let data = JSON.parse(fs.readFileSync("./cpkg/pkgs"+e, "utf-8"));

            return(
                {
                    name:e,
                    ver:data.ver,
                    page:data.page,
                    git:data.git,
                    desc:data.description
                }
            )
        })))
    })
})();


let lista = (["/js", "/css", "/img", "/app", "/sass", "/font"]);

lista.forEach((e) => {

    app.use(e, express.static("."+e))

})



app.listen(9000, () => {
    console.log("server of CLS open in the port 9000")
})