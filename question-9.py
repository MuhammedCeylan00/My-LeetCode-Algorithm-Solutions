def isPolindrome(x:int) -> bool:
    if x >= 0:
        numberList = [int(number) for number in str(x)]
    else:
        numberList = [int(number) for number in str(-x)]
        numberList[0] = -numberList[0]

    j = len(numberList)
    if j == 1 and numberList[0]<0:
        return False
    for i in range(len(numberList)):
        j-=1
        if numberList[i] != numberList[j]:
            return False
        
        if i==j:
            return True
        
    return True

print(isPolindrome(-1))