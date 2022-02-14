// import the FN from "XO-Mine.js"
import { xoMine } from "./XO-Mine.js"


const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = xoMine()
}

renderAllHTML()

