import re

expr = r"^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$"

rom = input()

if(re.match(expr, rom)):
    print(True)
else:
    print(False)