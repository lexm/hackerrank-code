maxdepth = 0
def depth(elem, level):
    global maxdepth
    level += 1
    if(maxdepth < level):
        maxdepth = level
    for next in elem:
        depth(next, level)

