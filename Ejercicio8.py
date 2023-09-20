from os import system

system("cls")

tabla = []

while 1:
    x = str(input("Escribe un numero para añadir o pulsa simplemente intro para parar\n"))
    if x.isnumeric():
        tabla.append(int(x))
    else:
        break

def sum(tabla):
    suma=0
    for num in tabla:
        suma+=num
    return suma

print("La suma de todos los numeros es igual a:",sum(tabla))