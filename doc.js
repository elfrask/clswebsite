module.exports.meta= function () {
    return[
        treenode(
            "Acerca de CLS",
            [
                node("Introduccion a CLS", "info/index.md"),
                node("Historia de CLS", "info/story.md"),
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