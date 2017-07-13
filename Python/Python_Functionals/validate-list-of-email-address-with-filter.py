def fun(s):
    arr1 = s.split('@')
    if(len(arr1) != 2):
        return False
    user_arr = list(arr1[0])
    fil_user = list(filter(lambda ch: (ch.isalnum() or ch == '_' or ch == '-') == False, user_arr))
    if (len(fil_user) > 0):
        return False
    arr2 = arr1[1].split('.')
    if(len(arr2) != 2):
        return False
    if(arr2[0].isalnum() == False):
        return False
    if(len(arr2[1]) > 3):
        return False
    return True