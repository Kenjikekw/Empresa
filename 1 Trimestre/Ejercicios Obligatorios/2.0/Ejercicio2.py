from os import system
import time

system("cls")

matriz = []

print("(X Y)")
matriz.append(int(input("Dale un valor a X\n")))
system("cls")
print(f"({matriz[0]} Y)")
matriz.append(int(input("Dale un valor a Y\n")))
system("cls")

matriz1= [(3*matriz[0]),(3*matriz[1])]
matriz2= [(3*matriz[1]),(3*matriz[0])]

if matriz1 == matriz2:
    print("La matriz es cuadrada")
else:
    print("La matriz no es cuadrada")

time.sleep(5)