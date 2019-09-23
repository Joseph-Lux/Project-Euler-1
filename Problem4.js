

/**
 * A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
 * 
 * Find the largest palindrome made from the product of two 3-digit numbers.
 */

 function isPalindrome(num){
    var stringy = String(num)
    for(var x = 0; x < stringy.length; x++)
        if(stringy.charAt(x) !== stringy.charAt(stringy.length - 1 - x))
            return false
    return true
 }

 var highestPalindrome = 0;

 for(var c = 100; c < 1000; c++){
    for(var y = 100; y < 1000; y++){
        if(isPalindrome(c*y) && c*y > highestPalindrome){
            highestPalindrome = c*y
        }
    }
 }

 console.log(highestPalindrome);
