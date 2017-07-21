from html.parser import HTMLParser
class MyParser(HTMLParser):
    def handle_starttag(self, tag, attrs):
        print(tag)
        for attr in attrs:
            print("-> " + attr[0] + " > " + attr[1])

parser = MyParser()

N = int(input())
html = ''
for _ in range(0,N):
    html += input()
parser.feed(html)