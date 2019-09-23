# 145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.
# Find the sum of all numbers which are equal to the sum of the factorial of their digits.
# Note: as 1! = 1 and 2! = 2 are not sums they are not included.

factorials = {'0':1}

def factorial(num):
    total = 1
    for r in range(1, num + 1):
        total *= r
    return total

for i in range(1, 10):
    factorials[str(i)] = factorial(i)

def findFactorialSum(num):
    total = 0
    stringNum = str(num)
    for digit in stringNum:
        total += factorials[digit]
    return total

total = 0

for i in range(10, 10000000):
    if i == findFactorialSum(i):
        total += i

print(total)