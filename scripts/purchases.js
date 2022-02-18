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

import { getFacilities, getMinerals, getColonyMinerals, getSelectedFacilityMineral, getGovernors, addPurchase } from "./database.js";
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
    const selectedGovernor = getSelectedGovernor()//selection made from governor dropdown
    const colonyMinerals = getColonyMinerals()//facility minerals array
    const selectedFacilityMineral = getSelectedFacilityMineral()//selection made from radio options
    const governors = getGovernors()//governors array
    

    if (selectedFacilityMineral) {//if a facility HAS BEEN selected from radio options, then:
        const foundFacilityMineral = facilityMinerals.find(
            (facilityMineral) => {
                return facilityMineral.id === selectedFacilityMineral//bridge between dropdown facility and facMin obj
            }
        )




        //trying to find the mineral that equalled the facility mineral
        const foundGovernor = governors.find(
            (governor) => {
                return governor.id === selectedGovernor//gov obj.id is now equal to the dropdown selected governor
            }
        )

//DD Facilty-> FacMinObj    DD Governor-> GovObj
        for (const colonyMineral of colonyMinerals) {

            if (foundFacilityMineral.mineralId === colonyMineral.mineralId && foundGovernor.colonyId === colonyMineral.colonyId) {
                colonyMineral.mineralQty += 1
                foundFacilityMineral.mineralQty -= 1

            } else {//{ id: 1, colonyId: 1, mineralId: 1, mineralQty: 10},
                addPurchase()
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