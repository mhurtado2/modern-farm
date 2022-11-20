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


const yearlyPlan = createPlan()
//console.log(yearlyPlan)

/*
const createAsparagus = () => {
    // create a stinky pee obj
    const asparagus = {
        type: "Asparagus",
        height: 24,
        output: 4
    }
    // return obj
    return asparagus
}
*/
const stinkyPee = createAsparagus()
console.log(stinkyPee)
/*
const createPotato = () => {
    // create a stinky pee obj
    const potato = {
        type: "Potato",
        height: 32,
        output: 2
    }
    // return obj
    return potato
}
*/
const potatoHead = createPotato()
console.log(potatoHead)

/*
const createWheat = () => {
    // create a stinky pee obj
    const wheat = {
        type: "Wheat",
        height: 230,
        output: 6
    }
    // return obj
    return wheat
}
*/
const wheatThins = createWheat()
console.log(wheatThins)
/*
const createSoyBean = () => {
    // create a stinky pee obj
    const soybean = {
        type: "SoyBean",
        height: 20,
        output: 4
    }
    // return obj
    return soybean
}
*/
const soyMilk = createSoyBean()
console.log(soyMilk)
/*
const createSunFlower = () => {
    // create a stinky pee obj
    const sunflower = {
        type: "Sunflower",
        height: 380,
        output: 3
    }
    // return obj
    return sunflower
}
*/
const sunShine = createSunFlower()
console.log(sunShine)
/*
const createCorn = () => {
    // create a stinky pee obj
    const corn = [
        {
            type: "Corn",
            height: 180,
            output: 3
        },
        {
            type: "Corn",
            height: 180,
            output: 3
        }
    ]
    // return obj
    return corn
}
*/
const cornHole = createCorn()
console.log(cornHole)
