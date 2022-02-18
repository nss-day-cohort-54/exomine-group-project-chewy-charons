const database = {

    transientState: {},

    
    governors: [
        { id: 1, name: "Beatrice Rubelle", colonyId: 1, active: true },
        { id: 2, name: "Zapp Brannigan", colonyId: 1, active: true },
        { id: 3, name: "Zaphod Beeblbrox", colonyId: 1, active: true },
        { id: 4, name: "Demi Lovato", colonyId: 2, active: true },
        { id: 5, name: "Poot Lovato", colonyId: 3, active: true },
        { id: 6, name: "Steve Brownlee", colonyId: 3, active: false },
        { id: 7, name: "Naomi Watts", colonyId: 2, active: true },
        { id: 8, name: "Charlie Manson", colonyId: 1, active: false },
        { id: 9, name: "Ben Stein", colonyId: 2, active: true },
        { id: 10, name: "Marsha Brady", colonyId: 2, active: false },
        { id: 11, name: "Travis Watkins", colonyId: 3, active: true },
        { id: 12, name: "Molly Ringwald", colonyId: 1, active: false },
        { id: 13, name: "Ginger Grant", colonyId: 1, active: false }
    ],
    
    colonies: [
        { id: 1, name: "Earth" },
        { id: 2, name: "Europa" },
        { id: 3, name: "Mars" }
    ],
    
    minerals: [
        { id: 1, type: "Iron" },
        { id: 2, type: "Salt" },
        { id: 3, type: "Nickel" }
    ],
    
    facilities: [
        { id: 1, name: "Io", active: true },
        { id: 2, name: "Ganymede", active: true },
        { id: 3, name: "NSS", active: false }
    ],
    
    facilityMinerals: [
        { id: 1, facilityId: 1, mineralId: 1, mineralQty: 150 },
        { id: 2, facilityId: 2, mineralId: 2, mineralQty: 3000 },
        { id: 3, facilityId: 3, mineralId: 3, mineralQty: 250 },
        { id: 4, facilityId: 3, mineralId: 2, mineralQty: 1000 }
    ],
    //do I have an obj with colonyId: 1 AND mineralId:1 ? If yes, +1 to mineralQty. If no, new obj
    colonyMineralBuilder: {},

    colonyMinerals: [
        { id: 1, colonyId: 1, mineralId: 1, mineralQty: 10},
        { id: 2, colonyId: 1, mineralId: 2, mineralQty: 15},
        { id: 3, colonyId: 2, mineralId: 1, mineralQty: 10},
    ],

    purchases: [
        {
            id: 1,
            amount: 1000,
            colonyId: 1,
            mineralId: 1,
            facilityId: 1,
        }
    ],


}





// creating and exporting functions to make a copy of each array
// in the database to be used in other modules.

export const getGovernors = () => {
    return database.governors.map(governor => ({ ...governor }))
}

export const getColonies = () => {
    return database.colonies.map(c => ({ ...c }))
}

export const getMinerals = () => {
    return database.minerals.map(m => ({ ...m }))
}

export const getFacilities = () => {
    return database.facilities.map(f => ({ ...f }))
}

export const getPurchases = () => {
    return database.purchases.map(p => ({ ...p }))
}

export const getSelectedGovernor = () => {
    return database.transientState.selectedGovernor
}


export const getFacilityMinerals = () => {
    return database.facilityMinerals.map(fm => ({...fm}))
}

export const getColonyMinerals = () => {
    return database.colonyMinerals.map(cm => ({...cm}))
}

export const getSelectedFacility = () => {
    return database.transientState.selectedFacility
}

export const getSelectedMineral = () => {
    return database.transientState.selectedMineral
}

export const getSelectedFacilityMineral = () => {
    return database.transientState.selectedFacilityMineral
}

/////////////////////////////////////////////////////////
///// S T A T E   S E T T I N G  F U N C T I O N S //////
////////////////////////////////////////////////////////

// create and export FN to set state for governor
export const setGovernor = (governorId) => {
    database.transientState.selectedGovernor = governorId
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

// create and export FN to set state for colony
export const setColony = (colonyId) => {
    database.transientState.selectedColony = colonyId
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setColonyMineral = (colonyMineralArray) => {
    database.colonyMinerals = colonyMineralArray
}

export const setfacilityMineralArray = (facilityMineralArray) => {
    database.facilityMinerals = facilityMineralArray
}

// create and export FN to set state for mineral
export const setMineral = (mineralId) => {
    database.transientState.selectedMineral = mineralId
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

// create and export FN to set state for facility

export const setFacility = (facilityId) => {
    database.transientState.selectedFacility = facilityId
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setFacilityMineral = (facilityMineralId) => {
    database.transientState.selectedFacilityMineral = facilityMineralId
    document.dispatchEvent(new CustomEvent("stateChanged"))
}


// create and export FN to set state for purchase
export const setPurchase = (purchaseId) => {
    database.transientState.selectedpurchase = purchaseId
    document.dispatchEvent(new CustomEvent("stateChanged"))
}


//need getColonyMineral, setColonyMineral

export const purchaseMineral = () => {

    // Broadcast custom event to entire document so that the
    // application can re-render and update state
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

/*export const addPurchase = () => {
    // copy the current state of user choices
        const newPurchase = {...database.transientState}
       
        // add new PK to object
        const lastIndex = database.colonyMinerals.length - 1
        newPurchase.id = database.colonyMinerals[lastIndex].id + 1   

        // add new order obj to purchases
        database.colonyMinerals.push(newPurchase)

        // reset temp state for user choices
        database.transientState = {}

        // broadcast notification that perm state has changed (for all modules)
        document.dispatchEvent(new CustomEvent("mineralPurchased"))
}
*/
