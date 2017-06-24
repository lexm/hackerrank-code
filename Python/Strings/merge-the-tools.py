def merge_the_tools(string, k):
    length = len(string)
    segs = length // k
    seg = ''
    arr = []
    for i in range(0, length):
        seg += string[i]
        if(((i + 1)% k == 0) and i > 0):
            arr.append(seg)
            seg = ''
    for seg in arr:
        res = ''
        for ch in seg:
            if(not(ch in res)):
                res += ch
        print(res)