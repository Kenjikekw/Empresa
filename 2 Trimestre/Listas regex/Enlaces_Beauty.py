import urllib.request, urllib.parse, urllib.error
from os import system
from bs4 import BeautifulSoup

system("cls")

# Solicitar al usuario la url, el número de veces y la posición
url = input('Introduce la URL de inicio: ')
if len(url) < 1:
    url = 'http://py4e-data.dr-chuck.net/known_by_Kayleigh.html'
count = int(input('Introduce el número de veces: '))
position = int(input('Introduce la posición: '))

for i in range(count):
    # Obtener el HTML desde la URL
    html = urllib.request.urlopen(url).read()

    # Parsear el HTML con BeautifulSoup
    soup = BeautifulSoup(html, 'html.parser')

    # Encontrar todas las etiquetas (a)
    tags = soup('a')

    # Obtener el enlace en la posición especificada
    url = tags[position - 1].get('href', None)

    # Imprimir el enlace actual
    print('Recuperando:', url)

# Encontrar el apellido en el último enlace
name_parts = url.split('_')
last_name = name_parts[-1].split('.')[0]

# Imprimir la respuesta
print('La respuesta a la tarea para esta ejecución es:', last_name)