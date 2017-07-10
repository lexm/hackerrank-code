from collections import OrderedDict
N = int(input())
ordered_dict = OrderedDict()
for _ in range(0, N):
    line = input().split(' ')
    price = int(line.pop())
    item_name = ' '.join(line)
    if(item_name in ordered_dict):
        ordered_dict[item_name] += price
    else:
        ordered_dict[item_name] = price
for item_name in list(ordered_dict.keys()):
    print(item_name, ordered_dict[item_name])
    