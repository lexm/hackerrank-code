import re
S = input()
k = input()
pat = re.compile('(?=(' + k + '))')
ms = pat.finditer(S)
count = 0
for m in ms:
    count += 1
    print((m.start(), m.start() + len(k) -1))
if count == 0:
    print((-1, -1))

