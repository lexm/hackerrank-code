Regex_Pattern = r'[123][012][0sx][03aA][sux][.,]' # Do not delete 'r'.

import re

print(str(bool(re.search(Regex_Pattern, input()))).lower())
