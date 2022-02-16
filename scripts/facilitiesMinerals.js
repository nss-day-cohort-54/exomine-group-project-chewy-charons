import { getFacilities, getFacilityMinerals, getSelectedFacility, setFacility } from "./database.js";
import { Facilities } from "./facilities.js";
import { getMinerals } from "./database.js";
import { setMineral } from "./database.js";
import { getSelectedMineral } from "./database.js";

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

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "mineral") {
            setMineral(parseInt(changeEvent.target.value))
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
        html += `Facility Minerals for ${foundFacility.name}`
        html += "</h2>"
        for (const facilityMineral of facilityMinerals) {

            // trying to figure out this conditional.
            if (facilityMineral.facilityId === foundFacility.id) { //this is weird to zach
        
                for (const mineral of minerals) {
                    if (facilityMineral.mineralId === mineral.id) {
                        html += `<ul> 
                        <li> 
                        <input type="radio" id="mineral" value="${mineral.id}" /> 
                        ${facilityMineral.mineralQty} tons ${mineral.type}
                        </li>
                        </ul>`
                    }
        
                }
            
            }

        }
        return html
    }
    return "<h2>Facility Minerals</h2>"
}



export const mineralOrder = () => {

    const facilitySet = getSelectedFacility()
    const facilityMinerals = getFacilityMinerals()
    const minerals = getMinerals()
    const facilities = getFacilities()
    const selectedMineral = getSelectedMineral()
    

    
    const foundFacility = facilities.find(
        (facility) => {
            // if it does have a value, find the 
            //facility object associated with the ID

            return facility.id === facilitySet
        }

    )

    const foundMineral = minerals.find(
        (mineral) => {
            return mineral.id === selectedMineral
        }
            
    )

    const foundFacilityMineral = facilityMinerals.find(
        (facilityMineral) => {
            return facilityMineral.mineralId === selectedMineral && facilityMineral.facilityId === facilitySet
        }
    )

        if (foundMineral !== undefined) {
        let html = ""

        html += `1 ton of ${foundMineral?.type} from ${foundFacility?.name}`

       
       return html
    } else {
        return ""
    }
}


