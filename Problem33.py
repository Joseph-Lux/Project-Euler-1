# The fraction 49/98 is a curious fraction, as an inexperienced mathematician 
# in attempting to simplify it may incorrectly believe that 49/98 = 4/8, 
# which is correct, is obtained by cancelling the 9s.

# We shall consider fractions like, 30/50 = 3/5, to be trivial examples.

# There are exactly four non-trivial examples of this type of fraction, 
# less than one in value, and containing two digits in the numerator and denominator.

# If the product of these four fractions is given in its lowest common terms, 
# find the value of the denominator.

numerators = []
denominators = []

for i in range(12, 100):
    for t in range(11, i):
        if (i % 10 != 0) and (i%10 != int(i/10)) and ((t/i == int(t/10)/(i%10) and (t%10) == int(i/10)) or (t/i == (t%10)/int(i/10) and int(t/10) == (i%10))):
            numerators.append(t)
            denominators.append(i)

finalNumerator = 1
finalDenominator = 1

for g in range(len(numerators)):
    finalDenominator *= denominators[g]
    finalNumerator *= numerators[g]

def gcd(m,n):
    while m%n != 0:
        oldm = m
        oldn = n

        m = oldn
        n = oldm%oldn
    return n

common = gcd(finalNumerator, finalDenominator)

print(finalDenominator/common)