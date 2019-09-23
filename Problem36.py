# The decimal number, 585 = 10010010012 (binary), 
# is palindromic in both bases.

# Find the sum of all numbers, less than one million, 
# which are palindromic in base 10 and base 2.

# (Please note that the palindromic number, in either base, 
# may not include leading zeros.)

from stack import Stack

def isPalindrome(num):
    for i in range(len(num)//2):
        if num[i] != num[len(num) - i - 1]:
            return False
    return True

def isBinaryPalindrome(num):
    stacker = Stack()
    while num > 0:
        if num < 2:
            stacker.push('1')
        else:
            stacker.push(str(num % 2))
        num = num // 2
    binaryNumber = ""
    while not stacker.isEmpty():
        binaryNumber = binaryNumber + stacker.pop()
    return isPalindrome(binaryNumber)

def convertToBinary(num):
    stacker = Stack()
    while num > 0:
        if num < 2:
            stacker.push('1')
        else:
            stacker.push(str(num % 2))
        num = num // 2
    binaryNumber = ""
    while not stacker.isEmpty():
        binaryNumber = binaryNumber + stacker.pop()
    return binaryNumber

if __name__ == "__main__":
    counter = 0

    for i in range(0, 1000000):
        if isPalindrome(str(i)) and isBinaryPalindrome(i):
            print("******************************")
            print(i)
            print(convertToBinary(i))
            print("******************************")
            counter += i
    print(counter)