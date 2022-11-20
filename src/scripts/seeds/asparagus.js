
// dont forget to export it new way
//export 

export const createAsparagus = () => {
    // create a stinky pee obj
    const asparagus = {
        type: "Asparagus",
        height: 24,
        output: 4
    }
    // return obj
    return asparagus
}

// call func
const stinkyPee = createAsparagus()
console.log(stinkyPee)

//module.exports { createAsparagus }
