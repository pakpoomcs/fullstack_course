def narcissistic(digits):
    sum = 0
    digitsArray = [int(x) for x in str(digits)]
    for i in digitsArray:
        y = (i**len(digitsArray))
        sum = sum+y
    if sum == digits:
        return True
    else:
        return False 

narcissistic(153)