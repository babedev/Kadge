package com.github.babedev

import jquery.jq
import kotlin.browser.document
import kotlin.dom.addClass

fun main(args: Array<String>) {

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

    val selectImgDiv = div(className = "columns") {
        document.createElement("a").apply {
            addClass("level-item button is-primary")
            appendChild(uploadSpan)
            appendChild(uploadInput)
            addEventListener("click", {
                jq(uploadInput).click()
            })
        }
    }

    app {
        div(className = "section") {
            document.createElement("div").apply {
                addClass("container")
                appendChild(strong("Kotlin badge generator"))

                appendChild(
                        div(className = "columns") {
                            div(className = "column") {
                                canvas("profile")
                            }
                        }
                )

                appendChild(selectImgDiv)
                appendChild(
                        document.createElement("div").apply {
                            appendChild(img("preview"))
                            appendChild(img("template").apply {
                                setAttribute("src", "kadge-template.png")
                            })
                            addClass("column gone")
                        }
                )
            }
        }
    }
}