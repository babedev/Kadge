package com.github.babedev

import org.w3c.dom.Element
import kotlin.browser.document
import kotlin.dom.addClass

fun app(id: String = "app", child: () -> Element) {
    val app = document.getElementById(id)
    app?.appendChild(child())
}

inline fun div(id: String = "", className: String = "", child: () -> Element): Element {
    val div = document.createElement("div")

    if (className.isNotBlank()) div.addClass(className)

    div.id = id
    div.appendChild(child())
    return div
}

fun strong(text: String = ""): Element {
    val strong = document.createElement("strong")
    strong.appendChild(text(text))
    return strong
}

fun text(text: String = "") = document.createTextNode(text)

fun img(id: String = "", width: Int = 400, height: Int = 400): Element =
        document.createElement("img").apply {
            this.id = id
            setAttribute("width", "${width}px")
            setAttribute("height", "${height}px")
        }

fun canvas(id: String = "", width: Int = 400, height: Int = 400): Element {
    return document.createElement("canvas").apply {
        this.id = id
        setAttribute("width", "${width}px")
        setAttribute("height", "${height}px")
    }
}