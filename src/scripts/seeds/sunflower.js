
// dont forgot to export
//create sunflower func

export const createSunFlower = () => {
    // create sunflower obj
    // 3 properties: type, height, output
    const sunflower = {
        type: "Sunflower",
        height: 380,
        output: 3
    }
    // return obj
    return sunflower
}

//call func
const sunShine = createSunFlower()
console.log(sunShine)