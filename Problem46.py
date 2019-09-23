# It was proposed by Christian Goldbach that every odd composite 
# number can be written as the sum of a prime and twice a square.

# 9 = 7 + 2×1^2
# 15 = 7 + 2×2^2
# 21 = 3 + 2×3^2
# 25 = 7 + 2×3^2
# 27 = 19 + 2×2^2
# 33 = 31 + 2×1^2

# It turns out that the conjecture was false.

# What is the smallest odd composite that cannot be 
# written as the sum of a prime and twice a square?

from prime import isPrime

primeFile = open("primes.txt", 'r')

primes = primeFile.readline().split(',')

intPrimes = []

for i in primes:
    intPrimes.append(int(i))

def canBeWrittenAsPrimeAndDoubleSquare(num):
    for prime in intPrimes:
        if prime >= num:
            break
        for number in range(100):
            if prime + 2 * (number ** 2) > num:
                break
            if prime + 2 * (number ** 2) == num:
                return True
    return False

if __name__ == "__main__":
    i = 9
    while True:
        if not canBeWrittenAsPrimeAndDoubleSquare(i):
            print(i)
            break
        i += 2
        while isPrime(i):
            i += 2