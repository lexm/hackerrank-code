N = int(input())
nums = list(map(int, input().split()))
print(all(list(map(lambda x: x >= 0, nums))) and any(list(map(lambda x: str(x) == str(x)[::-1], nums))))