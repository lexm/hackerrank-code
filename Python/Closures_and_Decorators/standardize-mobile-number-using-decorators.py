import re

pat1 = r"(?<=0)(\d{10})"
pat2 = r"(?<=91)(\d{10})"
pat3 = r"\d{10}"


def wrapper(f):
    def fun(l):
        new_l = []
        for ph in l:
            ph2 = re.sub(r"\D", "", ph)
            if re.search(pat1, ph2):
                new_ph = re.search(pat1, ph2).group(0)
            elif re.search(pat2, ph2):
                new_ph = re.search(pat2, ph2).group(0)
            elif re.search(pat3, ph2):
                new_ph = ph2
            new_ph = " ".join(("+91", new_ph[:5], new_ph[5:]))
            new_l.append(new_ph)
        ret = f(new_l)
        return ret
        # complete the function
    return fun