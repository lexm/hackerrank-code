from html.parser import HTMLParser

class MyParser(HTMLParser):
    def handle_starttag(self, tag, attrs):
        print("Start :", tag)
        for attr in attrs:
            print("-> " + attr[0] + " > " + str(attr[1]))
    def handle_endtag(self, tag):
        print("End   :", tag)
    def handle_startendtag(self, tag, attrs):
        print("Empty :", tag)
        for attr in attrs:
            print("-> " + attr[0] + " > " + str(attr[1]))
        
parser = MyParser()

N = int(input())
html = ''
for _ in range(0,N):
    line = input()
    html += line
parser.feed(html)

        