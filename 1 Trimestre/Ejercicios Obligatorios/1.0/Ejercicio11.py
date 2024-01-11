from os import system

system("cls")

salarios = [[700, 900, 1300] , [1000, 950, 1080], [1300, 930, 1200]]

empleados = ["Javier María", "Antonio Muñoz", "Isabel Allende"]

suma=0
total= len(salarios)-1

for i in range(len(empleados)):
    print(empleados[i], "->", end=" ")
    for j in range(len(salarios)):
        suma += salarios[i][j]
        if j!=total:
            print(salarios[i][j],"+",end=" ")
        else:
            print(salarios[1][j],"=", end=" ")
    print(suma)
    suma=0

