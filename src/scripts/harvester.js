

/*
import { createPlan, types } from "./plan.js"
import { createCorn } from "./seeds/corn.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createPotato } from "./seeds/potato.js"
import { createSunFlower } from "./seeds/sunflower.js"
import { createSoyBean } from "./seeds/soybean.js"
import { createWheat } from "./seeds/wheat.js"
import { plantSeeds } from "./tractor.js"

// define and export harvestPlants func

// must accept plants array as function



const harvestedFoodArray = []
const harvestPlants = (grownInField) => {
    //must accept grownInField array
    // for (let i = 0; i < newTypes.length; i++) {
    //try iterating with that index loop to get desired 
    //number of stuff on page
    for (const plant of grownInField) {
        for (let i = 0; i < plant.output; i++) {
            if (plant === "Potato") {
                harvestedFoodArray.push(plant)
            }
            if (plant === "Asparagus") {
                harvestedFoodArray.push(plant)
            }
            if (plant === "Soybean") {
                harvestedFoodArray.push(plant)
            }
            if (plant === "Sunflower") {
                harvestedFoodArray.push(plant)
            }
            if (plant === "Wheat") {
                harvestedFoodArray.push(plant)
            }
            else {
                harvestedFoodArray.push(plant)
            }
        }
    }
    for (const corn of createCorn()) {
        for (let j = 3; j < corn.output; j++) {
            harvestedFoodArray.push(corn)
        }
    }
    return harvestedFoodArray
}

const farmer = harvestPlants(grownInField)
console.log(farmer)




//const yearlyPlan = createPlan()

//const plantThemSeeds = plantSeeds()

const harvester = harvestPlants()
console.log(harvester)

*/