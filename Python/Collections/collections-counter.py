from collections import Counter
X = int(input())
sizes = list(map(int, input().split(' ')))
shoes = Counter(sizes)
N = int(input())
total = 0
for _ in range(0, N):
    size, price = list(map(int, input().split(' ')))
    if size in shoes.keys() and shoes[size] > 0:
        total += price
        shoes[size] -= 1
print(total)
