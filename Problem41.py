# We shall say that an n-digit number is pandigital 
# if it makes use of all the digits 1 to n exactly once. 
# For example, 2143 is a 4-digit pandigital and is also prime.

# What is the largest n-digit pandigital prime that exists?

import itertools

def isPrime(num):
    for i in range(2, num):
        if num % i == 0:
            return False
    return True

if __name__ == "__main__":
    # Tried 9 digits and 8 digits with no result
    permutations = itertools.permutations("7654321", 7)

    highestPrime = 0

    for permutation in permutations:
        possiblePrime = int(''.join(permutation))
        if possiblePrime > highestPrime and isPrime(possiblePrime):
            highestPrime = possiblePrime
        
    print(highestPrime)