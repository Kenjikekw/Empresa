from os import system

system("cls")

x = str(input("Escribe una frase y te intercambio la primera letra con la ultima\n"))
x = x[-1] + x[1:-1] + x[0]
print(x)