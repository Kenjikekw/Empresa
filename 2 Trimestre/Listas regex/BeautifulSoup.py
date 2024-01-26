# To run this, download the BeautifulSoup zip file
# http://www.py4e.com/code3/bs4.zip
# and unzip it in the same directory as this file
from os import system
from urllib.request import urlopen
from bs4 import BeautifulSoup
import ssl
system("cls")
# Ignore SSL certificate errors
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE
#Introducimos la url de la pagina a comprobar
url = "http://py4e-data.dr-chuck.net/comments_1942697.html"
html = urlopen(url, context=ctx).read()
soup = BeautifulSoup(html, "html.parser")
# Retrieve all of the anchor tags
tags = soup('span')
#Inicializamos una variable para sumar el contenido
suma = 0
for tag in tags:
    #Por cada etiqueta que tiene span, sumamos su contenido
    suma += int(tag.contents[0])
print(suma)