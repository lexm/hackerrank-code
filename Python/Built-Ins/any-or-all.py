def pal(number):
    numstr = str(number)
    if numstr == numstr[::-1]:
        return True
    return False

N = int(input())
nums = list(map(int, input().split()))
print(all(list(map(lambda x: x >= 0, nums))) and any(list(map(pal, nums))))