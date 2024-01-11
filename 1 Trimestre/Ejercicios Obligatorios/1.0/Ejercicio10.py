from os import system

system("cls")

def mayorYmenor(tabla):
    mayor = max(tabla, key=len)
    menor = min(tabla, key=len)

    print("La cadena más larga es:", mayor)
    print("La cadena más corta es:", menor)


tabla = []

while 1:
    x = str(input("Escribe un algo para añadir o pulsa simplemente intro para parar\n"))
    if x!="":
        tabla.append(x)
    else:
        break

mayorYmenor(tabla)