def person_lister(f):
    def inner(people):
        return map(f, sorted(people, key=operator.itemgetter(2)))
    return inner

