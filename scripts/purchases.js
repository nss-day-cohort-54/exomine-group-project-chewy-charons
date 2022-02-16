// we need to access the facility selected from the dropdown menu so that when it's
// corresponding mineral quantities are displayed and one is selected, we can display html 
// that updates the state of our chosen colony's mineral inventory

//access the object that is selected from the facility dropdown menu

//compare that object's id to the facilityId of the corresponding object in the 
//facilityMinerals array

//compare the mineralId of the facilityMineral object to the id of it's corresponding object
//from the mineral array

//facility.id -> facilityMinerals.facilityId -> facilityMinerals.mineralId -> mineral.id -> mineral.type

//somehow we need to subtract 1 from facilityMinerals.mineralQty and add 1 to the colony's inventory

import { getFacilities, getMinerals, addPurchase } from "./database"
import { getFacilityMinerals, getSelectedFacility, setFacility } from "./database.js";
import { Facilities } from "./facilities";

const minerals = getMinerals()
const facilities = getFacilities()
const facilityMinerals = getFacilityMinerals()
const selectedFacility = getSelectedFacility()
const facilitySet = setFacility()

//this event listener accesses the order button
document.addEventListener(
    "click",
    (event) => { 
        const clickedItem = event.target
        if (clickedItem.id === "orderButton") {
        addPurchase()
    }
   }
) 
//this event listener accesses the facility dropdown  options
document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "facility") {
            setFacility(parseInt(changeEvent.target.value))
        }
    }
)
//This is the last this worked on. It is incomplete!!!
export const colonyInventory = () => {
    if (selectedFacility) {
        const foundFacility = facilities.find(
            (facility) => {
                return facility.id === selectedFacility
            }
        )
    }
    for (const facilityMineral of facilityMinerals) {
        if (facilityMineral.facilityId === foundFacility.id) {
            for (const mineral of minerals) {
                if (facilityMineral.mineralId === mineral.id) {}
            }
        }
    }
}