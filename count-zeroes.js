// Given an array of 1s and 0s which has all 1s first 
// followed by all 0s, write a function called countZeroes, 
// which returns the number of zeroes in the array.

// Examples
// countZeroes([1,1,1,1,0,0]) // 2
// countZeroes([1,0,0,0,0]) // 4
// countZeroes([0,0,0]) // 3
// countZeroes([1,1,1,1]) // 0

/// this solution is probably not O(n)
function countZeroes(array) {
  let zeroesCount = 0
  for (let x = 0; x < array.length; x++) {
    if (array[x] === 0) {
      zeroesCount++
    }
  }
  return zeroesCount;
}

module.exports = countZeroes