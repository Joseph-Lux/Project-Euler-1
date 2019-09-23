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

prime = 2 

for x in range(1, 1000000000):
    prime = findNextPrime(prime)

print(prime)