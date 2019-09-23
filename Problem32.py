# We shall say that an n-digit number is pandigital if it makes use 
# of all the digits 1 to n exactly once; for example, the 5-digit 
# number, 15234, is 1 through 5 pandigital.
#
# The product 7254 is unusual, as the identity, 39 × 186 = 7254, 
# containing multiplicand, multiplier, and product is 1 through 9 
# pandigital.
#
# Find the sum of all products whose multiplicand/multiplier/product 
# identity can be written as a 1 through 9 pandigital.
#
# HINT: Some products can be obtained in more than one way so be sure 
# to only include it once in your sum.

allPandigital = []

def isPandigital(numOne, numTwo, product):
    if product not in allPandigital:
        string = str(numOne) + str(numTwo) + str(product)
        if ''.join(sorted(string)) == "123456789":
            print("******************************************")
            print(numOne, " * ", numTwo, " = ", product)
            allPandigital.append(product)

for i in range(10, 100):
    for t in range(100, 1000):
        isPandigital(i, t, i * t)

for i in range(1, 10):
    for t in range(1000, 10000):
        isPandigital(i, t, i*t)


print(allPandigital)
print(sum(allPandigital))

# ##############################
# # Other way                  #
# ##############################

import itertools

solutions = set()

for i in itertools.permutations("123456789", 9):
    i = ''.join(i)
    for firstIndex in range(1, 7):
        for secondIndex in range(1, 9-firstIndex):
            if int(i[:firstIndex]) * int(i[firstIndex:secondIndex+firstIndex]) == int(i[secondIndex+firstIndex:]):
                print(int(i[:firstIndex]), " * ", int(i[firstIndex:secondIndex+firstIndex]), " = ", int(i[secondIndex+firstIndex:]))
                solutions.add(int(i[5:]))
print(solutions)
print(sum(solutions))


#######################

# import itertools
# answers = set()
# alist = [''.join(pair) for pair in itertools.permutations('123456789*=',11)]
# for pair in alist:
#     if 0 < pair.index('=') < 10 and eval(pair.split('=')[0]) == eval(pair.split('=')[1]):
#         answers.add(eval(pair.split('=')[0]))
# print(sum(answers))