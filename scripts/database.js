const database = {
    transientState: {},

    governors: [
        {id: 1, name: "Beatrice Rubelle", colonyId: 1, active: true},
        {id: 2, name: "Zapp Brannigan", colonyId: 1, active: true},
        {id: 3, name: "Zaphod Beeblbrox", colonyId: 1, active: true},
        {id: 4, name: "Demi Lovato", colonyId: 2, active: true},
        {id: 5, name: "Poot Lovato", colonyId: 3, active: true},
        {id: 6, name: "Steve Brownlee", colonyId: 3, active: false}
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
        {id: 1, name: "Io", active: true},
        {id: 2, name: "Ganymede", active: true},
        {id: 3, name: "NSS", active: false}
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

