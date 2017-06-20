def print_formatted(number):
    width = len(bin(number)) - 2
    for i in range(1, number + 1):
        fmt = ''
        for base in 'doXb':
            fmt += '{0:{width}{base}} '.format(i, base=base, width=width)
        print(fmt.format(i))

