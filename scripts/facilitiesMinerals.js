import { getFacilities, getFacilityMinerals, getSelectedFacility, setFacility, setFacilityMineral } from "./database.js";
import { Facilities } from "./facilities.js";
import { getMinerals, getSelectedFacilityMineral } from "./database.js";
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
            setFacilityMineral(parseInt(changeEvent.target.value))
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
            if (facilityMineral.facilityId === foundFacility.id) {

                for (const mineral of minerals) {
                    if (facilityMineral.mineralId === mineral.id) {
                        html += `
                         
                        <input type="radio" id="mineral" value="${facilityMineral.id}"/> 
                        ${facilityMineral.mineralQty} tons ${mineral.type}
                        </input>
                        `
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
    const getFacMin = getSelectedFacilityMineral()
    /*
       starting at facilityMineralId to reach found mineral and found facility
       DONE     .find method entire facilitymineral obj 
                take its properties and compare FKs to PKs
    
        DONE    .find method facilityMineral.facilityId equal facility.id
        DONE    .find method facilityMineral.mineralId equal mineral.id
    
    */

    const findFacilityMineral = facilityMinerals.find(
        (facilityMineral) => {
            return facilityMineral.id === getFacMin
        }
    )

    // for ( const facilityMineral of facilityMinerals) {
    //     const findFacilityId = facilityMinerals.find(
    //         (facility) => {
    //             return facilityMineral.facilityId === facility.id
    //         }
    //     )
    // }

    // for ( const facilityMineral of facilityMinerals) {
    //     const findMineralId = facilityMinerals.find(
    //         (mineral) => {
    //             return facilityMineral.mineralId === mineral.id
    //         }
    //     )
    // }

    const foundFacility = facilities.find(
        (facility) => {
            // if it does have a value, find the 
            //facility object associated with the ID

            return facility.id === facilitySet
        }

    )
    let foundMineral = undefined
    if (getFacMin !== undefined) {
        foundMineral = minerals.find(
            (mineral) => {
                return mineral.id === findFacilityMineral.mineralId
            }

        )
    }
    // const foundFacilityMineral = facilityMinerals.find(
    //     (facilityMineral) => {
    //         return facilityMineral.mineralId === selectedMineral && facilityMineral.facilityId === facilitySet
    //     }
    // )

    if (foundMineral !== undefined) {
        let html = ""

        html += `1 ton of ${foundMineral?.type} from ${foundFacility?.name}`


        return html
    } else {
        return ""
    }

}


