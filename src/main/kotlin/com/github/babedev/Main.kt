package com.github.babedev

import jquery.jq
import org.w3c.dom.Element
import kotlin.browser.document
import kotlin.dom.addClass

fun main(args: Array<String>) {
    val app = document.getElementById("app")

    val templateImage = img("template").apply {
        setAttribute("src", "kadge-template.png")
    }

    val templateDiv = document.createElement("div").apply {
        appendChild(img("preview"))
        appendChild(templateImage)
        addClass("column gone")
    }

    val uploadInput = document.createElement("input").apply {
        id = "upload"
        setAttribute("type", "file")
        setAttribute("accept", "image/*")
        addClass("upload-photo")

        jq(this).change {
            js("preview()")
        }
    }

    val uploadSpan = document.createElement("span").apply {
        appendChild(document.createTextNode("Select image"))
    }

    val selectImgBtn = document.createElement("a").apply {
        addClass("level-item button is-primary")
        appendChild(uploadSpan)
        appendChild(uploadInput)
        addEventListener("click", {
            jq(uploadInput).click()
        })
    }

    val selectImgDiv = document.createElement("div").apply {
        addClass("columns")
        appendChild(selectImgBtn)
    }

    val canvasImage = document.createElement("canvas").apply {
        id = "profile"
    }

    val canvasDiv = document.createElement("div").apply {
        addClass("column")
        appendChild(canvasImage)
    }

    val imagesDiv = document.createElement("div").apply {
        addClass("columns")
        appendChild(canvasDiv)
    }

    val container = document.createElement("div").apply {
        addClass("container")
        appendChild(imagesDiv)
        appendChild(selectImgDiv)
        appendChild(templateDiv)
    }

    val section = document.createElement("section").apply {
        addClass("section")
        appendChild(container)
    }

    app?.appendChild(section)
}

fun img(id: String): Element =
        document.createElement("img").apply {
            this.id = id
            setAttribute("width", "400px")
            setAttribute("height", "400px")
        }