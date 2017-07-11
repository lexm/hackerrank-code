from collections import Counter
from operator import itemgetter
S = input()
mc = list(Counter(S).most_common(3))
smc1 = sorted(mc, key=itemgetter(0))
smc2 = sorted(smc1, key=itemgetter(1), reverse=True)
for pair in smc2:
    print(' '.join(map(str, pair)))