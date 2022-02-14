// this module provide everything to update the DOM
// all the imports, all the HTML

import { Facilities } from "./facilities.js"
import { GovenorOptions } from "./governors.js"

export const xoMine = () => {
    let html = `
    <h1>Solar System Mining Marketplace</h1>
    <label class="choosegovenor" for="choosegovenor">Choose a Govenor</label>
    ${GovenorOptions()}
    <label class="choosefacility" for="choosefacility">Choose a Facility</label>
    ${Facilities()}
    `
    return html
}

