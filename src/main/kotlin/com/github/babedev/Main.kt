package com.github.babedev

import jquery.jq
import org.w3c.dom.Element
import kotlin.browser.document
import kotlin.browser.window

var uploadInput: Element = document.createElement("div")

fun main(args: Array<String>) {
    app {
        div(className = "section") {
            div(className = "container") {
                div(className = "tile") {
                    strong { text("Kotlin badge generator") }
                }

                br()

                div(className = "tile") {
                    a("btn-upload", "level-item button is-primary", {
                        jq(uploadInput).click()
                    }, {
                        span { text("Select image") }

                        uploadInput = inputFile("upload", "upload-photo") {
                            js("preview()")
                        }
                    })
                }

                br()

                div(className = "tile") {
                    div(className = "box") { canvas("profile") }
                }

                br()

                div(className = "tile") {
                    a("btn-download", "level-item button is-primary", {
                        js("download()")
                    }, {
                        text("Download image")
                    })
                }

                div(className = "gone") {
                    img("preview")

                    img("template") { src("kadge-template.png") }
                }
            }
        }
    }

    window.onload = {
        js("createPlaceholder()")
    }
}