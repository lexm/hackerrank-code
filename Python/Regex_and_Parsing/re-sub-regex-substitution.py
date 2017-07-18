import re

def makeandor(match):
    txt = str(match.group(0))
    if txt == ' && ':
        return ' and '
    elif txt == ' || ':
        return ' or '
    
N = int(input())
for _ in range(0,N):
    line = input()
    print(re.sub(r"(\ \&\&\ |\ \|\|\ )", makeandor, line))