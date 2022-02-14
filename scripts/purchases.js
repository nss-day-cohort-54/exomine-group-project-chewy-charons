// the purpose of this module is create an Order button
// and output Order information

import { getFacilities, getMinerals } from "./database"


export const buildPurchaseListItem = (purchase) => {

    const minerals = getMinerals()

    const facilities = getFacilities()


    const foundMinerals = minerals.find(
        (mineral) => {
            return (mineral.id === parseInt(purchase.mineralId))
        }
    )


    const foundFacilities = facilities.find(
        (facility) => {
            return (facility.id === parseInt(purchase.facilityId))
        }
    )




}