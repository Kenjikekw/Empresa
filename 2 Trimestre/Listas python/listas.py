import os
os.system("cls")
#Declaramos las variables que vamos a utilizar
lst = list()
palabra = list()
lista = list()
#Abrimos el archivo
fh = open("romeo.txt")
#Por cada linea lo dividimos en palabras y las añadimos a una lista
for line in fh:
    lst=line.split()
    for word in lst:
        lista.append(word)
#Convertimos a lista a tipo set y luego de nuevo a lista para que se eliminen las palabras repetidas
palabra = list(set(lista))
#Ordenamos la lista
palabra.sort()
print(palabra)

