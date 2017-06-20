if __name__ == '__main__':
    s = input()
    hasalnum = False
    hasalpha = False
    hasdigits = False
    haslower = False
    hasupper = False
    for ch in s.split():
        if(ch.isalnum()):
            hasalnum = True
            if(ch.isalpha()):
                hasalpha = True
                if(ch.islower()):
                    haslower = True
                else:
                    hasupper = True
            elif(ch.isdigit()):
                hasdigits = True
    print(hasalnum)
    print(hasalpha)
    print(hasdigits)
    print(haslower)
    print(hasupper)
    