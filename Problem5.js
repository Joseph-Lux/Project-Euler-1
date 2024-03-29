
/**
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 * 
 * What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 */

 function isDivisible(num){
     for(var x = 2; x < 20; x++)
        if(num % x !== 0)
            return false
    return true
 }

 var flag = true
 var number = 19
 while(flag){
     number++
     if(isDivisible(number))
        flag = false
 }

 console.log(number)