/**
 * How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?
 */

 var numberSundays = 0


 function isSunday(year, month) {
    var monthMod = 0
    if(month === 1 || month === 10)
        monthMod = 1
    else if(month === 2 || month === 3 || month === 11)
        monthMod = 4
    else if(month === 4 || month === 7)
        monthMod = 0
    else if(month === 5)
        monthMod = 2
    else if(month === 6)
        monthMod = 5
    else if(month === 8)
        monthMod = 3
    else if(month === 9 || month === 12)
        monthMod = 6

    if(month === 1 || month === 2)
        if(year % 4 === 0)
            monthMod--
    
    if((year + parseInt(year/4) + monthMod + 1) % 7 === 1)
        return true
    else return false
 }
 
 for(var y = 1; y <= 100; y++)
    for(var m = 1; m <= 12; m++)
        if(isSunday(y, m))
            numberSundays++
     

console.log(numberSundays)
