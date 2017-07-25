maxdepth = 0
def depth(elem, level):
    global maxdepth
    if elem is not None:
        level += 1
    if(maxdepth < level):
        maxdepth = level
    for i in range(0, len(elem)):
        depth(elem[i], level)

