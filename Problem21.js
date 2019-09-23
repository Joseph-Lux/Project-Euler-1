/**
 * Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
 * If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.
 * 
 * Evaluate the sum of all the amicable numbers under 10000.
 */

 function isAmicable(number) {
    var divisorsOfNum = divisors(number)
    if(divisorsOfNum !== number && divisors(divisorsOfNum) === number)
            return true
    return false
 }

 function divisors(numb) {
    var divisorSum = 0 
    for(var x = 1; x <= numb/2; x++)
       if(numb % x === 0)
           divisorSum += x
    return divisorSum
 }



 var total = 0

 for(var c = 0; c < 10000; c++)
    if(isAmicable(c))
        total += c

console.log(total)