
// import plant seeds


import { createPlan } from "./plan.js"
import { types } from "./plan.js"
import { plantSeeds } from "./tractor.js"

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

const plantsAdded = addPlant()
console.log(plantsAdded)


// directions in chapter 4 of part 6 say to add the seed from 
//tractor to field, once i called plantseed func from tractor
//it seemed like it added automatically
// something to look into if it doesn't work 

const plantThemSeeds = plantSeeds()
console.log(plantThemSeeds)

//if you do need to add them here is what i got 


const producedInField = grownInField.concat(plantSeeds())
console.log(producedInField)


//right now it saying corn in not an array; what does this mean?
//i think it should be an array 

//call plant seed funcs