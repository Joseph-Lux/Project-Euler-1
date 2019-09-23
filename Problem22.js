/**
 * begin by sorting it into alphabetical order.
 * Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.
 *
 * For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the
 * list. So, COLIN would obtain a score of 938 × 53 = 49714.
 *
 * What is the total of all the name scores in the file?
 */

var fs = require('fs');

fs.readFile("Names.txt", "utf8", function(err, data) {
   if(err) throw err

   var stringy = ""
   for(var x = 0; x < data.length; x++){
      if(data.charAt(x) !== "\"")
         stringy += data.charAt(x)
   }

   fs.writeFile("Names.txt", stringy, function(err){
      if(err){
         return console.log(err)
      }
   });

   fs.readFile("Names.txt", "utf8", function(err, data){
      if(err) throw err

      var names = []
      var name = ""

      for(var x = 0; x < data.length; x++){
         if(data.charAt(x) === ","){
            names.push(name)
            name = ""
         } else {
            name += data.charAt(x)
         }
      }
      names.push(name)

      var newNames = mergeSort(names)

      var tot = 0

      for(var y = 0; y < newNames.length; y++)
         tot += (y+1) * getValueOfLetters(newNames[y])

      console.log(tot)
   });
});

function mergeSort(array) {
   if(array.length === 1)
      return array
   var newArrOne = []
   var newArrTwo = []
   var mid = parseInt(array.length/2)

   for(var g = 0; g < mid; g++)
      newArrOne.push(array[g])
   for(var h = mid; h < array.length; h++)
      newArrTwo.push(array[h])

   return merge(mergeSort(newArrOne), mergeSort(newArrTwo))
}

function merge(arrayOne, arrayTwo) {
   var newArray = []
   var indexOfNewArray = 0
   var indexOfArrayOne = 0
   var indexOfArrayTwo = 0

   for(var t = 0; t < arrayOne.length + arrayTwo.length; t++){
      if(indexOfArrayOne === arrayOne.length){
         newArray[t] = arrayTwo[indexOfArrayTwo]
         indexOfArrayTwo++
      } else if(indexOfArrayTwo === arrayTwo.length){
         newArray[t] = arrayOne[indexOfArrayOne]
         indexOfArrayOne++
      } else if(nameIsGreaterThan(arrayOne[indexOfArrayOne], arrayTwo[indexOfArrayTwo])){
         newArray[t] = arrayTwo[indexOfArrayTwo]
         indexOfArrayTwo++
      } else{
         newArray[t] = arrayOne[indexOfArrayOne]
         indexOfArrayOne++
      }
   }
   return newArray
}

function nameIsGreaterThan(nameOne, nameTwo) {
   for(var x = 0; x < nameOne.length; x++){
      if(x < nameTwo.length){
         if(nameOne.charCodeAt(x) > nameTwo.charCodeAt(x))
            return true
         else if(nameTwo.charCodeAt(x) > nameOne.charCodeAt(x))
            return false
      } else
         return true
   }
   return false
}

function getValueOfLetters(word) {
   var total = 0
   for(var o = 0; o < word.length; o++)
      total += word.charCodeAt(o) - 64
   return total
}