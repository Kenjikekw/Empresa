from os import system 

system("cls")

loteria = []

print("Escribe los numeros de la ultima primitiva en orden")

for i in range (1,9): 
    x = int(input(f"Escribe el {i} numero\n"))
    loteria.append(x)

loteria.sort()

for i in range(len(loteria)):
    print(loteria[i], end=" ")