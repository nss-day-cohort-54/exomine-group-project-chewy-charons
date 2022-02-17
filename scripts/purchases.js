// we need to access the facility selected from the dropdown menu so that when its
// corresponding mineral quantities are displayed and one is selected, we can display html 
// that updates the state of our chosen colony's mineral inventory

//access the object that is selected from the facility dropdown menu

//compare that object's id to the facilityId of the corresponding object in the 
//facilityMinerals array

//compare the mineralId of the facilityMineral object to the id of its corresponding object
//from the mineral array

//facility.id -> facilityMinerals.facilityId -> facilityMinerals.mineralId -> mineral.id -> mineral.type

//somehow we need to subtract 1 from facilityMinerals.mineralQty and add 1 to the colony's inventory

import { getFacilities, getMinerals, getColonyMinerals, getSelectedFacilityMineral, getGovernors } from "./database.js";
import { getFacilityMinerals, getSelectedMineral, getSelectedGovernor } from "./database.js";
import { facilityList } from "./facilitiesMinerals.js";

const minerals = getMinerals()
const facilities = getFacilities()
const facilityMinerals = getFacilityMinerals()
const colonyMinerals = getColonyMinerals()


//this event listener accesses the order button
document.addEventListener(
    "click",
    (event) => {
        const clickedItem = event.target
        if (clickedItem.id === "orderButton") {
            colonyInventory()
        }
    }
)
//this event listener accesses the facility dropdown  options




export const colonyInventory = () => {
    const selectedGovernor = getSelectedGovernor()
    const colonyMinerals = getColonyMinerals()
    const selectedFacilityMineral = getSelectedFacilityMineral()
    const governors = getGovernors()
    let html = ""
    if (selectedFacilityMineral) {
        const foundFacilityMineral = facilityMinerals.find(
            (facilityMineral) => {
                return facilityMineral.id === selectedFacilityMineral
            }
        )




        //trying to find the mineral that equalled the facility mineral
        const foundGovernor = governors.find(
            (governor) => {
                return governor.id === selectedGovernor
            }
        )


        for (const colonyMineral of colonyMinerals) {

            if (foundFacilityMineral.mineralId === colonyMineral.mineralId && foundGovernor.colonyId === colonyMineral.colonyId) {
                colonyMineral.mineralQty += 1
                foundFacilityMineral.mineralQty -= 1

            }
        }
    }

    //these values need to reference the radio option and dropdown selections!
    document.dispatchEvent(new CustomEvent("mineralPurchased"))
}








//on click
    //compare facilityMineral.mineralId(radio option) to colonyMineral.mineralId(dropdown)
        //if match, add 1 to colonyMineral.mineralQty
        //if no match, create a new colonyMineral object and add 1 to mineralQty
    //clear cart html string
    //subtract 1 from facilityMineral.mineralId(radio option)