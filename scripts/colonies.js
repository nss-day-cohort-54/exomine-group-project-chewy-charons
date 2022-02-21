import { getColonies, getMinerals, setGovernor } from "./database.js";

import { getSelectedGovernor } from "./database.js";

import { getGovernors } from "./database.js";

import { getColonyMinerals } from "./database.js";

// iterating through the colonies and displaying an html string
// for the colonies and their information.

const governors = getGovernors()


const colonies = getColonies()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "governor") {
            setGovernor(parseInt(changeEvent.target.value))
        }
    }
)

export const colonyList = () => {

    const governorSet = getSelectedGovernor()

    // check if governorSet has any value
    if (governorSet) {

        const foundGovernor = governors.find(
            (governor) => {
                // if it does have a value, find the 
                //governor object associated with the ID

                return governor.id === governorSet
            }

        )

        let html = "<h2>"

        for (const colony of colonies) {

            // trying to figure out this conditional.
            if (colony.id === foundGovernor.colonyId) {

                html += `${colony.name} Minerals`
            }

        }

        html += "</h2>"

        return html
    }
    // once we have a governor object we can access 
    // the colony id in our next conditional.

    // once we have access to colony Id
    // you can find the colony object associated with it
}


//

// creating a function to generate the colony inentory html
// 

export const colonyMineralHtml = () => {

    const colonyMinerals = getColonyMinerals()
    const selectedGovernor = getSelectedGovernor()
    const minerals = getMinerals()

    let html = ""

    const foundGovernor = governors.find(
        (governor) => {
            return governor.id === selectedGovernor
        }
    )


    const filterColonyMinerals = colonyMinerals.filter(
        (mineral) => {
            return foundGovernor.colonyId === mineral.colonyId
        }
    )


    for (const colonyMineral of filterColonyMinerals) {

        const foundMineral = minerals.find(
            (mineral) => {
                return mineral.id === colonyMineral.mineralId
            }
        )


        {
            html += `${colonyMineral.mineralQty} tons of ${foundMineral.type} <br>`
        }

    }
    return html
}

