package com.github.babedev

import jquery.jq
import org.w3c.dom.Element
import kotlin.browser.document
import kotlin.dom.addClass

fun app(id: String = "app", child: Child.() -> Unit): Element {
    val app = document.getElementById(id)!!
    Child(app).apply(child)
    return app
}

fun Element.src(value: String = "") {
    setAttribute("src", value)
}

fun Element.width(value: String = "") {
    setAttribute("width", value)
}

fun Element.height(value: String = "") {
    setAttribute("height", value)
}

class Child(val parent: Element) {
    fun div(id: String = "", className: String = "", width: Int = 0, child: Child.() -> Unit) {
        val div = element("div")

        if (className.isNotBlank()) div.addClass(className)
        if (id.isNotBlank()) div.id = id
        if (width != 0) div.setAttribute("width", "${width}px")

        parent.appendChild(div)

        Child(div).apply(child)
    }

    fun strong(child: Child.() -> Unit) {
        val strong = element("strong")
        parent.appendChild(strong)
        Child(strong).apply(child)
    }

    fun canvas(id: String = "", className: String = "", width: Int = 300, height: Int = 300) {
        val canvas = element("canvas").apply {
            this.id = id
            setAttribute("width", "${width}px")
            setAttribute("height", "${height}px")
        }

        if (className.isNotBlank()) canvas.addClass(className)

        parent.appendChild(canvas)
    }

    fun a(id: String = "", className: String = "", onclick: () -> Unit, child: Child.() -> Unit) {
        val a = element("a")

        if (id.isNotBlank()) a.id = id
        if (className.isNotBlank()) a.addClass(className)

        a.addEventListener("click", {
            onclick()
        })

        parent.appendChild(a)
        Child(a).apply(child)
    }

    fun inputFile(id: String = "", className: String = "", onchange: () -> Unit): Element {
        val input = element("input").apply {
            setAttribute("type", "file")
            setAttribute("accept", "image/*")
        }

        if (id.isNotBlank()) input.id = id
        if (className.isNotBlank()) input.addClass(className)

        jq(input).change {
            onchange()
        }

        parent.appendChild(input)

        return input
    }

    fun img(id: String = "", width: Int = 300, height: Int = 300, block: Element.() -> Unit = {}) {
        val img = element("img").apply {
            this.id = id
            setAttribute("width", "${width}px")
            setAttribute("height", "${height}px")
            block()
        }

        parent.appendChild(img)
    }

    fun span(child: Child.() -> Unit) {
        val span = element("span")

        parent.appendChild(span)
        Child(span).apply(child)
    }

    fun text(text: String = "") {
        parent.appendChild(document.createTextNode(text))
    }

    fun br() {
        parent.appendChild(element("br"))
    }

    private fun element(name: String): Element {
        return document.createElement(name)
    }
}