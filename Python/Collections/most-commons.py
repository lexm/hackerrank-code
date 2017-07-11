from collections import Counter
S = input()
mc = Counter(S).most_common(3)
for pair in mc:
    print(' '.join(map(str, pair)))