/**
 * Find the sum of the digits in the number 100!
 */

function multiplyByNumber(number, multiply) {
    var remainder = "0"
    var newNumber = ""
    var numNum = 0
    for(var c = number.length-1; c >= 0; c--){
       numNum = parseInt(number.charAt(c)) * multiply + parseInt(remainder)
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

var wordy = "1"
for(var x = 1; x <= 100; x++){
    wordy = multiplyByNumber(wordy, x)
}

console.log(addDigits(wordy))

