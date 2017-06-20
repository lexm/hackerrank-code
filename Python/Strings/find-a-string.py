def count_substring(string, sub_string):
    count = 0
    len1 = len(string)
    len2 = len(sub_string)
    for i in range(0, len1 - len2 + 1):
        if(string[i:i + len2] == sub_string):
            count += 1
    return count