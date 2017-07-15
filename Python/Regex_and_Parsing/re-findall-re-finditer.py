import re
S = input()
cons = "[QWRTYPSDFGHJKLZXCVBNMqwrtypsdfghjklzxcvbnm]"
arr = re.findall(r"(?<=" + cons + ")([aeiouAEIOU]{2,})(?=" + cons + ")", S)
for hit in arr:
    print(hit)