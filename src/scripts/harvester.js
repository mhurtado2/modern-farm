


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

export const harvestPlants = (plants) => {
    const seedObj = []
    for (const plant of plantSeeds()) {
    for (const plan of createPlan())
        for (const crop of types) {
            // on each plant get the value of output property
            seedObj.push(crop.type)
        }
        //will return an array of seed objects 
    }
    return seedObj
}

const yearlyPlan = createPlan()

const plantThemSeeds = plantSeeds()


const harvester = harvestPlants()
console.log(harvester)

