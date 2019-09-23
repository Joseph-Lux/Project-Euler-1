# The number 3797 has an interesting property. Being prime itself, 
# it is possible to continuously remove digits from left to right, 
# and remain prime at each stage: 3797, 797, 97, and 7. 
# Similarly we can work from right to left: 3797, 379, 37, and 3.

# Find the sum of the only eleven primes that are both truncatable 
# from left to right and right to left.

# NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.

def fromTheLeft(num):
    for t in range(1, len(num)):
        if num[t:] not in primes:
            return False
    return True

def fromTheRight(num):
    for t in range(1, len(num)):
        if num[:t] not in primes:
            return False
    return True

if __name__ == "__main__":
    primeFile = open("primes.txt", 'r')

    primes = primeFile.readline().split(',')

    truncatablePrimes = []

    for i in primes:
        if fromTheLeft(i) and fromTheRight(i):
            truncatablePrimes.append(int(i))
        
    print(len(truncatablePrimes))
    # Slice off the first four numbers which aren't considered truncatable
    truncatablePrimes = truncatablePrimes[4:]
    print(truncatablePrimes)
    print(sum(truncatablePrimes))


    