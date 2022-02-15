// this module provide everything to update the DOM
// all the imports, all the HTML

import { Facilities } from "./facilities.js"
import { GovernorOptions } from "./governors.js"

export const xoMine = () => {
    let html = `
    <h1>Solar System Mining Marketplace</h1>
<article class="choices">
    <section class="govChoice">
    <label class="chooseGovernor" for="chooseGovernor">Choose a Governor</label>
            ${GovernorOptions()}
    </section>

    <section class="facilityChoice">
    <h2></h2>
    <label class="chooseFacility" for="chooseFacility">Choose a Facility</label>
             ${Facilities()}
    </section>

    <section class="facilityMinerals">
    <h2></h2>
    </section>

   <article class="spaceCart">

   <button id="orderButton"> Purchase Mineral </button>

   </article>
        
</article>



    `
    return html
}

