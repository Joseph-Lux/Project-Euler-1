/**
 * Find the maximum total from top to bottom of the triangle below:
 * 
 * Brute Force Method
 */

var fs = require('fs');
fs.readFile("MaximumPathSumOne.txt", 'utf8', function(err, data) {
   if (err) throw err;

   var nums = [[]]
   var row = 0
   var charAtPosition
   for(var x = 0; x < data.length; x++){
       charAtPosition = data.charAt(x)
       if(charAtPosition === "\n"){
            nums.push([])
            row++
       }else if(charAtPosition === " "){
            
       }else{
            nums[row].push(data.substr(x, 2))
            x++
       }
   }

   var greatestPath = 0

   for(var a = 0; a < 2; a++)
    for(var b = 0; b < 2; b++)
        for(var c = 0; c < 2; c++)
            for(var d = 0; d < 2; d++)
                for(var e = 0; e < 2; e++)
                    for(var f = 0; f < 2; f++)
                        for(var g = 0; g < 2; g++)
                            for(var h = 0; h < 2; h++)
                                for(var i = 0; i < 2; i++)
                                    for(var j = 0; j < 2; j++)
                                        for(var j = 0; j < 2; j++)
                                            for(var k = 0; k < 2; k++)
                                                for(var l = 0; l < 2; l++)
                                                    for(var m = 0; m < 2; m++)
                                                        for(var n = 0; n < 2; n++)
                                                            if((parseInt(nums[0][0]) + parseInt(nums[1][a]) + parseInt(nums[2][a+b]) + parseInt(nums[3][a+b+c]) + parseInt(nums[4][a+b+c+d]) + parseInt(nums[5][a+b+c+d+e]) + parseInt(nums[6][a+b+c+d+e+f]) + parseInt(nums[7][a+b+c+d+e+f+g]) + parseInt(nums[8][a+b+c+d+e+f+g+h]) + parseInt(nums[9][a+b+c+d+e+f+g+h+i]) + parseInt(nums[10][a+b+c+d+e+f+g+h+i+j]) + parseInt(nums[11][a+b+c+d+e+f+g+h+i+j+k]) + parseInt(nums[12][a+b+c+d+e+f+g+h+i+j+k+l]) + parseInt(nums[13][a+b+c+d+e+f+g+h+i+j+k+l+m]) + parseInt(nums[14][a+b+c+d+e+f+g+h+i+j+k+l+m+n])) > greatestPath)
                                                                greatestPath = parseInt(nums[0][0]) + parseInt(nums[1][a]) + parseInt(nums[2][a+b]) + parseInt(nums[3][a+b+c]) + parseInt(nums[4][a+b+c+d]) + parseInt(nums[5][a+b+c+d+e]) + parseInt(nums[6][a+b+c+d+e+f]) + parseInt(nums[7][a+b+c+d+e+f+g]) + parseInt(nums[8][a+b+c+d+e+f+g+h]) + parseInt(nums[9][a+b+c+d+e+f+g+h+i]) + parseInt(nums[10][a+b+c+d+e+f+g+h+i+j]) + parseInt(nums[11][a+b+c+d+e+f+g+h+i+j+k]) + parseInt(nums[12][a+b+c+d+e+f+g+h+i+j+k+l]) + parseInt(nums[13][a+b+c+d+e+f+g+h+i+j+k+l+m]) + parseInt(nums[14][a+b+c+d+e+f+g+h+i+j+k+l+m+n])


   console.log(greatestPath)       
 });
