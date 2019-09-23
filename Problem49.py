# The arithmetic sequence, 1487, 4817, 8147, in which each of the terms increases by 3330, 
# is unusual in two ways: (i) each of the three terms are prime, and, 
# (ii) each of the 4-digit numbers are permutations of one another.

# There are no arithmetic sequences made up of three 1-, 2-, or 3-digit primes, 
# exhibiting this property, but there is one other 4-digit increasing sequence.

# What 12-digit number do you form by concatenating the three terms in this sequence?

from prime import isPrime

def primesAndPermutations(numOne, numTwo, numThree):
    if isPrime(numOne) and isPrime(numTwo) and isPrime(numThree):
        if sorted(str(numOne)) == sorted(str(numTwo)) == sorted(str(numThree)):
            return True
    return False

if __name__ == "__main__":
    for i in range(1488, 10000):
        print(i)
        if primesAndPermutations(i, i+3330, i+2*3330):
            print(i, i+3330, i+2*3330)
            break
