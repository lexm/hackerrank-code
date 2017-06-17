if __name__ == '__main__':
    students = []
    for _ in range(int(input())):
        name = input()
        score = float(input())
        students.append([name, score])
    students.sort(key=lambda student: student[0])
    students.sort(key=lambda student: student[1])
    ctr = 0
    current_score = lowest_score = students[0][1]
    while (current_score == lowest_score):
        ctr += 1
        current_score = students[ctr][1]
    second_lowest = current_score
    while (second_lowest == current_score):
        print(students[ctr][0])
        ctr += 1
        current_score = students[ctr][1]