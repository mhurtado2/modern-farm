



export const harvestPlants = (plantsArray) => {

    const harvestedFoodArray = []

    for (const plant of plantsArray) {

        if (plant.type.includes("Corn")) {
            for (let i = 0; i < plant.output / 2; i++) {
                harvestedFoodArray.push(plant)
            }
        }
        else {
            for (let i = 0; i < plant.output; i++) {
                harvestedFoodArray.push(plant)
            }
        }
    }
    return harvestedFoodArray
}

