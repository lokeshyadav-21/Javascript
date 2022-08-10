// 1. Create an array to store colors of a rainbow and display the result using a loop.
const array = ["RED", "GREEN", "BLUE", "WHITE", "YELLOW", "BLACK", "VOILET"]
function colourFunction(res) {
    for (let index = 0;index < array.length ; index++) {
        
        console.log(res[index])
    }
}

colourFunction(array);