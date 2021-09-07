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
            "Sintaxis de CLS",
            [
                treenode(
                    "Sintaxis basica de CLS",
                    [
                        node("Tipo de dato I", "tuto/values.md"),
                        node("Tipo de dato II", "tuto/values2.md"),
                        node("Variables", "tuto/vars.md"),
                        node("Llamadas y funciones", "tuto/calls.md"),
                    ]
                ),
            ]

        ),
        
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