import { getFacilityMinerals, getMinerals } from "./database.js";
import { Facilities } from "./facilities.js";

//we need to set facility.id === facilityminerals.facilityID
//looking for a facility and using that to find infor
export const findIds = (facMin) => {
    const facilityMinerals = getFacilityMinerals()
    const facilities = Facilities()
    const minerals = getMinerals()

    const foundFacilties = facilities.find(
        (facility) => {
            return (facility.id === facMin.facilityId)
        }

    )



    const foundMinerals = minerals.find(
        (mineral) => {
            return (mineral.id === facMin.mineralId)
        }
    )


}