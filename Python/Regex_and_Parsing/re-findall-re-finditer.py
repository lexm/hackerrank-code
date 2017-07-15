import re
S = input()
arr = re.findall(r"[aeiouAEIOU]{2,}", S)
for hit in arr:
    print(hit)