import re
input1 = re.search(r'([a-zA-Z0-9])(\1+)', input())
print(input1.group(0)[1] if input1 else -1)
