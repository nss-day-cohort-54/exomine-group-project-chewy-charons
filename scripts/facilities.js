import { getFacilities } from "./database.js"

//function that will iterate through facilities and format into html
export const Facilities = () => {
    const facilities = getFacilities()

    let html = `
    <select id="facility">
    <option value="">Choose Facility...</option>

    ${facilities.map((facility) => (`<option value+"${facility.id}">${facility.name}</option>`)).join("")}

    </select> `

    return html

}




