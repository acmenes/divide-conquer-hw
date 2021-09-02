function findRotatedIndex(array, num) {
    let match = -1
    for (let x = 0; x < array.length; x++) {
        console.log(array[x])
        if (array[x] === num) {
            match = array.indexOf(array[x])
            console.log(`match is ${match}`)
            return match;
        }
    }
    return match;
}

module.exports = findRotatedIndex