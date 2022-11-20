
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
    /*
    for (const seed of types) {
        if (seed !== "corn") {
        }
    */
        grownInField.push(seed)
        return grownInField
    }



export const usePlants = () => {
    return { ...grownInField }
}

const whatIsCorn = () => {
    console.log(Array.isArray("Corn"))
}

whatIsCorn()

//call plant seed funcs