from collections import namedtuple
N = int(input())
columns = input().split()
Student = namedtuple('Student', columns)
data = []
total = 0
for i in range(0, N):
    f1, f2, f3, f4 = input().split()
    student = Student(f1, f2, f3, f4)
    total += int(student.MARKS)
print('{:.2f}'.format(total / N))