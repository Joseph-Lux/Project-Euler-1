/**
 * Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.
 */

function isAbundant(number) {
   var divisors = 0
   for(var s = 1; s <= number/2; s++)
      if(number%s === 0)
         divisors += s
   if(divisors > number)
      return true
   else return false
}

function hasAbundantAddition(number) {
   for(var possibleAddition = 1; possibleAddition < num/2 + 1; possibleAddition++)
      if(isAbundant(possibleAddition) && isAbundant(num - possibleAddition))
         return true
   return false
}

var total = 0
for(var num = 1; num <= 28123; num++)
   if(!hasAbundantAddition(num))
      total += num

console.log(total)



/**
 * Part Two. Oooo
 *
 * Well that's lame. This one works and my first one hasn't finished running...
 */

var tot = 0
var arrayOfAllNumbers = []
var arrayOfAllAbundantNumbers = []

for(var num = 1; num <= 28123; num++){
   arrayOfAllNumbers.push(true)
   if(isAbundant(num))
      arrayOfAllAbundantNumbers.push(num)
}

for(var d = 0; d < arrayOfAllAbundantNumbers.length; d++)
   console.log(arrayOfAllAbundantNumbers[d])


for(var numb = 0; numb < arrayOfAllAbundantNumbers.length; numb++)
   for(var numbTwo = numb; numbTwo < arrayOfAllAbundantNumbers.length; numbTwo++)
      arrayOfAllNumbers[arrayOfAllAbundantNumbers[numb] + arrayOfAllAbundantNumbers[numbTwo]] = false

for(var x = 0; x < arrayOfAllNumbers.length; x++){
   if(arrayOfAllNumbers[x]){
      tot += x
      console.log(x)
   }
}

console.log(tot)
