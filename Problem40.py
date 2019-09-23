# An irrational decimal fraction is created by concatenating the positive integers:

# 0.123456789101112131415161718192021...

# It can be seen that the 12th digit of the fractional part is 1.

# If dn represents the nth digit of the fractional part, find the value of the following expression.

# d1 × d10 × d100 × d1000 × d10000 × d100000 × d1000000

def findNthDigit(n):
    
    index = 1
    num = "1"
    while index + len(num) <= n:
        index += len(num)
        num = str(int(num) + 1)
    return int(num[n - index])

if __name__ == "__main__":
    print(findNthDigit(1) * findNthDigit(10) * findNthDigit(100) * findNthDigit(1000) * findNthDigit(10000) * findNthDigit(100000) * findNthDigit(1000000))

