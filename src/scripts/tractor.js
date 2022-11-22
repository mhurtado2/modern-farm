
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

const yearlyPlan = createPlan()
//console.log(yearlyPlan)
//define and export plantSeeds function 
// must accept planting years pla
//n as parameter or input 

const plants = []


//func must accept plan as param // plan is an array
export const plantSeeds = (plan) => {
    //iterate the through the rows of food
    for (const plan of createPlan()) {
        //as you iterate through food types
        //the plan is an array
        //how to iterate parent and child arrays
        for (const row of createPlan()) {

            for (const crop of types) {

                if (crop === "Asparagus") {
                    //invoke factory functions 
                    const stinkyPee = createAsparagus()
                    plants.push(crop)
                }
                if (crop === "Corn") {
                    //invoke factory functions 
                    const cornHole = createCorn()
                    plants.push(crop)
                }
                if (crop === "Potato") {
                    //invoke factory functions 
                    const potatoHead = createPotato()
                    plants.push(crop)
                }
                if (crop === "Wheat") {
                    //invoke factory functions 
                    const wheatThins = createWheat()
                    plants.push(crop)
                }
                if (crop === "Sunflower") {
                    //invoke factory functions 
                    const sunShine = createSunFlower()
                    plants.push(crop)
                }
                if (crop === "Soybean") {
                    //invoke factory functions 
                    const soyMilk = createSoyBean()
                    plants.push(crop)
                }
            }
        }
    }
    return plants
}

const plantThemSeeds = plantSeeds()
console.log(plantThemSeeds)



// first way i tried it without iterating through row 
/*
export const plantSeeds = (plan) => {
    //iterate the through the rows of food
    for (const plan of createPlan()) {
        //as you iterate through food types
        //the plan is an array
        //how to iterate parent and child arrays
        for (const crop of types) {

            if (crop === "Asparagus") {
                //invoke factory functions 
                const stinkyPee = createAsparagus()
                plants.push(crop)
            }
            if (crop === "Corn") {
                //invoke factory functions 
                const cornHole = createCorn()
                plants.push(crop)
            }
            if (crop === "Potato") {
                //invoke factory functions 
                const potatoHead = createPotato()
                plants.push(crop)
            }
            if (crop === "Wheat") {
                //invoke factory functions 
                const wheatThins = createWheat()
                plants.push(crop)
            }
            if (crop === "Sunflower") {
                //invoke factory functions 
                const sunShine = createSunFlower()
                plants.push(crop)
            }
            if (crop === "Soybean") {
                //invoke factory functions 
                const soyMilk = createSoyBean()
                plants.push(crop)
            }
        }
    }
    return plants
}

*/


