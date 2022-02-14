// this module provide everything to update the DOM
// all the imports, all the HTML

import { Facilities } from "./facilities.js"
import { GovernorOptions } from "./governors.js"

export const xoMine = () => {
    let html = `
    <h1>Solar System Mining Marketplace</h1>

    <label class="chooseGovernor" for="chooseGovernor">Choose a Governor</label>
            ${GovernorOptions()}

    <label class="chooseFacility" for="chooseFacility">Choose a Facility</label>
             ${Facilities()}


    <article>
        
    </article>



    `
    return html
}

