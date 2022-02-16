// the purpose of this module is create an Order button
// and output Order information

import { getFacilities, getMinerals } from "./database"
import { getFacilityMinerals, getSelectedFacility, setFacility } from "./database.js";


export const buildPurchaseListItem = (purchase) => {

    const minerals = getMinerals()
    const facilities = getFacilities()
    const facilityMinerals = getFacilityMinerals()
    const selectedFacility = getSelectedFacility()
    const facilitySet = setFacility()



}