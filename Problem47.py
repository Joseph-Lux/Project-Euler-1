# The first two consecutive numbers to have 
# two distinct prime factors are:

# 14 = 2 × 7
# 15 = 3 × 5

# The first three consecutive numbers to have three 
# distinct prime factors are:

# 644 = 2² × 7 × 23
# 645 = 3 × 5 × 43
# 646 = 2 × 17 × 19.

# Find the first four consecutive integers to have 
# four distinct prime factors each. 
# What is the first of these numbers?

from Problem46 import intPrimes

def primeFactorization(num):
    factors = set()
    while num > 1:
        for prime in intPrimes:
            if num % prime == 0:
                factors.add(prime)
                num = num/prime
                break
    return factors


if __name__ == "__main__":
    i = 644
    while True:
        primeFactorizations = []
        for t in range(4):
            primeFactorizations.extend(primeFactorization(i + t))
        if len(primeFactorizations) == 12:
            print(i)
            break
        i += 1
        

