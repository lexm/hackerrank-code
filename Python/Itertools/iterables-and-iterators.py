import itertools
N = int(input())
letters = input().split(' ')
K = int(input())
comb = list(itertools.combinations(letters, K))
filtered = list(filter(lambda x: 'a' in x, comb))
print(len(filtered) / len(comb))