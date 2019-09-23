# Written with Python3
################################################


# In England the currency is made up of pound, £, and pence, p, 
# and there are eight coins in general circulation:
#  1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p).
# It is possible to make £2 in the following way:
#  1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p
# How many different ways can £2 be made using any number of coins?



################################################
# Split method                                 #
################################################

# All possible numbers
coins = [200, 100, 50, 20, 10, 5, 2, 1]
numWays = 0

# List to store possibilities
""" myCoins = [200]



numWays = 0

index = 0

def breakUpFrom(index, array):
    indexStart = len(array) - 1
    while index

def breakUp(index, array):
    total = array.pop(index)
    indexOfCoins = coins.index(total) + 1

    while total > 0:
        for i in range(indexOfCoins, len(coins)):
            if coins[i] <= total:
                array.insert(index, coins[i])
                index += 1
                total -= coins[i]
                break
    
    count += 1 """


################################################
# Combine method                               #
################################################

def maxVal(tot, lastVal):
    global coins
    for i in coins:
        if i <= tot and i <= lastVal:
            return i
    return 0

def nextVal(currentVal):
    if currentVal == 1:
        return 0
    else:
        global coins
        return coins[coins.index(currentVal) + 1]

def findNextValue(total, lastValue):
    if total == 0:
        global numWays
        numWays += 1 
    else:
        maximumValue = maxVal(total, lastValue)

        while(maximumValue >= 1):
            findNextValue(total-maximumValue, maximumValue)
            maximumValue = nextVal(maximumValue)

        
summer = 200
findNextValue(summer, summer + 1)
print(numWays)