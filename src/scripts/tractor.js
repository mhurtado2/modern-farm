
//import createPlan

import { createPlan } from "./plan.js"
import { createCorn } from "./seeds/corn.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createPotato } from "./seeds/potato.js"
import { createSunFlower } from "./seeds/sunflower.js"
import { createSoyBean } from "./seeds/soybean.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant } from "./field.js"
import { usePlants } from "./field.js"


export const plantSeeds = (yearlyPlan) => {
  
    //how to iterate parent and child arrays
    for (const row of yearlyPlan) {
        for (const crop of row) {
            if (crop === "Asparagus") {
                //invoke factory functions 
                const stinkyPee = createAsparagus()
                //to access array of grown in field 
                //call the addPlant function
               // planSeedArray.push(addPlant(stinkyPee))
                addPlant(stinkyPee)
            }
            if (crop === "Corn") {
                //invoke factory functions 
                const cornHole = createCorn()
                //to access array of grown in field 
                //call the addPlant function
                addPlant(cornHole)
                //planSeedArray.push(addPlant(cornHole))
            }
            if (crop === "Potato") {
                //invoke factory functions 
                const potatoHead = createPotato()
                  //to access array of grown in field 
                //call the addPlant function
                //planSeedArray.push(addPlant(potatoHead))
                addPlant(potatoHead)
            }
            if (crop === "Wheat") {
                //invoke factory functions 
                const wheatThins = createWheat()

                //to access array of grown in field 
                //call the addPlant function
                addPlant(wheatThins)
                //planSeedArray.push(addPlant(wheatThins))
            }
            if (crop === "Sunflower") {
                //invoke factory functions 
                const sunShine = createSunFlower()
              
                  //to access array of grown in field 
                //call the addPlant function
                addPlant(sunShine)
                //planSeedArray.push(addPlant(sunShine))
            }
            if (crop === "Soybean") {
                //invoke factory functions 
                const soyMilk = createSoyBean()
              
                  //to access array of grown in field 
                //call the addPlant function
                addPlant(soyMilk)
                //planSeedArray.push(addPlant(soyMilk))
            }
        }
    }
}

//take that seed and add it to the array of plants in field module 

/*
const plantThemSeeds = plantSeeds()
console.log(plantThemSeeds)
*/
