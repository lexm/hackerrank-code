from collections import deque
T = int(input())
for case in range(0, T):
    n = int(input())
    stack = []
    d = deque(list(map(int, input().split())))
    for i in range(0, len(d)):
        if d[0] > d[-1]:
            next = d.popleft()
        else:
            next = d.pop()
        if (len(stack) == 0) or (stack[-1] >= next):
            stack.append(next)
        else:
            break
    if len(d) > 0:
        print('No')
    else:
        print('Yes')

    