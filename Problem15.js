
/**
 * Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.
 * 
 * How many such routes are there through a 20×20 grid?
 */

 var size = 20

 function choosePath(numDown, numRight) {
    if(numDown === size || numRight === size)
        return 1
    else return choosePath(numDown+1, numRight) + choosePath(numDown, numRight+1)
 }

 console.log(choosePath(0, 0))
