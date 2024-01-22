let express = require('express');
let pb = require('body-parser');
let galleta = require('cookie-parser');
let fs = require('fs');
let app = express();
let doc = require("./doc");
let path = require("path");

let j = (...a) => path.join(__dirname, ...a);
__dirname = process.cwd()

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

let page = plantilla(j("./html/index.html"))


function Api_cpkg() {

    function user(user, pass) {
        let up = j("./cpkg/users/" + user);
        let ue = fs.existsSync(up);
        let data= {}
        if (ue) {
            data = JSON.parse(fs.readFileSync(up, "utf-8"))
        }

        return Object.assign((d) => {
            fs.writeFileSync(up, JSON.stringify(d))
        }, {
            exist:ue,
            data:data,
            pass:(data||{}).pass === pass,
            user:user
        })
    }
    
    app.post("/api/cpkg/infopkg", (req, res) => {
        
        console.log(req.body)

        res.json({
            name:"resibido"
        })
    });

    app.post("/api/cpkg/isuser", (req, res) => {
        let up = j("./cpkg/users/" + req.body.user)
        let re = {
            user:fs.existsSync(up)
        }

        if (re.user) re.pass = JSON.parse(fs.readFileSync(up, "utf-8")).pass === req.body.pass;

        res.json(re)
    });

    app.post("/api/cpkg/repass", (req, res) => {
        let up = j("./cpkg/users/" + req.body.user)
        let re = {
            user:fs.existsSync(up),
            pass:false,
            repass:false
        }

        if (re.user) re.pass = JSON.parse(fs.readFileSync(up, "utf-8")).oldpass === req.body.pass;

        if (re.pass) {
            let d = JSON.parse(fs.readFileSync(up, "utf-8"));
            d.pass = req.body.pass;

            fs.writeFileSync(up, JSON.stringify(d))

            re.repass = true
        }

        res.json(re)
    });

    app.post("/api/cpkg/register", (req, res) => {
        let dt = req.body;
        let up = j("./cpkg/users/" + req.body.user);
        let re = {reg:true};

        if (fs.existsSync(up)) {
            re.reg = false
        } else {
            fs.writeFileSync(up, JSON.stringify(
                {
                    user:dt.user,
                    pass:dt.pass,
                    email:dt.email,
                    domains:[]
                }
            ))
        }

        res.json(re)
    });

    app.post("/api/cpkg/isdom", (req, res) => {
        

        res.json({
            free:fs.existsSync(j("./cpkg/pkgs/"+req.body.name))
        })
    });

    app.post("/api/cpkg/listdom", (req, res) => {
        
        let lista = [];
        let usu = user(req.body.user)
        console.log(usu)
        if (usu.exist) lista = usu.data.domains

        res.json({
            list:lista
        })
    });

    app.post("/api/cpkg/getdom", (req, res) => {
        let yes = fs.existsSync(j("./cpkg/pkgs/"+req.body.name))
        let usu = user(req.body.user, req.body.pass)
        if (!yes) {
            if (usu.exist & usu.pass) {
                usu.data.domains.push(req.body.name)
                usu(usu.data)
                
                fs.writeFileSync(j("./cpkg/pkgs/"+req.body.name),
                    JSON.stringify({
                        ver:"1.0",
                        page:"",
                        git:"",
                        name:req.body.name,
                        user:req.body.user,
                        desc:"nuevo dominio " + req.body.name
                    })
                )
            } else {
                yes = false
            }
        }

        res.json({
            done: !yes
        })
    });

    app.post("/api/cpkg/deldom", (req, res) => {
        let yes = fs.existsSync(j("./cpkg/pkgs/"+req.body.name))
        let usu = user(req.body.user, req.body.pass)
        if (yes) {
            if (usu.exist & usu.pass & (usu.data.domains.includes(req.body.name))) {
                let pack = req.body.name;

                usu.data.domains = usu.data.domains.filter(x => {
                    if (!(x===pack)) return x
                })
                
                fs.unlinkSync(j("./cpkg/pkgs/"+req.body.name))
                usu(usu.data)
            } else {
                yes = false
            }
        }

        res.json({
            done: yes
        })
    });

    app.post("/api/cpkg/editdom", (req, res) => {
        let yes = fs.existsSync(j("./cpkg/pkgs/"+req.body.name))
        let usu = user(req.body.user, req.body.pass)
        if (yes) {
            if (usu.exist & usu.pass & (usu.data.domains.includes(req.body.name))) {
                
                let pack = JSON.parse(fs.readFileSync(j("./cpkg/pkgs/"+req.body.name), "utf8"))

                pack[req.body.edit] = req.body.data;

                fs.writeFileSync(j("./cpkg/pkgs/"+req.body.name),
                    JSON.stringify(pack)
                )


            } else {
                yes = false
            }
        }

        res.json({
            done: yes
        })
    });

    app.post("/api/cpkg/infodom", (req, res) => {
        let yes = fs.existsSync(j("./cpkg/pkgs/"+req.body.name));
        let out = "";
        if (yes) {
            out = JSON.parse(
                fs.readFileSync(
                   j("./cpkg/pkgs/"+req.body.name), 
                    "utf8"
                )
            )
        }

        res.json({
            done: yes,
            data: out
        })
    });

    app.post("/api/cpkg/saveuser", (req, res) => {
        let up = j("./cpkg/users/" + req.body.user)
        let re = {
            user:fs.existsSync(up),
            save:false
        }

        if (re.user) {
            re.email = JSON.parse(fs.readFileSync(up, "utf-8")).email;
            re.save = true

        }

        res.json(re)
    });

}


function web() {
    app.get("/", (req, res, next) => {
    
        res.send(
            page(fs.readFileSync(j("./html/public/init.html"), "utf-8"))
        )
    });
    
    app.get("/downloads", (req, res, next) => {
    
        res.send(
            page(fs.readFileSync(j("./html/public/dow.html"), "utf-8"))
        )
    });
    
    app.get("/cpkg", (req, res, next) => {
    
        res.send(
            page(fs.readFileSync(j("./html/public/cpkg.html"), "utf-8"))
        )
    });

    app.get("/get_tree_doc", (req, res) => {
        res.json(doc.meta())
    })

    app.get("/doc", (req, res) => {
        res.send(
            page(fs.readFileSync(j("./html/public/doc.html"), "utf-8"))
        )
    });

    app.get("/frask", (req, res) => {
        res.redirect("https://frask.vercel.app");
    })
    
    app.post("/findpkg", (req, res, next) => {
        let nombre = req.body.name;
        let salida = [];

        console.log(req.body)

        let dire = fs.readdirSync(j("./cpkg/pkgs"), "utf-8");

        dire.forEach(e => {
            if (e.includes(nombre)) salida.push(e)
        })

        salida = salida.slice(0, 100)

        res.json((salida.map(e => {
            let data = JSON.parse(fs.readFileSync(j("./cpkg/pkgs/"+e), "utf-8"));

            return(
                {
                    name:e,
                    ver:data.ver,
                    page:data.page,
                    git:data.git,
                    desc:data.desc,
                    user:data.user
                }
            )
        })))
    });

};


let lista = (["js", "css", "img", "app", "sass", "font", "docs"]);

lista.forEach((e) => {

    app.use("/" +e, express.static(path.join(__dirname, e)));

});

let f = [web, Api_cpkg];

f.forEach(x=> {
    x()
})
let PORT = process.env.PORT||3000;
app.listen(PORT, () => {
    console.log("server of CLS open in the port " + PORT)
})