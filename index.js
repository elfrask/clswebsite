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

app.get("/", (req, res, next) => {

    res.send(
        page(fs.readFileSync("./html/public/init.html"))
    )
});

let lista = (["/js", "/css", "/img", "/app", "/sass", "/font"]);

lista.forEach((e) => {

    app.use(e, express.static("."+e))

})



app.listen(9000, () => {
    console.log("server of CLS open in the port 9000")
})