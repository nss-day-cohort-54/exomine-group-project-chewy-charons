// this module provide everything to update the DOM
// all the imports, all the HTML

import { Facilities } from "./facilities.js"
import { GovenorOptions } from "./governors.js"

export const xoMine = () => {
    return `
    <h1>Solar System Mining Marketplace</h1>

    <label class="choosegovenor" for="Choose a Govenor">Author</label>
    ${GovenorOptions()}

    <label class="facilities" for="Choose a Facility">Author</label>
    ${Facilities()}
    `
}

