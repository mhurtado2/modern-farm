//The one exception is corn. 
//The createCorn function should return an array with two identical objects in it
//Each with the proper keys and values


//create corn func
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

//call function
const cornHole = createCorn()
//console.log(cornHole)

/*
const whatIsCorn = () => {
    console.log(Array.isArray("corn"))
}

whatIsCorn()
*/