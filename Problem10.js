/**
 * Find the sum of all the primes below two million.
 */

function isPrime(num){
    for(var x = 2; x < num; x++)
        if(num%x === 0)
            return false
    return true 
}

function nextPrime(num){
    var nextPrime = num+1
    while(true){
        if(isPrime(nextPrime))
            return nextPrime
        else 
            nextPrime++
    }
}

var total = 0;
var primer = 2;

while(primer < 2000000){
    total += primer
    primer = nextPrime(primer)
}

console.log(total)