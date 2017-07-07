A = set(list(map(int, input().split())))
N = int(input())
result = True
for _ in range(0, N):
    next_set = set(list(map(int, input().split())))
    if((A > next_set) == False):
        result = False
print(result)