from itertools import permutations
params = input().split(' ')
S = params[0]
k = int(params[1])
for perm in sorted(list(permutations(S, k))):
    print(''.join(list(perm)))