import re
pattern = r"(?<=\w)\W+(?=\w)"

N,M = list(map(int, input().split()))
cols = ["" for _ in range(M)]
for _ in range(0,N):
    line = input()
    for i in range(0,M):
        cols[i] += line[i]
matrix = "".join(cols)
print(re.sub(pattern, " ", matrix))

        
    