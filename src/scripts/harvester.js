


const harvestedFoodArray = []

export const harvestPlants = (plantsArray) => {


    for (const plant of plantsArray) {

        if (plant.type === "Corn") {
            for (let i = 0; i < plant.output/2; i++) {
                harvestedFoodArray.push(plant)
            }
        }
        else {
            for (let j = 0; j < plant.output; j++) {
                harvestedFoodArray.push(plant)
            }
        }
    }
    return harvestedFoodArray
}

