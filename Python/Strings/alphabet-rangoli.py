import string
alph = list(string.ascii_lowercase)
def print_rangoli(size):
    up_down = list(range(0, size)) + list(range(size - 2, -1, -1))
    for i in up_down:
        pat = alph[size - i - 1]
        for j in range(i, 0, -1):
            ch = alph[size - j]
            pat = ch + '-' + pat + '-' + ch
        print('{0:-^{width}}'.format(pat, width=(2 * ((2 * size) - 1) - 1)))

