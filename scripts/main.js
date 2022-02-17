// import the FN from "XO-Mine.js"
import { GovernorOptions } from "./governors.js"

import { Facilities } from "./facilities.js"

import { colonyList } from "./colonies.js"
import { facilityList } from "./facilitiesMinerals.js"
import { mineralOrder } from "./facilitiesMinerals.js"
import { colonyInventory } from "./purchases.js"

document.addEventListener("stateChanged", event => {
    GovernorOptions()
    renderColonyHeader()
    renderFacilityMinerals()
    renderMineralOrder()
})

const renderMineralOrder = () => {
    const spaceCart = document.querySelector("#spaceCart")
    spaceCart.innerHTML = mineralOrder()
}



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

const renderFacilityMinerals = () => {
    const facilityMineral = document.querySelector("#facilityMineral")
    facilityMineral.innerHTML = facilityList()
}

renderFacilityMinerals()

const renderColonyMineralsInventory = () => {
    const colonyMineral = document.querySelector("#colonyInfo")
    colonyMineral.innerHTML = colonyInventory()
}
renderColonyMineralsInventory()