let express = require('express');
let pb = require('body-parser');
let galleta = require('cookie-parser');
let fs = require('fs');
let app = express();

app.use(pb.urlencoded({extended:true}));
app.use(pb.json());
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


function Api_cpkg() {
    
    app.post("/api/cpkg/infopkg", (req, res) => {
        
        console.log(req.body)

        res.json({
            name:"resibido"
        })
    });

    app.post("/api/cpkg/isuser", (req, res) => {
        let up = "./cpkg/users/" + req.body.user
        let re = {
            user:fs.existsSync(up)
        }

        if (re.user) re.pass = JSON.parse(fs.readFileSync(up)).pass === req.body.pass;

        res.json(re)
    });

    app.post("/api/cpkg/repass", (req, res) => {
        let up = "./cpkg/users/" + req.body.user
        let re = {
            user:fs.existsSync(up),
            pass:false,
            repass:false
        }

        if (re.user) re.pass = JSON.parse(fs.readFileSync(up)).oldpass === req.body.pass;

        if (re.pass) {
            let d = JSON.parse(fs.readFileSync(up));
            d.pass = req.body.pass;

            fs.writeFileSync(up, JSON.stringify(d))

            re.repass = true
        }

        res.json(re)
    });

    app.post("/api/cpkg/register", (req, res) => {
        let dt = req.body;
        let up = "./cpkg/users/" + req.body.user;
        let re = {reg:true};

        if (fs.existsSync(up)) {
            re.reg = false
        } else {
            fs.writeFileSync(up, JSON.stringify(
                {
                    user:dt.user,
                    pass:dt.pass,
                    email:dt.email,
                    domains:{}
                }
            ))
        }

        res.json(re)
    })

    app.post("/api/cpkg/isdom", (req, res) => {
        

        res.json({
            free:!fs.existsSync("./cpkg/pkgs/"+req.body.name)
        })
    })

    app.post("/api/cpkg/saveuser", (req, res) => {
        let up = "./cpkg/users/" + req.body.user
        let re = {
            user:fs.existsSync(up),
            save:false
        }

        if (re.user) {
            re.email = JSON.parse(fs.readFileSync(up)).email;
            re.save = true

        }

        res.json(re)
    })

}


function web() {
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

        console.log(req.body)

        let dire = fs.readdirSync("./cpkg/pkgs", "utf-8");

        dire.forEach(e => {
            if (e.includes(nombre)) salida.push(e)
        })

        salida = salida.slice(0, 100)

        res.json((salida.map(e => {
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
    });

};


let lista = (["/js", "/css", "/img", "/app", "/sass", "/font"]);

lista.forEach((e) => {

    app.use(e, express.static("."+e))

});

let f = [web, Api_cpkg];

f.forEach(x=> {
    x()
})

app.listen(9000, () => {
    console.log("server of CLS open in the port 9000")
})