/**
 * What is the index of the first term in the Fibonacci sequence 
 * to contain 1000 digits? 
 * 
 * F1 = 1
 * F2 = 1
 * F3 = 2
 * F4 = 3
 */

function addStringNumbers(numbOne, numbTwo) {
    var remainder = "0"
    var newNumber = ""
    var numNum = 0
    for(var x = 1; x <= numbOne.length; x++){
        numNum = parseInt(numbOne.charAt(numbOne.length - x)) + parseInt(numbTwo.charAt(numbTwo.length - x)) + parseInt(remainder)
        newNumber = String(numNum % 10) + newNumber
        remainder = String((numNum - (numNum % 10))/10)
    }

    if(numbOne.length < numbTwo.length){
        numNum = parseInt(numbTwo.charAt(0)) + parseInt(remainder)
        newNumber = String(numNum % 10) + newNumber
        remainder = String((numNum - (numNum % 10))/10)
    }

    if(remainder > 0)
        newNumber = remainder + newNumber
    
    return newNumber
}

var nummy = "1"
var previousNummy = "1"
var temp = ""
var count = 2

while(nummy.length < 1000){
    temp = nummy
    nummy = addStringNumbers(previousNummy, nummy)
    count++
    previousNummy = temp
    
}
console.log(count)