maxdepth = 0
def depth(elem, level):
    global maxdepth
    level += 1
    if(maxdepth < level):
        maxdepth = level
    for i in range(0, len(elem)):
        depth(elem[i], level)

