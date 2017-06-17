if __name__ == '__main__':
    n = int(input())
    arr = map(int, input().split())
    lst = sorted(list(arr))
    ctr = len(lst) - 1
    last = lst[ctr]
    nxt = last
    while nxt == last:
        ctr = ctr - 1
        nxt = lst[ctr]
    print(nxt)
