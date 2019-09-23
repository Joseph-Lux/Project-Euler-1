
/**
 * ProblemTwo
 * 
 * By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
 */

function fibo(firstTerm, secondTerm){
    var nextTerm = firstTerm + secondTerm

    if(nextTerm > 4000000)
        return 0
    if(nextTerm % 2 === 0)
        return nextTerm + fibo(secondTerm, nextTerm);
    else 
        return fibo(secondTerm, nextTerm);
}

console.log(fibo(1, 1))