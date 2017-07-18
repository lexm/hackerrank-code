import re
S = input()
k = input()
pat = re.compile('(?=(' + k + '))')
ms = pat.finditer(S)
if(ms):
    for m in ms:
        print((m.start(), m.start() + len(k) -1))
else:
    print((-1, -1))