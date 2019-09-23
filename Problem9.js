/**
 * There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 * Find the product abc.
 */

 function isInteger(num) {
     if(num === parseInt(num, 10)) return true
     else return false
 }

 function isPythagorean(numOne, numTwo) {
     if(isInteger(Math.sqrt(numOne*numOne + numTwo*numTwo))) return true
     else return false
 }

 function addsToThousand(numberOne, numberTwo) {
     if(numberOne + numberTwo + Math.sqrt(numberOne*numberOne + numberTwo*numberTwo) === 1000) return true
     else return false
 }

 for(var a = 1; a < 500; a++)
    for(var b = 1; b < 500; b++)
        if(isPythagorean(a, b) && addsToThousand(a, b))
            console.log(a * b * Math.sqrt(a*a + b*b))

