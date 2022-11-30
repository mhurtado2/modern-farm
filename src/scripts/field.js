

// define var with empty array
//this array will hold plants grown in field
//do not export 

const grownInField = []

// make func called addplant

export const addPlant = (seedObj) => {
    // must accept seed object as input 
    // func will add seed to field
    //loop through plants
    //for (const seed of types) {
    if (Array.isArray(seedObj)) {
        for (const corn of seedObj) {
            grownInField.push(corn)
        }
    }
    else {
        grownInField.push(seedObj)
    }
}

//make a copy of grown in field; make sure you are copying array 
//not an object
export const usePlants = () => {
    return [...grownInField]
}




