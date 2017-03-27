package com.github.babedev

import jquery.jq
import org.w3c.dom.Element
import kotlin.browser.document

var uploadInput: Element = document.createElement("div")

fun main(args: Array<String>) {
    app {
        div(className = "section") {
            div(className = "container") {
                strong {
                    text("Kotlin badge generator")
                }

                br()

                div(className = "columns") {
                    div(className = "column") {
                        canvas("profile")
                    }
                }

                div(className = "columns") {
                    a("level-item button is-primary", {
                        jq(uploadInput).click()
                    }, {
                        span {
                            text("Select image")
                        }

                        uploadInput = inputFile("upload", "upload-photo") {
                            js("preview()")
                        }
                    })
                }

                div(className = "column gone") {
                    img("preview")

                    img("template") {
                        src("kadge-template.png")
                    }
                }
            }
        }
    }
}