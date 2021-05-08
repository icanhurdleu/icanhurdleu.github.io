# Import libraries
import urllib.request
from bs4 import BeautifulSoup

# URL to scrape data from
url = "https://en.wikipedia.org/wiki/Hugo_Award_for_Best_Novel"

# Open webpage
page = urllib.request.urlopen(url)

# Parse webpage with Beautiful Soup plugin
soup = BeautifulSoup(page, "lxml")

# Grab relevant tables from Wiki page
tables = soup.find_all('table', class_='sortable wikitable')

# Take just the table needed from relevant tables found
hugo_winners = tables[0]

# Initialize arrays for storing winner info each year
years = []
authors = []
novels = []

# Step through each row and populate arrays with data
for row in hugo_winners.findAll('tr'):
  year_check=row.findAll('th')		# Year value is stored in th
  data=row.findAll('td')		# All other data in the row is stored in td
  # Check if the row is a winning year
  if len(year_check)==1:
    years.append(year_check[0].find(text=True))
    authors.append(data[0].find(text=True))
    novels.append(data[1].find(text=True))

# Save winner data in JSON format
with open('hugo_winners.json', 'w') as f:
	f.write('{"hugo_winners": [')
	for i in range(len(years)):
		f.write('{\n"year": ' + years[i] + ',\n"author": ' + '"' + authors[i] + '"' + ',\n"novel": ' + '"' + novels[i] + '",\n"read": false' + '\n}, ')