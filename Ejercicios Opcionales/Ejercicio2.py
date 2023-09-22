from os import system 

system("cls")

cantidad = int(input("Introduce una cantidad a invertir\n"))
interes = int(input("Escribe cual va a ser el interes anual\n"))
años = int(input("Escribe la cantidad de años que vas a estar\n"))

for i in range(años):
    capital = cantidad*interes/100
    print(f"El año {i+1} vas a optener {capital}€")
    cantidad += capital