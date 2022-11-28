
//import createPlan

import { createPlan, types } from "./plan.js"
import { createCorn } from "./seeds/corn.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createPotato } from "./seeds/potato.js"
import { createSunFlower } from "./seeds/sunflower.js"
import { createSoyBean } from "./seeds/soybean.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant } from "./field.js"
import { usePlants } from "./field.js"

const grownInField = []

//console.log(yearlyPlan)
//define and export plantSeeds function 
// must accept planting years pla
//n as parameter or input 



export const plantSeeds = (yearlyPlan) => {
    //iterate the through the rows of for
    //for (const plan of createPlan()) {
        //for (const grownInField of addPlant()) {

            //as you iterate through food types
            //the plan is an array
            //how to iterate parent and child arrays

//should you add in the plants function instead of types
            for (const crop of types) {

                if (crop === "Asparagus") {
                    //invoke factory functions 
                    const stinkyPee = createAsparagus()
                    //const plantsAdded = addPlant()
                    grownInField.push(stinkyPee)
                }
                if (crop === "Corn") {
                    //invoke factory functions 
                    const cornHole = createCorn()

                    //const plantsAdded = addPlant()
                    grownInField.push(cornHole)
                }
                if (crop === "Potato") {
                    //invoke factory functions 
                    const potatoHead = createPotato()
                    grownInField.push(potatoHead)
                }
                if (crop === "Wheat") {
                    //invoke factory functions 
                    const wheatThins = createWheat()

                    //const plantsAdded = addPlant()
                    grownInField.push(wheatThins)
                }
                if (crop === "Sunflower") {
                    //invoke factory functions 
                    const sunShine = createSunFlower()

                    //const plantsAdded = addPlant()
                    grownInField.push(sunShine)
                }
                if (crop === "Soybean") {
                    //invoke factory functions 
                    const soyMilk = createSoyBean()

                    //const plantsAdded = addPlant()
                    grownInField.push(soyMilk)
                }
            }
            return grownInField
        }
    


const plantThemSeeds = plantSeeds()
console.log(plantThemSeeds)


//corn is an array here 
const whatIsCorn = () => {
    console.log(Array.isArray(grownInField[1]))
}

whatIsCorn()
