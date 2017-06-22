def minion_game(string):
    con_ct = 0
    vwl_ct = 0
    vowels = ['A', 'E', 'I', 'O', 'U']
    length = len(string)
    for i in range(0, length):
        if(string[i] in vowels):
            vwl_ct += length - i
        else:
            con_ct += length - i
    if(con_ct > vwl_ct):
        print('Stuart', con_ct)
    elif(con_ct == vwl_ct):
        print('Draw')
    else:
        print('Kevin', vwl_ct)
