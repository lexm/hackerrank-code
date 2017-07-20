from html.parser import HTMLParser
import re

class MyParser(HTMLParser):
    def handle_starttag(self, tag, attrs):
        print("Start :", tag)
        for attr in attrs:
            print("-> " + attr[0] + " > " + str(attr[1]))
    def handle_endtag(self, tag):
        print("End   :", tag)
    def handle_startendtag(self, tag, attrs):
        print("Empty :", tag)
        
compat1 = r"(.*)(<!--)(.*)"
compat2 = r"(.*)(-->)(.*)"
        
parser = MyParser()

N = int(input())
comm = False
for _ in range(0,N):
    line = input()
    if not comm:
        srch1 = re.search(compat1, line)
        if srch1:
            print(srch1.group(1), srch1.group(2), srch1.group(3))
            parser.feed(srch1.group(1))
            comm = True
            line = srch1.group(3)
        else:
            parser.feed(line)
    if comm:
        srch2 = re.search(compat2, line)
        if srch2:
            print(srch2.group(1), srch2.group(2), srch2.group(3))
            parser.feed(srch2.group(3))
            comm = False

        