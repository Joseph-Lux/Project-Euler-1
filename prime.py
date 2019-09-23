def isPrime(num):
    for i in range(2, num):
        if num % i == 0:
            return False
    return True

def findNextPrime(num):
    nextPrime = num + 1
    while(not isPrime(nextPrime)):
        nextPrime += 1
    return nextPrime

def findPreviousPrime(num):
    previousPrime = num - 1
    while(not isPrime(previousPrime)):
        previousPrime -= 1
    return previousPrime 