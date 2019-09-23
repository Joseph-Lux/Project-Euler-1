# The series, 11 + 22 + 33 + ... + 1010 = 10405071317.

# Find the last ten digits of the series, 11 + 22 + 33 + ... + 10001000.

if __name__ == "__main__":
    num = 0
    for i in range(1, 1001):
        num += i ** i
    num = str(num)
    print(num[len(num)-10:])