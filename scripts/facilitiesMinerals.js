import { getFacilities, getFacilityMinerals, getSelectedFacility, setFacility } from "./database.js";
import { Facilities } from "./facilities.js";
import { getMinerals } from "./database.js";

// iterating through the colonies and displaying an html string
// for the colonies and their information.

const facilities = getFacilities()

const minerals = getMinerals()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "facility") {
            setFacility(parseInt(changeEvent.target.value))
        }
    }
)



export const facilityList = () => {

    const facilitySet = getSelectedFacility()
    const facilityMinerals = getFacilityMinerals()
    const minerals = getMinerals()
    
    // check if facilitySet has any value
    if (facilitySet) {

        const foundFacility = facilities.find(
            (facility) => {
                // if it does have a value, find the 
                //facility object associated with the ID

                return facility.id === facilitySet
            }

        )

        let html = "<h2>"    
        for (const facilityMineral of facilityMinerals) {

            // trying to figure out this conditional.
            if (facilityMineral.mineralId === foundFacility.id) {

                html += `Facility Minerals for ${foundFacility.name}`
            
            }

        }

        html += "</h2>"

        for (const mineral of minerals) {
        html += `<ul> 
        <li> 
        <input type="radio" name="mineralQty" value="${facilityMinerals.mineralQty}" /> 
        ${facilityMinerals.mineralQty} tons ${mineral.type}
        </li>
        </ul>`

        }

        return html
    }
    return "<h2>Facility Minerals</h2>"
}
