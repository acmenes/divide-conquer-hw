function sortedFrequency(array, num) {
    let numCount = 0
    for (let x = 0; x < array.length; x++) {
        if (array[x] === num) {
            numCount++
        }
    }
    if (numCount === 0) {
        numCount = -1
    }
    return numCount;
}

module.exports = sortedFrequency