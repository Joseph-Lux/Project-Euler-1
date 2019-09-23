
/**
 * 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
 * 
 * What is the sum of the digits of the number 2^1000?
 */


 function multiplyByTwo(number) {
     var remainder = "0"
     var newNumber = ""
     var numNum = 0
     for(var c = number.length-1; c >= 0; c--){
        numNum = parseInt(number.charAt(c)) * 2 + parseInt(remainder)
        newNumber = String(numNum%10) + newNumber
        remainder = String((numNum - (numNum % 10))/10)
     }

     if(remainder > 0)
        newNumber = remainder + newNumber

     return newNumber

 }

 function addDigits(numb) {
     var total = 0
     for(var d = 0; d < numb.length; d++)
        total += parseInt(numb.charAt(d));
    return total
 }

 var numer = "1"

 console.log(multiplyByTwo(numer))

 for(var x = 0; x < 1000; x++){
    numer = multiplyByTwo(numer)
 }

 console.log(numer)

 console.log(addDigits(numer))