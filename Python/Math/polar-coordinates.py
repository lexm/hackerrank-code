import cmath
cnum = input().split('+')
z = complex(int(cnum[0]), int(cnum[1][:-1]))
print(abs(z))
print(cmath.phase(z))