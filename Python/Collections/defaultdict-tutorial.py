from collections import defaultdict
n, m = list(map(int, input().split(' ')))
dd = defaultdict(list)
for i in range(1, n + 1):
    dd[input()].append(i)
for j in range(0, m):
    word = input()
    if(word in dd.keys()):
        print(' '.join(list(map(str, dd[word]))))
    else:
        print(-1)
    