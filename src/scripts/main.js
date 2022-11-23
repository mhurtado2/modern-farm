console.log("Welcome to the main module")

/*
const { createPlan } = require("./plan.js")
const { createCorn} = require("./seeds/corn.js")
const { createAsparagus} = require("./seeds/asparagus.js")
const { createPotato} = require("./seeds/potato.js")
const { createSunFlower} = require("./seeds/sunflower.js")
const { createSoyBean} = require("./seeds/soybean.js")
const { createWheat} = require("./seeds/wheat.js")
*/

import { createPlan } from "./plan.js"
import { createCorn} from "./seeds/corn.js"
import { createAsparagus} from "./seeds/asparagus.js"
import { createPotato} from "./seeds/potato.js"
import { createSunFlower} from "./seeds/sunflower.js"
import { createSoyBean} from "./seeds/soybean.js"
import { createWheat} from "./seeds/wheat.js"
import { addPlant } from "./field.js"
import { usePlants } from "./field.js"
import { types } from "./plan.js"
import { plantSeeds } from "./tractor.js"
//import { harvestPlants } from "./harvester.js"

const yearlyPlan = createPlan()
console.log(yearlyPlan)


const stinkyPee = createAsparagus()
console.log(stinkyPee)

const potatoHead = createPotato()
console.log(potatoHead)

const wheatThins = createWheat()
console.log(wheatThins)

const soyMilk = createSoyBean()
console.log(soyMilk)

const sunShine = createSunFlower()
console.log(sunShine)

const cornHole = createCorn()
console.log(cornHole)

const plantsAdded = addPlant()
console.log(plantsAdded)

const plantsUsed = usePlants()
console.log(plantsUsed)



