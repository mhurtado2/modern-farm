console.log("Welcome to the main module")



import { createPlan } from "./plan.js"
/*
import { createCorn} from "./seeds/corn.js"
import { createAsparagus} from "./seeds/asparagus.js"
import { createPotato} from "./seeds/potato.js"
import { createSunFlower} from "./seeds/sunflower.js"
import { createSoyBean} from "./seeds/soybean.js"
import { createWheat} from "./seeds/wheat.js"
import { addPlant } from "./field.js"
*/

import { plantSeeds } from "./tractor.js"
import { usePlants } from "./field.js"
import { harvestPlants } from "./harvester.js"
import { catalog } from "./catalog.js"

const yearlyPlan = createPlan()
//console.log(yearlyPlan)
/*

const stinkyPee = createAsparagus()
//console.log(stinkyPee)

const potatoHead = createPotato()
//console.log(potatoHead)

const wheatThins = createWheat()
//console.log(wheatThins)

const soyMilk = createSoyBean()
//console.log(soyMilk)

const sunShine = createSunFlower()
//console.log(sunShine)

const cornHole = createCorn()
//console.log(cornHole)

const plantsAdded1 = addPlant(cornHole)
//console.log(plantsAdded1)
const plantsAdded2 = addPlant(stinkyPee)
//console.log(plantsAdded2)
const plantsAdded3 = addPlant(potatoHead)
//console.log(plantsAdded3)
const plantsAdded4 = addPlant(sunShine)
//console.log(plantsAdded4)
const plantsAdded5 = addPlant(soyMilk)
//console.log(plantsAdded5)
const plantAdded6 = addPlant(wheatThins)
//console.log(plantAdded6)
*/

plantSeeds(yearlyPlan)

const plantsUsed = usePlants()
console.log(plantsUsed)


const harvested = harvestPlants(plantsUsed)
console.log(harvested)

const parentHTMLElement = document.querySelector(".messages")
parentHTMLElement.innerHTML = catalog(harvested)

