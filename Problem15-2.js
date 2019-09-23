
/**
 * Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.
 * 
 * How many such routes are there through a 20×20 grid?
 * 
 * ^Redone
 */

 function getSum(num) {
     var nums = []
     var coefficients = []
     var total = num + 1

     for(var p = 0; p < num; p++){
        nums[p] = p + 1
        coefficients[p] = 1
     }
     
     for(var x = 2; x <= num; x++){
        for(var f = 0; f < num; f++)
            total += nums[f] * coefficients[f]
        for(var g = 0; g < num-1; g++)
            for(var h = g + 1; h < num; h++)
                coefficients[g] += coefficients[h]
     }

     return total
 }

 console.log(getSum(20))
