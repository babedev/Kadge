package com.github.babedev

import jquery.jq
import kotlin.browser.document
import kotlin.dom.addClass

fun main(args: Array<String>) {
    val app = document.getElementById("app")

    val templateImage = document.createElement("img")
    templateImage.id = "template"
    templateImage.setAttribute("src", "kadge-template.png")
    templateImage.setAttribute("width", "400px")
    templateImage.setAttribute("height", "400px")
    templateImage.addClass("inner-template")

    val previewImage = document.createElement("img")
    previewImage.id = "preview"
    previewImage.setAttribute("width", "400px")
    previewImage.setAttribute("height", "400px")
    previewImage.addClass("inner-template")

    val templateDiv = document.createElement("div")
    templateDiv.appendChild(previewImage)
    templateDiv.appendChild(templateImage)
    templateDiv.addClass("column template")

    val uploadInput = document.createElement("input")
    uploadInput.id = "upload"
    uploadInput.setAttribute("type", "file")
    uploadInput.setAttribute("accept", "image/*")
    uploadInput.addClass("upload-photo")

    jq(uploadInput).change {
        js("preview()")
    }

    val uploadSpan = document.createElement("span")
    uploadSpan.appendChild(document.createTextNode("Select image"))

    val selectImgBtn = document.createElement("a")
    selectImgBtn.addClass("level-item button is-primary")
    selectImgBtn.appendChild(uploadSpan)
    selectImgBtn.appendChild(uploadInput)
    selectImgBtn.addEventListener("click", {
        jq(uploadInput).click()
    })

    val selectImgDiv = document.createElement("div")
    selectImgDiv.addClass("columns")
    selectImgDiv.appendChild(selectImgBtn)

    val canvasImage = document.createElement("canvas")
    canvasImage.id = "profile"

    val canvasDiv = document.createElement("div")
    canvasDiv.addClass("column")
    canvasDiv.appendChild(canvasImage)

    val imagesDiv = document.createElement("div")
    imagesDiv.addClass("columns")
    imagesDiv.appendChild(templateDiv)
    imagesDiv.appendChild(canvasDiv)

    val container = document.createElement("div")
    container.addClass("container")
    container.appendChild(imagesDiv)
    container.appendChild(selectImgDiv)

    val section = document.createElement("section")
    section.addClass("section")
    section.appendChild(container)

    app?.appendChild(section)
}