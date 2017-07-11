from datetime import datetime as dt
T = int(input())
for i in range(0, T):
    t1 = dt.strptime(input(), '%a %d %b %Y %H:%M:%S %z')
    t2 = dt.strptime(input(), '%a %d %b %Y %H:%M:%S %z')
    print(int(abs(dt.timestamp(t1) - dt.timestamp(t2))))
    