/**
 * Euler discovered the remarkable quadratic formula:
 * n^2+n+41
 * 
 * It turns out that the formula will produce 40 primes for the consecutive 
 * integer values 0≤n≤39.
 * However, when n=40,40^2+40+41=40(40+1)+41 is divisible by 41, 
 * and certainly when n=41,41^2+41+41 is clearly divisible by 41.
 * 
 * The incredible formula n^2−79n+1601 was discovered, 
 * which produces 80 primes for the consecutive values 0≤n≤79.
 * The product of the coefficients, −79 and 1601, is −126479.
 * 
 * Considering quadratics of the form:
 * n^2+an+b, where |a|<1000 and |b|≤1000
 * 
 * Find the product of the coefficients, a and b, 
 * for the quadratic expression that produces the maximum number of primes 
 * for consecutive values of n, starting with n=0.
 * 
 * Thoughts: 
 * b must be prime because at n=0, the other terms are 0.
 * a must be less than b when negative because at n = 1, 
 * b-a+1 must be prime
 */

function isPrime(num){
    if(num < 2)
        return false
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

let highestA = 0;
let highestB = 0;
let n = 0;
let highestConsecutiveCount = 0;

for(let b = 2; b < 1000; b = nextPrime(b)){
    for(let a = -(b-1); a < 1000; a++){
        while(isPrime(n*n+a*n+b)){
            //console.log(n*n+a*n+b);
            n++;
        }
        if(n > highestConsecutiveCount){
            highestConsecutiveCount = n;
            highestA = a;
            highestB = b;
        }
        n=0;
    }
}

console.log(highestConsecutiveCount);
console.log(highestA);
console.log(highestB);
console.log(highestA*highestB);
