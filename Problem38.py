# Take the number 192 and multiply it by each of 1, 2, and 3:

# 192 × 1 = 192
# 192 × 2 = 384
# 192 × 3 = 576
# By concatenating each product we get the 1 to 9 pandigital, 192384576. We will call 192384576 the concatenated product of 192 and (1,2,3)

# The same can be achieved by starting with 9 and multiplying by 1, 2, 3, 4, and 5, giving the pandigital, 918273645, which is the concatenated product of 9 and (1,2,3,4,5).

# What is the largest 1 to 9 pandigital 9-digit number that can be formed as the concatenated product of an integer with (1,2, ... , n) where n > 1?

def concatenatedPandigitalProduct(integer, n):
    string = ""
    for i in range(1, n+1):
        string += str(i * integer)
    if ''.join(sorted(string)) != "123456789":
        return 0
    else: 
        return int(''.join(string))
if __name__ == "__main__":
    largestConcatenatedProdcut = 0
    for i in range(10000):
        for n in range(2, 6):
            potentialProduct = concatenatedPandigitalProduct(i, n)
            if potentialProduct > largestConcatenatedProdcut:
                largestConcatenatedProdcut = potentialProduct
    print(largestConcatenatedProdcut)