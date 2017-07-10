from itertools import combinations
params = input().split(' ')
S = params[0]
k = int(params[1])
for i in range(1, k + 1):
    for comb in sorted(map(sorted, list(combinations(S, i)))):
        print(''.join(comb))