
/**
 * Work out the first ten digits of the sum of the following one-hundred 50-digit numbers.
 */

 var fs = require('fs');
 fs.readFile("fiftyDigitNumbers.txt", 'utf8', function(err, data) {
    if (err) throw err;

    var nums = []
    for(var x = 0; x < 100; x++){
        nums.push([])
        for(var y = 0; y < 50; y++){
            nums[x].push(data.charAt(x*51+y))
        }
    }

    var sum = []
    var remainder = 0
    var total = 0

    for(var x = 0; x < 50; x++){
        for(var y = 0; y < 100; y++)
            total += parseInt(nums[y][49-x])
        total += remainder
        console.log(total)
        sum[x] = total % 10
        remainder = (total - (total % 10))/10
        total = 0
    }
    sum[50] = remainder

    for(var f = 50; f >= 0; f--)
        process.stdout.write(sum[f] + "")
    console.log()
  });

  

  
 