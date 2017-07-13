def pal(number):
    if number < 0:
        return False
    numstr = str(number)
    if numstr == numstr[::-1]:
        return True
    return False

N = int(input())
nums = list(map(int, input().split()))
print(any(list(map(pal, nums))))