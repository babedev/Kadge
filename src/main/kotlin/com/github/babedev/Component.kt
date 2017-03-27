package com.github.babedev

import jquery.jq
import org.w3c.dom.Element
import kotlin.browser.document
import kotlin.dom.addClass

fun app(id: String = "app", child: Child.() -> Unit) {
    val app = document.getElementById(id)

    if (app != null) {
        Child(app).apply(child)
    }
}

fun Element.src(value: String = "") {
    setAttribute("src", value)
}

class Child(val parent: Element) {
    fun div(id: String = "", className: String = "", child: Child.() -> Unit) {
        val div = document.createElement("div")

        if (className.isNotBlank()) div.addClass(className)
        if (id.isNotBlank()) div.id = id
        parent.appendChild(div)

        Child(div).apply(child)
    }

    fun strong(child: Child.() -> Unit) {
        val strong = document.createElement("strong")
        parent.appendChild(strong)
        Child(strong).apply(child)
    }

    fun canvas(id: String = "", width: Int = 400, height: Int = 400) {
        val canvas = document.createElement("canvas").apply {
            this.id = id
            setAttribute("width", "${width}px")
            setAttribute("height", "${height}px")
        }

        parent.appendChild(canvas)
    }

    fun a(className: String = "", onclick: () -> Unit, child: Child.() -> Unit) {
        val a = document.createElement("a")

        if (className.isNotBlank()) a.addClass(className)

        a.addEventListener("click", {
            onclick()
        })

        parent.appendChild(a)
        Child(a).apply(child)
    }

    fun inputFile(id: String = "", className: String = "", onchange: () -> Unit): Element {
        val input = document.createElement("input").apply {
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

    fun img(id: String = "", width: Int = 400, height: Int = 400, block: Element.() -> Unit = {}) {
        val img = document.createElement("img").apply {
            this.id = id
            setAttribute("width", "${width}px")
            setAttribute("height", "${height}px")
            block()
        }

        parent.appendChild(img)
    }

    fun span(child: Child.() -> Unit) {
        val span = document.createElement("span")

        parent.appendChild(span)
        Child(span).apply(child)
    }

    fun text(text: String = "") {
        parent.appendChild(document.createTextNode(text))
    }

    fun br() {
        parent.appendChild(document.createElement("br"))
        parent.appendChild(document.createElement("br"))
    }
}