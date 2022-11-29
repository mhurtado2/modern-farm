


export const catalog = (foodArray) => {
    let catalogHTMLWrap = ''
    for (const food of foodArray) {
        catalogHTMLWrap += `<section class="plant"> ${food.type}</section>`
    }
    return catalogHTMLWrap
}




