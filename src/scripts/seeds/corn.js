
//when you remake your modern farm, you could push the objects 
//onto type instead of making new array


export const createCorn = () => {
    // create a  2 corn obj
    // 3 properties: type, height, output 
    const corn = [

        {
            type: "Corn",
            height: 180,
            output: 6
        },
        {
            type: "Corn",
            height: 180,
            output: 6
        }
    ]
    // return obj
    return corn
}


const cornHole = createCorn()
console.log(cornHole)