const database = {
    transientState: {},

    governors: [
        { id: 1, name: "Beatrice Rubelle", colonyId: 1, active: true },
        { id: 2, name: "Zapp Brannigan", colonyId: 1, active: true },
        { id: 3, name: "Zaphod Beeblbrox", colonyId: 1, active: true },
        { id: 4, name: "Demi Lovato", colonyId: 2, active: true },
        { id: 5, name: "Poot Lovato", colonyId: 3, active: true },
        { id: 6, name: "Steve Brownlee", colonyId: 3, active: false },
        { id: 7, name: "Naomi Watts", colonyId: 4, active: true },
        { id: 8, name: "Charlie Manson", colonyId: 1, active: false },
        { id: 9, name: "Ben Stein", colonyId: 2, active: true },
        { id: 10, name: "Marsha Brady", colonyId: 2, active: false },
        { id: 11, name: "Travis Watkins", colonyId: 3, active: true },
        { id: 12, name: "Molly Ringwald", colonyId: 1, active: false },
        { id: 13, name: "Ginger Grant", colonyId: 1, active: false }
    ],

    colonies: [
        {id: 1, name: "Earth", governerId: [1, 2, 3]},
        {id: 2, name: "Europa", governerId: 4},
        {id: 3, name: "Mars", governerId: [5, 6]}
    ],

    minerals: [
        {id: 1, type: "Iron", facilityId: [1, 2, 3]},
        {id: 2, type: "Salt", facilityId: [1, 2]},
        {id: 3, type: "Nickel", facilityId: 3}
    ],

    facilities: [
        {id: 1, name: "Io", mineralId: [1, 2], ironInv: 67, saltInv: 12, active: true},
        {id: 2, name: "Ganymede", mineralId: [1, 2], ironInv: 212, saltInv: 34, active: true},
        {id: 3, name: "NSS", mineralId: [1, 3], ironInv: 66, nickelInv: 29, active: false}
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
    return database.governors.map(g => ({...g}))
}

export const getColonies = () => {
    return database.colonies.map(c => ({...c}))
}

export const getMinerals = () => {
    return database.minerals.map(m => ({...m}))
}

export const getFacilities = () => {
    return database.facilities.map(f => ({...f}))
}

export const getPurchases = () => {
    return database.purchases.map(p => ({...p}))
}





export const setFacility = (facilityId) => {
    database.transientState.selectedFacility = facilityId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const purchaseMineral = () => {

        // Broadcast custom event to entire documement so that the
        // application can re-render and update state
        document.dispatchEvent( new CustomEvent("stateChanged") )
    }

