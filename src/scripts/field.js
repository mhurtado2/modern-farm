
// import plant seeds


import { createPlan } from "./plan.js"
import { types } from "./plan.js"

const yearlyPlan = createPlan()

// define var with empty array
//this array will hold plants grown in field
//do not export 

const grownInField = []

// make func called addplant

export const addPlant = (seed) => {
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

const whatIsCorn = () => {
    console.log(Array.isArray("Corn"))
}

whatIsCorn()

//right now it saying corn in not an array; what does this mean?
//i think it should be an array 

//call plant seed funcs