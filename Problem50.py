# The prime 41, can be written as the sum of six consecutive primes:

# 41 = 2 + 3 + 5 + 7 + 11 + 13
# This is the longest sum of consecutive primes that adds 
# to a prime below one-hundred.

# The longest sum of consecutive primes below one-thousand that adds to a prime, 
# contains 21 terms, and is equal to 953.

# Which prime, below one-million, can be written as the sum of the most consecutive primes?

from Problem46 import intPrimes
from prime import isPrime

if __name__ == "__main__":
    startIndex = 0
    primeTotal = 0
    length = 0
    while startIndex < 30:
        total = 0
        index = startIndex
        while total + intPrimes[index] < 1000000:
            total += intPrimes[index] 
            if isPrime(total) and index - startIndex > length:
                primeTotal = total
                length = index - startIndex + 1
            index += 1
        startIndex += 1
    print(primeTotal)
    print(length)