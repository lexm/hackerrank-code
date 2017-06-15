if __name__ == '__main__':
    N = int(input())
lst = []
for ctr in range(0, N):
    line = input().split(' ')
    if(line[0] == 'insert'):
        lst.insert(int(line[1]), int(line[2]))
    elif(line[0] == 'print'):
        print(lst)
    elif(line[0] == 'remove'):
        lst.remove(int(line[1]))
    elif(line[0] == 'append'):
        lst.append(int(line[1]))
    elif(line[0] == 'sort'):
        lst.sort()
    elif(line[0] == 'pop'):
        lst.pop()
    elif(line[0] == 'reverse'):
        lst.reverse()