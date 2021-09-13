module.exports.meta= function () {
    return[
        treenode(
            "Acerca de CLS",
            [
                node("Introduccion a CLS", "info/index.md"),
                node("Historia de CLS", "info/story.md"),
            ]

        ),
        treenode(
            "Tutorial de CLS",
            [
        
                node("Tipo de dato I", "tuto/values.md"),
                node("Tipo de dato II", "tuto/values2.md"),
                node("Variables", "tuto/vars.md"),
                node("Operaciones", "tuto/ope.md"),
                node("Operaciones comparativas", "tuto/equ.md"),
                node("Funciones", "tuto/calls.md"),
                node("Clases", "tuto/class.md"),
                node("Modulos", "tuto/module.md"),
                node("Importar librerias", "tuto/lib.md"),
                node("Condiciones (Setencia if)", "tuto/if.md"),
                node("Ciclos y blucles", "tuto/ciclo.md"),
                node("Sentencia with", "tuto/with.md"),
                
            ]

        ),
        treenode(
            "Modulos",
            [
                node("os", "tuto/values.md"),
                node("fs", "tuto/values2.md"),
                node("math", "tuto/vars.md"),
                node("time", "tuto/calls.md"),
                node("http", "tuto/class.md"),
                node("socket", "tuto/module.md"),
            ]
        )
        
    ]
};

function node(title, link) {
    return {
        title:title,
        link:link,
        tipo:"node"
    }
};

function treenode(title, nodes) {
    return {
        title:title,
        nodes:nodes,
        tipo:"treenode"
    }
}