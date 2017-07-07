K = int(input())
room_nums = list(map(int, input().split()))
rooms = set(room_nums)
print((sum(rooms) * K - sum(room_nums)) // (K - 1))
