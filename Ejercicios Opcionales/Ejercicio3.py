from os import system 

system("cls")

x = int(input("Escribe el numero de filas que quieres que tenga la torre\n"))
for i in range(1,x+1):
    for j in range(i):
        print("*", end="")
    print("")