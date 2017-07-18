import re
N = int(input())
pattern = r"^[7-9]\d{9}$"
for _ in range(0,N):
    line = input()
    if(re.match(pattern, line)):
        print('YES')
    else:
        print('NO')