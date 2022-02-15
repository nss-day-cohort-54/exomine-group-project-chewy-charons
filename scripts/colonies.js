import { getColonies } from "./database.js";

import { getSelectedGovernor } from "./database.js";

import { getGovernors } from "./database.js";



// iterating through the colonies and displaying an html string
// for the colonies and their information.

const governors = getGovernors()

const colonies = getColonies()

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
 }

// once we have a governor object we can access 
// the colony id in our next conditional.

// once we have access to colony Id
// you can find the colony object associated with it
    
    let html = "<h2>"
 for (const governor of governors) {

    for (const colony of colonies) {

    // trying to figure out this conditional.
        if (colony.id === governorSet) {

        html += `${colony.name} Minerals`
        }
    }
}

    html += "</h2>"

    return html
}

console.log(colonyList())