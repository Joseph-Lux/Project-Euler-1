
/**
 * If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
 * 
 * If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?
 */



 function getFirstDigitName(num) {
     if(num === 0)
        return ""
     if(num === 1 || num === 2 || num === 6)
        return "one"
     if(num === 4 || num === 5 || num === 9)
        return "four"
     if(num === 3 || num === 7 || num === 8)
        return "three"
 }

 function getTeen(num){
    if(num === 0)
        return "ten"
    if(num === 1 || num === 2)
        return "eleven"
    if(num === 3 || num === 4 || num === 8 || num === 9)
        return "thirteen"
    if(num === 5 || num === 6)
        return "fifteen"
    if(num === 7)
        return "seventeen"
 }

 function getSecondDigitName(tens, ones) {
    if(tens === 1)
        return getTeen(ones)
    if(tens === 2 || tens === 3 || tens === 8 || tens === 9)
        return "twenty" + getFirstDigitName(ones)
    if(tens === 4 || tens === 5 || tens === 6)
        return "forty" + getFirstDigitName(ones)
    if(tens === 7)
        return "seventy" + getFirstDigitName(ones) 
 }

 function getThirdDigitName(hundreds, tens, ones) {
     var third = ""
     third = getFirstDigitName(hundreds) + "hundred"
     if(tens !== 0) 
        third += "and" + getSecondDigitName(tens, ones)
     else if(ones !== 0)
        third += "and" + getFirstDigitName(ones)

     return third
 }

 function getName(hunds, tns, ons){
     if(hunds !== 0)
         return getThirdDigitName(hunds, tns, ons)
     else if (tns !== 0)
         return getSecondDigitName(tns, ons)
     else return getFirstDigitName(ons)
 }

 var total = 0
 var wordsy = ""
 for(var x = 1; x < 1000; x++){
    wordsy = getName((x - (x%100))/100, ((x%100) - (x%10))/10, x%10)
    total += wordsy.length
 }

 total += 11

 console.log(total)