from os import system
import urllib.request
import xml.etree.ElementTree as ET

system("cls")

url = input('Enter URL: ')
if len(url) < 1:
    url = 'http://py4e-data.dr-chuck.net/comments_1942702.xml'

# Obtener los datos desde la URL
uh = urllib.request.urlopen(url)
data = uh.read()

# Analizar XML
tree = ET.fromstring(data)

# Encontrar todas las etiquetas <count> en el árbol XML
counts = tree.findall('.//count')

# Sumar los números en las etiquetas <count>
total = sum(int(count.text) for count in counts)

print('Suma de los números en las etiquetas <count>:', total)
