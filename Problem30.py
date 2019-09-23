import math

def fifthPowerDigits(num):
    total = 0
    stringNumber = str(num)
    for i in range(len(stringNumber)):
        total += math.pow(int(stringNumber[i]), 5)
    return total if total == num else False

tot = 0
for t in range(2, 1000000):
    holder = fifthPowerDigits(t)
    if holder > 0:
        tot += holder
print tot