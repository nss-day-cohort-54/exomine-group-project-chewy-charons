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
        { id: 1, facilityId: 1, mineralId: 1, mineralQty: 150, },
        { id: 2, facilityId: 2, mineralId: 2, mineralQty: 3000, },
        { id: 3, facilityId: 3, mineralId: 3, mineralQty: 250, }
    ],

    purchases: [
        {
            id: 1,
            amount: 1000,
            colonyId: 1,
            mineralId: 1,
            facilityId: 1,
        }
    ]
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

export const getSelectedFacility = () => {
    return database.transientState.selectedFacility
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

// create and export FN to set state for purchase
export const setPurchase = (purchaseId) => {
    database.transientState.selectedpurchase = purchaseId
    document.dispatchEvent(new CustomEvent("stateChanged"))
}




export const purchaseMineral = () => {

    // Broadcast custom event to entire document so that the
    // application can re-render and update state
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

