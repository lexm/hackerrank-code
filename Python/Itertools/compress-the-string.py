from itertools import groupby
S = input()
groups = []
keys = []
for key, group in groupby(S):
    groups.append(list(group))
    keys.append(key)
result = ''
for i in range(0, len(groups)):
    result += str((len(groups[i]), int(keys[i])))
    if(i < len(groups) - 1):
        result += ' '
print(result)
