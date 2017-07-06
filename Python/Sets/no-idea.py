line1 = list(map(int, input().split(' ')))
n = line1[0]
m = line1[1]
array = list(map(int, input().split(' ')))
A = set(list(map(int, input().split(' '))))
B = set(list(map(int, input().split(' '))))
happiness = 0
for member in array:
    if(member in A):
        happiness += 1
    if(member in B):
        happiness -= 1
print(happiness)