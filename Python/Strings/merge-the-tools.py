def merge_the_tools(string, k):
    seg = ''
    for i in range(0, len(string)):
        if(not(string[i] in seg)):
            seg += string[i]
        if(((i + 1)% k == 0) and (i > 0 or k == 1)):
            print(seg)
            seg = ''
