line1 = list(map(int, input().split(' ')))
n = line1[0]
m = line1[1]
array = list(map(int, input().split(' ')))
A = set(list(map(int, input().split(' '))))
B = set(list(map(int, input().split(' '))))
happiness = 0
for a in A:
    happiness += array.count(a)
for b in B:
    happiness -= array.count(b)
print(happiness)