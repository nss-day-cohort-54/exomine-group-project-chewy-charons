// import the FN from "XO-Mine.js"
import { GovernorOptions } from "./governors.js"

import { Facilities } from "./facilities.js"

import { colonyList } from "./colonies.js"


document.addEventListener("stateChanged", event => {
    GovernorOptions()
    renderColonyHeader()
})



const renderGovernorDropdown = () => {
    const governorContainer = document.querySelector("#governorDropdown")
    governorContainer.innerHTML = GovernorOptions()
}

renderGovernorDropdown()

const renderFacilityDropdown = () => {
    const facilityContainer = document.querySelector("#facilityDropdown")
    facilityContainer.innerHTML = Facilities()
}

renderFacilityDropdown()

const renderColonyHeader = () => {
    const colonyHeader = document.querySelector("#colonyHeader")
    colonyHeader.innerHTML = colonyList()


}

