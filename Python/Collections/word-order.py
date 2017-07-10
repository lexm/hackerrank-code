from collections import OrderedDict
n = int(input())
ord_dict = OrderedDict()
for _ in range(0, n):
    word = input()
    if(not(word in ord_dict)):
        ord_dict[word] = 1
    else:
        ord_dict[word] += 1
result = []
for word in list(ord_dict.keys()):
    result.append(str(ord_dict[word]))
print(len(result))
print(' '.join(result))
    
    