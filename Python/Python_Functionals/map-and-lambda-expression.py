cube = lambda x: x * x * x

def fibonacci(n):
    result = []
    if(n == 0):
        return result
    for y in range(0, n):
        if(y < 2):
            result.append(y)
        else:
            result.append(result[len(result) - 1] + result[len(result) - 2])
    return result

    # return a list of fibonacci numbers