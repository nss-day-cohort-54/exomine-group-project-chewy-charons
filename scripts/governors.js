

import { getGovernors, getColonies, setGovernor, getSelectedGovernor } from "./database.js";


const governors = getGovernors()
const colonies = getColonies()


document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "governor") {
            setGovernor(parseInt(event.target.value))
        }
    }
)

export const GovernorOptions = () => {

    let html = ` 
    <select id="governor">
        <option value="0"> Choose your Governor </option>`

    const listItems = governors.map(governor => {
        return `
        <option value="${governor.id}"> ${governor.name}</option>
        `
    })

    html += listItems.join("")
    html += `</select>`


    return html

}