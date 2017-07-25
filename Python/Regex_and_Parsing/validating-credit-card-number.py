import re

pattern = r"^(?!.*(\d)(-?\1){3})[456]\d{3}(-?)\d{4}(\3)\d{4}(\3)\d{4}$"

N = int(input())
for _ in range(0,N):
    if re.match(pattern, input()):
        print("Valid")
    else:
        print("Invalid")
    