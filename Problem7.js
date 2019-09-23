
/**
 * What is the 10 001st prime number?
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

 var primer = 2;
 for(var x = 1; x < 10001; x++)
    primer = nextPrime(primer)

 console.log(primer)
