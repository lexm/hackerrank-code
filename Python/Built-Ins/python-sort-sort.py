N,M = list(map(int, input().split()))
table = []
for _ in range(0,N):
    table.append(list(map(int, input().split())))
K = int(input())
table.sort(key=lambda x: x[K])
for line in table:
    print(' '.join(list(map(str, line))))