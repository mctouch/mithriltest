// src/views/Layout.js
var m = require("mithril").default

module.exports = {
    view: function(vnode) {
        return m("main.layout", [
            m("nav.menu", [
                m("a[href='/list']", {oncreate: m.route.link}, "Users")
            ]),
            m("section", vnode.children)
        ])
    }
}