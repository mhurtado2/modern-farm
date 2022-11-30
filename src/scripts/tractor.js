


import { createCorn } from "./seeds/corn.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createPotato } from "./seeds/potato.js"
import { createSunFlower } from "./seeds/sunflower.js"
import { createSoyBean } from "./seeds/soybean.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant } from "./field.js"


export const plantSeeds = (yearlyPlan) => {
    //how to iterate parent and child arrays
    for (const row of yearlyPlan) {
        for (const crop of row) {
            if (crop.includes("Asparagus")) {
                //invoke factory functions 
                const stinkyPee = createAsparagus()
                //to access array of grown in field 
                //call the addPlant function
                addPlant(stinkyPee)
            }
            else if (crop.includes("Corn")) {
                //invoke factory functions 
                const cornHole = createCorn()
                //to access array of grown in field 
                //call the addPlant function
                addPlant(cornHole)
            }
            else if (crop.includes("Potato")) {
                //invoke factory functions 
                const potatoHead = createPotato()
                  //to access array of grown in field 
                //call the addPlant function
                addPlant(potatoHead)
            }
            else if (crop === "Wheat") {
                //invoke factory functions 
                const wheatThins = createWheat()
                //to access array of grown in field 
                //call the addPlant function
                addPlant(wheatThins)
          
            }
            else if (crop.includes("Sunflower")) {
                //invoke factory functions 
                const sunShine = createSunFlower()
              
                  //to access array of grown in field 
                //call the addPlant function
                addPlant(sunShine)
             
            }
            else if (crop.includes("Soybean")) {
                //invoke factory functions 
                const soyMilk = createSoyBean()
                  //to access array of grown in field 
                //call the addPlant function
                addPlant(soyMilk)
            }
        }
    }
}

//take that seed and add it to the array of plants in field module 

