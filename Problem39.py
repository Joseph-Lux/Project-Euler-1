# If p is the perimeter of a right angle triangle with integral length sides, 
# {a,b,c}, there are exactly three solutions for p = 120.

# {20,48,52}, {24,45,51}, {30,40,50}

# For which value of p ≤ 1000, is the number of solutions maximised?

def numberOfSideCombinations(perimeter):
    sideCombinations = 0
    for c in range(perimeter//3, perimeter//2):
        ab = perimeter - c
        for a in range(1, ab//2):
            if a**2 + (ab-a)**2 == c**2:
                sideCombinations += 1
    return sideCombinations

if __name__ == "__main__":
    mostCombinations = 0
    perimeterOfMostCombinations = 0
    for i in range(1000):
        possibleCombinations = numberOfSideCombinations(i)
        if possibleCombinations > mostCombinations:
            perimeterOfMostCombinations = i
            mostCombinations = possibleCombinations
    print(mostCombinations)
    print(perimeterOfMostCombinations)