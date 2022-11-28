import { harvestPlants } from "./harvester.js"


export const catalog = (harvestedFoodArray) => {
    let catalogHTMLWrap = ''
    for (const food of harvestPlants()) {
        catalogHTMLWrap += `<section class="plant"> ${food.type}</section>`
    }
    return catalogHTMLWrap
}


//const magazine = catalog(harvestedFoodArray)

const magazine = catalog()
console.log(magazine)


const parentHTMLElement = document.querySelector(".messages")
parentHTMLElement.innerHTML = catalog()
