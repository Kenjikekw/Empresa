from os import system

system("cls")

tabla = []

while 1:
    x = str(input("Escribe un algo para añadir o pulsa simplemente intro para parar\n"))
    if x!="":
        tabla.append(x)
    else:
        break

x = str(input("Escribe algo para buscar en la tabla anterior\n"))


def indexContains(tablaa, cadena):
    return "Tu cadena está en la tabla" if cadena in tablaa else "Tu cadena no está en la tabla"


print(indexContains(tabla, x))