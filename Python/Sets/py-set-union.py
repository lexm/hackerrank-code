n = int(input())
english = set(map(int, input().split()))
n = int(input())
french = set(map(int, input().split()))
print(len(english | french))