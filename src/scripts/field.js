
// import plant seeds


//import { createPlan } from "./plan.js"

import { createCorn } from "./seeds/corn.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createPotato } from "./seeds/potato.js"
import { createSunFlower } from "./seeds/sunflower.js"
import { createSoyBean } from "./seeds/soybean.js"
import { createWheat } from "./seeds/wheat.js"

/*
let stinkyPee = createAsparagus()
const cornHole = createCorn()
const potatoHead = createPotato()
const sunShine = createSunFlower()
const soyMilk = createSoyBean()
const wheatThins = createWheat()
*/

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

//might need to add a loop iterating through corn here 


export const usePlants = () => {
    return { ...grownInField }
}



//const plantsUsed = usePlants()
//console.log(plantsUsed)



//right now it saying corn in not an array; what does this mean?
//i think it should be an array 
