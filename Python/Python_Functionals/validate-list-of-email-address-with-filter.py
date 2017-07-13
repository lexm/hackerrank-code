def fun(s):
    arr1 = s.split('@')
    if(len(arr1) != 2 or len(arr1[0]) == 0):
        return False
    if(len(list(filter(lambda ch: (ch.isalnum() or ch == '_' or ch == '-') == False, list(arr1[0])))) > 0):
        return False
    arr2 = arr1[1].split('.')
    if(len(arr2) != 2):
        return False
    if(arr2[0].isalnum() == False or len(arr2[1]) > 3):
        return False
    return True