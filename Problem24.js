/**
 * A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:

012   021   102   120   201   210

What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?
 */

var digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

function findNextPermutation(nums){
    var newArray = []
    var lowFrom = 0
    var lowTo = 0
    var flag = true
    var index = nums.length - 2

    while(lowTo === 0 && index >= 0){
        if(nums[index] < nums[index+1])
            lowTo = index
        index--
    }
    
    index = nums.length - 1
    while(lowFrom === 0 && index >= lowTo){
        if(nums[index] > nums[lowTo])
            lowFrom = index
        index--
    }

    for(var y = 0; y < lowTo; y++)
        newArray.push(nums[y])

    newArray.push(nums[lowFrom])

    for(var c = nums.length - 1; c >= lowTo; c--){
        if(c !== lowFrom){
            if(nums[lowTo] < nums[c] && flag){
                newArray.push(nums[lowTo])
                flag = false
            } 
            if(c !== lowTo || flag)
                newArray.push(nums[c])
        }
    }

    return newArray;
}



for(var x = 0; x < 999999; x++){
    digits = findNextPermutation(digits)
}
console.log(digits)
