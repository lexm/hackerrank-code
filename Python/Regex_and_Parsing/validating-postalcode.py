import re

pattern1 = r"^[1-9]\d{5}$"
pattern2 = r"(\d)(?=.\1)"

P = input()
print(bool(re.match(pattern1, P)) and (len(re.findall(pattern2, P)) < 2))
