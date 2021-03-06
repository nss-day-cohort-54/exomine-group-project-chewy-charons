import { getFacilities, setFacility } from "./database.js"

//function that will iterate through facilities and format into html
document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "facility") {
            setFacility(parseInt(changeEvent.target.value))
        }
    }
)

const facilities = getFacilities()

export const Facilities = () => {
    let html = `Choose a facility
    <select id="facility">
    <option value="">Choose Facility...</option>

    ${facilities.map((facility) => (`<option value="${facility.id}">${facility.name}</option>`)).join("")}

    </select> `

    return html

}
