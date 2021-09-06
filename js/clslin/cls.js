
let toConvert = (() => {

    let tools = {
        enter_value: (d) => {
            let salida = "name"
            if ((parseInt(d) + "") == (d + "")) {
                salida = "int"
            } else if ((parseFloat(d) + "") == (d + "")) {
                salida = "float"
            }



            return [d, salida]
        },
        set_v: (v, i) => {
            let salida

            let k = tools.enter_value(v);

            if (k[1] == "name") {
                salida = tools.tipos.name(v, i, false)
            } else {
                salida = tools.tipos.value(v, k[1], i, "")

            }

            return salida
        },
        chars: {
            N: "\n",
            T: "\t",
            B: "\b",
            BAR: "\\",
            COMILLAS: "\"",
            APOSTROFE: "\'",
            R: "\r",
        },
        tokens: {
            ope: ["+", "-", "<", ">", "/", "^", "*", "$", "@", "%", "|", "!", "=", ":"],
            sim: ["(", ")", "{", "}", "[", "]", ","]
        },
        tipos: {
            name: (n, i, s) => {
                return {
                    name: n,
                    i: i - n.length,
                    notmod: s || false,
                    tipo: "name"
                }
            },
            ope: (c, i, con) => {
                return {
                    char: c,
                    i: i,
                    cond: con || false,
                    tipo: "ope"
                }
            },
            sim: (c, i) => {
                return {
                    char: c,
                    i: i,
                    tipo: "sim"

                }
            },
            value: (v, t, i, b) => {
                return {
                    value: v,
                    type: t,
                    i: i,
                    byte: b || "",
                    tipo: "value"
                }
            }
        },
        nombres: {
            reservados:[
                "class", "function", "async", "def", "method", "func", "fub", "module", "namespace",
                "sync", "with", "import", "private", "public", "export", "static", "from", "include",
                "if", "while", "for", "using", "var", "as", "try"
            ],
            visible:[
                "private", "public", "export", "static"
            ],
            async:[
                "async", "sync"
            ],
            
        },
        paren: {
            tupla:(c, i) => {

                return {
                    tipo:"()",
                    i:i,
                    data:c[0]||[],
                    complet:c
                }
            },
            list:(c, i) => {

                return {
                    tipo:"[]",
                    i:i,
                    data:c[0]||[],
                    complet:c
                }
            },
            code:(c, i) => {

                return {
                    tipo:"code",
                    i:i,
                    data:c,
                    one:c[0]||[]
                }
            },
            cml:(c, i) => {
                return {
                    data:c,
                    i:i,
                    tipo:"cml"
                }
            }
        },
        errores: {
            ValueError:"ValueError",
            SyntaxError:"SyntaxError",
            TypingError:"TypingError",
            ModuleError:"ModuleError",
        },
        compare:(c = [], k = []) => {
            if (c.length < k.length) {
                
                return false
            }

            let salida = true;
            for (let i = 0; i < c.length; i++) {
                let e = c[i];
                let ee = k[i];

                if (ee === undefined) return false
                
                if (typeof(e) == "string") {
                    if (e !== ee.tipo) {
                        salida = false
                    }
                } else {
                    if (e.tipo === ee.tipo) {
                        let c = Object.keys(e);
                        for (let x = 0; x < c.length; x++) {
                            const xx = c[x];

                            if (e[xx] !== ee[xx]) {
                                salida = false
                            }
                            
                        }

                    } else{
                        salida = false
                    }
                }
                
            }
            return salida
        },
        mulstr:(e, i) => {
            let sal = ""
            for (let x = 0; x < i; x++) {
                sal = sal + e
                
            };
            return sal
        },
        replace:(cadena, viejo, nuevo) => {
            while (cadena.includes(viejo)) {
                cadena.replace(viejo, nuevo)
            };
            return cadena
        },
        cml:{
            cmlobj:(data) => {
                function getobj(ikd, d) {
                    let salida = null;
            
                    for (let i = 0; i < d.length; i++) {
                        const e = d[i];
                        if (typeof(e) == "object") {
                            if (e.arg.id == ikd) {
                                return e;
                            } else {
                                let k= getobj(ikd, e.nodes);
                                if ((k+"") != "null") {
                                    return k;
                                }
                            }
                        }
                    }
            
                    return salida
                };
                function replace_data(d, viejo, nuevo) {
                    let salida = [];
                    
                    if (!Array.isArray(d)) {
                        d= [d]
                    }
            
                    for (let i = 0; i < d.length; i++) {
                        let e = d[i];
                        
                        if (typeof(e) == "object") {
                            let carg = Object.keys(e.arg);
                            for (let x = 0; x < carg.length; x++) {
                                const ele = e.arg[carg[x]];
                                if (nuevo.__classname__ == "CML") {
                                    
                                    e.arg[carg[x]] = tools.replace(ele, viejo, nuevo.getString())
                                } else {
                                    
                                    e.arg[carg[x]] = tools.replace(ele, viejo, nuevo.toString())
                                }
            
                            };
                            if (nuevo.__classname__ == "CML") {
                                e.inner = tools.replace(e.inner, viejo, nuevo.getString());
                            } else {
                                e.inner = tools.replace(e.inner, viejo, nuevo.toString());                   
                            }
                            let ik = replace_data(JSON.parse(JSON.stringify(e.nodes)), viejo, nuevo);
                            e.nodes = ik
                            salida.push(e)
                        } else if (typeof(e) == "string") {
                            if (typeof(nuevo) == "string") {
                                let m = tools.replace(e, viejo, nuevo);
                                salida.push(m)
                            } else if (typeof(nuevo) == "object") {
                                
                                if (nuevo.__classname__ == "CML") {
                                    let cadena = "";
                                    for (let y = 0; y < e.length; y++) {
                                        let elemento = e[y];
                                        
                                        if (cadena.substr(cadena.length-viejo.length) == viejo) {
                                            cadena =cadena.substr(0, cadena.length-viejo.length)
                                            
                                            if (cadena != "") {
                                                salida.push(cadena);
                                                cadena = "";    
                                            };
                                            
                                            
                                        
                                            let datossi= nuevo.node();
                                            
                                            for (let k = 0; k < datossi.length; k++) {
                                                const t = datossi[k];
                                                salida.push(t)
                                                
                                            }
                                        
                                            cadena = "";
                                        } else {
                                            cadena = cadena + elemento
                                            //console.log(cadena)
                                        }
                                    };
                
                                    //ultima verificacion
                                    if (cadena.substr(cadena.length-viejo.length) == viejo) {
                                        cadena =cadena.substr(0, cadena.length-viejo.length)
                                        
                                        if (cadena != "") {
                                            salida.push(cadena);
                                            cadena = "";    
                                        }
                                        
                                        
                                        if (nuevo.__classname__ == "CML") {
                                            let datossi= nuevo.node();
                                            
                                            for (let k = 0; k < datossi.length; k++) {
                                                const t = datossi[k];
                                                salida.push(t)
                                                
                                            }
                                        }
                                        cadena = "";
                                    };
            
                                    if (cadena != "") {
                                        salida.push(cadena);
                                        cadena = "";    
                                    };
                                    
                                } else {
                                    
                                    let m = tools.replace(e, viejo, nuevo.toString());
                                    
                                    salida.push(m);
                                    
                                }
                                
                                
                            } else {
                                let m = tools.replace(e, viejo, nuevo);
                                salida.push(m)
                            }
                        }
            
                    };
            
            
                    return salida
                };
                function tostr_data(d) {
                    let salida = "";
            
                    for (let i = 0; i < d.length; i++) {
                        const e = d[i];
                        
                        if (typeof(e) == "string") {
                            salida = salida + e
                        } else if (typeof(e) == "object") {
                            
                            let arg = "";
                            let carg = Object.entries(e.arg);
                            for (let x = 0; x < carg.length; x++) {
                                const y = carg[x];
                                arg= arg + y[0] + '="' + y[1] + '" '
                            }
                            let io=""
                            if (arg != "") {
                                io=" "
                            }
            
                            salida = salida + `<${e.tag}${io}${arg}>${tostr_data(e.nodes)}</${e.tag}>`
                        }
                    }
            
                    return salida;
                }
                
                let xml = data;
                let me = {
                    __classname__:"CML",
                    node:() => {return xml},
                    toString:() => {return("[CML: Object]")},
                    getobj:(id) => {
                        return cmlobj(getobj(id, xml))
                    },
                    format:(datos) => {
                        let ma = JSON.parse(JSON.stringify(xml))
                        let arreglo = Object.entries(datos);
            
                        for (let i = 0; i < arreglo.length; i++) {
                            const e = arreglo[i];
                            if (e[0] == "__classname__") {
                                continue;
                            }
                            ma = replace_data(ma, "${"+e[0]+"}", e[1])
                            //console.log(ma)
                            //console.log(e)
                        };
                        return cmlobj(ma)
                    },
                    getString:() =>{
                        return tostr_data(xml)
                    },
                    
                }
            
            
            
                return me;
            },
            recml:(data) => {
                let salida = [];
                //console.log(data)
                
                let modo = "normal";
                let cadena = "";
                let tag = "";
                let etiqueta = {
                    tag:"tag",
                    arg:{},
                    inner:"",
                    nodes:[]
                };
                let contar = 0;
                for (let i = 0; i < data.length; i++) {
                    let e = data[i];
                    if (modo == "normal") {
                        if (e=="<") {
                            if (cadena.trim() != "") {
                                
                                salida.push(cadena.trim());
                                cadena= "";
                            } else {cadena = ""};
                            
                            etiqueta = {
                                tag:"tag",
                                arg:{},
                                inner:"",
                                nodes:[]
                            };
                            modo = "tag"
                            
                        } else {
                            cadena = cadena +e;
                        }
                    } else if (modo == "tag") {
                        if (e==" ") {
                            if (cadena != "") {
                                tag = cadena
                            } else{
                                tag="tag"
                            };
                            etiqueta.tag = tag;
                            modo = "arg";
                            cadena = "";
                        }else if (e==">") {
                            if (cadena.substr(cadena.length-1) == "/") {
                                //console.log("error")
                                cadena = cadena.substr(0, cadena.length-1)
                                if (cadena != "") {
                                    tag = cadena
                                } else{
                                    tag="tag"
                                };
                                etiqueta.tag = tag;
                                modo = "normal";
                                cadena = "";
                                salida.push(etiqueta)
                            } else {
                                
            
                                if (cadena != "") {
                                    tag = cadena
                                } else{
                                    tag="tag"
                                };
                                etiqueta.tag = tag;
                                modo = "inner";
                                cadena = "";
                                contar = 0;
                            }
                            
                        } else {
                            cadena = cadena +e;
                        }
                    } else if (modo == "arg") {
                        if (e==">") {
                            let = arg={};
                            
                            
                            cadena = cadena.trim();
                            let subcadena="";
                            let submodo="normal";
                            let subarg = "";
                            for (let o = 0; o < cadena.length; o++) {
                                const ael = cadena[o];
                                if (submodo == "normal") {
                                    
                                    if (ael == "=") {
                                        
                                        if (cadena[o+1] == '"') {
                                            
                                            subarg = subcadena.trim();
                                            submodo = "str";
                                            subcadena = '"';
                                            o++;
                                        } else {
                                            subarg = subcadena.trim();
                                            submodo = "comi";
                                            subcadena = '';
                                            o++;
                                        }
                                                                
                                    } else {
                                        subcadena = subcadena + ael;
                                    }
                                } else if (submodo == "str") {
                                    if (ael == '"') {
                                        arg[subarg] = subcadena.substr(1);
                                        submodo = "normal"
                                        subcadena ="";
                                    } else {
                                        subcadena = subcadena + ael;
                                    }
                                } else if (submodo == "comi") {
                                    if (ael == '"') {
                                        //subarg = subcadena.trim();
                                        submodo = "str";
                                        subcadena = '"';
                                    
                                    }
                                }
                                
                            };
            
                            etiqueta.arg = arg;
                            if (cadena[cadena.length-1] == "/") {
                                cadena = "";
                                salida.push(etiqueta);
                                modo = "normal";
                            } else {
                                cadena = "";
                                modo = "inner";
                                contar = 0
                            }
                        
                            
                        } else {
                            cadena = cadena +e;
                        }
                    } else if (modo == "inner") {
                        if (e == '>') {
                            cadena = cadena + e;
                            if (cadena.substr(cadena.length-`</${tag}>`.length) == `</${tag}>`) {
                                contar = contar-1
                            };
                            
                            if (contar == -1) {
                                cadena = cadena.substr(0, cadena.length-`</${tag}>`.length).trim()
                                //console.log(cadena)
                                let lii = tools.cml.recml(cadena);
                                etiqueta.inner = cadena;
                                etiqueta.nodes = lii;
                                cadena = "";
                                modo = "normal";
                                salida.push(etiqueta)
                                etiqueta = {
                                    tag:"tag",
                                    arg:{},
                                    inner:"",
                                    nodes:[]
                                };
                                //console.log(lii)
                            }
                            
                            
                        } else {
                            cadena=cadena+e
                            if (cadena.substr(cadena.length-`<${tag}`.length) == `<${tag}`) {
                                contar = contar+1
                            };
                            
                        }
                    }
                };
                if (cadena.trim() != "") {
                    salida.push(cadena.trim())
                }
                //console.log(modo)
                return(salida)
            }
        }
    }

    let name_re = {
        nr:[
            "function", "var", "class", "module", "namespace", "return",
            "if", "for", "with", "while", "else", "elif", "elseif", "import",
            "from", "include", "const", "public", "export", "static", "private",
            "as", "and", "or", "in"
        ],
        var:[
            "me", "private", "_file", "_name", 
        ],
        num:[
            "true", "false", "True", "False", "on", "off", "Infinity"
        ],
        valdef:[
            "int", "Integer", "float", "Float", "bool", "Boolean", "str", "String",
            "iter", "Array", "Byte", "byte", "process", "ord", "bin", "Bin", "print", 
            "hex", "Hex", "input", "oct", "Oct"
        ]
    }


    function gencod(name, i, most) {
        return{
            tipo:"cod",
            name:name,
            i:i,
            most:most||{}
        }
    }

    let desline = (c) => {
                    
        let cadena = "";
        let linea = []
        let salida = []
        let modo = "normal"
        let byte = "";
        let str_l = ""
        let tag = ""
        let t_count = 0;
        let i = 0


        for (i = 0; i < c.length; i++) {
            const e = c[i] + "";

            if (modo === "normal") {
                if (e != " ") {
                    if (tools.tokens.ope.includes(e)) {

                        if (cadena != "") {
                            linea.push(tools.set_v(cadena, i-cadena.length));
                            cadena = ""
                        }

                        if ((linea[linea.length - 1] || {}).tipo === "ope") {
                            let w = linea[linea.length - 1].char;

                            
                            
                            if ( ["<", ">", "=", ":", "-"].includes(w) ) {
                                if ( ["<", ">", "=", ":"].includes(e) )  {
                                    linea.pop()
                                    linea.push(tools.tipos.ope(w + e, i))

                                } else {
                                    linea.push(tools.tipos.ope(e, i))
                                }
                            } else if (e.length === 1) {
                                if (["<", ">", "=", ":"].includes(e)) {
                                    
                                    linea.push(tools.tipos.ope(e, i))
                                    
                                } else {
                                    linea.pop()
                                    linea.push(tools.tipos.ope(w+e, i))
                                    
                                }

                            } else {
                                linea.push(tools.tipos.ope(e, i))

                            }

                            

                        } else {
                            linea.push(tools.tipos.ope(e, i))

                        }
                        let med = linea.slice(-3)
                        let med2= [ 
                            (med[0]||{}).tipo === "ope",
                            (med[1]||{}).tipo === "name",
                            (med[2]||{}).tipo === "ope",
                            (med[0]||{}).char === "<",
                            (med[2]||{}).char === ">",
                        ]
                        
                        if (!med2.includes(false)) {
                            
                            linea.pop()
                            let eti = linea.pop().name
                            linea.pop()

                            

                            cadena = `<${eti}>`;
                            tag = eti;
                            modo = "tag";
                            t_count = 0
                        }



                    } else if (tools.tokens.sim.includes(e)) {
                        if (cadena != "") {
                            linea.push(tools.set_v(cadena, i-cadena.length));
                            cadena = ""
                        }

                        linea.push(tools.tipos.sim(e, i))

                    } else if (e == "#") {
                        if (cadena != "") {
                            linea.push(tools.set_v(cadena, i-cadena.length));
                            cadena = ""
                        }


                        modo = "com"

                    } else if (e == tools.chars.N | e == tools.chars.R) {
                        if (cadena != "") {
                            linea.push(tools.set_v(cadena, i-cadena.length));
                            cadena = ""
                        }

                        linea.push(gencod("jump", i))
                        

                    } else if (e == ";") {
                        if (cadena != "") {
                            linea.push(tools.set_v(cadena, i-cadena.length));
                            cadena = ""
                        }
                        
                        linea.push(gencod("endin", i))
                        if (linea.length != 0) {
                            salida.push(linea)
                        }


                        linea = []
                        

                    } else if (e == "'" | e == '"') {
                        byte = cadena;
                        cadena = e


                        modo = "str"

                    } else {
                        cadena = cadena + e;
                    }
                } else {
                    if (cadena != "") {
                        linea.push(tools.set_v(cadena, i));
                        cadena = ""
                    }

                    
                    if (
                        (linea.slice(-1)[0]||{}).tipo === "cod" &
                        (linea.slice(-1)[0]||{}).name === "spa"
                    ) {
                        
                        linea.push(gencod("spa", i, {sec:linea.pop().most.sec+1}))
                        
                    } else {
                        linea.push(gencod("spa", i, {sec:1}))
                        
                    }
                }

            } else if (modo === "str") {
                if (e === cadena.substr(0, 1)) {
                    linea.push(
                        tools.tipos.value(
                            cadena + e, "str", i - cadena.length, byte
                        )
                    );
                    cadena = "";
                    modo = "normal"
                } else if (e === tools.chars.N) {
                    cadena = cadena + ("" + tools.chars.BAR + "n")
                } else {
                    cadena = cadena + e
                }
            } else if (modo === "com") {
                if (e == tools.chars.N) {
                    modo = "normal"
                    linea.push({
                        tipo:"com",
                        data:cadena+e
                    });

                    cadena = "";
                } else {
                    cadena = cadena + e
                }
            } else if (modo === "tag") {
                if (e == '>') {
                    cadena = cadena + e;
                    if (cadena.substr(cadena.length-`</${tag}>`.length) == `</${tag}>`) {
                    t_count =t_count-1
                    };
                    
                    if (t_count == -1) {
                        linea.push(tools.paren.cml(cadena, i-cadena.length));
                        cadena = "";
                        mode = "normal";
                    }
                    
                    
                } else if ([tools.chars.N,tools.chars.R,tools.chars.T].includes(e)) {

                } else {
                    cadena=cadena+e
                    if (cadena.substr(cadena.length-`<${tag}`.length) == `<${tag}`) {
                    t_count =t_count+1
                    };

                    if (cadena.substr(-2) == "  ") {
                        cadena = cadena.substr(0, cadena.length-1) 
                    }
                    
                }
            }

        };

        if (modo === "normal") {
            if (cadena != "") {
                linea.push(tools.set_v(cadena, c.length-cadena.length));
                cadena = ""
            };
        } else if (modo === "str") {
            
            linea.push(
                tools.tipos.value(
                    cadena, "str", i - cadena.length, byte
                )
            );
            cadena = "";
            modo = "normal"
            
        } else if (modo === "com") {
            
            modo = "normal"
            linea.push({
                tipo:"com",
                data:cadena
            });

            cadena = "";
            
        } else if (modo === "tag") {
        
            cadena = cadena;
            if (cadena.substr(cadena.length-`</${tag}>`.length) == `</${tag}>`) {
                t_count =t_count-1
            };
            
            if (t_count == -1) {
                linea.push(tools.paren.cml(cadena, i-cadena.length));
                cadena = "";
                mode = "normal";
            }
            
                
            
        }
        

        if (linea.length != 0) {
            salida.push(linea)
        }


        
        return salida
    }

    function repli(str, vez) {
        let salida = "";

        for (let i = 0; i < vez; i++) {
            salida = salida + str
        };

        return salida
    }

    function trim(str="") {

        let sal = [tools.chars.N, " "]
        
        while (sal.includes(str[0])) {
            str = str.substr(1)
        };

        while (sal.includes(str.slice(-1))) {
            str = str.substr(0, str.length-1)
        };

        return str
    }

    function tohtml(str) {
        var array = [];
        
        for (var i=str.length-1;i>=0;i--) {
            if (str[i]===" ") {
                array.unshift(['&nbsp'].join(''));
            } else if (str[i]===tools.chars.N) {
                array.unshift(['<br>'].join(''));
            } else {
                array.unshift(['&#', str[i].charCodeAt(), ';'].join(''));
            }
        }
        return array.join('');
    }

    function bolname(t, u) {

        let a = Object.keys(name_re);

        if (!u) {
            if(["private"].includes(t)) return "-nr"
        }
        
        for (let i = 0; i < a.length; i++) {
            let te = a[i];
            let e = name_re[te]
            if (e.includes(t)) {
                return "-"+te
            }
        }

        return ""
    }

    let toConverti = (e) => {
        let mo = desline(trim(e));
        let salida = "";

        for (let i = 0; i < mo.length; i++) {
            const ee = mo[i];

            for (let x = 0; x < ee.length; x++) {
                let e = ee[x];

                
                
                if (e.tipo === "sim") {
                    if (e.char === ",") {
                        salida = salida + ","
                    } else {
                        salida = salida + `<span class="cls-sim">${e.char}</span>`
                    }
                } else if (e.tipo === "ope") {
                    salida = salida + `<span class="cls-ope">${tohtml(e.char)}</span>`
                } else if (e.tipo === "value") {
                    if (["int", "float"].includes(e.type)) {
                        salida = salida + `<span class="cls-value-num">${e.value}</span>`
                    } else {
                        salida = salida + `<span class="cls-str-byte">${
                            tohtml(e.byte)
                        }</span><span class="cls-str">${tohtml(e.value)}</span>`
                    }
                } else if (e.tipo === "name") {
                    let nombre = (e.name+"").split(".");
                    let isfunc = (ee[x+1]||{}).char === "(";
                    let out = "";

                    if (isfunc) {
                        

                        if (e.name[0] === ".") {
                            if (nombre.length ===1) {
                                out = `.</span><span class="cls-name-func">${nombre.slice(-1).join("")}</span>`
                                
                            } else {
                                out = `.${
                                    nombre.slice(0, -1).join(".")
                                }.</span><span class="cls-name-func">${
                                    nombre.slice(-1).join("")
                                }</span>`
                                
                            }
                        } else if ((e.name+"").includes(".")) {
                            if (nombre.length == 2) {
                                out = (
                    `<span class="cls-name${bolname(nombre[0])}">${
                        nombre[0]
                    }</span><span class="cls-name">${
                        "."
                    }</span><span class="cls-name-func">${
                        nombre.slice(1).join(".")
                    }</span>`
                                )
                                
                            } else {
                                out = (
                                    `<span class="cls-name${bolname(nombre[0])}">${
                                        nombre[0]
                                    }</span><span class="cls-name">${
                                        "."
                                    }</span><span class="cls-name">${
                                        nombre.slice(1, 1).join(".")
                                    }</span><span class="cls-name-func">${
                                        nombre.slice(-1).join(".")
                                    }</span>`
                                )
                            }
                        } else if (e.name[0] === "0") {
                            out = (
                                `<span class="cls-value-num">${nombre[0]}</span>`
                            )
                        } else {
                            out = (
                                `<span class="cls-name-func">${nombre[0]}</span>`
                            )
                        }


                    } else {
                        if (e.name[0] === ".") {
                            out = `.${nombre.join(".")}`
                        } else if ((e.name+"").includes(".")) {
                            out = (
                `<span class="cls-name${bolname(nombre[0])}">${
                    nombre[0]
                }</span><span class="cls-name">.${nombre.slice(1).join(".")}</span>`
                            )
                        } else if (e.name[0] === "0") {
                            out = (
                                `<span class="cls-value-num">${nombre[0]}</span>`
                            )
                        } else {
                            out = (
                                `<span class="cls-name${bolname(nombre[0], true)}">${nombre[0]}</span>`
                            )
                        }
                        
                    }


                    salida = salida + out 
                        
                    
                    
                } else if (e.tipo === "com") {
                    salida = salida + `<span class="cls-com">#${tohtml(e.data)}</span>`;
                } else if (e.tipo === "cod") {
                    if (e.name === "jump") salida = salida + `<br>`;
                    if (e.name === "endin") salida = salida + `;`;
                    if (e.name === "spa") salida = salida + tohtml(repli(" ", e.most.sec));
                } else if (e.tipo === "cml") {
                    salida = salida + `<span class="cls-cml">${tohtml(e.data)}</span>`;
                }
            };

            
        }

        return salida
    }

    function refresh() {
        let pre_codes = document.getElementsByTagName("code")
        let list = [];
        for (let i = 0; i < pre_codes.length; i++) {
            const e = pre_codes[i];
            list.push(e)
        }

        list.forEach(e=>{
            if (e.getAttribute("type") == "cls") {
                e.classList.add(["cls-box"])
                e.innerHTML = toConverti(e.innerHTML)
                e.setAttribute("type", "cls-code-done")
            }
        })
    }

    window.addEventListener("load", () => {
        refresh()
        
    })

    return Object.assign(toConverti, {
        refresh:refresh
    })
})();