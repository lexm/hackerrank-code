import re
T = int(input())
for _ in range(0, T):
    pat = input()
    result = 'True'
    try:
        exp = re.compile(pat)
    except re.error:
        result = 'False'
    print(result)