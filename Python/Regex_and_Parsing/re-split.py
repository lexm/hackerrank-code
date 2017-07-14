import re
result = re.split("[\,\.]", input())
for x in result:
    print(x)