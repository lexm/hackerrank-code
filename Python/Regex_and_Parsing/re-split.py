import re
result = re.split("[,\.]+", input())
for x in result:
    if(len(x) > 0): print(x)