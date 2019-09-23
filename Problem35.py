# The number, 197, is called a circular prime because all 
# rotations of the digits: 197, 971, and 719, are themselves prime.

# There are thirteen such primes below 100: 
# 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.

How many circular primes are there below one million?

primeFile = open("primes.txt", 'r')

primes = primeFile.readline().split(',')

booleanValues = []

def isPermutablyPrime(prime):
    for i in prime:
        # Trick checking for even numbers or 5's 
        if (int(i) % 2 == 0 or int(i) == 5):
            return False

    circularPermutations = []
    for index in range(len(prime)):
        circularPermutations.append(prime[index:] + prime[:index])

    print(circularPermutations)

    for perm in circularPermutations:
        if perm not in primes:   
            return False

    return True


if __name__ =="__main__":
    # Starting with 5 and 2 already in the array so that we can use trick 
    # to speed up process by checking for permutations ending in 5 and even numbers
    permutablyPrimes = ['2', '5']
    for prime in primes:
        if isPermutablyPrime(prime):
            permutablyPrimes.append(prime)


    print(permutablyPrimes)
    print(len(permutablyPrimes))
    

# Code to fill prime file

# def isPrime(num):
#     print(num)
#     for i in primes:
#         if num % i == 0:
#             return False
#     return True

# primeFile = open("primes.txt", 'a')

# for i in range(3, 1000000, 2):
#     if isPrime(i):
#         primeFile.write(str(i) + ",")
#         primes.append(i)

