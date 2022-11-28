
// import plant seeds


import { createPlan } from "./plan.js"
import { types } from "./plan.js"



// define var with empty array
//this array will hold plants grown in field
//do not export 

const grownInField = []

// make func called addplant

export const addPlant = (seedobj) => {
    // must accept seed object as input 
    // func will add seed to field
    //loop through plants

    for (const seed of types) {

        grownInField.push(seed)
    }
    return grownInField
}

export const usePlants = () => {
    return { ...grownInField }
}

//false here 
const whatIsCorn = () => {
    console.log(Array.isArray("Corn"))
}

whatIsCorn()

const plantsAdded = addPlant()
console.log(plantsAdded)


//right now it saying corn in not an array; what does this mean?
//i think it should be an array 

//call plant seed funcs