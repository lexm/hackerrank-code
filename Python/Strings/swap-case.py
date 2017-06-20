def swap_char(ch):
    if ch.isupper():
        return ch.lower()
    else:
        return ch.upper()

def swap_case(s):
    return ''.join(list(map(swap_char, list(s))))