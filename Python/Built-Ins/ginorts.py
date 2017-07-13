def sorttype(char):
    if char.islower():
        return 0
    if char.isupper():
        return 1
    if int(char) % 2 == 1:
        return 2
    if int(char) % 2 == 0:
        return 3
        
S = input()
print(*sorted(S, key=lambda ch: (sorttype(ch), ch)), sep='')
