import calendar
def textday(day):
    return {
        0: 'MONDAY',
        1: 'TUESDAY',
        2: 'WEDNESDAY',
        3: 'THURSDAY',
        4: 'FRIDAY',
        5: 'SATURDAY',
        6: 'SUNDAY'
    }[day]
m,d,y = list(map(int, input().split(' ')))
wday = calendar.weekday(y, m, d)
print(textday(wday))