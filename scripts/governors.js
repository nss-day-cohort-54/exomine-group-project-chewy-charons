

import { getGovernors } from "./database.js";


const governors = getGovernors()


export const GovenorOptions = () => {

    let html = ` 
    <select id="governor">
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