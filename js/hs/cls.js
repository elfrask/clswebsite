let name_re = {
    nr:[
        "function", "var", "class", "module", "namespace", "return",
        "if", "for", "with", "while", "else", "elif", "elseif", "import",
        "from", "include", "const", "public", "export", "static", "private",
        "as", "and", "or", "in"
    ],
    var:[
        "me", "private", "_file", "_name", 
    ]
}

function gencod(name, i) {
    return{
        tipo:"cod",
        name:name,
        i:i
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
    


    for (let i = 0; i < c.length; i++) {
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

                linea.push(gencod("spa", i))
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

    if (cadena != "") {
        linea.push(tools.set_v(cadena, c.length-cadena.length));
        cadena = ""
    };

    if (linea.length != 0) {
        salida.push(linea)
    }


    
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

let toConvert = (e) => {
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
                    salida = salida + `<span class="cls-str">${tohtml(e.value)}</span>`
                }
            } else if (e.tipo === "name") {
                let nombre = (e.name+"").split(".");
                
                let out = "";
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

                salida = salida + out 
                    
                
                
            } else if (e.tipo === "com") {
                salida = salida + `<span class="cls-name-com">#${tohtml(e.data)}</span>`;
            } else if (e.tipo === "cod") {
                if (e.name === "jump") salida = salida + `<br>`;
                if (e.name === "endin") salida = salida + `;`;
                if (e.name === "spa") salida = salida + tohtml(" ");
            }
        };

        
    }

    return salida
}