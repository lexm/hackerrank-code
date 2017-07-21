from html.parser import HTMLParser

class MyHTMLParser(HTMLParser):
    def handle_comment(self, data):
        if data == "\n":
            return
        spl = data.split("\n")
        if len(spl) == 1:
            print(">>> Single-line Comment")
            print(data)
        else:
            print(">>> Multi-line Comment")
            for line in spl:
                print(line)
    
    def handle_data(self, data):
        if data == "\n":
            return
        print(">>> Data")
        print(data)
  
  
html = ""       
for i in range(int(input())):
    html += input().rstrip()
    html += '\n'
    
parser = MyHTMLParser()
parser.feed(html)
parser.close()
