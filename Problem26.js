/**
 * Find the value of d < 1000 for which 1/d contains the longest recurring cycle in its decimal fraction part.
 * 
 * This will not work if there is a pattern that repeats within a pattern or if there are two leading values that are the same
 * 
 * For example it sees 0.00123123123 as having a recurrance of 1 and 0.1123232323 as having a recurrance of 1 as well. 
 */

function lengthOfRecurrance(num){
    let start = 0
    let end = 0

    while(start < num.length - 1){
        if(nextIsRecurring(start, end, num))
            return end - start
        else{
            if(end >= num.length/2){
                start++
                end = start
            }else
                end++
        }
    }
    return 0
}

function nextIsRecurring(start, end, string){
    for(let f = 0; f <= end - start; f++){
        if(end + f + 1 > string.length)
            return false
        if(string.charAt(start + f) != string.charAt(end + 1 + f))
            return false
    }
    return true
}

var tempLengthOfRecurrance = 0
var greatestLengthOfRecurrance = 0
var indexOfGreatestLengthOfRecurrance = 0
let replaceValue = "0."
for(let c = 2; c < 1000; c++){
    if(c === 100)
        replaceValue = "0.00"
    tempLengthOfRecurrance = lengthOfRecurrance(stringDecimalDivision(c).replace(replaceValue, ''))
    
    if(tempLengthOfRecurrance > greatestLengthOfRecurrance){
        greatestLengthOfRecurrance = tempLengthOfRecurrance
        indexOfGreatestLengthOfRecurrance = c
    }
}

function stringDecimalDivision(divisor){
    let remainder = 10
    let stringy = "0."
    let number = 0
    for(let decimalPlace = 0; decimalPlace < 3000; decimalPlace++){
        number = parseInt(remainder/divisor)
        stringy += number
        remainder = (remainder - divisor * number) * 10
        if(remainder === 0)
            break
    }
    return stringy
}

console.log(indexOfGreatestLengthOfRecurrance)
console.log(greatestLengthOfRecurrance)