from collections import Counter
from operator import itemgetter
S = input()
mc = list(Counter(S).most_common())
smc = sorted(mc, key=lambda x: (-x[1], x[0]))
for idx in range(0, 3):
    print(' '.join(map(str, smc[idx])))