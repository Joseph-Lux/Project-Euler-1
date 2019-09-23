
/**
 * Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
 */

 var sumSquares = 0
 var squareSum = 0

 for(var x = 0; x <= 100; x++)
    squareSum += x
 squareSum = Math.pow(squareSum, 2)

 for(var x = 0; x <= 100; x++)
    sumSquares += Math.pow(x, 2)
 
 console.log(squareSum - sumSquares)