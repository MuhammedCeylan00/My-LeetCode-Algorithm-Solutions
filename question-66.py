def plusOne(digits: list[int]) -> list[int]:
    totalValue = 0
    for i in range(0,len(digits)):
        totalValue = totalValue * 10
        totalValue += digits[i]
    result = totalValue + 1
    resultList = []
    while 1:
        resultList.append(result%10)
        if(result<10):
            break
        result = result // 10
    resultList.reverse()
    return resultList
print(plusOne([4,3,2,1]))

    
