
/**
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * 
 * What is the largest prime factor of the number 600851475143 ?
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

function nextPrimeFactor(num){
    var factor = 2;
    while(true){
        if(num % factor === 0)
            return factor
        factor = nextPrime(factor);   
    }
}

function largestPrimeFactor(num) {
    var nextFactor = nextPrimeFactor(num)
    if(num === nextFactor)
        return num
    else
        return largestPrimeFactor(num/nextFactor)
}

console.log(largestPrimeFactor(600851475143))