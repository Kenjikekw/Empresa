from os import system
import time

system("cls")

lista = []

while 1:
    num = input("Escribe un numero entero o pulse cualquier tecla para continuar\n")
    if num.isnumeric():
        lista.append(int(num))
        lista = list(set(lista))
        lista.sort()
    else:
        break
system("cls")

print(f"Su cadena queda así: {lista}")
time.sleep(5)