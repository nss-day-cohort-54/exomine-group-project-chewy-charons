import { getFacilities, getFacilityMinerals, getSelectedFacility } from "./database.js";
import { Facilities } from "./facilities.js";


// iterating through the colonies and displaying an html string
// for the colonies and their information.

const facilities = getFacilities()



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
            if (facilityMineral.mineralId === foundFacility.facilityId) {

                html += `Facility minerals for ${facility.name}`
            }

        }

        html += "</h2>"

        return html
    }
   
}
