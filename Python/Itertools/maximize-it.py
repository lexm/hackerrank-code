from itertools import product
from functools import reduce
K, M = list(map(int, input().split(' ')))
X = []
for i in range(0, K):
    line = list(map(int, input().split(' ')))
    N = line.pop(0)
    X.append(line)
S = list(map(lambda y: sum(tuple(map(lambda x: x ** 2, y))) % M, list(product(*X))))
print(max(S))