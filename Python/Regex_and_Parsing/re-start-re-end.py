import re
S = input()
k = input()
#klook = '(?=(' + k + '))'
pat = re.compile('(?=(' + k + '))')
ms = pat.finditer(S)
#ms = re.search(S, k)
for m in ms:
    print((m.start(), m.start() + len(k) -1))