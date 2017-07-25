def get_attr_number(node):
    result = len(node.attrib)
    for i in range(0, len(node)):
        result += get_attr_number(node[i])
    return(result)
    # your code goes here


