import re
import email.utils
n = int(input())
pattern = r"^[a-zA-Z][\w\-.]*@[a-zA-Z]+\.[a-zA-Z]{1,3}$"
for _ in range(0,n):
    line = input()
    parsed = email.utils.parseaddr(line)
    if(re.match(pattern, parsed[1])):
        print(line)