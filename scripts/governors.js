//  importing the getGovernors function from database

import { getGovernors } from "./database.js";
import { getColonies } from "./database.js";

const governors = getGovernors()

const colonies = getColonies()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "gov") {
            
        }
    }
)


export const GovernorOptions = () => {


    let html = ` 
    <select id="governor" name="gov">
        <option value="0"> Choose your Governor </option>`

    const listItems = governors.map(gov => {
        return `
        <option value="${gov.id}"> ${gov.name}</option>
        `
    })

    html += listItems.join("")
    html += `</select>`


    return html

}