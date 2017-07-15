import re
S = input()
cons = "[QWRTYPSDFGHJKLZXCVBNMqwrtypsdfghjklzxcvbnm]"
arr = re.findall(r"(?<=" + cons + ")([aeiouAEIOU]{2,})(?=" + cons + ")", S)
if(arr):
    for hit in arr:
        print(hit)
else:
    print(-1)