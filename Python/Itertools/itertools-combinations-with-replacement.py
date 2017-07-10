from itertools import combinations_with_replacement
S,k = input().split(' ')
for comb in sorted(map(sorted, list(combinations_with_replacement(S, int(k))))):
    print(''.join(comb))
