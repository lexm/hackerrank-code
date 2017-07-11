N,X = list(map(int, input().split()))
subj = []
for i in range(0,X):
    subj.append(list(map(float, input().split())))
for tup in zip(*subj):
    print(sum(tup) / X)