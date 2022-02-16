// the purpose of this module is create an Order button
// and output Order information

import { getFacilities, getMinerals, addPurchase } from "./database"
import { getFacilityMinerals, getSelectedFacility, setFacility } from "./database.js";

document.addEventListener(
    "click",
    (event) => { 
        const clickedItem = event.target
        if (clickedItem.id === "orderButton") {
        addPurchase()
    }
   }
) 


export const buildPurchaseListItem = (purchase) => {

    const minerals = getMinerals()
    const facilities = getFacilities()
    const facilityMinerals = getFacilityMinerals()
    const selectedFacility = getSelectedFacility()
    const facilitySet = setFacility()


const 




    // mineral.type (display it in HTML) and radio button selection of the mineral
    // 





}

