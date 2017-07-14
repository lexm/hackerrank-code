import re
T = int(input())
for _ in range(0,T):
    print(bool(re.match(r"[\.\-\+]\d*\.\d+", input())))