import urllib.request
from os import system
import json

system("cls")

# Solicitar al usuario la URL de los datos JSON
url = input('Enter URL: ')
if len(url) < 1:
    url = "http://py4e-data.dr-chuck.net/comments_1942703.json"

# Recuperar los datos JSON desde la URL
response = urllib.request.urlopen(url)
data = response.read().decode()
    
# Analizar los datos JSON
json_data = json.loads(data)
    
# Inicializar la suma de los recuentos de comentarios
suma = 0
    
# Calcular la suma de los recuentos de comentarios
for comment in json_data['comments']:
    suma += comment['count']
    
# Mostrar la suma
print("Suma:", suma)
    