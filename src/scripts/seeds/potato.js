
export const createPotato = () => {
    // create a stinky pee obj
    const potato = {
        type: "Potato",
        height: 32,
        output: 2
    }
    // return obj
    return potato
}

const potatoHead = createPotato()
console.log(potatoHead)

//module.exports { createPotato }